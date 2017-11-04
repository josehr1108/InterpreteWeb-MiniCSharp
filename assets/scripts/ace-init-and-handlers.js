/**
 * Created by josah on 1/9/2017.
 */
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

$(function () {  //document ready
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

                    if(res.typeError == 'syntaxError'){
                        let errorMsg = "<span class='Errors'>[Syntax Error]   </span>"+error+"."+"<br>";
                        fullMsg += errorMsg;
                    }

                    else{
                        let errorMsg = "<span class='Errors'>[Contextual Error]   </span>"+error+"."+"<br>";
                        fullMsg += errorMsg;
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
            let inputValue =  $('#consoleInput').val();
            let keywords = inputValue.split("(");
            let functionName = keywords[0];
            let parameters = keywords[1].slice(0, -1).split(",");
            console.log({name: functionName, parameters: parameters});
            methodLogger.removeClass('hidden');
            divIsHidden = false;
        }
        else if(!divIsHidden){
            methodLogger.addClass('hidden');
            divIsHidden = true;
        }
    });
});
