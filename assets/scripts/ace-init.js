/**
 * Created by josah on 1/9/2017.
 */
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

$('button').on('click',function (e) {
   let editorCode = editor.getValue();
   $.ajax({
        type: "POST",
        url: '/parse',
        data: {code: editorCode},
        success: function (res) {
            let fullMsg = "";
            for(let error of res.data){
               let errorMsg = "<span class='syntaxError'>[Syntax Error]   </span>"+error+"."+"<br>";
               fullMsg += errorMsg;
            }
            $('#console').html(fullMsg);
        },
        dataType: 'json'
    });
});