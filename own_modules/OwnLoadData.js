/**
 * 
 * Created by andres on 01/11/2017.
 *
 **/

const parserVisitor = require('../generated/ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;
const OwnWarehouse  = require('./OwnWarehouse');
//variable para el almacen
let warehouse;
/*lista para guardar variables temporales para los metodos
 y clases antes de insertar la clase o el metodo en la tabla de simbolos*/
let allVars;
/*lista para guardar variables temporales para los metodos 
antes de insertar el metodo a la  clase en la tabla de simbolos*/
let allPars;
//variable local
let globalVar;
//Costructor del cargar datos
function OwnLoadData (){
    parserVisitor.call(this);
    warehouse = new OwnWarehouse.warehouse();
    return this;
}

OwnLoadData.prototype = Object.create(parserVisitor.prototype);
OwnLoadData.prototype.constructor = OwnLoadData;


OwnLoadData.prototype.visitProgram = function(ctx) {
   
    //METODOS POR DEFECTO
    warehouse.insertElement(warehouse,'null',null,null,null,null,null,null,null);
    warehouse.insertElement(warehouse,'chr',null,null,null,null,null,[{'name':'i'}],false);
    warehouse.insertElement(warehouse,'ord',null,null,null,null,null,[{'name':'ch'}],false);
    warehouse.insertElement(warehouse,'len',null,null,null,null,null,[{'name':'ch'}],false);

    let constants = ctx.constDecl();
    let variables = ctx.varDecl();
    let classes = ctx.classDecl();
    let methods = ctx.methodDecl();

    if(constants){
        this.visit(constants);
    }
    if(variables){
        allVars = [];
        globalVar = true;
        this.visit(variables);
    }
    if(classes){
        globalVar = false;
        this.visit(classes);
    }
    if(methods){
        globalVar = false;
        this.visit(methods);
    }
    return warehouse;
};

OwnLoadData.prototype.visitConstDecl = function(ctx) {

    let identifier = ctx.IDENT().getSymbol().text;
    //busca si ya existe el identifiador en la tabla de simbolos
    //obtiene el tipo 
    let typeConst = this.visit(ctx.type());
    let value;
    let number = ctx.NUMBER();
    let charConst = ctx.CHAR_CONST();
    if (number){
        value = number.getSymbol().text;
    }

    else{
        value = charConst.getSymbol().text;
    }

    //verificar contexto de los parametros en OwnTableSymbols arriba del warehouse.insertElement
    warehouse.insertElement(warehouse,identifier,typeConst,ctx,false,true,null,null,value);

    return
};

OwnLoadData.prototype.visitVarDecl = function(ctx) {
    
    for(let i = 0; i < ctx.IDENT().length;i++){
        //nombre de la variable
        let identifier = ctx.IDENT(i).getSymbol(i).text;
         //obtiene el tipo 
         let typeVar = this.visit(ctx.type(i));
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

         if(globalVar){
            //verificar contexto de los parametros en OwnTableSymbols arriba del warehouse.insertElement
            warehouse.insertElement(warehouse,identifier,typeVar,ctx,isList,false,null,null,undefined);
         }
         
    }
    return
};

OwnLoadData.prototype.visitClassDecl = function(ctx) {
    
    let identifier = ctx.IDENT().getSymbol().text;
    let parameters = [];
    let variables = ctx.varDecl();

    if(variables){
        allVars = [];
        this.visit(variables);

        for (let element of allVars) {
            /*crea un parametro en este caso son los var decl de la clase
            allVars[i][0] = es el identifier
            allVars[i][1] = es el type
            */
            let parameter = warehouse.createParameter(element.var,element.type,'varDecl');
            parameters.push(parameter);
        }
        
    }
    //Tipo Object 
    let typeClass = 0;
    let typeStruct = 0;
    //verificar contexto de los parametros en OwnTableSymbols arriba del warehouse.insertElement
    warehouse.insertElement(warehouse,identifier,typeClass,ctx,false,false,typeStruct,parameters,false);

    return
};

OwnLoadData.prototype.visitMethodDecl = function(ctx) {
    
    let identifier = ctx.IDENT().getSymbol().text;

    let parameters = [];
    let formPars =  ctx.formPars();
    let variables = ctx.varDecl();

    if(formPars){
        allPars = [];
        this.visit(formPars);

        for (let element of allPars) {
            /*crea un parametro en este caso son los formPars del metodo
            allPars[i]['var'] = es el identifier
            allPars[i]['type'] = es el type
            */
            
            let parameter = warehouse.createParameter(element.var,element.type,'formPars');
            parameters.push(parameter); 
        }
    }
    if(variables){
        allVars = [];
        this.visit(variables);
        for (let element of allVars) {
            /*crea un parametro en este caso son los var decl de la metodo
            allVars[i]['var'] = es el identifier
            allVars[i]['type'] = es el type
            */
            let parameter = warehouse.createParameter(element.var,element.type,'varDecl');
            parameters.push(parameter); 
        }   
    }
    //obtiene el tipo
    let typeMethod = 1; 
    let typeStruct;
    
    if(ctx.VOID()){
        typeStruct = 7;
    }
    else{
        typeStruct = this.visit(ctx.type());
    }
    
    //verificar contexto de los parametros en OwnTableSymbols arriba del warehouse.insertElement
    warehouse.insertElement(warehouse,identifier,typeMethod,ctx,false,false,typeStruct,parameters,false);
    
    return
};

OwnLoadData.prototype.visitFormPars = function(ctx) {
 
    for (let i = 0; i < ctx.IDENT().length; i++)
    {
        
        let identifier = ctx.IDENT(i).getSymbol().text;
        //obtiene el tipo 
        let typePars = this.visit(ctx.type(i));
        //para insertar la declaracion del parametro en la lista allPars
        let newPars = {};
        newPars.var = identifier;
        newPars.type = typePars;
        allPars.push(newPars);
    }

    return 
};

/*-------------------------------Types ---------------------------------------------------*/
OwnLoadData.prototype.visitIdentType = function(ctx) {
    return {type : 1, identifier : ctx.IDENT().getSymbol().text};
};

OwnLoadData.prototype.visitCharType = function(ctx) {
    return 2
};

OwnLoadData.prototype.visitIntType = function(ctx) {
    return 3
};

OwnLoadData.prototype.visitFloatType = function(ctx) {
    return 4
};

OwnLoadData.prototype.visitBoolType = function(ctx) {
    return 5
};

OwnLoadData.prototype.visitStringType = function(ctx) {
    return 6
};

exports.OwnLoadData = OwnLoadData;
