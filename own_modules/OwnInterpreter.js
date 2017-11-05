/**
 * 
 * Created by andres on 29/9/2017.
 *
 **/

const parserVisitor = require('../generated/ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;
const OwnTableSymbols  = require('./OwnWarehouse');
//variable para el almacen global
let warehouse;
let method;

//Costructor del analisis contextual
function OwnInterpreter (methodToExecute,loadDataWarehouse){
    parserVisitor.call(this);
    warehouse = loadDataWarehouse;
    method = methodToExecute;
    parseArray(method.parameters);
    return this;
}
OwnInterpreter.prototype = Object.create(parserVisitor.prototype);
OwnInterpreter.prototype.constructor = OwnInterpreter;

OwnInterpreter.prototype.visitProgram = function(ctx) {
    let warehouseMethod = warehouse.searchElement(warehouse, method.name);
    let newCtx = warehouseMethod.data.decl;
    newCtx.methodToExecute = warehouseMethod.data;

    this.visit(newCtx);
};

OwnInterpreter.prototype.visitConstDecl = function(ctx) {
    return
};

OwnInterpreter.prototype.visitVarDecl = function(ctx) {
    return
};

OwnInterpreter.prototype.visitClassDecl = function(ctx) {
    return
};

OwnInterpreter.prototype.visitMethodDecl = function(ctx) {

    let pilaExpr = [];
    let parameters = ctx.methodToExecute.parameters;
   
    for (let i = 0; i < parameters.length; i++){
        if(parameters[i].reference == "formPars"){
            localParameter = {};
            localParameter.name = parameters[i].name;
            localParameter.value = method.parameters[i];
            localParameter.type = parameters[i].type;
            localParameter.reference = parameters[i].reference;
            pilaExpr.unshift(localParameter);
        }

        if(parameters[i].reference == "varDecl"){
            localVar = {};
            localVar.name = parameters[i].name;
            localParameter.value = undefined;
            localParameter.type = parameters[i].type;
            localParameter.reference = parameters[i].reference;
            pilaExpr.unshift(localVar);
        }
    }
    let newCtx = ctx.block();
    newCtx.pilaExpr = pilaExpr;
    this.visit(newCtx);
    return;
  
};

OwnInterpreter.prototype.visitFormPars = function(ctx) {

    
    return 
};
/*-------------------------------       Types      ---------------------------------------------------*/
OwnInterpreter.prototype.visitIdentType = function(ctx) {
    return {type : 1, identifier : ctx.IDENT().getSymbol().text};
};

OwnInterpreter.prototype.visitCharType = function(ctx) {
    return 2
};

OwnInterpreter.prototype.visitIntType = function(ctx) {
    return 3
};

OwnInterpreter.prototype.visitFloatType = function(ctx) {
    return 4
};

OwnInterpreter.prototype.visitBoolType = function(ctx) {
    return 5
};

OwnInterpreter.prototype.visitStringType = function(ctx) {
    return 6
};

/* ------------------------------------------- Statement ----------------------------------------------------------*/

OwnInterpreter.prototype.visitFirstDesignStatement = function(ctx) {

    let identifier = ctx.designator();
    identifier.pilaExpr = ctx.pilaExpr;
    let response = this.visit(identifier);

    let expression = ctx.expr();
    let actPars = ctx.actPars();
    let leftPar = ctx.LEFT_PARENTHESIS();
    let plusPlus = ctx.PLUS_PLUS();
    let minusMinus = ctx.MINUS_MINUS();

    if(expression){
        let asignExpression = this.visit(expression);
    }
    else if(leftPar.length){//llamada a metodo

    }
};

OwnInterpreter.prototype.visitIfStatement = function(ctx) {

    console.log("if")
    console.log(ctx.pilaExpr);
    

    let condition = ctx.condition();
    condition.pilaExpr = ctx.pilaExpr;
    let conditionResponse = this.visit(condition);
    /*
    this.visit(ctx.statement(0));
    
    
    let elseToken = ctx.ELSE();
    if(elseToken){
        

        this.visit(ctx.statement(1));
        
    }*/
    return
};

OwnInterpreter.prototype.visitForStatement = function(ctx) {

    return
};

OwnInterpreter.prototype.visitWhileStatement = function(ctx) {
   

    this.visit(ctx.condition());

    this.visit(ctx.statement());
    return

};

OwnInterpreter.prototype.visitForeachStatement = function(ctx) {
  return
};

OwnInterpreter.prototype.visitBreakStatement = function(ctx) {
    return
};

OwnInterpreter.prototype.visitReturnStatement = function(ctx) {

    return
};

OwnInterpreter.prototype.visitReadStatement = function(ctx) {
    this.visit(ctx.designator());
    return
};

OwnInterpreter.prototype.visitWriteStatement = function(ctx) {
    return
};

OwnInterpreter.prototype.visitBlockStatement = function(ctx) {
    return this.visit(ctx.block());
};

OwnInterpreter.prototype.visitSemicolonStatement = function(ctx) {
    return
};

/*************************************************************************************************************/

OwnInterpreter.prototype.visitBlock = function(ctx) {
    let statements = ctx.statement();
    if(statements){
        for (let i=0; i <= statements.length-1; i++) {
            let statement = ctx.statement(i);
            statement.pilaExpr = ctx.pilaExpr;
            this.visit(statement);
        }
    }
    return;
};

OwnInterpreter.prototype.visitActPars = function(ctx) {
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

OwnInterpreter.prototype.visitCondition = function(ctx) {
    
    for (let i=0; i <=  ctx.condTerm().length - 1; i++) {
        let condTerm = ctx.condTerm(i);
        condTerm.pilaExpr = ctx.pilaExpr;
        let response = this.visit(condTerm);
    }
    return
};

OwnInterpreter.prototype.visitCondTerm = function(ctx) {

    let condFactLength = ctx.condFact().length -1;
    for (let i=0; i <= condFactLength; i++) {
        let condFact = ctx.condFact(i);
        condFact.pilaExpr = ctx.pilaExpr;
        let response = this.visit(condFact);
    }
    return 
};

OwnInterpreter.prototype.visitCondFact = function(ctx) {
    let expr = ctx.expr();
    expr.pilaExpr = ctx.pilaExpr;
    let firstExpr = this.visit(expr[0]);
    let relOperator = this.visit(ctx.relop());
    let secondExpr = this.visit(expr[1]);

    return 
};

OwnInterpreter.prototype.visitExpr = function(ctx) {

    let substractToken = ctx.SUBTRACTION();
    let term = ctx.term();
    term.pilaExpr = ctx.pilaExpr;
    termResponse = this.visit(term[0])
    ctx.pilaExpr.unshift(termResponse);
    let termLength = ctx.term().length - 1;
    //solo entra si viene suma
    for (let i=1; i <= termLength; i++) {
        let add = ctx.pilaExpr.shift().value + this.visit(term[i]);
        let result = {};
        if (substractToken){
           add = add * -1;
           substractToken = false;
        }
        result.typeTerminal = 3;
        result.value = add;
        ctx.pilaExpr.unshift(result);   
    }
    return ctx.pilaExpr.unshift();
};

OwnInterpreter.prototype.visitTerm = function(ctx) {
    let factor = ctx.factor();
    factor.pilaExpr = ctx.pilaExpr;
    factorResponse = factor[0];
    ctx.pilaExpr.unshift(factorResponse)
    // viene una multiplicacion;
    for (let i=1; i <= ctx.factor().length - 1; i++) {
        let mul = ctx.pilaExpr.unshift().value * this.visit(factor[i]);
        let result = {};
        result.typeTerminal = 3;
        result.value = mul;
        ctx.pilaExpr.unshift(result);
    }
    return ctx.pilaExpr.unshift();
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnInterpreter.prototype.visitDesignatorFactor = function(ctx) {

    let designator = this.visit(ctx.designator());
    return {typeTerminal: 1, value: designator};
   
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

OwnInterpreter.prototype.visitNumberFactor = function(ctx) {
    let object = {typeTerminal: 3, value: ctx.NUMBER()};

    if (ctx.NUMBER().getSymbol().text.includes('.')){
        object.typeTerminal = 4;
    }

    return object;

};

OwnInterpreter.prototype.visitCharconstFactor = function(ctx) {
    return {typeTerminal: 2, value: ctx.CHAR_CONST()};
};

OwnInterpreter.prototype.visitStringConstFactor = function(ctx) {
    return this.visitChildren(ctx);
};

OwnInterpreter.prototype.visitBoolFactor = function(ctx) {
    let object = {typeTerminal: 5, value: null};

    let falseFactor = ctx.FALSE();
    let trueFactor = ctx.TRUE();
    if(trueFactor)
        object.value = trueFactor;
    else
        object.value = falseFactor;

    return object;
};

OwnInterpreter.prototype.visitNewFactor = function(ctx){
    return {typeTerminal: 8, value: ctx.IDENT()}
};

OwnInterpreter.prototype.visitExpressionFactor = function(ctx) {
    return this.visit(ctx.expr());
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnInterpreter.prototype.visitDesignator = function(ctx) {
    let ident1 = ctx.IDENT(0).getSymbol().text;
    let returnData = {variableName: ident1};

    let ident2 = ctx.IDENT(1);
    let expr = ctx.expr();

    if(ident2){
        returnData.propertyName = ident2.getSymbol().text;
    }
    else if(expr.length){
        expr.pilaExpr = ctx.pilaExpr;
        let response = this.visit(expr);
        returnData.arrayPosition = response; ///suponiendo response es tipo entero
    }
    return returnData
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

OwnInterpreter.prototype.visitEqualEqualOp = function(ctx) {
    return 10
};

OwnInterpreter.prototype.visitInequalityOp = function(ctx) {
    return 11
};

OwnInterpreter.prototype.visitGreaterThanOp = function(ctx) {
    return 12
};

OwnInterpreter.prototype.visitGreaterOrEqualThanOp = function(ctx) {
    return 13
};

OwnInterpreter.prototype.visitLessThanOp = function(ctx) {
    return 14
};

OwnInterpreter.prototype.visitLessOrEqualThanOp = function(ctx) {
    return 15
};

/*-------------------------------------------------------------- Adop --------------------------------------------------------*/

OwnInterpreter.prototype.visitSumOp = function(ctx) {
    return 16
};

OwnInterpreter.prototype.visitSubsOp = function(ctx) {
    return 17
};

/*-------------------------------------------------------------- Mulop --------------------------------------------------------*/

OwnInterpreter.prototype.visitMultOp = function(ctx) {
    return 18
};

OwnInterpreter.prototype.visitDivOp = function(ctx) {
    return 19
};

OwnInterpreter.prototype.visitPercentOp = function(ctx) {
    return 20
};
 
function parseArray(array) {
    for (let iterator in array) {
        let finalParam = array[iterator];
        let firstCharCode = finalParam.charCodeAt(0);
        let lastCharCode = finalParam.charCodeAt(finalParam.length - 1);
        if ((firstCharCode > 47 && firstCharCode < 58) && finalParam.includes(".")) { //si el parametro necesario es float
            array[iterator] = parseFloat(finalParam);
        }
        else if (firstCharCode > 47 && firstCharCode < 58) { //si el parametro necesario es entero
            let num = parseInt(finalParam);
            array[iterator] = num;
        }
        else if (firstCharCode === 39 && lastCharCode === 39) { //si el parametro necesario es char
            let obtainedChar = finalParam.slice(1, -1);
            array[iterator] = obtainedChar;
        }
        else if (finalParam === "true") { //si el parametro necesario es bool
            array[iterator] = true;
        }
        else if (finalParam === "false") {
            array[iterator] = false;
        }
        else if (firstCharCode === 34 && lastCharCode === 34) { //si el parametro necesario es string
            let obtainedString = finalParam.slice(1, -1);
            array[iterator] = obtainedString;
        }
    }
}


exports.OwnInterpreter = OwnInterpreter;
