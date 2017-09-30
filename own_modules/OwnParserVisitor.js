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
let cont=1;
let iterator = 1;
let parentIterator = 1;

function getTabText(n) {
    let text = "";
    for(let num = n; num != 0; num--)
        text += "---";
    text += ">";
    return text;
}

OwnParserVisitor.prototype.visitProgram = function(ctx) {
    /*limpiando*/
    treeList = [];
    cont = 1;
    iterator = 1;
    parentIterator = 1;
    /**************************/

    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let parentObject = {key: iterator,text: "Program",fill: "#f68c06",stroke: "#4d90fe"};
    treeList.push(parentObject);

    cont++;
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
    cont--;
    return treeList;
};

OwnParserVisitor.prototype.visitConstDecl = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "ConstDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

    parentIterator = object.key;
    this.visit(ctx.type());
    parentIterator = object.key;

    let identText = "Identifier: " + ctx.IDENT().getSymbol().text;
    iterator++;
    let idObject = {key: iterator,text: identText,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(idObject);
    // ----------------------------------------------------
    cont--;
};

OwnParserVisitor.prototype.visitVarDecl = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "VarDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

    parentIterator = object.key;
    this.visit(ctx.type());
    parentIterator = object.key;

    //------- Para imprimir el identificador --------------
    let identLength = ctx.IDENT().length-1;
    for (let i = 0; i <= identLength; i++)
    {
        let identText = "Identifier: " + ctx.IDENT(i).getSymbol().text;
        iterator++;
        let idObject = {key: iterator,text: identText,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(idObject);
    }
    cont--;
};

OwnParserVisitor.prototype.visitClassDecl = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    console.log(tabText + ctx.constructor.name);

    let object = {key: iterator,text: "ClassDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let identifier = ctx.IDENT().getSymbol().text;
    iterator++;
    let idObject = {key: iterator,text: "Identifier: " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(idObject);

    let tabText2 = getTabText(cont+1);
    console.log(tabText2 + "Class Name: "+ identifier);

    let varDecls = ctx.varDecl();
    if(varDecls){
        cont++;
        let varDeclLength = varDecls.length -1;
        for (let i = 0; i <= varDeclLength; i++)
        {
            parentIterator = object.key;
            this.visit(ctx.varDecl(i));
            parentIterator = object.key;
        }
        cont--;
    }
};

OwnParserVisitor.prototype.visitMethodDecl = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "MethodDecl",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
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

    /* ------------------------------ Aqui no funca  ---------------------------*/
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
    cont--;
};

OwnParserVisitor.prototype.visitFormPars = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    let tabText2 = getTabText(cont+2);
    console.log(tabText);

    let object = {key: iterator,text: "FormPars",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

    parentIterator = object.key;
    let typeLength = ctx.type().length-1;
    for (let i=0; i <= typeLength; i++) {
        this.visit(ctx.type(i));
        iterator++;
        let identifier = ctx.IDENT(i).getSymbol().text;
        let idObject = {key: iterator,text: identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(idObject);

        console.log(tabText2  + "Identifier: " + ctx.IDENT(i));
    }
    cont--;
};

/*-------------------------------Types ---------------------------------------------------*/
OwnParserVisitor.prototype.visitIdentType = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "IdentType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    iterator++;
    let identifier = ctx.IDENT().getSymbol().text;
    let typeObject = {key: iterator,text: "Type: " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(typeObject);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Type: " + ctx.IDENT().getSymbol().text;
    console.log(tabText2);
};

OwnParserVisitor.prototype.visitCharType = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "CharType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.CHAR().getSymbol().text;
    console.log(tabText2);
};

OwnParserVisitor.prototype.visitIntType = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "IntType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.INT().getSymbol().text;
    console.log(tabText2);
};

OwnParserVisitor.prototype.visitFloatType = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "FloatType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.FLOAT().getSymbol().text;
    console.log(tabText2);
};

OwnParserVisitor.prototype.visitBoolType = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "BoolType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.BOOL().getSymbol().text;
    console.log(tabText2);
};

OwnParserVisitor.prototype.visitStringType = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "StringType",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let tabText2 = getTabText(cont+1);
    tabText2 += "Tipo: " + ctx.STRING().getSymbol().text;
    console.log(tabText2);
};

/* ------------------------------------------- Statement ----------------------------------------------------------*/

OwnParserVisitor.prototype.visitFirstDesignStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "FirstDesignatorStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

    parentIterator = object.key;
    this.visit(ctx.designator());
    parentIterator = object.key;

    let expression = ctx.expr();
    let actPars = ctx.actPars();
    let leftPar = ctx.LEFT_PARENTHESIS();
    let plusPlus = ctx.PLUS_PLUS();
    let minusMinus = ctx.MINUS_MINUS();

    if(expression){
        parentIterator = object.key;
        this.visit(expression);
        parentIterator = object.key;
    }
    else if(leftPar){
        console.log(tabText2 + "()");
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
    cont--;
};

OwnParserVisitor.prototype.visitIfStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "IfStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

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
    cont--;
};

OwnParserVisitor.prototype.visitForStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "ForStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

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
    cont--;
}; //Preguntar por los 2 statements

OwnParserVisitor.prototype.visitWhileStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "WhileStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

    parentIterator = object.key;
    this.visit(ctx.condition());
    parentIterator = object.key;
    this.visit(ctx.statement());
    parentIterator = object.key;

    cont--;
};

OwnParserVisitor.prototype.visitForeachStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "ForeachStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

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

    console.log(tabText2 + ctx.IDENT(0) + " in " + ctx.IDENT(1));

    this.visit(ctx.block());
    parentIterator = object.key;

    cont--;
};

OwnParserVisitor.prototype.visitBreakStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "BreakStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitReturnStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

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
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "ReadStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.designator());
    parentIterator = object.key;
};

OwnParserVisitor.prototype.visitWriteStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "WriteStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

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
    cont--;
};

OwnParserVisitor.prototype.visitBlockStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "BlockStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
    parentIterator = object.key;
    this.visit(ctx.block());
    parentIterator = object.key;
    cont--;
};

OwnParserVisitor.prototype.visitSemicolonStatement = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "SemiColonStatement",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/*************************************************************************************************************/

OwnParserVisitor.prototype.visitBlock = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "Block",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let statements = ctx.statement();
    if(statements){
        cont++;

        let statementsLenght = statements.length-1;
        parentIterator = object.key;
        for (let i=0; i <= statementsLenght; i++) {
            this.visit(ctx.statement(i));
            parentIterator = object.key;
        }

        cont--;
    }
};

OwnParserVisitor.prototype.visitActPars = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "ActPars",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
    let exprLength = ctx.expr().length - 1;

    parentIterator = object.key;
    this.visit(ctx.expr(0));
    parentIterator = object.key;

    for (let i=1; i <= exprLength; i++) {
        iterator++;
        let tokenObject = {key: iterator,text: ",",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.expr(i));
        parentIterator = object.key;
    }
    cont--;
};

OwnParserVisitor.prototype.visitCondition = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "Condition",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
    let condTermLenght = ctx.condTerm().length - 1;

    parentIterator = object.key;
    this.visit(ctx.condTerm(0));
    parentIterator = object.key;

    for (let i=1; i <= condTermLenght; i++) {
        iterator++;
        let tokenObject = {key: iterator,text: "||",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.condTerm(i));
        parentIterator = object.key;
    }
    cont--;
};

OwnParserVisitor.prototype.visitCondTerm = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "CondTerm",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
    let condFactLenght = ctx.condFact().length - 1;

    parentIterator = object.key;
    this.visit(ctx.condFact(0));
    parentIterator = object.key;

    for (let i=1; i <= condFactLenght; i++) {
        iterator++;
        let tokenObject = {key: iterator,text: "&&",fill: "#85CEF6",stroke: "#4d90fe",parent: parentIterator};
        treeList.push(tokenObject);

        this.visit(ctx.condFact(i));
        parentIterator = object.key;
    }
    cont--;
};

OwnParserVisitor.prototype.visitCondFact = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "CondFact",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
    parentIterator = object.key;
    this.visit(ctx.expr(0));
    parentIterator = object.key;
    this.visit(ctx.relop());
    parentIterator = object.key;
    this.visit(ctx.expr(1));
    parentIterator = object.key;
    cont--;
};

OwnParserVisitor.prototype.visitExpr = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "Expr",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let substractToken = ctx.SUBTRACTION();

    cont++;
    if(substractToken){
        console.log(substractToken.getSymbol().text);
        iterator++;
        let tokenObject = {key: iterator,text: "-",fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
        treeList.push(tokenObject);
    }

    let termLenght = ctx.term().length - 1;

    parentIterator = object.key;
    this.visit(ctx.term(0));
    parentIterator = object.key;

    for (let i=1; i <= termLenght; i++) {
        this.visit(ctx.addop(i-1));
        parentIterator = object.key;
        this.visit(ctx.term(i));
        parentIterator = object.key;
    }
};

OwnParserVisitor.prototype.visitTerm = function(ctx) {
    iterator++;
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let object = {key: iterator,text: "Term",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;
    let factorLenght = ctx.factor().length - 1;

    parentIterator = object.key;
    this.visit(ctx.factor(0));
    parentIterator = object.key;

    for (let i=1; i <= factorLenght; i++) {
        this.visit(ctx.mulop(i-1));
        parentIterator = object.key;
        this.visit(ctx.factor(i));
        parentIterator = object.key;
    }
    cont--;
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnParserVisitor.prototype.visitDesignatorFactor = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "DesignatorFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    cont++;

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
    cont--;
};

OwnParserVisitor.prototype.visitNumberFactor = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "Number: " + ctx.NUMBER().getSymbol().text);

    iterator++;
    let object = {key: iterator,text: "NumberFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let number = ctx.NUMBER().getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: number,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);
};

OwnParserVisitor.prototype.visitCharconstFactor = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "Const: " + ctx.CHAR_CONST().getSymbol().text);

    iterator++;
    let object = {key: iterator,text: "CharConstFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let charConst = ctx.CHAR_CONST().getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: charConst,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);
};

OwnParserVisitor.prototype.visitBoolFactor = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont + 1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator, text: "BoolFactor", fill: "#f68c06", stroke: "#4d90fe", parent: parentIterator};
    treeList.push(object);

    let trueFactor = ctx.TRUE();
    if (trueFactor) {
        console.log(tabText2 + "Value: true");
        iterator++;
        let tokenObject = {key: iterator, text: "true", fill: "#85CEF6", stroke: "#4d90fe", parent: object.key};
        treeList.push(tokenObject);
    }
    else{
        console.log(tabText2 + "Value: false");
        iterator++;
        let tokenObject = {key: iterator, text: "false", fill: "#85CEF6", stroke: "#4d90fe", parent: object.key};
        treeList.push(tokenObject);
    }
};

OwnParserVisitor.prototype.visitNewFactor = function(ctx)       {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);
    console.log(tabText2 + "new " + ctx.IDENT().getSymbol().text);

    iterator++;
    let object = {key: iterator,text: "NewFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    let identifier = ctx.IDENT().getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: "new " + identifier,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);
};

OwnParserVisitor.prototype.visitExpressionFactor = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "ExpressionFactor",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    parentIterator = object.key;
    this.visit(ctx.expr());
    parentIterator = object.key;
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnParserVisitor.prototype.visitDesignator = function(ctx) {
    let tabText = getTabText(cont);
    let tabText2 = getTabText(cont+1);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "Designator",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);

    console.log(tabText2 + "Identifier: " + ctx.IDENT(0).getSymbol().text);

    let ident1 = ctx.IDENT(0).getSymbol().text;
    iterator++;
    let tokenObject = {key: iterator,text: ident1,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
    treeList.push(tokenObject);

    let ident2 = ctx.IDENT(1);
    let expr = ctx.expr();
    if(ident2){ //hay 2 identifiers, se va por el AT IDENT
        iterator++;
        let tokenObject = {key: iterator,text: "@" + ident2.getSymbol().text,fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
        treeList.push(tokenObject);
        console.log(tabText2 + "@" + ctx.IDENT(1).getSymbol().text);
    }
    else if(expr){
        cont++;

        iterator++;
        let tokenObject = {key: iterator,text: "[]",fill: "#85CEF6",stroke: "#4d90fe",parent: object.key};
        treeList.push(tokenObject);

        parentIterator = object.key;
        this.visit(ctx.expr());
        parentIterator = object.key;

        cont--;
    }
};

/*-------------------------------------------------------------- Relop --------------------------------------------------------*/

OwnParserVisitor.prototype.visitEqualEqualOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "EqualEqualOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitInequalityOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "InequalityOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitGreaterThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "GreaterThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitGreaterOrEqualThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "GreaterOrEqualThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitLessThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "LessThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitLessOrEqualThanOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "LessOrEqualThanOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/*-------------------------------------------------------------- Adop --------------------------------------------------------*/

OwnParserVisitor.prototype.visitSumOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "SumOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitSubsOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "SubsOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

/*-------------------------------------------------------------- Mulop --------------------------------------------------------*/

OwnParserVisitor.prototype.visitMultOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "MultOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitDivOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "DivOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

OwnParserVisitor.prototype.visitPercentOp = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    iterator++;
    let object = {key: iterator,text: "PercentOp",fill: "#f68c06",stroke: "#4d90fe",parent: parentIterator};
    treeList.push(object);
};

exports.OwnParserVisitor = OwnParserVisitor;