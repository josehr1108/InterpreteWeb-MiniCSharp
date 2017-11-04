/**
 * Created by josah on 1/9/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
const antlr4 = require('antlr4');
const ParserMiniCSharp = require('./generated/ParserMiniCSharp.js');
const ScannerMiniCSharp = require('./generated/ScannerMiniCSharp.js');
const OwnParserVisitor = require('./own_modules/OwnParserVisitor');
const OwnTableSymbols = require('./own_modules/OwnTableSymbols');
const OwnContextualAnalysis = require('./own_modules/OwnContextualAnalysis');
const OwnLoadData = require('./own_modules/OwnLoadData');

let tree = null;
let InterpreterTree = null;

const app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/generated"));

let ErrorListener = function(errors) {
    antlr4.error.ErrorListener.call(this);
    this.errors = errors;
    return this;
};

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;
ErrorListener.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
    let text = msg + " on line: " + line + ", column: " + col;
    this.errors.push(text);
};

let errors = [];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/',function (req,res){
    res.send("ok");
});

app.post('/parse',function (req, res) {
    errors = [];
    let listener = new ErrorListener(errors);

    let text = req.body.code;
    let chars = new antlr4.InputStream(text);
    let lexer = new ScannerMiniCSharp.ScannerMiniCSharp(chars);
    let tokens  = new antlr4.CommonTokenStream(lexer);
    let parser = new ParserMiniCSharp.ParserMiniCSharp(tokens);
    let contextualAnalysis = new OwnContextualAnalysis.OwnContextualAnalysis();
    let loadData = new OwnLoadData.OwnLoadData();

    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    tree = parser.program();
    
    if (errors.length === 0){
        /*let contextualErrors = contextualAnalysis.visit(tree);
        if (contextualErrors !== [])
        {
             //let contextualErrors = []
            res.status(200).json({data: contextualErrors , typeError: 'contextualErrors'});
        }*/
        //else{
            InterpreterTree = loadData.visit(tree);
            let listMethods = [];
            for(let element of InterpreterTree.warehouse){
                if(element.getClassName() === "complexElement" && element.getType() === 1){
                    let data = {};
                    data.name = element.name;
                    data.parameters = element.parameters;
                    listMethods.push(data)
                }
            }
            console.log(listMethods);
            res.status(200).json({data: listMethods , typeError: 'methods'});
        //}
    }

    else {
        res.status(200).json({data: errors, typeError: 'syntaxError'});
    }
    
});





app.post('/tree',function (req, res) {
    let visitor = new OwnParserVisitor.OwnParserVisitor();
    let diagramData = visitor.visit(tree);
    res.status(200).json({data: diagramData});
});

app.set('port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
console.log('Express has started on port:3000');