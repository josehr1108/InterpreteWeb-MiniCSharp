/**
 * Created by andres on 23/9/2017.
 *
 */
class tableSymbols {
    constructor(){
        this.tableSymbols = []
    }

    getTableSymbols(){
        return this.tableSymbols;
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
        super(name,level,decl)
        this.type  = type;
    }

    getType(){
        return this.type;
    }

 }

 class simpleTypes extends symbolType{
     constructor(name,level,type,decl){
        super(name,level,type,decl)
     }

     getClassName(){
         return simpleTypes.name;
     }
 }

class complexTypes extends symbolType{
    constructor(name,level,type,decl){
        super(name,level,type,decl)
     }

     getClassName(){
        return complexTypes.name;
    }
}

tableSymbols.prototype.insert = function(table,name,level,type,decl){
    if (type > 0 && type < 6){
        var token = new simpleTypes(name,level,type,decl);
        table.push(token)
    }

    //else if para tipos complejos
}

tableSymbols.prototype.buscar = function(table,name){
    table.forEach(function(element) {
        if(element.getName() === name){
            return element
        }
    });

    return null;
}

tableSymbols.prototype.print = function(table){
    table.forEach(function(element) {
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

exports.tableSymbols = tableSymbols;

/*
//prueba
var tabla = new tableSymbols()
var objeto = new simpleTypes ('ident',0,1,'aqui');
console.log(objeto.name)
tabla.tableSymbols.push(objeto);
console.log(tabla.getTableSymbols())
console.log(objeto.getClassName());
 
 */
 