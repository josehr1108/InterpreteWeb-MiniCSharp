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
    console.log("Array parseado");
    console.log(method.parameters);
    return this;
}

OwnInterpreter.prototype = Object.create(parserVisitor.prototype);
OwnInterpreter.prototype.constructor = OwnInterpreter;


OwnInterpreter.prototype.visitProgram = function(ctx) {

    let warehouseMethod = warehouse.searchElement(warehouse, method.name);

    let pilaExpr = [];
    for (let element of warehouseMethod.data.parameters){
        if(element.reference == "formPars"){
            for (let parameter of method.parameters){
                localParameter = {};
                localParameter.name = element.name;
                localParameter.value = parameter;
                localParameter.type = element.type;
                localParameter.reference = element.reference;
                pilaExpr.unshift(localParameter);

            }
        }
    }
    console.log(method.parameters)
    let newCtx = warehouseMethod.data.decl;
    newCtx.methodToExecute = warehouseMethod.data;
    newCtx.pilaExpr = pilaExpr;
    console.log(newCtx)
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

    console.log(ctx);
    return
  
};

OwnInterpreter.prototype.visitFormPars = function(ctx) {
 
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

OwnInterpreter.prototype.visitIfStatement = function(ctx) {

    console.log("if")
    console.log(ctx.misDatos);
    /*

    let condition = this.visit(ctx.condition());

    this.visit(ctx.statement(0));
    
    /*
    let elseToken = ctx.ELSE();
    if(elseToken){
        

        this.visit(ctx.statement(1));
        
    }*/
    return
};

OwnInterpreter.prototype.visitForStatement = function(ctx) {
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

OwnInterpreter.prototype.visitWhileStatement = function(ctx) {
   

    this.visit(ctx.condition());

    this.visit(ctx.statement());
    return

};

OwnInterpreter.prototype.visitForeachStatement = function(ctx) {

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

OwnInterpreter.prototype.visitBreakStatement = function(ctx) {
    return
};

OwnInterpreter.prototype.visitReturnStatement = function(ctx) {
    //console.log(tableSymbols.getTableSymbols());
    /*
    let expr = ctx.expr();
    if(expr){
       
        this.visit(ctx.expr(0));
   
    }*/
    return
};

OwnInterpreter.prototype.visitReadStatement = function(ctx) {
   

   
    this.visit(ctx.designator());
    return

    
};

OwnInterpreter.prototype.visitWriteStatement = function(ctx) {
    /*
    this.visit(ctx.expr());
   

    let comma = ctx.COMMA();
    if(comma){
        
        let number = ctx.NUMBER().getSymbol().text;
       
    }*/
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
            statement.misDatos = ctx.misDatos;
            this.visit(statement);
            
        }
    }
    return
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
    let firstTerm = this.visit(ctx.condTerm(0));

    /*bretearlo
    for (let i=1; i <=  ctx.condTerm().length - 1; i++) {
        this.visit(ctx.condTerm(i));
    }*/
    return
};

OwnInterpreter.prototype.visitCondTerm = function(ctx) {
    /*let firstFact = this.visit(ctx.condFact(0));

    let returnValue = true;

    let condFactLength = ctx.condFact().length;
    for (let i=1; i <= condFactLength; i++) {
        let secondFact = this.visit(ctx.condFact(i));
        console.log("PrimerFact: "+ firstFact + ", secondFact: "+ secondFact);
    }*/
    return
};

OwnInterpreter.prototype.visitCondFact = function(ctx) { //falta para idents
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

OwnInterpreter.prototype.visitExpr = function(ctx) {
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

OwnInterpreter.prototype.visitTerm = function(ctx) {
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

OwnInterpreter.prototype.visitDesignatorFactor = function(ctx) {

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

OwnInterpreter.prototype.visitNumberFactor = function(ctx) {
    let object = {typeTerminal: 3, data: ctx.NUMBER()};

    if (ctx.NUMBER().getSymbol().text.includes('.')){
        object.typeTerminal = 4;
    }

    return object;

};

OwnInterpreter.prototype.visitCharconstFactor = function(ctx) {
    return {typeTerminal: 2, data: ctx.CHAR_CONST()};
};

OwnInterpreter.prototype.visitBoolFactor = function(ctx) {
    let object = {typeTerminal: 5, data: null};

    let falseFactor = ctx.FALSE();
    let trueFactor = ctx.TRUE();
    if(trueFactor)
        object.data = trueFactor;
    else
        object.data = falseFactor;

    return object;
};

OwnInterpreter.prototype.visitNewFactor = function(ctx){
    return {typeTerminal: 8, data: ctx.IDENT()}
};

OwnInterpreter.prototype.visitExpressionFactor = function(ctx) {
    return this.visit(ctx.expr());
};

/*------------------------------------------------------------------------------------------------------------------------------*/
OwnInterpreter.prototype.visitDesignator = function(ctx) {
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
