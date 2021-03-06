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
    console.log(ctx)
    ctx['misDatos'] = [];
    ctx.misDatos.push()
    console.log(ctx)
    /*
    let identifier = ctx.IDENT().getSymbol().text;

    //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
    tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel()-1,0,ctx,false,false,null,null,false);
    //METODOS POR DEFECTO
    tableSymbols.insertToken(tableSymbols,'null',0,null,null,null,null,null,null,false);
    tableSymbols.insertToken(tableSymbols,'chr',0,null,null,null,null,null,[{'name':'i'}],false);
    tableSymbols.insertToken(tableSymbols,'ord',0,null,null,null,null,null,[{'name':'ch'}],false);
    tableSymbols.insertToken(tableSymbols,'len',0,null,null,null,null,null,[{'name':'ch'}],false);



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
    }*/
    return errors;
};

OwnContextualAnalysis.prototype.visitConstDecl = function(ctx) {

    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
  
    if (thereIdentifier.success){
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
    }
    else{
        //obtiene el tipo 
        let typeConst = this.visit(ctx.type());

        if (typeConst != 3 && typeConst != 2 ){
            error = 'Contextual Error. Identifier type  it is not allowed. '
            + identifier + ' on' + ' Row: ' + ctx.IDENT().getSymbol().line 
            + ' Column: ' + ctx.IDENT().getSymbol().column; 
            errors.push(error);
        }
        else{
            //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
            tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeConst,ctx,false,true,null,null,false);

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

        if (thereIdentifier.success){
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
            tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeVar,ctx,isList,false,null,null,false);
    
        }
    }
    return
};

OwnContextualAnalysis.prototype.visitClassDecl = function(ctx) {
    
    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
    
    if (thereIdentifier.success){
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
    }

    else{
        let parameters = [];
        let variables = ctx.varDecl();
        if(variables){
            allVars = [];
            tableSymbols.levelUp();
            this.visit(variables);
            tableSymbols.lowerLevel();
            
            for (let i = 0; i < allVars.length; i++) {
                /*crea un parametro en este caso son los var decl de la clase
                allVars[i][0] = es el identifier
                allVars[i][1] = es el type
                */
                let parameter = tableSymbols.createParameter(allVars[i].var,allVars[i].type,'varDecl');
                parameters.push(parameter);
                
            }
            
        }
        //Tipo Object 
        let typeClass = 0;
        let typeStruct = 0;
        //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
        tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeClass,ctx,false,false,typeStruct,parameters,false);

    }
    //tableSymbols.deleteTokens(tableSymbols);
    return
};

OwnContextualAnalysis.prototype.visitMethodDecl = function(ctx) {
    
    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
  
    if (thereIdentifier.success){
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
    }

    else{

        let parameters = [];
        let formPars =  ctx.formPars();
        let variables = ctx.varDecl();

        if(formPars){
            allPars = [];
            tableSymbols.levelUp();
            this.visit(formPars);
            tableSymbols.lowerLevel();

            for (let i = 0; i < allPars.length; i++) {
                /*crea un parametro en este caso son los formPars del metodo
                allPars[i]['var'] = es el identifier
                allPars[i]['type'] = es el type
                */
                
                let parameter = tableSymbols.createParameter(allPars[i].var,allPars[i].type,'formPars');
                parameters.push(parameter);

                
            }
        }
        if(variables){
            allVars = [];
            tableSymbols.levelUp();
            this.visit(variables);
            tableSymbols.lowerLevel();
            for (let i = 0; i < allVars.length; i++) {
                /*crea un parametro en este caso son los var decl de la metodo
                allVars[i]['var'] = es el identifier
                allVars[i]['type'] = es el type
                */
                let parameter = tableSymbols.createParameter(allVars[i].var,allVars[i].type,'varDecl');
                parameters.push(parameter); 
            }   
        }
        //obtiene el tipo
        let typeMethod = 1; 
        let typeStruct;
        
        if(ctx.VOID()){
            typeStruct = 7
        }
        else{
            typeStruct = this.visit(ctx.type());
        }
        
        //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
        tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typeMethod,ctx,false,false,typeStruct,parameters,false);
        tableSymbols.levelUp();
        this.visit(ctx.block());
        tableSymbols.lowerLevel();
        //tableSymbols.deleteTokens(tableSymbols);
    }
    
    return
  
};

OwnContextualAnalysis.prototype.visitFormPars = function(ctx) {
 
    for (let i = 0; i <= ctx.IDENT().length-1; i++)
    {
        
        let identifier = ctx.IDENT(i).getSymbol().text;
        let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier,tableSymbols.getLevel());
        
        if (thereIdentifier.success){
            error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
            + ' Row: ' + ctx.IDENT(i).getSymbol().line 
            + ' Column: ' + ctx.IDENT(i).getSymbol().column; 
            errors.push(error);

        }
    
        else{
            //obtiene el tipo 
            let typePars = this.visit(ctx.type(i));
            //para insertar la declaracion del parametro en la lista allPars
            let newPars = {};
            newPars.var = identifier;
            newPars.type = typePars;
            allPars.push(newPars);
            
            //verificar contexto de los parametros en OwnTableSymbols arriba del tableSymbols.insertToken
            tableSymbols.insertToken(tableSymbols,identifier,tableSymbols.getLevel(),typePars,ctx,false,false,null,null,false);
    
        }
    }
    
    return 
};

/*-------------------------------Types ---------------------------------------------------*/
OwnContextualAnalysis.prototype.visitIdentType = function(ctx) {
    return {type : 1, identifier : ctx.IDENT().getSymbol().text};
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
    let thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier[0].getSymbol().text,tableSymbols.getLevel());
    
    if(!thereIdentifier.success){
        //busca variable global
        thereIdentifier = tableSymbols.buscarToken(tableSymbols,identifier[0].getSymbol().text,tableSymbols.getLevel()-1)
    }
    
    if (thereIdentifier.success){
        let asign = ctx.ASIGN();
        let leftPar = ctx.LEFT_PARENTHESIS();
        let plusPlus = ctx.PLUS_PLUS();
        let minusMinus = ctx.MINUS_MINUS();
        let isConst;
        let isList;
        try{
            isConst = thereIdentifier.data.getIsConst(); 
            isList =  thereIdentifier.data.getIslista();
        }
        catch(e){
            isConst = false; 
            isList =  false;
        }
        
        if (identifier.length>1){
            if(thereIdentifier.data.getValue()){
                let classIdentifier = tableSymbols.buscarToken(tableSymbols,thereIdentifier.data.getValue(),tableSymbols.getLevel()-1);
                let change = false
                for(element of classIdentifier.data.parameters){
                    if(element.getName() === identifier[1].getSymbol().text){
                        thereIdentifier.data = element;
                        change = true;
                        break;
                    }
                }

                if(!change){
                    error = 'Contextual Error. Identifier is not declared. '
                    + identifier[1].getSymbol().text + ' on' + ' Row: ' + identifier[1].getSymbol().line 
                    + ' Column: ' + identifier[1].getSymbol().column; 
                    errors.push(error);

                }
            }
            else{
                error = 'Contextual Error. Identifier has not been instantiated. '
                + identifier[0].getSymbol().text + ' on' + ' Row: ' + identifier[0].getSymbol().line 
                + ' Column: ' + identifier[0].getSymbol().column; 
                errors.push(error);
                
            }
        }

        if(asign){
            if(!isConst){
                if(!isList){
                    let expression = this.visit(ctx.expr());
                    let IncompatibleTypes = false;      

                    if(expression.typeExpr.typeExpr){
                        let expr = expression.typeExpr.typeExpr;
                        
                        if(expr.typeTerminal === 2 || expr.typeTerminal === 3 || expr.typeTerminal === 5){
                            expression = expression.typeExpr;
                            
                        }
                    }     
                    
                    if (thereIdentifier.data.getType() !== 2 && expression.typeExpr.typeTerminal === 2){
                        IncompatibleTypes = true;
                    }
                    else if(thereIdentifier.data.getType() !== 3 && expression.typeExpr.typeTerminal === 3){
                        IncompatibleTypes = true
                    }
                    else if(thereIdentifier.data.getType() !== 5 && expression.typeExpr.typeTerminal === 5){
                        IncompatibleTypes = true
                    }
    
                    else if (expression.typeExpr.typeTerminal === 8){
                        
                        let classIdentifier = tableSymbols.buscarToken(tableSymbols,expression.typeExpr.data.getSymbol().text,tableSymbols.getLevel()-1);
                        
                        if(classIdentifier.success){
    
                            let type = thereIdentifier.data.getType();
                            
                            if(type.identifier !== expression.typeExpr.data.getSymbol().text){
                                IncompatibleTypes = true;
                            }
                                
                            else{
                                thereIdentifier.data.value = type.identifier;
                            }
    
                        }
                        else{
                            error = 'Contextual Error. Identifier is not declared. ' + expression.typeExpr.data.getSymbol().text + ' on'
                                + ' Row: ' + expression.typeExpr.data.getSymbol().line
                                + ' Column: ' + expression.typeExpr.data.getSymbol().column;
                            errors.push(error);
                        }
                
                    }
                    if(IncompatibleTypes){
                        error = 'Contextual Error. Identifier type  it is not compatible with assignment. '
                        + identifier[0].getSymbol().text + ' on' + ' Row: ' + identifier[0].getSymbol().line 
                        + ' Column: ' + identifier[0].getSymbol().column; 
                        errors.push(error);
                    }
    
                }
                
                else{
                    console.log('true')
                    //validar is list
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
            let type = thereIdentifier.data.getType();
            if (type !== 3 && type !== 4){
                error = 'Contextual Error. you can not apply a mathematical' + 
                ' operation to a non-numeric variable. ' 
                + identifier[0].getSymbol().text + ' on' 
                + ' Row: ' + identifier[0].getSymbol().line 
                + ' Column: ' + identifier[0].getSymbol().column; 
                errors.push(error);
            }
           
        }

        if(isConst){
            error = 'Contextual Error. Cannot change a constant value. ' 
            + identifier[0].getSymbol().text + ' on' 
            + ' Row: ' + identifier[0].getSymbol().line 
            + ' Column: ' + identifier[0].getSymbol().column; 
            errors.push(error);
        }

    }
    else{

        error = 'Contextual Error. Identifier is not declared. ' + identifier[0].getSymbol().text + ' on' 
        + ' Row: ' + identifier[0].getSymbol().line 
        + ' Column: ' + identifier[0].getSymbol().column; 
        errors.push(error);
    }
    
};

OwnContextualAnalysis.prototype.visitIfStatement = function(ctx) {
    let condition = this.visit(ctx.condition());

    this.visit(ctx.statement(0));
    
    /*
    let elseToken = ctx.ELSE();
    if(elseToken){
        

        this.visit(ctx.statement(1));
        
    }*/
    return
};

OwnContextualAnalysis.prototype.visitForStatement = function(ctx) {
    /*this.visit(ctx.expr());

    let condition = ctx.condition();
    let statement = ctx.statement();

    if(condition){
        
        this.visit(ctx.condition(0));
  
    }
    if(statement){
        
        for (let i=0; i <= ctx.statement().length-1; i++) {
           
            this.visit(ctx.statement(i));
            
        }
    }*/
    return
};

OwnContextualAnalysis.prototype.visitWhileStatement = function(ctx) {
   

    this.visit(ctx.condition());

    this.visit(ctx.statement());
    return

};

OwnContextualAnalysis.prototype.visitForeachStatement = function(ctx) {

    /*let ident1 = ctx.IDENT(0).getSymbol().text;
    
    let thereIdentifier = tableSymbols.buscarToken(ident1,tableSymbols.getLevel());

    if(thereIdentifier.success){
        error = 'Contextual Error. Identifier is already declared. ' + ctx.IDENT(0).getSymbol().text + ' on' 
        + ' Row: ' + ctx.IDENT(0).getSymbol().line 
        + ' Column: ' + ctx.IDENT(0).getSymbol().column; 
        errors.push(error);

    }

    else{
        let ident2 = ctx.IDENT(1).getSymbol().text;
        thereIdentifier = tableSymbols.buscarToken(ident2,tableSymbols.getLevel());
        
        if(!thereIdentifier.data.getIslista()){
            error = 'Contextual Error. Identifier is already declared. ' + ctx.IDENT(1).getSymbol().text + ' on' 
            + ' Row: ' + ctx.IDENT(1).getSymbol().line 
            + ' Column: ' + ctx.IDENT(1).getSymbol().column; 
            errors.push(error);
        }
        this.visit(ctx.block());
    }
    

    */
    
  return
};

OwnContextualAnalysis.prototype.visitBreakStatement = function(ctx) {
    return
};

OwnContextualAnalysis.prototype.visitReturnStatement = function(ctx) {
    //console.log(tableSymbols.getTableSymbols());
    /*
    let expr = ctx.expr();
    if(expr){
       
        this.visit(ctx.expr(0));
   
    }*/
    return
};

OwnContextualAnalysis.prototype.visitReadStatement = function(ctx) {
   

   
    this.visit(ctx.designator());
    return

    
};

OwnContextualAnalysis.prototype.visitWriteStatement = function(ctx) {
    /*
    this.visit(ctx.expr());
   

    let comma = ctx.COMMA();
    if(comma){
        
        let number = ctx.NUMBER().getSymbol().text;
       
    }*/
    return
};

OwnContextualAnalysis.prototype.visitBlockStatement = function(ctx) {
    

    return this.visit(ctx.block());
   
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
    return
};

OwnContextualAnalysis.prototype.visitActPars = function(ctx) {
   
    let typeActPars = this.visit(ctx.expr(0));
    
     for (let i=1; i <= ctx.expr().length - 1; i++) {
         if(typeActPars.typeTerminal === 3 || typeActPars.typeTerminal === 4){
            typeActPars = this.visit(ctx.factor(i));
 
         }
         else{
             // retorna 22 si se trato de multiplicar tipos diferentes
             return 23
         }  
     }
 
     return typeActPars
   
};

OwnContextualAnalysis.prototype.visitCondition = function(ctx) {
    let firstTerm = this.visit(ctx.condTerm(0));

    /*bretearlo
    for (let i=1; i <=  ctx.condTerm().length - 1; i++) {
        this.visit(ctx.condTerm(i));
    }*/
    return
};

OwnContextualAnalysis.prototype.visitCondTerm = function(ctx) {
    /*let firstFact = this.visit(ctx.condFact(0));

    let returnValue = true;

    let condFactLength = ctx.condFact().length;
    for (let i=1; i <= condFactLength; i++) {
        let secondFact = this.visit(ctx.condFact(i));
        console.log("PrimerFact: "+ firstFact + ", secondFact: "+ secondFact);
    }*/
    return
};

OwnContextualAnalysis.prototype.visitCondFact = function(ctx) { //falta para idents
    /*let firstExpr = this.visit(ctx.expr(0));
    let relOperator = this.visit(ctx.relop());
    let secondExpr = this.visit(ctx.expr(1));

    let returnValue = true;

    let type1;
    let type2;
    //busca variable local
    if(firstExpr.typeExpr.typeTerminal === 1){ // si el operando 1 es variable se obtiene el tipo de la variable
        let firstExprSymbol = firstExpr.typeExpr.data[0].getSymbol();
        let thereIdentifier = tableSymbols.buscarToken(tableSymbols,firstExprSymbol.text,tableSymbols.getLevel());

        if(!thereIdentifier.success){
            //busca variable global
            thereIdentifier = tableSymbols.buscarToken(tableSymbols,firstExprSymbol.text,tableSymbols.getLevel()-1)
        }
        if(thereIdentifier.success){
            type1 = thereIdentifier.data.getType();
        }
        else{
            let error = 'Contextual Error. Identifier is not declared. '
                + firstExprSymbol.text + ' on' + ' Row: ' + firstExprSymbol.line
                + ' Column: ' + firstExprSymbol.column;
            errors.push(error);
            returnValue = false;
        }
    }
    else{
        type1 = firstExpr.typeExpr.typeTerminal;
    }

    if(secondExpr.typeExpr.typeTerminal === 1){ // si el operando 2 es variable se obtiene el tipo de la variable
        let secondExprSymbol = secondExpr.typeExpr.data[0].getSymbol();
        let thereIdentifier = tableSymbols.buscarToken(tableSymbols,secondExprSymbol.text,tableSymbols.getLevel());

        if(!thereIdentifier.success){
            //busca variable global
            thereIdentifier = tableSymbols.buscarToken(tableSymbols,secondExprSymbol.text,tableSymbols.getLevel()-1)
        }
        if(thereIdentifier.success){
            type2 = thereIdentifier.data.getType();
        }
        else{
            let error = 'Contextual Error. Identifier'+ secondExprSymbol.text + 'is not declared. On Row: ' + secondExprSymbol.line
                + ' Column: ' + secondExprSymbol.column;
            errors.push(error);
            returnValue = false;
        }
    }
    else{
        type2 = secondExpr.typeExpr.typeTerminal;
    }


    if(relOperator !== 10 || relOperator !== 11){ //diferente de != y == (solo operador para numericos)
        if((type1 !== type2) || (type1 !== 3 || type2 !== 3)){ //si el primer tipo es diferente del segundo
            let error = 'Contextual Error. Operation not allowed for target data types, use only numeric data types, condition on'
                + ' Row: ' + firstExpr.typeExpr.data[0].getSymbol().line
                + ' Column: ' + firstExpr.typeExpr.data[0].getSymbol().column;
            errors.push(error);
            returnValue = false;
        }
    }
    else{
        if(type1 !== type2){ //si el primer tipo es diferente del segundo
            let error = 'Contextual Error. Operation not allowed for target data types, use the same data type on the operands, condition on'
                + ' Row: ' + firstExpr.typeExpr.data[0].getSymbol().line
                + ' Column: ' + firstExpr.typeExpr.data[0].getSymbol().column;
            errors.push(error);
            returnValue = false;
        }
    }
*/
    return //returnValue;
};

OwnContextualAnalysis.prototype.visitExpr = function(ctx) {
    let substractToken = ctx.SUBTRACTION();
    let expr = {'sub': false, 'typeExpr': false};
    if(substractToken){
        expr['sub'] = true;
    }

    let typeExpr = this.visit(ctx.term(0));

    let termLength = ctx.term().length - 1;

    for (let i=1; i <= termLength; i++) {
        if(typeExpr.typeTerminal === 3 || typeExpr.typeTerminal === 4){
            typeExpr = this.visit(ctx.term(i));

        }
        else{
            //retorna 21 si se trato de sumar tipos diferentes
            expr.typeExpr = 21;
            return expr
        }
    }
    
    expr.typeExpr = typeExpr;
    return expr;
};

OwnContextualAnalysis.prototype.visitTerm = function(ctx) {
    let typeTerm = this.visit(ctx.factor(0));
   
    for (let i=1; i <= ctx.factor().length - 1; i++) {
        if(typeTerm.typeTerminal === 3 || typeTerm.typeTerminal === 4){
            typeTerm = this.visit(ctx.factor(i));
        }
        else{
            // retorna 22 si se trato de multiplicar tipos diferentes
            return 22
        }  
    }
    return typeTerm
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitDesignatorFactor = function(ctx) {

    let designator = this.visit(ctx.designator());
    return {typeTerminal: 1, data: designator};
   
    /*
    let leftParenthesis = ctx.LEFT_PARENTHESIS();
    if(leftParenthesis){
       
        let actPars = ctx.actPars();
        if(actPars){
         
            this.visit(ctx.actPars(0));
            
        }
    }
    */
};

OwnContextualAnalysis.prototype.visitNumberFactor = function(ctx) {
    let object = {typeTerminal: 3, data: ctx.NUMBER()};

    if (ctx.NUMBER().getSymbol().text.includes('.')){
        object.typeTerminal = 4;
    }

    return object;

};

OwnContextualAnalysis.prototype.visitCharconstFactor = function(ctx) {
    return {typeTerminal: 2, data: ctx.CHAR_CONST()};
};

OwnContextualAnalysis.prototype.visitBoolFactor = function(ctx) {
    let object = {typeTerminal: 5, data: null};

    let falseFactor = ctx.FALSE();
    let trueFactor = ctx.TRUE();
    if(trueFactor)
        object.data = trueFactor;
    else
        object.data = falseFactor;

    return object;
};

OwnContextualAnalysis.prototype.visitNewFactor = function(ctx){
    return {typeTerminal: 8, data: ctx.IDENT()}
};

OwnContextualAnalysis.prototype.visitExpressionFactor = function(ctx) {
    return this.visit(ctx.expr());
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnContextualAnalysis.prototype.visitDesignator = function(ctx) {
    return ctx.IDENT();
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
