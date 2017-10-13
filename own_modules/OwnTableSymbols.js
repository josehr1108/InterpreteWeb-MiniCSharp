/**
 * 
 * Created by andres on 27/9/2017.
 *
 **/

class tableSymbols {
    constructor(){
        this.tableSymbols = [];
        this.level = 0;
        
    }

    getTableSymbols(){
        return this.tableSymbols;
    }

    getLevel(){
        return this.level;
    }

    levelUp(){
        this.level += 1;
    }

    lowerLevel(){
        this.level -=1
    }

    addToken(token){
        this.tableSymbols.push(token);
    }
}

 class tokenSymbol {
     constructor(name,level,decl){
         this.name  = name;
         this.level = level;
         this.decl  = decl;
     }

    getName(){
        return this.name;
    }
    getLevel(){
        return this.level;
    }

    getDecl(){
        return this.decl;
    }
 }

 class symbolType extends tokenSymbol{
    constructor(name,level,type,decl){
        super(name,level,decl);
        this.type  = type;
    }

    getType(){
        return this.type;
    }
 }

 class simpleTypes extends symbolType{
    constructor(name,level,type,decl,isLista,isConst,value){
    super(name,level,type,decl);
    this.isLista = isLista;
    this.isConst = isConst;
    this.value = value;
    }

    getClassName(){
        return simpleTypes.name;
    }

    getIslista(){
        return this.isLista;
    }

    getIsConst(){
        return this.isConst;
    }
    getValue(){
        return this.value;
    }
 }

class complexTypes extends symbolType{
    constructor(name,level,type,decl,typeStruct,parameters){
        super(name,level,type,decl);
        this.typeStruct =typeStruct;
        this.parameters = parameters;
       
     }

    getClassName(){
        return complexTypes.name;
    }

    getParameters(){
        return this.parameters;
    }

    getTypeStruct(){
        return this.typeStruct;
    }

}

class parameters {
    constructor(name,type,reference){
        this.name = name;
        this.type = type;
        this.reference = reference;
    }

    getName(){
        return this.name;
    }

    getType(){
        return this.type;
    }

    getReference(){
        return this.reference;
    }
    
}

/*
Parametros insertToken
Table       = objeto de tabla simbolos
name        = nombre del identificador
level       =  -1: Para la clase main 
                0: Para Variables,Metodos,Clases globales
                1: Para parametros, variables de metodos y clases
type        = Si elemento es simpleTypes
               -1: Indefinido
                0: Class main
                1: Ident
                2: Char
                3: Int
                4: Float
                5: Bool
                6: String (susceptible a pasar a complexTypes)
            Si el elemento es complexTypes
                0: Clases
                1: Metodos
decl        = Siempre es ctx
isLista     = Solo se usa en simpleTypes 
                define si una variable es lista toma valores True / False
isConst     = Solo se usa en simpleTypes 
                define si una variable es constante toma valores True / False
typeStruct  = Solo se usa en complexTypes
                0: Object (class)
                1: Ident
                2: Char
                3: Int
                4: Float
                5: Bool
                6: String
                7: Void
parameters  = Solo se usa en complexTypes
                Es una lista con los parametros de los metodos y clases
                Los tipos de los parametros pudem ser
                    1: Ident
                    2: Char
                    3: Int
                    4: Float
                    5: Bool
                    6: String
*/ 

tableSymbols.prototype.insertToken = function(table,name,level,type,decl,isLista,isConst,typeStruct,parameters,value){
    let token;
    if(typeStruct == null){
        token = new simpleTypes(name,level,type,decl,isLista,isConst,value)
        table.addToken(token)
    }

    else {
        token = new complexTypes(name,level,type,decl,typeStruct,parameters);
        table.addToken(token);
    }

}

/*
tableSymbols.prototype.deleteTokens = function(table){
    for (var i = 1; i < table.getTableSymbols().length; i++) {
        if (table.getTableSymbols()[i].getLevel() ===  1){
           delete(table.getTableSymbols()[i])
          
        }  
    }
}


*/

tableSymbols.prototype.createParameter = function(name,type,reference){
    let parameter = new parameters(name,type,reference);
    return parameter; 
}

tableSymbols.prototype.buscarToken = function(table,name,level){

    if (table.getTableSymbols()[0].getName() == name){
        return {'success': true, 'data': table.getTableSymbols()[0]};
    }

    else{

        for (var i = 1; i < table.getTableSymbols().length; i++) {
            if (table.getTableSymbols()[i].getName() === name && table.getTableSymbols()[i].getLevel() ===  level){
                return {'success': true, 'data': table.getTableSymbols()[i]};
            }  
        }
    }
 
    return {'success': false, 'data': -1};

}

/*
tableSymbols.prototype.print = function(table){
    table.forEach(function(element) {
        Console.log("Class Name: " + element.getClassName())
        console.log("Name: " + element.getName())
        if (element.getType() == 0){
          console.log("\tTipo: Indefinido");  
        } 
        else if (element.getType() == 1){
          console.log("\tTipo: Integer");  
        } 
        else if (element.getType() == 2){
          console.log("\tTipo: String");  
        } 
    });
}
*/
exports.tableSymbols = tableSymbols;