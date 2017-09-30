/**
 * 
 * Created by andres on 27/9/2017.
 *
 **/

class tableSymbols {
    constructor(){
        this.tableSymbols = []
        this.level = 0;
    }

    getTableSymbols(){
        return this.tableSymbols;
    }

    getLevel(){
        return this.level;
    }

    moveLevel(value){
        this.level += value;
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
        super(name,level,decl)
        this.type  = type;
    }

    getType(){
        return this.type;
    }

 }

 class simpleTypes extends symbolType{
     constructor(name,level,type,decl,isLista,isConst){
        super(name,level,type,decl)
        this.isLista = isLista;
        this.isConst = isConst;
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
 }

class complexTypes extends symbolType{
    constructor(name,level,type,decl,typeStruct,parameters){
        super(name,level,type,decl)
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
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
}

tableSymbols.prototype.insert = function(table,name,level,type,decl,isLista,isConst,typeStruct,parameters){
    let token;
    if(typeStruct == null){
        token = new simpleTypes(name,level,type,decl,isLista,isConst)
        
        table.addToken(token)
    }

    else {
        token = new complexTypes(name,level,type,decl,typeStruct,parameters);
        table.addToken(token);
    }

}

tableSymbols.prototype.buscar = function(table,name,level){
    console.log(name);
    console.log(level);


    if (table.getTableSymbols()[0].getName() == name){
        return true;
    }

    else{

        for (var i = 0; i < table.getTableSymbols().length; i++) {
            if (table.getTableSymbols()[i].getName() === name && table.getTableSymbols()[i].getLevel() ===  level){
                return true; 
            }  
        }
    }
    
    return false;
    
}

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

exports.tableSymbols = tableSymbols