// Generated from C:/Users/josah/Documents/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ParserMiniCSharp.

function ParserMiniCSharpVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ParserMiniCSharpVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ParserMiniCSharpVisitor.prototype.constructor = ParserMiniCSharpVisitor;

// Visit a parse tree produced by ParserMiniCSharp#program.
ParserMiniCSharpVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#constDecl.
ParserMiniCSharpVisitor.prototype.visitConstDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#varDecl.
ParserMiniCSharpVisitor.prototype.visitVarDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#classDecl.
ParserMiniCSharpVisitor.prototype.visitClassDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#methodDecl.
ParserMiniCSharpVisitor.prototype.visitMethodDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#formPars.
ParserMiniCSharpVisitor.prototype.visitFormPars = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#type.
ParserMiniCSharpVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#statement.
ParserMiniCSharpVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#block.
ParserMiniCSharpVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#actPars.
ParserMiniCSharpVisitor.prototype.visitActPars = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#condition.
ParserMiniCSharpVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#condTerm.
ParserMiniCSharpVisitor.prototype.visitCondTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#condFact.
ParserMiniCSharpVisitor.prototype.visitCondFact = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#expr.
ParserMiniCSharpVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#term.
ParserMiniCSharpVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#factor.
ParserMiniCSharpVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#designator.
ParserMiniCSharpVisitor.prototype.visitDesignator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#relop.
ParserMiniCSharpVisitor.prototype.visitRelop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#addop.
ParserMiniCSharpVisitor.prototype.visitAddop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#mulop.
ParserMiniCSharpVisitor.prototype.visitMulop = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ParserMiniCSharpVisitor = ParserMiniCSharpVisitor;