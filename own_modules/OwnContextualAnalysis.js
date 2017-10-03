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

    this.visit(ctx.block());
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
            let typePars = this.visit(ctx.type())[i];
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
    console.log('visitFirstDesignStatement')

    let designator = ctx.designator();

    if(designator){
        let typeIdent = this.visit(ctx.designator())
        let asign = ctx.ASIGN();
        console.log(typeIdent)
        if(asign){
            let exp
        }
    }
    
    /*let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"FirstDesignatorStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.designator());

    let expression = ctx.expr();
    let actPars = ctx.actPars();
    let leftPar = ctx.LEFT_PARENTHESIS();
    let plusPlus = ctx.PLUS_PLUS();
    let minusMinus = ctx.MINUS_MINUS();

    if(expression){
        this.visit(expression);
    }
    else if(leftPar){
        console.log(tabText2 + "()");
        if(actPars){
            this.visit(actPars);
        }
    }
    else if(plusPlus){
        console.log(tabText2 + plusPlus.getSymbol().text);
    }
    else if(minusMinus){
        console.log(tabText2 + minusMinus.getSymbol().text);
    }
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitIfStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"IfStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitForStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ForStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let condition = ctx.condition();
    let statement = ctx.statement();

    cont++;
    this.visit(ctx.expr());
    if(condition != null){
        this.visit(ctx.condition());
    }
    if(statement != null){
        this.visit(ctx.statement());
    }
    cont--;*/
    return
}; 

OwnContextualAnalysis.prototype.visitWhileStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"WhileStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitForeachStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ForeachStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.type());
    console.log(tabText2 + ctx.IDENT(0) + " in " + ctx.IDENT(1));
    this.visit(ctx.block());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitBreakStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"BreakStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitReturnStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ReturnStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let expr = ctx.expr();
    if(expr){
        cont++;
        this.visit(expr);
        cont--;
    }*/
    return
};

OwnContextualAnalysis.prototype.visitReadStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ReadStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.designator());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitWriteStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"WriteStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitBlockStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"BlockStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.block());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitSemicolonStatement = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"SemicolonStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

/*************************************************************************************************************/

OwnContextualAnalysis.prototype.visitBlock = function(ctx) {
    this.visit(ctx.statement());
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Block","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let statements = ctx.statement();
    if(statements != null){
        cont++;
        this.visit(ctx.statement());
        cont--;
    }*/
    return
};

OwnContextualAnalysis.prototype.visitActPars = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ActPars","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitCondition = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Condition","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condTerm());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitCondTerm = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"CondTerm","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condFact());
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitCondFact = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"CondFact","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr(0));
    this.visit(ctx.relop());
    this.visit(ctx.expr(1));
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitExpr = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Expr","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let substractToken = ctx.SUBTRACTION();

    cont++;
    if(substractToken)
        console.log(substractToken.getSymbol().text);
    this.visit(ctx.term(0));
    for (let i=1; i <= ctx.term().length-1; i++) {
        this.visit(ctx.addop(i-1));
        this.visit(ctx.term(i));
    }
    cont--;*/
    return
};

OwnContextualAnalysis.prototype.visitTerm = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Term","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.factor(0));
    for (let i=1; i <= ctx.factor().length-1; i++) {
        this.visit(ctx.mulop(i-1));
        this.visit(ctx.factor(i));
    }
    cont--;*/
    return
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitDesignatorFactor = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"DesignatorFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.designator());
    let actPars = ctx.actPars();
    if(actPars != null){
        this.visit(ctx.actPars());
    }
    cont--;

    console.log(treeList);*/
    return
};

OwnContextualAnalysis.prototype.visitNumberFactor = function(ctx) {
    /*let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "Number: " + ctx.NUMBER().getSymbol().text);

    let object = new  ArrayEntry(cont,"NumberFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitCharconstFactor = function(ctx) {
    /*let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "Const: " + ctx.CHAR_CONST().getSymbol().text);

    let object = new  ArrayEntry(cont,"CharConstFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitBoolFactor = function(ctx) {
    /*let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"BoolFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let trueFactor = ctx.TRUE();
    if(trueFactor)
        console.log(tabText2 + "Value: true");
    else
        console.log(tabText2 + "Value: false");
*/
    return
};

OwnContextualAnalysis.prototype.visitNewFactor = function(ctx)       {
   /* let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "new " + ctx.IDENT().getSymbol().text);

    let object = new  ArrayEntry(cont,"NewFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitExpressionFactor = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ExpressionFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr());
    cont--;*/
    return
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnContextualAnalysis.prototype.visitDesignator = function(ctx) {
    console.log('visitDesignator')
    
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
    
   /* let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Designator","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    console.log(tabText2 + "Identifier: " + ctx.IDENT(0).getSymbol().text);
    if(ctx.IDENT(1) != null){ //hay 2 identifiers, se va por el DOT IDENT
        console.log(tabText2 + "@" + ctx.IDENT(1).getSymbol().text);
    }
    else{
        cont++;
        this.visit(ctx.expr());
        cont--;
    }*/
    return
};

/*-------------------------------------------------------------- Relop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitEqualEqualOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"EqualEqualOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitInequalityOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"InequalityOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitGreaterThanOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"GreaterThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitGreaterOrEqualThanOp = function(ctx) {
   /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"GreaterOrEqualThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitLessThanOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"LessThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitLessOrEqualThanOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"LessOrEqualThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

/*-------------------------------------------------------------- Adop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitSumOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"SumOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitSubsOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"SubsOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

/*-------------------------------------------------------------- Mulop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitMultOp = function(ctx) {
   /* let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"MultOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitDivOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"DivOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

OwnContextualAnalysis.prototype.visitPercentOp = function(ctx) {
    /*let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"PercentOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);*/
    return
};

exports.OwnContextualAnalysis = OwnContextualAnalysis;
