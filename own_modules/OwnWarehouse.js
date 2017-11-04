/**
 * 
 * Created by andres on 01/11/2017.
 *
 **/

class warehouse{
    constructor(){
        this.warehouse = [];
    }

    getWarehouse(){
        this.warehouse;
    }

    addElement(element){
        this.warehouse.push(element);
    }
}

class element{
    constructor(name,type,decl){
        this.name = name;
        this.type = type;
        this.decl = decl;
    }

    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }

    getDecl(){
        return this.decl;
    }
}

class simpleElement extends element{
    constructor(name,type,decl,isList,isConst,value){
        super(name,type,decl);
        this.isList = isList;
        this.isConst = isConst;
        this.value = value;
    }

    getClassName(){
        return simpleElement.name;
    }

    getIslist(){
        return this.isList;
    }

    getIsConst(){
        return this.isConst;
    }

    getValue(){
        return this.value;
    }
}

class complexElement extends element{
    constructor(name,type,decl,typeStruct,parameters){
        super(name,type,decl);
        this.typeStruct =typeStruct;
        this.parameters = parameters;
     }

    getClassName(){
        return complexElement.name;
    }
  
    getTypeStruct(){
        return this.typeStruct;
    }

    getParameters(){
        return this.parameters;
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
Parametros insertElement
Table       = objeto del almacen
name        = nombre del identificador
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
warehouse.prototype.insertElement = function(warehouse,name,type,decl,isLista,isConst,typeStruct,parameters,value){
    let element;
    if(typeStruct == null){
        element = new simpleElement(name,type,decl,isLista,isConst,value)
        warehouse.addElement(element)
    }

    else {
        element = new complexElement(name,type,decl,typeStruct,parameters);
        warehouse.addElement(element);
    }
}

warehouse.prototype.createParameter = function(name,type,reference){
    let parameter = new parameters(name,type,reference);
    return parameter; 
}

warehouse.prototype.searchElement = function(warehouse,name){
    for(let element of warehouse.warehouse){
        if(element.getName() === name){
            return {'success': true, 'data': element};
        }
    }

    return {'success': false, 'data': -1};    
}

exports.warehouse = warehouse;