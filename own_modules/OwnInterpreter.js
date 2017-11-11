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
let results;
let cont = 1;
//Costructor del analisis contextual
function OwnInterpreter (methodToExecute,loadDataWarehouse){
    parserVisitor.call(this);
    warehouse = loadDataWarehouse;
    method = methodToExecute;
    results = [];
    parseArray(method.parameters);
    return this;
}
OwnInterpreter.prototype = Object.create(parserVisitor.prototype);
OwnInterpreter.prototype.constructor = OwnInterpreter;

OwnInterpreter.prototype.visitProgram = function(ctx) {
    let warehouseMethod = warehouse.searchElement(warehouse, method.name);
    let newCtx = warehouseMethod.data.decl;
    newCtx.methodToExecute = warehouseMethod.data;

    let methodResponse = this.visit(newCtx);
    //console.log("finalPrograma")
    //console.log(methodResponse)
};

OwnInterpreter.prototype.visitConstDecl = function(ctx) {
};

OwnInterpreter.prototype.visitVarDecl = function(ctx) {
};

OwnInterpreter.prototype.visitClassDecl = function(ctx) {
};

OwnInterpreter.prototype.visitMethodDecl = function(ctx) {
   //console.log("Method")
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
            localVar.value = undefined;
            if(parameters[i].isList){
                localVar.value = [];
            }
            localVar.type = parameters[i].type;
            localVar.reference = parameters[i].reference;
            localStore.unshift(localVar);
        }
    }
    let newCtx = ctx.block();
    newCtx.localStore = localStore;
    //console.log("La Pila Empiaza en " + cont)
    
    //console.log(localStore)
    this.visit(newCtx);
   
    if(ctx.methodToExecute.typeStruct != 7){
        localStore[0] === "return" ? localStore.shift() : false;
        let methodResponse = localStore.shift();
        if (methodResponse.typeTerminal === 100){
            return methodResponse;
        }
    }
};

OwnInterpreter.prototype.visitFormPars = function(ctx) {
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
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){
        let identifier = ctx.designator();
        identifier.localStore = ctx.localStore;
        this.visit(identifier);

        let designatorResult = ctx.localStore.shift();

        let varName;    //nombre que trae el designator
        let variable;   //referencia a la variable

        if(designatorResult.propertyName)
            varName = designatorResult.variableName + "." + designatorResult.propertyName;
        else
            varName = designatorResult.variableName;

        variable = searchInArrays(ctx.localStore,{value: varName});

        let expression = ctx.expr();
        let actPars = ctx.actPars();
        let rightPar = ctx.RIGHT_PARENTHESIS();
        let plusPlus = ctx.PLUS_PLUS();
        let minusMinus = ctx.MINUS_MINUS();

        if(expression){
            expression.localStore = ctx.localStore;
            this.visit(expression);
            let exprResult = ctx.localStore.shift();
            if(variable){
                if(designatorResult.arrayPosition){
                    variable[designatorResult.arrayPosition] = exprResult;
                }
                else{
                    variable.value = exprResult.value;
                }
            }
            else{
                ctx.localStore.push({name: varName ,value: exprResult.value ,type: exprResult.typeTerminal, reference: "varDecl"});
            }
        }
        else if(plusPlus){
            variable.value++;
        }
        else if(minusMinus){
            variable.value--;
        }
        else if(rightPar){    //llamada a metodo
            if(actPars){
                actPars.localStore = ctx.localStore;
                this.visit(actPars);
                let paramList = [];
                let paramsAmount = variable.parameters.length;
                for(let i = 0; i < paramsAmount;i++){
                    let actualParam = ctx.localStore.shift();
                    paramList.unshift(actualParam.value);
                }
                let lastMethod = method;
                let actualMethod = {name: variable.name, parameters: paramList};
                method = actualMethod;
                let newMethod = variable.decl;
                newMethod.methodToExecute = variable;
                this.visit(newMethod);
                method = lastMethod;
            }
        }
    }
};

OwnInterpreter.prototype.visitIfStatement = function(ctx) {
    //console.log("IF")
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){
        let condition = ctx.condition();
        condition.localStore = ctx.localStore;
        this.visit(condition);
        
        let conditionResponse = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(conditionResponse)
        //conditionResponse ? console.log(true) : console.log(false);
        if(conditionResponse){
            let firstStatement = ctx.statement(0);
            firstStatement.localStore = ctx.localStore;
            this.visit(firstStatement);
        }
        else{
            let elseToken = ctx.ELSE();
            if(elseToken){
                let secondStatement = ctx.statement(1);
                secondStatement.localStore = ctx.localStore;
                this.visit(secondStatement);
            }
        }
    }
};

OwnInterpreter.prototype.visitForStatement = function(ctx) {
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){
        let condition = ctx.condition();
        condition.localStore = ctx.localStore;
        this.visit(condition);
        let conditionResponse = ctx.localStore.shift();

        if(conditionResponse){
            let statement = ctx.statement();
            statement.map(function(element){
                return element.localStore = ctx.localStore;
            });
            this.visit(statement);
            let statementResponse = ctx.localStore.shift();
            if(statementResponse !== "break"){
                ctx.localStore.unshift(statementResponse);
                this.visit(ctx);
            }
        }
    }
};

OwnInterpreter.prototype.visitWhileStatement = function(ctx) {
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){
        let condition = ctx.condition();
        condition.localStore = ctx.localStore;
        this.visit(condition);
        let conditionResponse = ctx.localStore.shift();
        if(conditionResponse){
            let statement = ctx.statement();
            statement.map(function(element){
                return element.localStore = ctx.localStore;
            });
            this.visit(statement);
            let statementResponse = ctx.localStore.shift();
            if(statementResponse !== "break"){
                ctx.localStore.unshift(statementResponse);
                this.visit(ctx);
            }
        }
    }
};

OwnInterpreter.prototype.visitForeachStatement = function(ctx) {
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){

    }   
};

OwnInterpreter.prototype.visitBreakStatement = function(ctx) {
    ctx.localStore.unshift("break");
};

OwnInterpreter.prototype.visitReturnStatement = function(ctx) {
    //console.log("return")
    let expr = ctx.expr();
    if(expr){
        expr.localStore = ctx.localStore;
        this.visit(expr);
        let exprReturn = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(exprReturn)
        exprReturn.typeTerminal = 100;
        ctx.localStore.unshift(exprReturn);
        //console.log("Agrege a la pila")
        //ver los retornos
        //console.log(exprReturn)
    }
    else{
        let exprReturn = {typeTerminal : -100, value: undefined}
        ctx.localStore.unshift(exprReturn);
    }
    ctx.localStore.unshift("return");
    //console.log("Agrege a la pila")
    //console.log("return")
    //console.log(ctx.localStore);
};

OwnInterpreter.prototype.visitReadStatement = function(ctx) {
    /*if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){}
    this.visit(ctx.designator());*/
};

OwnInterpreter.prototype.visitWriteStatement = function(ctx) {
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){}
    return
};

OwnInterpreter.prototype.visitBlockStatement = function(ctx) {
    if(ctx.localStore[0] !== "break" || ctx.localStore[0] !== "return" ){
        let block = ctx.block();
        block.localStore = ctx.localStore;
        this.visit(block);
    }
};

OwnInterpreter.prototype.visitSemicolonStatement = function(ctx) {
};

/*************************************************************************************************************/
OwnInterpreter.prototype.visitBlock = function(ctx) {
    let statement = ctx.statement();
    statement.map(function(element){
        return element.localStore = ctx.localStore;
    });
    this.visit(statement);
};

OwnInterpreter.prototype.visitActPars = function(ctx) {
    let expressionsLength = ctx.expr().length;
    for(let iterator = 0; iterator < expressionsLength; iterator++){
        let currentExpr = ctx.expr(iterator);
        //newLocalStore = ctx.localStore;
        currentExpr.localStore = ctx.localStore;
        this.visit(currentExpr);
    }
};

OwnInterpreter.prototype.visitCondition = function(ctx) {
    //console.log("condition")
    let firstCondTerm = ctx.condTerm(0);
    firstCondTerm.localStore = ctx.localStore;
    this.visit(firstCondTerm);
    for (let i=1; i <=  ctx.condTerm().length - 1; i++) {
        let firstCondTermResponse = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(firstCondTermResponse)
        if (firstCondTermResponse === false){
            let secondCondTerm = ctx.condTerm(i);
            secondCondTerm.localStore = ctx.localStore;
            this.visit(secondCondTerm);
            let secondCondTermResponse = ctx.localStore.shift();
            //console.log("Saque de la pila")
            //console.log(secondCondTermResponse)
            firstCondTermResponse === false && secondCondTermResponse === true ? ctx.localStore.unshift(true) : ctx.localStore.unshift(false);
        }
        else{
            ctx.localStore.unshift(true);
            break;
        }
    }
};

OwnInterpreter.prototype.visitCondTerm = function(ctx) {
    //console.log("Cond Term")
    let firstCondFact = ctx.condFact(0);
    firstCondFact.localStore = ctx.localStore;
    this.visit(firstCondFact);
    let condFactLength = ctx.condFact().length -1;
    for (let i=1; i <= condFactLength; i++) {
        let firstCondFactResponse = ctx.localStore.shift();
    	//console.log("Saque de la pila")
        //console.log(firstCondFactResponse)
        if(firstCondFactResponse === true){
            let secondCondFact = ctx.condFact(i);
            secondCondFact.localStore = ctx.localStore;
            this.visit(secondCondFact);
            let secondCondFactResponse = ctx.localStore.shift();
            //console.log("Saque de la pila")
            //console.log(secondCondFactResponse)
            secondCondFactResponse === true ? ctx.localStore.unshift(true) : ctx.localStore.unshift(false);
        }
        else {
            ctx.localStore.unshift(false);
        }
    }
};

OwnInterpreter.prototype.visitCondFact = function(ctx) {
    //console.log("Cond fact")
    let firstExpr = ctx.expr(0);
    let secondExpr = ctx.expr(1);
    firstExpr.localStore = ctx.localStore;
    secondExpr.localStore = ctx.localStore;
    this.visit(firstExpr);
    let firstExprResponse = ctx.localStore.shift();
    //console.log("Saque de la pila")
    //console.log(firstExprResponse)
    let relOperator = this.visit(ctx.relop());
    this.visit(secondExpr);
    let secondExprResponse = ctx.localStore.shift();
    //console.log("Saque de la pila")
    //console.log(secondExprResponse)
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
};

OwnInterpreter.prototype.visitExpr = function(ctx) {
    //console.log("Expre")
    let substractToken = ctx.SUBTRACTION();
    let firstTerm = ctx.term(0);
    firstTerm.localStore = ctx.localStore;
    this.visit(firstTerm);
    let termLength = ctx.term().length - 1;
    //solo entra si viene suma
    for (let i=1; i <= termLength; i++) {
        let secondTerm = ctx.term(i);
        secondTerm.localStore = ctx.localStore;
        this.visit(secondTerm);
        termResponse = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(termResponse)
        let firstOperator = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(firstOperator)
        if (substractToken){
            firstOperator.value *= -1;
            substractToken = false;
        }
        let addOperator = this.visit(ctx.addop(i-1));
        let addOpreration;
        if (addOperator == 16){
            addOpreration = firstOperator.type === 6 || termResponse.typeTerminal === 6 ? firstOperator.value.substr(1,firstOperator.value.length-2) + termResponse.value.substr(1,termResponse.value.length-2)
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
        //console.log("Agrege a la Pila")
        ///console.log(result)
    }
};

OwnInterpreter.prototype.visitTerm = function(ctx) {
    //console.log("Term")
    let firstFactor = ctx.factor(0);
    firstFactor.localStore = ctx.localStore;
    this.visit(firstFactor)
    let factorResponse = ctx.localStore.shift();
    //console.log("Saque de la pila")
    //console.log(factorResponse)
    if(factorResponse.typeTerminal === 1){
        factorResponse = searchInArrays(ctx.localStore,factorResponse);
        //console.log("Modifique Factor")
        //console.log(factorResponse)
    }
    ctx.localStore.unshift(factorResponse)
    //console.log("Agrege a la pila")
    //console.log(factorResponse)
    // viene una multiplicacion;
    for (let i=1; i <= ctx.factor().length - 1; i++) {
        let secondFactor = ctx.factor(i);
        secondFactor.localStore = ctx.localStore;
        this.visit(secondFactor);
        factorResponse = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(factorResponse)
        if(factorResponse.typeTerminal === 1){
            factorResponse = searchInArrays(ctx.localStore,factorResponse);
            //console.log("Modifique Factor")
            //console.log(factorResponse)
        }
        let firstOperator = ctx.localStore.shift();
        //console.log("Saque de la pila")
        //console.log(firstOperator)
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
        //console.log("Agrege a la pila")
        //console.log(result)
    }
};

/*------------------------------------------------------------- Factors -------------------------------------------------------*/

OwnInterpreter.prototype.visitDesignatorFactor = function(ctx) {
    let identifier = ctx.designator();
    identifier.localStore = ctx.localStore;
    this.visit(identifier);

    let designatorResult = ctx.localStore.shift();

    let varName;    //nombre que trae el designator
    let variable;   //referencia a la variable

    if(designatorResult.propertyName)
        varName = designatorResult.variableName + "." + designatorResult.propertyName;
    else
        varName = designatorResult.variableName;

    variable = searchInArrays(ctx.localStore,{value: varName});
    if(variable.typeStruct){
        let actPars = ctx.actPars();
        let paramList = [];
        if(actPars){
            actPars.localStore = ctx.localStore;
            this.visit(actPars);
            let paramsAmount = variable.parameters.length;
            for(let i = 0; i < paramsAmount;i++){
                let actualParam = ctx.localStore.shift();
                paramList.unshift(actualParam.value);
                //console.log("Saque de la pila")
                //console.log(actualParam)
            }
        }
        let lastMethod = method;
        let actualMethod = {name: variable.name, parameters: paramList};
        method = actualMethod;
        let newMethod = variable.decl;
        newMethod.methodToExecute = variable;
        //console.log("Voy a llamar a metodo")
        
        //console.log("Pila Actual"+ cont)
        //console.log(ctx.localStore);
        //let LaPila = ctx.localStore.slice();
        cont++
        let methodResponse = this.visit(newMethod);
        //console.log("Regrese de la llamada")
        cont--
        //ctx.localStore = LaPila;
        //console.log("Pila despues del regreso" + cont)
        //console.log(ctx.localStore);
        method = lastMethod;
        ctx.localStore.unshift({typeTerminal: variable.typeStruct, value: methodResponse.value});
        //console.log("Agrege a la plia")
        //console.log(ctx.localStore[0])

    }
    else{
        ctx.localStore.unshift({typeTerminal: 1, value: varName})
        //console.log("Agrege a la plia")
        //console.log(ctx.localStore[0])
    }
};

OwnInterpreter.prototype.visitNumberFactor = function(ctx) {
    let number  = ctx.NUMBER().getSymbol().text;
    let object = {typeTerminal: 3, value:number};

    if (ctx.NUMBER().getSymbol().text.includes('.')){
        object.typeTerminal = 4;
    }
    ctx.localStore.unshift(object);
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
};

OwnInterpreter.prototype.visitCharconstFactor = function(ctx) {
    let char = ctx.CHAR_CONST().getSymbol().text;
    ctx.localStore.unshift({typeTerminal: 2, value: char})
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
};

OwnInterpreter.prototype.visitStringConstFactor = function(ctx) {
    let string = ctx.STRING_CONST().getSymbol().text;
    ctx.localStore.unshift({typeTerminal: 6, value: string});
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
};

OwnInterpreter.prototype.visitBoolFactor = function(ctx) {
    let object = {typeTerminal: 5, value: null};

    let falseFactor = ctx.FALSE();
    let trueFactor = ctx.TRUE();
    if(trueFactor)
        object.value = true;
    else
        object.value = false;

    ctx.localStore.unshift(object);
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
};

OwnInterpreter.prototype.visitNewFactor = function(ctx){
    let newIdent = ctx.IDENT();
    ctx.localStore.unshift({typeTerminal: 8, value: newIdent});
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
};

OwnInterpreter.prototype.visitExpressionFactor = function(ctx) {
    let object = this.visit(ctx.expr());
    ctx.localStore.unshift(object);
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
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
        this.visit(expr);
        let response = ctx.localStore.shift();
        returnData.arrayPosition = response; ///suponiendo response es tipo entero
        ctx.localStore.unshift(returnData);
    }
    ctx.localStore.unshift(returnData);
    //console.log("Agrege a la plia")
    //console.log(ctx.localStore[0])
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

function searchInArrays(array,elementSearch){
    let response = false;
    
    for (const element of array) {
        element.name === elementSearch.value ? response = element : false;
    }
    if(!response){
        for (const element of warehouse.warehouse) {
            element.name === elementSearch.value ? response = element : false;
        }
    }
    //console.log("Respuesta de busqueda")
    //console.log(response)
    return response;
}


exports.OwnInterpreter = OwnInterpreter;
