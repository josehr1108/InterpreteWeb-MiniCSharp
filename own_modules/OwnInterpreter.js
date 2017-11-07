
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

    let localStore = [];
    let parameters = ctx.methodToExecute.parameters;
    
    for (let i = 0; i < parameters.length; i++){
        if(parameters[i].reference == "formPars"){
            localParameter = {};
            localParameter.name = parameters[i].name;
            localParameter.value = method.parameters[i];
            localParameter.type = parameters[i].type;
            localParameter.reference = parameters[i].reference;
            localStore.unshift(localParameter);
        }

        if(parameters[i].reference == "varDecl"){
            localVar = {};
            localVar.name = parameters[i].name;
            localParameter.value = undefined;
            localParameter.type = parameters[i].type;
            localParameter.reference = parameters[i].reference;
            localStore.unshift(localVar);
        }
    }
    let newCtx = ctx.block();
    newCtx.localStore = localStore;
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
    identifier.localStore = ctx.localStore;
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
    console.log(ctx.localStore);
    

    let condition = ctx.condition();
    condition.localStore = ctx.localStore;
    let conditionResponse = this.visit(condition);
    console.log("respuesta booleana")
    console.log(ctx.localStore.shift());

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
            statement.localStore = ctx.localStore;
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
    let firstCondTerm = ctx.condTerm(0);
    firstCondTerm.localStore = ctx.localStore;
    this.visit(firstCondTerm);
    for (let i=1; i <=  ctx.condTerm().length - 1; i++) {
        let firstCondTermResponse = ctx.localStore.shift();
        if (firstCondTermResponse === false){
            let secoundCondTerm = ctx.condTerm(i);
            secoundCondTerm.localStore = ctx.localStore;
            this.visit(secoundCondTerm);
            let secoundCondTermResponse = ctx.localStore.shift();
            firstCondTermResponse === false && secoundCondTermResponse === true ? ctx.localStore.unshift(true) : ctx.localStore.unshift(false);
        }
        else{
            ctx.localStore.unshift(true);
            break;
        }
    }
    return
};

OwnInterpreter.prototype.visitCondTerm = function(ctx) {
    let firstCondFact = ctx.condFact(0);
    firstCondFact.localStore = ctx.localStore;
    this.visit(firstCondFact);
    

    let condFactLength = ctx.condFact().length -1;
    for (let i=1; i <= condFactLength; i++) {
        let firstCondFactResponse = ctx.localStore.shift();
        if(firstCondFactResponse === true){
            let secoundCondFact = ctx.condFact(i);
            secoundCondFact.localStore = ctx.localStore;
            this.visit(secoundCondFact);
            let secoundCondFactResponse = ctx.localStore.shift();
            secoundCondFactResponse === true ? ctx.localStore.unshift(true) : ctx.localStore.unshift(false);
        }
        
        else {
            ctx.localStore.unshift(false);
        }
    }
    return 
};

OwnInterpreter.prototype.visitCondFact = function(ctx) {
    let firstExpr = ctx.expr(0);
    let secondExpr = ctx.expr(1);
    firstExpr.localStore = ctx.localStore;
    secondExpr.localStore = ctx.localStore;
    this.visit(firstExpr);
    let firstExprResponse = ctx.localStore.shift();
    let relOperator = this.visit(ctx.relop());
    this.visit(secondExpr);
    let secondExprResponse = ctx.localStore.shift();
    
    if(relOperator == 10){
        (firstExprResponse.type == 3 || firstExprResponse.type == 4) || (firstExprResponse.typeTerminal == 3 || firstExprResponse.typeTerminal == 4) ? firstExprResponse.value = parseFloat(firstExprResponse.value) : false;
        (secondExprResponse.type == 3 || secondExprResponse.type == 4) || (secondExprResponse.typeTerminal == 3 || secondExprResponse.typeTerminal == 4) ? secondExprResponse.value = parseFloat(secondExprResponse.value) : false;
        ctx.localStore.unshift(firstExprResponse.value == secondExprResponse.value ? true : false);
    }

    else if(relOperator == 11){
        (firstExprResponse.type == 3 || firstExprResponse.type == 4) || (firstExprResponse.typeTerminal == 3 || firstExprResponse.typeTerminal == 4) ? firstExprResponse.value = parseFloat(firstExprResponse.value) : false;
        (secondExprResponse.type == 3 || secondExprResponse.type == 4) || (secondExprResponse.typeTerminal == 3 || secondExprResponse.typeTerminal == 4) ? secondExprResponse.value = parseFloat(secondExprResponse.value) : false;
        ctx.localStore.unshift(firstExprResponse.value != secondExprResponse.value ? true : false);
    }

    else if(relOperator == 12){
        (firstExprResponse.type == 3 || firstExprResponse.type == 4) || (firstExprResponse.typeTerminal == 3 || firstExprResponse.typeTerminal == 4) ? firstExprResponse.value = parseFloat(firstExprResponse.value) : false;
        (secondExprResponse.type == 3 || secondExprResponse.type == 4) || (secondExprResponse.typeTerminal == 3 || secondExprResponse.typeTerminal == 4) ? secondExprResponse.value = parseFloat(secondExprResponse.value) : false;
        ctx.localStore.unshift(firstExprResponse.value > secondExprResponse.value ? true : false);
    }

    else if(relOperator == 13){
        (firstExprResponse.type == 3 || firstExprResponse.type == 4) || (firstExprResponse.typeTerminal == 3 || firstExprResponse.typeTerminal == 4) ? firstExprResponse.value = parseFloat(firstExprResponse.value) : false;
        (secondExprResponse.type == 3 || secondExprResponse.type == 4) || (secondExprResponse.typeTerminal == 3 || secondExprResponse.typeTerminal == 4) ? secondExprResponse.value = parseFloat(secondExprResponse.value) : false;
        ctx.localStore.unshift(firstExprResponse.value >= secondExprResponse.value ? true : false);
    }

    else if(relOperator == 14){
        (firstExprResponse.type == 3 || firstExprResponse.type == 4) || (firstExprResponse.typeTerminal == 3 || firstExprResponse.typeTerminal == 4) ? firstExprResponse.value = parseFloat(firstExprResponse.value) : false;
        (secondExprResponse.type == 3 || secondExprResponse.type == 4) || (secondExprResponse.typeTerminal == 3 || secondExprResponse.typeTerminal == 4) ? secondExprResponse.value = parseFloat(secondExprResponse.value) : false;
        ctx.localStore.unshift(firstExprResponse.value < secondExprResponse.value ? true : false);
    }

    else if(relOperator == 15){
        (firstExprResponse.type == 3 || firstExprResponse.type == 4) || (firstExprResponse.typeTerminal == 3 || firstExprResponse.typeTerminal == 4) ? firstExprResponse.value = parseFloat(firstExprResponse.value) : false;
        (secondExprResponse.type == 3 || secondExprResponse.type == 4) || (secondExprResponse.typeTerminal == 3 || secondExprResponse.typeTerminal == 4) ? secondExprResponse.value = parseFloat(secondExprResponse.value) : false;
        ctx.localStore.unshift(firstExprResponse.value <= secondExprResponse.value ? true : false);
    }
    return 
    
};

OwnInterpreter.prototype.visitExpr = function(ctx) {
    let substractToken = ctx.SUBTRACTION();
    let firstTerm = ctx.term(0);
    firstTerm.localStore = ctx.localStore;
    this.visit(firstTerm);
    termResponse = ctx.localStore.shift();
    if(termResponse.typeTerminal === 1){
        termResponse = searchInArrays(ctx.localStore,termResponse);
    }
    ctx.localStore.unshift(termResponse);
    let termLength = ctx.term().length - 1;
    //solo entra si viene suma
    for (let i=1; i <= termLength; i++) {
        let secondTerm = ctx.term(i);
        secondTerm.localStore = ctx.localStore;
        this.visit(secondTerm);
        termResponse = ctx.localStore.shift();
        if(termResponse.typeTerminal === 1){
            termResponse = searchInArrays(ctx.localStore,termResponse);
        }
        let firstOperator = ctx.localStore.shift();
        if (substractToken){
            firstOperator.value *= -1;
            substractToken = false;
        }
        let addOperator = this.visit(ctx.addop(i-1));
        let addOpreration;
        
        if (addOperator == 16){
            addOpreration = firstOperator.type === 6 || termResponse.typeTerminal === 6 ? firstOperator.value + termResponse.value
            : parseFloat(firstOperator.value) + parseFloat(termResponse.value);
    
        }

        else if (addOperator == 17){
            addOpreration = parseFloat(firstOperator.value) - parseFloat(termResponse.value);
        }

        let result = {};
        result.typeTerminal = 3;
        
        if (firstOperator.typeTerminal === 4 || termResponse.typeTerminal === 4){
            result.typeTerminal = 4;
        }
        result.value = addOpreration;
        ctx.localStore.unshift(result);   
    }
    return 
};

OwnInterpreter.prototype.visitTerm = function(ctx) {
    let firstFactor = ctx.factor(0);
    firstFactor.localStore = ctx.localStore;
    this.visit(firstFactor)
    let factorResponse = ctx.localStore.shift();
    if(factorResponse.typeTerminal === 1){
        factorResponse = searchInArrays(ctx.localStore,factorResponse);
    }
    ctx.localStore.unshift(factorResponse)
    // viene una multiplicacion;
    for (let i=1; i <= ctx.factor().length - 1; i++) {
        let secoundFactor = ctx.factor(i);
        secoundFactor.localStore = ctx.localStore;
        this.visit(secoundFactor);
        factorResponse = ctx.localStore.shift();
        if(factorResponse.typeTerminal === 1){
            factorResponse = searchInArrays(ctx.localStore,factorResponse);
        }
        let firstOperator = ctx.localStore.shift();
        let mathOperator = this.visit(ctx.mulop(i-1));
        let mulOpreration;

        if (mathOperator == 18){
            mulOpreration = parseFloat(firstOperator.value) * parseFloat(factorResponse.value);
        }

        else if (mathOperator == 19){
            mulOpreration = parseFloat(firstOperator.value) / parseFloat(factorResponse.value);
        }

        else if (mathOperator == 20){
            mulOpreration = parseFloat(firstOperator.value) % parseFloat(factorResponse.value);
        }
        
        let result = {};
        result.typeTerminal = 3;
        if (firstOperator.typeTerminal === 4 || factorResponse.typeTerminal === 4){
            result.typeTerminal = 4;
        }
        result.value = mulOpreration;
        ctx.localStore.unshift(result);
    }
    return 
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnInterpreter.prototype.visitDesignatorFactor = function(ctx) {

    let designator = this.visit(ctx.designator());
    ctx.localStore.unshift({typeTerminal: 1, value: designator}); 
   
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
    let number  = ctx.NUMBER().getSymbol().text;
    let object = {typeTerminal: 3, value:number};

    if (ctx.NUMBER().getSymbol().text.includes('.')){
        object.typeTerminal = 4;
    }

    ctx.localStore.unshift(object);
    return

};

OwnInterpreter.prototype.visitCharconstFactor = function(ctx) {
    let char = ctx.CHAR_CONST().getSymbol().text;
    ctx.localStore.unshift({typeTerminal: 2, value: char})
    return 
};

OwnInterpreter.prototype.visitStringConstFactor = function(ctx) {
    let string = ctx.STRING_CONST().getSymbol().text;
    ctx.localStore.unshift({typeTerminal: 6, value: string});
    return 
};

OwnInterpreter.prototype.visitBoolFactor = function(ctx) {
    let object = {typeTerminal: 5, value: null};

    let falseFactor = ctx.FALSE();
    let trueFactor = ctx.TRUE();
    if(trueFactor)
        object.value = true;
    else
        object.value = false;

    ctx.localStore.unshift(object)
    return 
};

OwnInterpreter.prototype.visitNewFactor = function(ctx){
    let newIdent = ctx.IDENT();
    ctx.localStore.unshift({typeTerminal: 8, value: newIdent})
    return 
};

OwnInterpreter.prototype.visitExpressionFactor = function(ctx) {
    let object = this.visit(ctx.expr());
    ctx.localStore.unshift(object);
    return 
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
        expr.localStore = ctx.localStore;
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
 
/*--------------------------------------------------------------Funciones Extras --------------------------------------------------------*/
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

function searchInArrays(array,elementSearch){
    let response = array.filter(function(element){
        return element.name === elementSearch.value;
    });
    if(response.length === 0){
        response = warehouse.warehouse.filter(function(element){
            return element.name === elementSearch.value;
        });
    }
    return response[0];
}


exports.OwnInterpreter = OwnInterpreter;
