/**
 * Created by josah on 23/9/2017.
 */
const parserVisitor = require('../generated/ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;

function OwnParserVisitor () {
    parserVisitor.call(this);
    return this;
}

OwnParserVisitor.prototype = Object.create(parserVisitor.prototype);
OwnParserVisitor.prototype.constructor = OwnParserVisitor;

let treeList = [];
let iterator = 1;
let parentIterator = 1;

OwnParserVisitor.prototype.visitProgram = function(ctx) {
    /*limpiando*/
    treeList = [];
    iterator = 1;
    parentIterator = 1;
    /**************************/

    let parentObject = {key: iterator,text: "Program",fill: "#f68c06",stroke: "#4d90fe"};
    treeList.push(parentObject);

    let identifier = ctx.IDENT().getSymbol().text;
    iterator++;
    let idObject = {key: iterator,text: "Main Class: " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: parentObject.key};
    treeList.push(idObject);

    let constants = ctx.constDecl();
    let variables = ctx.varDecl();
    let classes = ctx.classDecl();
    let methods = ctx.methodDecl();

    if(constants){
        let constLenght = constants.length-1;
        for (let i = 0; i <= constLenght; i++)
        {
            parentIterator = parentObject.key;
            this.visit(ctx.constDecl(i));
            parentIterator = parentObject.key;
        }
    }
    if(variables){
        let varsLenght = variables.length-1;
        for (let i = 0; i <= varsLenght; i++)
        {
            parentIterator = parentObject.key;
            this.visit(ctx.varDecl(i));
            parentIterator = parentObject.key;
        }
    }
    if(classes){
        let classesLenght = classes.length-1;
        for (let i = 0; i <= classesLenght; i++)
        {
            parentIterator = parentObject.key;
            this.visit(ctx.classDecl(i));
            parentIterator = parentObject.key;
        }
    }
    if(methods){
        let methodsLenght = methods.length-1;
        for (let i = 0; i <= methodsLenght; i++)
        {
            parentIterator = parentObject.key;
            this.visit(ctx.methodDecl(i));
            parentIterator = parentObject.key;
        }
    }
    return treeList;
};

OwnParserVisitor.prototype.visitConstDecl = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ConstDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.type());
    parentIterator = object.key;

    let identText = "Identifier: " + ctx.IDENT().getSymbol().text;
    iterator++;
    let idObject = {key: iterator,text: identText,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(idObject);
};

OwnParserVisitor.prototype.visitVarDecl = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "VarDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.type());
    parentIterator = object.key;

    let list = ctx.LIST();
    if(list){
        iterator++;
        let listObject = {key: iterator,text: "[]",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(listObject);
    }

    let identLength = ctx.IDENT().length-1;
    for (let i = 0; i <= identLength; i++)
    {
        let identText = "Identifier: " + ctx.IDENT(i).getSymbol().text;
        iterator++;
        let idObject = {key: iterator,text: identText,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(idObject);
    }
};

OwnParserVisitor.prototype.visitClassDecl = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ClassDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let identifier = ctx.IDENT().getSymbol().text;
    iterator++;
    let idObject = {key: iterator,text: "Identifier: " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(idObject);

    let varDecls = ctx.varDecl();
    if(varDecls){
        let varDeclLength = varDecls.length -1;
        for (let i = 0; i <= varDeclLength; i++)
        {
            parentIterator = object.key;
            this.visit(ctx.varDecl(i));
            parentIterator = object.key;
        }
    }
};

OwnParserVisitor.prototype.visitMethodDecl = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "MethodDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let type = ctx.type();
    if(type){
        parentIterator = object.key;
        this.visit(ctx.type());
        parentIterator = object.key;
    }
    else{
        iterator++;
        let typeObject = {key: iterator,text: "Type: void",fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
        treeList.push(typeObject);
    }

    let identifier = ctx.IDENT().getSymbol().text;
    iterator++;
    let idObject = {key: iterator,text: "Identifier: " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(idObject);

   
    let formPars = ctx.formPars();
    if(formPars){
        parentIterator = object.key;
        this.visit(ctx.formPars(0));
        parentIterator = object.key;
    }

    let varDecls = ctx.varDecl();
    if(varDecls){
        let varDeclLength = varDecls.length -1;
        for (let i = 0; i <= varDeclLength; i++)
        {
            parentIterator = object.key;
            this.visit(ctx.varDecl(i));
            parentIterator = object.key;
        }
    }
    parentIterator = object.key;
    this.visit(ctx.block());
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitFormPars = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "FormPars",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    let typeLength = ctx.type().length-1;
    for (let i=0; i <= typeLength; i++) {
        this.visit(ctx.type(i));

        iterator++;
        let identifier = ctx.IDENT(i).getSymbol().text;
        let idObject = {key: iterator,text: identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(idObject);
    }
};

/*-------------------------------Types ---------------------------------------------------*/
OwnParserVisitor.prototype.visitIdentType = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "IdentType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    iterator++;
    let identifier = ctx.IDENT().getSymbol().text;
    let typeObject = {key: iterator,text: "Type: " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(typeObject);
};

OwnParserVisitor.prototype.visitCharType = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "CharType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitIntType = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "IntType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitFloatType = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "FloatType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitBoolType = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "BoolType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitStringType = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "StringType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/* ------------------------------------------- Statement ----------------------------------------------------------*/

OwnParserVisitor.prototype.visitFirstDesignStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "FirstDesignatorStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.designator());
    parentIterator = object.key;

    let expression = ctx.expr();
    let actPars = ctx.actPars();
    let leftPar = ctx.LEFT_PARENTHESIS();
    let plusPlus = ctx.PLUS_PLUS();
    let minusMinus = ctx.MINUS_MINUS();

    if(expression){
        iterator++;
        let asignObject = {key: iterator,text: "=",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(asignObject);

        parentIterator = object.key;
        this.visit(expression);
        parentIterator = object.key;
    }
    else if(leftPar){
        iterator++;
        let parenthesisObject = {key: iterator,text: "()",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(parenthesisObject);
        if(actPars){
            parentIterator = object.key;
            this.visit(ctx.actPars(0));
            parentIterator = object.key;
        }
    }
    else if(plusPlus){
        iterator++;
        let tokenObject= {key: iterator,text: "++",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);
    }
    else if(minusMinus){
        iterator++;
        let tokenObject= {key: iterator,text: "--",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);
    }
};

OwnParserVisitor.prototype.visitIfStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "IfStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.condition());
    parentIterator = object.key;
    this.visit(ctx.statement(0));
    parentIterator = object.key;

    let elseToken = ctx.ELSE();
    if(elseToken){
        iterator++;
        let tokenObject= {key: iterator,text: "else",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.statement(1));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitForStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ForStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.expr());
    parentIterator = object.key;

    let condition = ctx.condition();
    let statement = ctx.statement();

    if(condition){
        parentIterator = object.key;
        this.visit(ctx.condition(0));
        parentIterator = object.key;
    }
    if(statement){
        let statementLength = ctx.statement().length-1;
        for (let i=0; i <= statementLength; i++) {
            parentIterator = object.key;
            this.visit(ctx.statement(i));
            parentIterator = object.key;
        }
    }
};

OwnParserVisitor.prototype.visitWhileStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "WhileStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.condition());
    parentIterator = object.key;
    this.visit(ctx.statement());
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitForeachStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ForeachStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.type());
    parentIterator = object.key;

    iterator++;
    let ident1 = ctx.IDENT(0).getSymbol().text;
    let tokenObject= {key: iterator,text: ident1,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(tokenObject);

    iterator++;
    let tokenObject2 = {key: iterator,text: "in",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(tokenObject2);

    iterator++;
    let ident2 = ctx.IDENT(1).getSymbol().text;
    let tokenObject3= {key: iterator,text: ident2,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(tokenObject3);

    this.visit(ctx.block());
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitBreakStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "BreakStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitReturnStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ReturnStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let expr = ctx.expr();
    if(expr){
        parentIterator = object.key;
        this.visit(ctx.expr(0));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitReadStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ReadStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.designator());
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitWriteStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "WriteStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.expr());
    parentIterator = object.key;

    let comma = ctx.COMMA();
    if(comma){
        iterator++;
        let number = ctx.NUMBER().getSymbol().text;
        let tokenObject = {key: iterator,text: "," + number,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);
    }
};

OwnParserVisitor.prototype.visitBlockStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "BlockStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.block());
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitSemicolonStatement = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "SemiColonStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/*************************************************************************************************************/

OwnParserVisitor.prototype.visitBlock = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "Block",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let statements = ctx.statement();
    if(statements){
        let statementsLenght = statements.length-1;
        parentIterator = object.key;
        for (let i=0; i <= statementsLenght; i++) {
            this.visit(ctx.statement(i));
            parentIterator = object.key;
        }
    }
};

OwnParserVisitor.prototype.visitActPars = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ActPars",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.expr(0));
    parentIterator = object.key;

    let exprLength = ctx.expr().length - 1;
    for (let i=1; i <= exprLength; i++) {
        iterator++;
        let tokenObject = {key: iterator,text: ",",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.expr(i));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitCondition = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "Condition",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.condTerm(0));
    parentIterator = object.key;

    let condTermLenght = ctx.condTerm().length - 1;
    for (let i=1; i <= condTermLenght; i++) {
        iterator++;
        let tokenObject = {key: iterator,text: "||",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.condTerm(i));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitCondTerm = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "CondTerm",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.condFact(0));
    parentIterator = object.key;

    let condFactLenght = ctx.condFact().length - 1;
    for (let i=1; i <= condFactLenght; i++) {
        iterator++;
        let tokenObject = {key: iterator,text: "&&",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.condFact(i));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitCondFact = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "CondFact",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.expr(0));
    parentIterator = object.key;
    this.visit(ctx.relop());
    parentIterator = object.key;
    this.visit(ctx.expr(1));
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitExpr = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "Expr",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let substractToken = ctx.SUBTRACTION();
    if(substractToken){
        iterator++;
        let tokenObject = {key: iterator,text: "-",fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
        treeList.push(tokenObject);
    }

    parentIterator = object.key;
    this.visit(ctx.term(0));
    parentIterator = object.key;

    let termLenght = ctx.term().length - 1;
    for (let i=1; i <= termLenght; i++) {
        this.visit(ctx.addop(i-1));
        parentIterator = object.key;
        this.visit(ctx.term(i));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitTerm = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "Term",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.factor(0));
    parentIterator = object.key;

    let factorLenght = ctx.factor().length - 1;
    for (let i=1; i <= factorLenght; i++) {
        this.visit(ctx.mulop(i-1));
        parentIterator = object.key;
        this.visit(ctx.factor(i));
        parentIterator = object.key;
    }
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnParserVisitor.prototype.visitDesignatorFactor = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "DesignatorFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.designator());
    parentIterator = object.key;

    let leftParenthesis = ctx.LEFT_PARENTHESIS();
    if(leftParenthesis){
        iterator++;
        let tokenObject = {key: iterator,text: "()",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        let actPars = ctx.actPars();
        if(actPars){
            parentIterator = object.key;
            this.visit(ctx.actPars(0));
            parentIterator = object.key;
        }
    }
};

OwnParserVisitor.prototype.visitNumberFactor = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "NumberFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let number = ctx.NUMBER().getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: number,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);
};

OwnParserVisitor.prototype.visitCharconstFactor = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "CharConstFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let charConst = ctx.CHAR_CONST().getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: charConst,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);
};

OwnParserVisitor.prototype.visitBoolFactor = function(ctx) {
    iterator++;
    let object = {key: iterator, text: "BoolFactor", fill: "#f68c06", stroke: "#4d90fe", parent: parentIterator};
    treeList.push(object);

    let trueFactor = ctx.TRUE();
    if (trueFactor) {
        iterator++;
        let tokenObject = {key: iterator, text: "true", fill: "#85CEF6", stroke: "#4d90fe", parent: object.key};
        treeList.push(tokenObject);
    }
    else{
        iterator++;
        let tokenObject = {key: iterator, text: "false", fill: "#85CEF6", stroke: "#4d90fe", parent: object.key};
        treeList.push(tokenObject);
    }
};

OwnParserVisitor.prototype.visitNewFactor = function(ctx)       {
    iterator++;
    let object = {key: iterator,text: "NewFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let identifier = ctx.IDENT().getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: "new " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);
};

OwnParserVisitor.prototype.visitExpressionFactor = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "ExpressionFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.expr());
    parentIterator = object.key;
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnParserVisitor.prototype.visitDesignator = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "Designator",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let ident1 = ctx.IDENT(0).getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: ident1,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);

    let ident2 = ctx.IDENT(1);
    let leftBracketAmount = ctx.LEFT_SQUARE_BRACKET().length;
    if(ident2){ //hay 2 o mas identifiers, se va por el AT IDENT
        let identLenght = ctx.IDENT().length-1;
        for(let i=1;i <= identLenght;i++){
            iterator++;
            let tokenObject = {key: iterator,text: "." + ctx.IDENT(i).getSymbol().text,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
            treeList.push(tokenObject);
        }
    }
    else if(leftBracketAmount != 0){
        for(let i = 0; i <= leftBracketAmount - 1; i++){
            iterator++;
            let tokenObject = {key: iterator,text: "[]",fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
            treeList.push(tokenObject);

            parentIterator = object.key;
            this.visit(ctx.expr(i));
            parentIterator = object.key;
        }
    }
};
/*-------------------------------------------------------------- Relop --------------------------------------------------------*/

OwnParserVisitor.prototype.visitEqualEqualOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "EqualEqualOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitInequalityOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "InequalityOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitGreaterThanOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "GreaterThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitGreaterOrEqualThanOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "GreaterOrEqualThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitLessThanOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "LessThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitLessOrEqualThanOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "LessOrEqualThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/*-------------------------------------------------------------- Adop --------------------------------------------------------*/

OwnParserVisitor.prototype.visitSumOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "SumOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitSubsOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "SubsOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/*-------------------------------------------------------------- Mulop --------------------------------------------------------*/

OwnParserVisitor.prototype.visitMultOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "MultOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitDivOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "DivOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitPercentOp = function(ctx) {
    iterator++;
    let object = {key: iterator,text: "PercentOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

exports.OwnParserVisitor = OwnParserVisitor;