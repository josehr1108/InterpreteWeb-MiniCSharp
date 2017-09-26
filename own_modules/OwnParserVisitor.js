/**
 * Created by josah on 23/9/2017.
 */
let parserVisitor = require('../generated/ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;

function OwnParserVisitor () {
    parserVisitor.call(this);
    return this;
}

OwnParserVisitor.prototype = Object.create(parserVisitor.prototype);
OwnParserVisitor.prototype.constructor = OwnParserVisitor;

let treeList = [];
let cont=0;
function getTabText(n) {
    let text = "";
    for(let num = n; num != 0; num--)
        text += "---";
    text += ">";
    return text;
}

OwnParserVisitor.prototype.visitProgram = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let constantes = ctx.constDecl();
    let variables = ctx.varDecl();
    let clases = ctx.classDecl();
    let methods = ctx.methodDecl();

    if(constantes != ""){
        this.visit(ctx.constDecl());
    }
    if(variables != ""){
        this.visit(ctx.varDecl());
    }
    if(clases != ""){
        this.visit(ctx.classDecl());
    }
    if(methods != ""){
        this.visit(ctx.methodDecl());
    }
    cont--;
};

OwnParserVisitor.prototype.visitConstDecl = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    this.visit(ctx.type());
    //------- Para imprimir el identificador --------------
    cont++;
    let tabText2 = getTabText(cont);
    console.log(tabText2 + "Identificador: " + ctx.IDENT().getSymbol().text);
    cont--;
    // ----------------------------------------------------
    cont--;
};

OwnParserVisitor.prototype.visitVarDecl = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    this.visit(ctx.type());
    //------- Para imprimir el identificador --------------
    cont++;
    for (i = 0; i <= ctx.IDENT().length-1; i++)
    {
        let tabText = getTabText(cont);
        console.log(tabText+ "Identificador --> " + ctx.IDENT(i).getSymbol().text);
    }
    cont--;
    // ----------------------------------------------------
    cont--;
};

OwnParserVisitor.prototype.visitClassDecl = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    let varDecls = ctx.varDecl();

    if(varDecls != ""){
        cont++;
        this.visit(ctx.varDecl());
        cont--;
    }
};

//No funca por error en analisis sintactico
OwnParserVisitor.prototype.visitMethodDecl = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    //con el void empalida
    let type = ctx.type();
    let voidType = ctx.VOID();

    if(voidType != null){
        console.log("Es void");
    }
    else if(type != null){
        cont++;
        this.visit(ctx.type());
        cont--;
    }

    let formPars = ctx.formPars();
    if(formPars != null){
        cont++;
        this.visit(ctx.formPars());
        cont--;
    }
    else{
        console.log("Sin params");
    }

    let varDecls = ctx.varDecl();
    if(varDecls != ""){
        cont++;
        this.visit(ctx.varDecl());
        cont--;
    }
    else{
        console.log("Sin vars");
    }

    cont++;
    this.visit(ctx.block());
    cont--;
};

//probar cuando se arregle methodDecl
OwnParserVisitor.prototype.visitFormPars = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    this.visit(ctx.type(0));
    for (let i=1; i <= ctx.type().length-1; i++) {
        this.visit(ctx.type(i));
    }
    cont--;
};

OwnParserVisitor.prototype.visitIdentType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let tabText2 = getTabText(cont);
    tabText2 += "Tipo: " + ctx.IDENT().getSymbol().text;
    console.log(tabText2);
    cont--;
};

OwnParserVisitor.prototype.visitCharType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let tabText2 = getTabText(cont);
    tabText2 += "Tipo: " + ctx.CHAR().getSymbol().text;
    console.log(tabText2);
    cont--;
};

OwnParserVisitor.prototype.visitIntType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let tabText2 = getTabText(cont);
    tabText2 += "Tipo: " + ctx.INT().getSymbol().text;
    console.log(tabText2);
    cont--;
};

OwnParserVisitor.prototype.visitFloatType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let tabText2 = getTabText(cont);
    tabText2 += "Tipo: " + ctx.FLOAT().getSymbol().text;
    console.log(tabText2);
    cont--;
};

OwnParserVisitor.prototype.visitBoolType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let tabText2 = getTabText(cont);
    tabText2 += "Tipo: " + ctx.BOOL().getSymbol().text;
    console.log(tabText2);
    cont--;
};

OwnParserVisitor.prototype.visitStringType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    let tabText2 = getTabText(cont);
    tabText2 += "Tipo: " + ctx.STRING().getSymbol().text;
    console.log(tabText2);
    cont--;
};

exports.OwnParserVisitor = OwnParserVisitor;