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
function getTabText(n)
{
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
        console.log("Hay constantes");
        this.visit(ctx.constDecl());
    }
    if(variables != ""){
        console.log("Hay variables");
    }
    if(clases != ""){
        console.log("Hay clases");
    }
    if(methods != ""){
        console.log("Hay methods");
    }
    cont--;
};

OwnParserVisitor.prototype.visitConstDecl = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    cont++;
    this.visit(ctx.type());
    cont--;
};

OwnParserVisitor.prototype.visitType = function(ctx) {
    let tabText = getTabText(cont);
    tabText += ctx.constructor.name;
    console.log(tabText);

    ctx
};

exports.OwnParserVisitor = OwnParserVisitor;