/**
 * Created by josah on 1/9/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
const antlr4 = require('antlr4');
const ParserMiniCSharp = require('./generated/ParserMiniCSharp.js');
const ScannerMiniCSharp = require('./generated/ScannerMiniCSharp.js');
const OwnParserVisitor = require('./own_modules/OwnParserVisitor');

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
    let visitor = new OwnParserVisitor.OwnParserVisitor();

    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    let tree = parser.program();
    visitor.visit(tree);

    res.status(200).json({data: errors});
});

app.set('port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
console.log('Express has started on port:3000');