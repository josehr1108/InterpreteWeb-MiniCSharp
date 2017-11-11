/**
 * Created by josah on 1/9/2017.
 */
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

$(function () {  //document ready
    let methods = null;

    $('#tree').on("click",function (e) {
        if($('#tree').hasClass("disabled")){
            return;
        }else{
            $("#myModal").modal();
        }
    });

    $('#runButton').on('click',function (e) {
        let editorCode = editor.getValue();

        $.ajax({
            type: "POST",
            url: '/parse',
            data: {code: editorCode},
            success: function (res) {
                $('#tree').removeClass('disabled');
                $('#consoleInput').prop('disabled', false);

                let fullMsg = "";
                for(let error of res.data){
                    if(res.typeError === 'syntaxError'){
                        let errorMsg = "<span class='Errors'>[Syntax Error]   </span>"+error+"."+"<br>";
                        fullMsg += errorMsg;
                    }
                    
                    else if (res.typeError === "contextualErrors"){
                        let errorMsg = "<span class='Errors'>[Contextual Error]   </span>"+error+"."+"<br>";
                        fullMsg += errorMsg;
                    }
                    
                    else if(res.typeError === "methods"){
                        methods = res.data;
                        break;
                    }

                }
                if(fullMsg != ""){  // si vienen errores
                    $('#tree').addClass("disabled");
                }
                $('#console').html(fullMsg);
            },
            dataType: 'json'
        });
    });

    $('#myModal').on('shown.bs.modal', function(e) {
        console.log("sigue");
        $.ajax({
            type: "POST",
            url: '/tree',
            success: function (res) {
                let diagramData = res.data;
                let diagram = showDiagram(diagramData);
                $('#myModal').on('hidden.bs.modal', function () {
                    diagram.div = null;
                });
            },
            dataType: 'json'
        });
    });

    editor.on("change", function(e){
        $('#tree').addClass('disabled')
    });

    editor.getSession().selection.on('changeCursor', function(e) {
        let newText = 'Row: ' + (editor.selection.getCursor().row + 1) + ' Column: ' + editor.selection.getCursor().column;
        $("#position").text(newText);
    });

    let divIsHidden = true;
    let methodLogger = $('#methodLogger');

    $('#consoleInput').on('keyup', function(e) {
        if (e.keyCode === 13) {  //falta validar nombres y demas para que no se caiga
            console.log(methods);
            
            let inputValue =  $('#consoleInput').val();
            if(inputValue.includes('(') && inputValue.includes(')')){
                let keywords = inputValue.split("(");
                let functionName = keywords[0];
                let parameters = keywords[1].slice(0, -1).split(",");
                let finalParameters = []; //lista final ya convertida
                //console.log({name: functionName, parameters: parameters});
                for(element of methods){
                    if(element.name === functionName){
                        let params = element.parameters;
                        if(params.length === parameters.length && parameters[0] != ""){
                            for(iterator in params){
                                let finalParam = params[iterator];
                                let sentParam = parameters[iterator].trim();
                                if(finalParam.type === 3){ //si el parametro necesario es entero
                                    let firstCharCode = sentParam.charCodeAt(0);
                                    if(firstCharCode > 47 && firstCharCode < 58){ //empieza con numero
                                        let num = parseInt(sentParam);
                                        finalParameters.push(num);
                                    }
                                    else{
                                        alert("Tipo invalido en el parametro " + iterator);
                                        return;
                                    }
                                }
                                else if(finalParam.type === 2){ //si el parametro necesario es char
                                    let firstCharCode = sentParam.charCodeAt(0);
                                    let lastCharCode = sentParam.charCodeAt(sentParam.length-1);
                                    if(firstCharCode === 39 && lastCharCode === 39){
                                        let obtainedChar = sentParam.slice(1,-1);
                                        finalParameters.push(obtainedChar);
                                    }
                                    else{
                                        alert("Tipo invalido en el parametro " + iterator);
                                        return;
                                    }
                                }
                                else if(finalParam.type === 4){ //si el parametro necesario es float
                                    let firstCharCode = sentParam.charCodeAt(0);
                                    if(firstCharCode > 47 && firstCharCode < 58){ //empieza con numero
                                        finalParameters.push(parseFloat(sentParam));
                                    }
                                    else{
                                        alert("Tipo invalido en el parametro " + iterator);
                                        return;
                                    }
                                }
                                else if(finalParam.type === 5){ //si el parametro necesario es bool
                                    if(sentParam === "true") {
                                        finalParameters.push(true);
                                    }
                                    else if(sentParam === "false") {
                                        finalParameters.push(false);
                                    }
                                    else{
                                        alert("Tipo invalido en el parametro " + iterator);
                                        return;
                                    }
                                }
                                else if(finalParam.type === 6){ //si el parametro necesario es string
                                    let firstCharCode = sentParam.charCodeAt(0);
                                    let lastCharCode = sentParam.charCodeAt(sentParam.length-1);
                                    if(firstCharCode === 34 && lastCharCode === 34){
                                        let obtainedString = sentParam.slice(1,-1);
                                        finalParameters.push(obtainedString);
                                    }
                                    else{
                                        alert("Tipo invalido en el parametro " + iterator);
                                        return;
                                    }
                                }
                            }

                            /*let instructions = getInstructionsArrayFromFunctionName(functionName);
                            console.log("Lista de instrucciones");
                            console.log(instructions);
                            searchReadStatements(instructions);*/

                            $.ajax({
                                type: "POST",
                                url: '/runMethod',
                                data: {name: functionName, parameters: finalParameters},
                                success: function (res) {
                                    console.log(res)
                                    let fullMsg = "";
                                    for(let messages of res.data){
                                        let executionMsg;
                                        switch (messages.typeTerminal) {
                                            case 99:
                                                executionMsg = "<span class='Errors'>[Execution]   </span><span class='Errors'>Write   </span>"+messages.value+"."+"<br>";
                                                break;
                                            case 100:
                                                executionMsg = "<span class='Errors'>[Execution]   </span><span class='Errors'>Method Return   </span>"+messages.value+"."+"<br>";
                                                break;
                                        }
                                        fullMsg += executionMsg;
                                    }
                                    $('#methodLogger').html(fullMsg);
                                },
                                dataType: 'json'
                            });
                            methodLogger.removeClass('hidden');
                            divIsHidden = false;
                            return;
                        }
                        else{
                            alert("Parametros insuficientes en la llamada al metodo");
                            return;
                        }
                    }
                }
                alert("El metodo llamado no existe");
            }
            else{
                alert("La instruccion no se refiere a una llamada de metodo");
            }
        }
        else if(!divIsHidden){
            methodLogger.addClass('hidden');
            divIsHidden = true;
        }
    });

    /*function getInstructionsArrayFromFunctionName(functionName){
        let editorCode = editor.getValue();
        let regExString = functionName + '\\(([\\w + \\s](\\,)?)*\\)\\{[\\s\\S]*\\}';
        let finalValue = editorCode.match(regExString,'i')[0];
        let instructionsArray = finalValue.split('\n');
        instructionsArray.shift();
        return instructionsArray;
    }

    let methodRegex = /([a-zA-Z]+(\d)*)\(\s*([a-zA-Z]*(\d)*\s*\,?\s*)*\)/i;
    let readRegex = /read\(([a-zA-Z]+(\d)*)\)\;/i;

    function searchReadStatements(instructions){
        if(instructions.length == 0){
            return;
        }
        else{
            let instruction = instructions[0];
            let matchedRead = instruction.match(readRegex);
            let matchedMethod = instruction.match(methodRegex);
            if(matchedRead){
                console.warn("hay un read()");
                instructions.shift();
                searchReadStatements(instructions);
            }
            else if(matchedMethod){
                let methodText = matchedMethod[0];
                let split = methodText.split("(");
                let methodName = split[0];
                let methodInstructionsArray = getInstructionsArrayFromFunctionName(methodName);
                console.warn("Viene inst de prueba()");
                console.log(methodInstructionsArray);
                instructions.shift();
                let newArray = instructions.concat(methodInstructionsArray);
                searchReadStatements(newArray);
            }
            else{
                instructions.shift();
                searchReadStatements(instructions);
            }
        }
    }
*/

});
