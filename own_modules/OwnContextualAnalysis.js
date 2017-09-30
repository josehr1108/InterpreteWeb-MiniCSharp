/**
 * 
 * Created by andres on 29/9/2017.
 *
 **/

const parserVisitor = require('../generated/ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;
const OwnTableSymbols  = require('./OwnTableSymbols');
let tableSymbols;
let errors;
function OwnContextualAnalysis (){
    parserVisitor.call(this);
    tableSymbols = new OwnTableSymbols.tableSymbols();
    errors = [];
    return this;
}

OwnContextualAnalysis.prototype = Object.create(parserVisitor.prototype);
OwnContextualAnalysis.prototype.constructor = OwnContextualAnalysis;


OwnContextualAnalysis.prototype.visitProgram = function(ctx) {
    console.log('start visit program a contextual')

    let identifier = ctx.IDENT().getSymbol().text;
    tableSymbols.insert(tableSymbols,identifier,tableSymbols.getLevel()-1,0,ctx,false,false,null,null);
    //console.log(tableSymbols.getTableSymbols());
    
    
    let constants = ctx.constDecl();
    let variables = ctx.varDecl();
    let classes = ctx.classDecl();
    let methods = ctx.methodDecl();

    if(constants){
        this.visit(constants);
    }/*
    if(variables){
        this.visit(variables);
    }
    if(classes){
        this.visit(classes);
    }
    if(methods){
        this.visit(methods);
    }
*/
    console.log('voy a retornar')
    return errors;
};

OwnContextualAnalysis.prototype.visitConstDecl = function(ctx) {


    let identifier = ctx.IDENT().getSymbol().text;
    var thereIdentifier = tableSymbols.buscar(tableSymbols,identifier,tableSymbols.getLevel());
    console.log('imprimiendo tabla')
    console.log(tableSymbols.getTableSymbols());
    console.log(thereIdentifier)
    if (thereIdentifier){
        console.log('error')
        error = 'Contextual Error. Identifier is already declared. ' + identifier + ' on' 
        + ' Row: ' + ctx.IDENT().getSymbol().line 
        + ' Column: ' + ctx.IDENT().getSymbol().column; 
        errors.push(error);
        console.log(errors);
    }

    else{
        tableSymbols.insert(tableSymbols,identifier,tableSymbols.getLevel(),0,ctx,false,false,null,null);
        //console.log(tableSymbols.getTableSymbols());
    }
    return
};

OwnContextualAnalysis.prototype.visitVarDecl = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"VarDecl","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.type());
    //------- Para imprimir el identificador --------------
    for (let i = 0; i <= ctx.IDENT().length-1; i++)
    {
        let tabText = getTabText(cont+1);
        console.log(tabText+ "Identifier: " + ctx.IDENT(i).getSymbol().text);
    }
    cont--;
};

OwnContextualAnalysis.prototype.visitClassDecl = function(ctx) {
    let tabText = getTabText(cont);
    console.log(tabText + ctx.constructor.name);

    let object = new  ArrayEntry(cont,"ClassDecl","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let varDecls = ctx.varDecl();
    let identifier = ctx.IDENT();
    let tabText2 = getTabText(cont+1);
    console.log(tabText2 + "Class Name: "+ identifier.getSymbol().text);

    if(varDecls){
        cont++;
        this.visit(varDecls);
        cont--;
    }
};

OwnContextualAnalysis.prototype.visitMethodDecl = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"MethodDecl","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let type = ctx.type();
    let identifier = ctx.IDENT().getSymbol().text;
    console.log(tabText2 + "Identifier: "+ identifier);

    cont++;
    if(type){
        this.visit(ctx.type());
    }
    else{
        console.log(tabText2 + "Type: void");
    }

    let formPars = ctx.formPars();
    if(formPars){
        this.visit(ctx.formPars());
    }

    let varDecls = ctx.varDecl();
    if(varDecls){
        this.visit(ctx.varDecl());
    }

    this.visit(ctx.block());
    cont--;
};

OwnContextualAnalysis.prototype.visitFormPars = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    let tabText2 = getTabText(cont+2);
    console.log(tabText);

    let object = new  ArrayEntry(cont,"FormPars","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    let typeLength = ctx.type().length-1;
    for (let i=0; i <= typeLength; i++) {
        this.visit(ctx.type(i));
        console.log(tabText2  + "Identifier: " + ctx.IDENT(i));
    }
    cont--;
};

/*-------------------------------Types ---------------------------------------------------*/
OwnContextualAnalysis.prototype.visitIdentType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"IdentType","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Type: " + ctx.IDENT().getSymbol().text;
    console.log(tabText2);
};

OwnContextualAnalysis.prototype.visitCharType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"CharType","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.CHAR().getSymbol().text;
    console.log(tabText2);
};

OwnContextualAnalysis.prototype.visitIntType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"IntType","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.INT().getSymbol().text;
    console.log(tabText2);
};

OwnContextualAnalysis.prototype.visitFloatType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"FloatType","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.FLOAT().getSymbol().text;
    console.log(tabText2);
};

OwnContextualAnalysis.prototype.visitBoolType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"BoolType","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.BOOL().getSymbol().text;
    console.log(tabText2);
};

OwnContextualAnalysis.prototype.visitStringType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"StringType","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.STRING().getSymbol().text;
    console.log(tabText2);
};


/* ------------------------------------------- Statement ----------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitFirstDesignStatement = function(ctx) {
    let tabText = getTabText(cont);
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
    cont--;
};

OwnContextualAnalysis.prototype.visitIfStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"IfStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    cont--;
};

OwnContextualAnalysis.prototype.visitForStatement = function(ctx) {
    let tabText = getTabText(cont);
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
    cont--;
}; //Probar y preguntar

OwnContextualAnalysis.prototype.visitWhileStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"WhileStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    cont--;
};

OwnContextualAnalysis.prototype.visitForeachStatement = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ForeachStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.type());
    console.log(tabText2 + ctx.IDENT(0) + " in " + ctx.IDENT(1));
    this.visit(ctx.block());
    cont--;
};

OwnContextualAnalysis.prototype.visitBreakStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"BreakStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitReturnStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ReturnStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let expr = ctx.expr();
    if(expr){
        cont++;
        this.visit(expr);
        cont--;
    }
};

OwnContextualAnalysis.prototype.visitReadStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ReadStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.designator());
    cont--;
};

OwnContextualAnalysis.prototype.visitWriteStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"WriteStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr());
    cont--;
};

OwnContextualAnalysis.prototype.visitBlockStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"BlockStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.block());
    cont--;
};

OwnContextualAnalysis.prototype.visitSemicolonStatement = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"SemicolonStatement","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

/*************************************************************************************************************/

OwnContextualAnalysis.prototype.visitBlock = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Block","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    let statements = ctx.statement();
    if(statements != null){
        cont++;
        this.visit(ctx.statement());
        cont--;
    }
};

OwnContextualAnalysis.prototype.visitActPars = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ActPars","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr());
    cont--;
};

OwnContextualAnalysis.prototype.visitCondition = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Condition","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condTerm());
    cont--;
};

OwnContextualAnalysis.prototype.visitCondTerm = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"CondTerm","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.condFact());
    cont--;
};

OwnContextualAnalysis.prototype.visitCondFact = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"CondFact","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr(0));
    this.visit(ctx.relop());
    this.visit(ctx.expr(1));
    cont--;
};

OwnContextualAnalysis.prototype.visitExpr = function(ctx) {
    let tabText = getTabText(cont);
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
    cont--;
};

OwnContextualAnalysis.prototype.visitTerm = function(ctx) {
    let tabText = getTabText(cont);
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
    cont--;
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitDesignatorFactor = function(ctx) {
    let tabText = getTabText(cont);
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

    console.log(treeList);
};

OwnContextualAnalysis.prototype.visitNumberFactor = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "Number: " + ctx.NUMBER().getSymbol().text);

    let object = new  ArrayEntry(cont,"NumberFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitCharconstFactor = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "Const: " + ctx.CHAR_CONST().getSymbol().text);

    let object = new  ArrayEntry(cont,"CharConstFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitBoolFactor = function(ctx) {
    let tabText = getTabText(cont);
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

};

OwnContextualAnalysis.prototype.visitNewFactor = function(ctx)       {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "new " + ctx.IDENT().getSymbol().text);

    let object = new  ArrayEntry(cont,"NewFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitExpressionFactor = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"ExpressionFactor","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    cont++;
    this.visit(ctx.expr());
    cont--;
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnContextualAnalysis.prototype.visitDesignator = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"Designator","#fd3c06","#f68c06",cont-1);
    treeList.push(object);

    console.log(tabText2 + "Identifier: " + ctx.IDENT(0).getSymbol().text);
    if(ctx.IDENT(1) != null){ //hay 2 identifiers, se va por el AT IDENT
        console.log(tabText2 + "@" + ctx.IDENT(1).getSymbol().text);
    }
    else{
        cont++;
        this.visit(ctx.expr());
        cont--;
    }
};

/*-------------------------------------------------------------- Relop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitEqualEqualOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"EqualEqualOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitInequalityOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"InequalityOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitGreaterThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"GreaterThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitGreaterOrEqualThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"GreaterOrEqualThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitLessThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"LessThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitLessOrEqualThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"LessOrEqualThanOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

/*-------------------------------------------------------------- Adop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitSumOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"SumOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitSubsOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"SubsOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

/*-------------------------------------------------------------- Mulop --------------------------------------------------------*/

OwnContextualAnalysis.prototype.visitMultOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"MultOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitDivOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"DivOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

OwnContextualAnalysis.prototype.visitPercentOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = new  ArrayEntry(cont,"PercentOp","#fd3c06","#f68c06",cont-1);
    treeList.push(object);
};

exports.OwnContextualAnalysis = OwnContextualAnalysis;