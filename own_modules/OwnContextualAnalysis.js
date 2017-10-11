/**
 * 
 * Created by andres on 29/9/2017.
 *
 **/

const parserVisitor = require('../generated/ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;
const OwnTableSymbols  = require('./OwnTableSymbols');
//variable para tabla simbolos
let tableSymbols;
//lista para errores
let errors;
/*lista para guardar variables temporales para los metodos
 y clases antes de insertar la clase o el metodo en la tabla de simbolos*/
let allVars;
/*lista para guardar variables temporales para los metodos 
antes de insertar el metodo a la  clase en la tabla de simbolos*/
let allPars;
//Costructor del analisis contextual
function OwnContextualAnalysis (){
    parserVisitor.call(this);
    tableSymbols = new OwnTableSymbols.tableSymbols();
    errors = [];
    return this;
}

OwnContextualAnalysis.prototype = Object.create(parserVisitor.prototype);
OwnContextualAnalysis.prototype.constructor = OwnContextualAnalysis;


OwnContextualAnalysis.prototype.visitProgram = function(ctx) {

    let identifier = ctx.IDENT().getSymbol().text;

    //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
    tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel()-1,0,ctx,false,false,null,null);

    let constants = ctx.constDecl();
    let variables = ctx.varDecl();
    let classes = ctx.classDecl();
    let methods = ctx.methodDecl();

    if(constants){
        this.visit(constants);
    }
    
    if(variables){
        allVars = [];
        this.visit(variables);
    }
    
    if(classes){
        this.visit(classes);
    }
    if(methods){
        this.visit(methods);
    }
    return errors;
};

OwnContextualAnalysis.prototype.visitConstDecl = function(ctx) {

    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
  
    if (thereIdentifier['success']){
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
    }

    else{
        
        //obtiene el tipo 
        let typeConst = this.visit(ctx.type());

        if (typeConst != 3 && typeConst != 2){
            error = 'Contextual Error. Identifier type  it is not allowed. '
            + identifier + ' on' + ' Row: ' + ctx.IDENT().getSymbol().line 
            + ' Column: ' + ctx.IDENT().getSymbol().column; 
            errors.push(error);
        }
        else{
            //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
            tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeConst,ctx,false,true,null,null);

            let number = ctx.NUMBER();
            let charConst = ctx.CHAR_CONST();
            let IncompatibleTypes = false;
            if (number){
                if(typeConst != 3){
                    IncompatibleTypes = true
                }
            }

            if(charConst){
                if(typeConst != 2){
                    IncompatibleTypes = true
                }
            }

            if(IncompatibleTypes){
                error = 'Contextual Error. Identifier type  it is not compatible with assignment. '
                + identifier + ' on' + ' Row: ' + ctx.IDENT().getSymbol().line 
                + ' Column: ' + ctx.IDENT().getSymbol().column; 
                errors.push(error);
            }
        }

    }
    
    return
};

OwnContextualAnalysis.prototype.visitVarDecl = function(ctx) {

    for (let i = 0; i <= ctx.IDENT().length-1; i++)
    {
        let identifier = ctx.IDENT(i).getSymbol().text;
        let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());

        if (thereIdentifier['success']){
            error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
            + ' Row: ' + ctx.IDENT(i).getSymbol().line 
            + ' Column: ' + ctx.IDENT(i).getSymbol().column; 
            errors.push(error);
        }
    
        else{
            //obtiene el tipo 
            let typeVar = this.visit(ctx.type());
            //para preguntar si es lista
            let isList = false;
            //para insertar la declaracion de la variable en la lista allVars
            let newVar = {}
            newVar['var'] = identifier;
            newVar['type'] = typeVar;
            allVars.push(newVar);
            // si viene el token list: isList se hace true
            if(ctx.LIST()){
                isList = true;
            }

            //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
            tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeVar,ctx,isList,false,null,null);
    
        }
    }
    
    return 
};

OwnContextualAnalysis.prototype.visitClassDecl = function(ctx) {
    
    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    var thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
    
    if (thereIdentifier['success']){
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
    }

    else{
        let parameters = [];
        let variables = ctx.varDecl();
        if(variables){
            allVars = []
            tableSymbols.levelUp();
            this.visit(variables);
            tableSymbols.lowerLevel();
            
            for (var i = 0; i < allVars.length; i++) {
                /*crea un parametro en este caso son los var decl de la clase
                allVars[i][0] = es el identifier
                allVars[i][1] = es el type
                */
                let parameter = tableSymbols.createParameter(allVars[i]['var'],allVars[i]['type'],'varDecl');
                parameters.push(parameter);
                
            }
            
        }
        //Tipo Object 
        let typeClass = 0;
        let typeStruct = 0;
        //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
        tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeClass,ctx,false,false,typeStruct,parameters);

    }

    return
};

OwnContextualAnalysis.prototype.visitMethodDecl = function(ctx) {
    
    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
  
    if (thereIdentifier['success']){
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
    }

    else{

        let parameters = [];
        let formPars =  ctx.formPars()
        let variables = ctx.varDecl();

        if(formPars){
            allPars = [];
            tableSymbols.levelUp();
            this.visit(formPars);
            tableSymbols.lowerLevel();

            for (var i = 0; i < allPars.length; i++) {
                /*crea un parametro en este caso son los formPars del metodo
                allPars[i]['var'] = es el identifier
                allPars[i]['type'] = es el type
                */
                
                let parameter = tableSymbols.createParameter(allPars[i]['var'],allPars[i]['type'],'formPars');
                parameters.push(parameter);

                
            }
        }
        if(variables){
            allVars = []
            tableSymbols.levelUp();
            this.visit(variables);
            tableSymbols.lowerLevel();
            for (var i = 0; i < allVars.length; i++) {
                /*crea un parametro en este caso son los var decl de la metodo
                allVars[i]['var'] = es el identifier
                allVars[i]['type'] = es el type
                */
                let parameter = tableSymbols.createParameter(allVars[i]['var'],allVars[i]['type'],'varDecl');
                parameters.push(parameter); 
            }   
        }
        //obtiene el tipo
        let typeMethod = 1; 
        let typeStruct 
        
        if(ctx.VOID()){
            typeStruct = 7
        }
        else{
            typeStruct = this.visit(ctx.type());
        }
        
        //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
        tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeMethod,ctx,false,false,typeStruct,parameters);

    }
    tableSymbols.levelUp();
    this.visit(ctx.block());
    tableSymbols.lowerLevel();
    return
  
};

OwnContextualAnalysis.prototype.visitFormPars = function(ctx) {
 
    for (let i = 0; i <= ctx.IDENT().length-1; i++)
    {
        
        let identifier = ctx.IDENT(i).getSymbol().text;
        let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());

        if (thereIdentifier['success']){
            error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
            + ' Row: ' + ctx.IDENT(i).getSymbol().line 
            + ' Column: ' + ctx.IDENT(i).getSymbol().column; 
            errors.push(error);
        }
    
        else{
            //obtiene el tipo 
            let typePars = this.visit(ctx.type(i));
            //para insertar la declaracion del parametro en la lista allPars
            let newPars = {}
            newPars['var'] = identifier;
            newPars['type'] = typePars;
            allPars.push(newPars);
            
            //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
            tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typePars,ctx,false,false,null,null);
    
        }
    }
    
    return 
};

/*-------------------------------Types ---------------------------------------------------*/
OwnContextualAnalysis.prototype.visitIdentType = function(ctx) {
    return 1
};

OwnContextualAnalysis.prototype.visitCharType = function(ctx) {
    return 2
};

OwnContextualAnalysis.prototype.visitIntType = function(ctx) {
    return 3
};

OwnContextualAnalysis.prototype.visitFloatType = function(ctx) {
    return 4
};

OwnContextualAnalysis.prototype.visitBoolType = function(ctx) {
    return 5
};

OwnContextualAnalysis.prototype.visitStringType = function(ctx) {
    return 6
};


/* ------------------------------------------- Statement ----------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitFirstDesignStatement = function(ctx) {
    
    let identifier = this.visit(ctx.designator());
    //busca variable local
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier.getSymbol().text,tableSymbols.getLevel())
    
    if(!thereIdentifier['success']){
        //busca variable global
        thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier.getSymbol().text,tableSymbols.getLevel()-1)
    }
    
    if (thereIdentifier['success']){
        
        let asign = ctx.ASIGN();
        let leftPar = ctx.LEFT_PARENTHESIS();
        let plusPlus = ctx.PLUS_PLUS();
        let minusMinus = ctx.MINUS_MINUS();
        let isConst = thereIdentifier['data'].getIsConst();
       

        if(asign){

            if(!isConst){
                let expression = this.visit(ctx.expr());
                let IncompatibleTypes = false;
                
                if (thereIdentifier['data'].getType() != 2 && expression['typeExpr'] == 2){
                    IncompatibleTypes = true
                }

                else if(thereIdentifier['data'].getType() != 3 && expression['typeExpr'] == 3){
                    IncompatibleTypes = true
                }
                
                else if(thereIdentifier['data'].getType() != 5 && expression['typeExpr'] == 5){
                    IncompatibleTypes = true
                }

                else if (typeof(expression['typeExpr']) == 'object'){
                   
                }

                if(IncompatibleTypes){
                    error = 'Contextual Error. Identifier type  it is not compatible with assignment. '
                    + identifier.getSymbol().text + ' on' + ' Row: ' + identifier.getSymbol().line 
                    + ' Column: ' + identifier.getSymbol().column; 
                    errors.push(error);
                
                }

            }
   
        }
        else if(leftPar){
            let actPars = ctx.actPars();
           
            if(actPars){
               
                this.visit(ctx.actPars(0));
                
            }
        }
        
        else if(plusPlus || minusMinus){
            let type = thereIdentifier['data'].getType();
            if (type != 3 && type != 4){
                error = 'Contextual Error. you can not apply a mathematical' + 
                ' operation to a non-numeric variable. ' 
                + identifier.getSymbol().text + ' on' 
                + ' Row: ' + identifier.getSymbol().line 
                + ' Column: ' + identifier.getSymbol().column; 
                errors.push(error);
            }
           
        }

        if(isConst){
            error = 'Contextual Error. Cannot change a constant value. ' 
            + identifier.getSymbol().text + ' on' 
            + ' Row: ' + identifier.getSymbol().line 
            + ' Column: ' + identifier.getSymbol().column; 
            errors.push(error);
        }

    }

    else{

        error = 'Contextual Error. Identifier is not declared. ' + identifier.getSymbol().text + ' on' 
        + ' Row: ' + identifier.getSymbol().line 
        + ' Column: ' + identifier.getSymbol().column; 
        errors.push(error);
    }
};

OwnContextualAnalysis.prototype.visitIfStatement = function(ctx) {
    

    this.visit(ctx.condition());
    
    this.visit(ctx.statement(0));
    

    let elseToken = ctx.ELSE();
    if(elseToken){
        

        this.visit(ctx.statement(1));
        
    }
};

OwnContextualAnalysis.prototype.visitForStatement = function(ctx) {
  
    
    this.visit(ctx.expr());
   

    let condition = ctx.condition();
    let statement = ctx.statement();

    if(condition){
        
        this.visit(ctx.condition(0));
  
    }
    if(statement){
        
        for (let i=0; i <= ctx.statement().length-1; i++) {
           
            this.visit(ctx.statement(i));
            
        }
    }
};

OwnContextualAnalysis.prototype.visitWhileStatement = function(ctx) {
   

    this.visit(ctx.condition());

    this.visit(ctx.statement());

};

OwnContextualAnalysis.prototype.visitForeachStatement = function(ctx) {
   

    
    this.visit(ctx.type());
  

   
    let ident1 = ctx.IDENT(0).getSymbol().text;
    

    

    
    let ident2 = ctx.IDENT(1).getSymbol().text;
    

    this.visit(ctx.block());
  
};

OwnContextualAnalysis.prototype.visitBreakStatement = function(ctx) {
    return
};

OwnContextualAnalysis.prototype.visitReturnStatement = function(ctx) {
    

    let expr = ctx.expr();
    if(expr){
       
        this.visit(ctx.expr(0));
   
    }
};

OwnContextualAnalysis.prototype.visitReadStatement = function(ctx) {
   

   
    this.visit(ctx.designator());


    
};

OwnContextualAnalysis.prototype.visitWriteStatement = function(ctx) {
    
    this.visit(ctx.expr());
   

    let comma = ctx.COMMA();
    if(comma){
        
        let number = ctx.NUMBER().getSymbol().text;
       
    }
};

OwnContextualAnalysis.prototype.visitBlockStatement = function(ctx) {
    

    this.visit(ctx.block());
   
};

OwnContextualAnalysis.prototype.visitSemicolonStatement = function(ctx) {
    return
};

/*************************************************************************************************************/

OwnContextualAnalysis.prototype.visitBlock = function(ctx) {
    

    let statements = ctx.statement();
    if(statements){
        for (let i=0; i <= statements.length-1; i++) {
            this.visit(ctx.statement(i));
            
        }
    }
};

OwnContextualAnalysis.prototype.visitActPars = function(ctx) {
   
    this.visit(ctx.expr(0));
    

    for (let i=1; i <= ctx.expr().length - 1; i++) {
       
        this.visit(ctx.expr(i));
        
    }
};

OwnContextualAnalysis.prototype.visitCondition = function(ctx) {
    

    this.visit(ctx.condTerm(0));


    
    for (let i=1; i <=  ctx.condTerm().length - 1; i++) {
       
        this.visit(ctx.condTerm(i));

    }
};

OwnContextualAnalysis.prototype.visitCondTerm = function(ctx) {
   


    this.visit(ctx.condFact(0));
   

   
    for (let i=1; i <= ctx.condFact().length; i++) {
       

        this.visit(ctx.condFact(i));

    }
};

OwnContextualAnalysis.prototype.visitCondFact = function(ctx) {
    


    this.visit(ctx.expr(0));
    
    this.visit(ctx.relop());
    
    this.visit(ctx.expr(1));
    
};

OwnContextualAnalysis.prototype.visitExpr = function(ctx) {
   

    let substractToken = ctx.SUBTRACTION();
    let expr = {'sub': false, 'typeExpr': false}
    if(substractToken){
        expr['sub'] = true;
    }

    let typeExpr = this.visit(ctx.term(0));
false
    let termLength = ctx.term().length - 1;
    for (let i=1; i <= termLength; i++) {
        

        if(typeExpr == 3){
            let newTypeExpr = this.visit(ctx.term(i));
            
            typeExpr = newTypeExpr;
        }

        else{
            // retorna 21 si se trato de sumar tipos diferentes
            expr['typeExpr'] = 21;

            return expr
        }
        
    }
    
    expr['typeExpr'] = typeExpr;
    return expr;
};

OwnContextualAnalysis.prototype.visitTerm = function(ctx) {
    

    let typeExpr =this.visit(ctx.factor(0));
   
    for (let i=1; i <= ctx.factor().length - 1; i++) {
        
        if(typeExpr == 3){
            let newTypeExpr = this.visit(ctx.factor(i));
            
            typeExpr = newTypeExpr;
        }

        else{
            // retorna 22 si se trato de multiplicar tipos diferentes
            return 22
        }  
    }

    return typeExpr
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitDesignatorFactor = function(ctx) {
    /*
    this.visit(ctx.designator());
   

    let leftParenthesis = ctx.LEFT_PARENTHESIS();
    if(leftParenthesis){
        
       
        let actPars = ctx.actPars();
        if(actPars){
         
            this.visit(ctx.actPars(0));
            
        }
    }*/
};

OwnContextualAnalysis.prototype.visitNumberFactor = function(ctx) {
    return 3
};

OwnContextualAnalysis.prototype.visitCharconstFactor = function(ctx) {
    return 2
    
};

OwnContextualAnalysis.prototype.visitBoolFactor = function(ctx) {
    return 5
};

OwnContextualAnalysis.prototype.visitNewFactor = function(ctx)       {
    return {'typeExpr': 8, 'data': ctx.getSymbol().text}
};

OwnContextualAnalysis.prototype.visitExpressionFactor = function(ctx) {
    return this.visit(ctx.expr()) 
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnContextualAnalysis.prototype.visitDesignator = function(ctx) {
    
    let identifier = ctx.IDENT()

    if (identifier.length == 1){
        return identifier[0]
    }
    


    
    
/*
    let ident2 = ctx.IDENT(1);
    let leftBracketAmount = ctx.LEFT_SQUARE_BRACKET().length;
    if(ident2){ //hay 2 o mas identifiers, se va por el AT IDENT
        let identLenght = ctx.IDENT().length-1;
        for(let i=1;i <= ctx.IDENT().length-1;i++){
            
        }
    }
    else if(leftBracketAmount != 0){
        for(let i = 0; i <= leftBracketAmount - 1; i++){
            i

            
            this.visit(ctx.expr(i));
        
        }
    }*/
};
/*----------------------------------------------- Operadores Logicos y Matematicos ---------------------------------------------*/

/*
Relop:
    EqualEqualOp:           10
    InequalityOp:           11
    GreaterThanOp:          12
    GreaterOrEqualThanOp:   13
    LessThanOp:             14
    LessOrEqualThanOp:      15
Addop:
    SumOp:                  16
    SubsOp:                 17
Mulop:
    MultOp:                 18
    DivOp:                  19
    PercentOp:              20

*/

/*-------------------------------------------------------------- Relop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitEqualEqualOp = function(ctx) {
    return 10
};

OwnContextualAnalysis.prototype.visitInequalityOp = function(ctx) {
    return 11
};

OwnContextualAnalysis.prototype.visitGreaterThanOp = function(ctx) {
    return 12
};

OwnContextualAnalysis.prototype.visitGreaterOrEqualThanOp = function(ctx) {
    return 13
};

OwnContextualAnalysis.prototype.visitLessThanOp = function(ctx) {
    return 14
};

OwnContextualAnalysis.prototype.visitLessOrEqualThanOp = function(ctx) {
    return 15
};

/*-------------------------------------------------------------- Adop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitSumOp = function(ctx) {
    return 16
};

OwnContextualAnalysis.prototype.visitSubsOp = function(ctx) {
    return 17
};

/*-------------------------------------------------------------- Mulop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitMultOp = function(ctx) {
    return 18
};

OwnContextualAnalysis.prototype.visitDivOp = function(ctx) {
    return 19
};

OwnContextualAnalysis.prototype.visitPercentOp = function(ctx) {
    return 20
};

/*
visit designator
if(ctx.IDENT().length == 1){
        //busca si ya existe el identifiador en la tabla de simbolos
        let identifier = ctx.IDENT(0).getSymbol().text;
        let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel()+1);
    
        if (thereIdentifier['success']){
            return thereIdentifier['data'];
        }

        else{
            let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
            return thereIdentifier['data']
        }

    }


*/

exports.OwnContextualAnalysis = OwnContextualAnalysis;
