// Generated from C:/Users/Andres/Documents/Compiladores/Proyecto/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
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


// Visit a parse tree produced by ParserMiniCSharp#identType.
ParserMiniCSharpVisitor.prototype.visitIdentType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#charType.
ParserMiniCSharpVisitor.prototype.visitCharType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#intType.
ParserMiniCSharpVisitor.prototype.visitIntType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#floatType.
ParserMiniCSharpVisitor.prototype.visitFloatType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#boolType.
ParserMiniCSharpVisitor.prototype.visitBoolType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#stringType.
ParserMiniCSharpVisitor.prototype.visitStringType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#firstDesignStatement.
ParserMiniCSharpVisitor.prototype.visitFirstDesignStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#ifStatement.
ParserMiniCSharpVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#forStatement.
ParserMiniCSharpVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#whileStatement.
ParserMiniCSharpVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#foreachStatement.
ParserMiniCSharpVisitor.prototype.visitForeachStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#breakStatement.
ParserMiniCSharpVisitor.prototype.visitBreakStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#returnStatement.
ParserMiniCSharpVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#readStatement.
ParserMiniCSharpVisitor.prototype.visitReadStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#writeStatement.
ParserMiniCSharpVisitor.prototype.visitWriteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#blockStatement.
ParserMiniCSharpVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#semicolonStatement.
ParserMiniCSharpVisitor.prototype.visitSemicolonStatement = function(ctx) {
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


// Visit a parse tree produced by ParserMiniCSharp#designatorFactor.
ParserMiniCSharpVisitor.prototype.visitDesignatorFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#numberFactor.
ParserMiniCSharpVisitor.prototype.visitNumberFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#charconstFactor.
ParserMiniCSharpVisitor.prototype.visitCharconstFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#boolFactor.
ParserMiniCSharpVisitor.prototype.visitBoolFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#newFactor.
ParserMiniCSharpVisitor.prototype.visitNewFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#expressionFactor.
ParserMiniCSharpVisitor.prototype.visitExpressionFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#designator.
ParserMiniCSharpVisitor.prototype.visitDesignator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#equalEqualOp.
ParserMiniCSharpVisitor.prototype.visitEqualEqualOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#inequalityOp.
ParserMiniCSharpVisitor.prototype.visitInequalityOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#greaterThanOp.
ParserMiniCSharpVisitor.prototype.visitGreaterThanOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#greaterOrEqualThanOp.
ParserMiniCSharpVisitor.prototype.visitGreaterOrEqualThanOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#lessThanOp.
ParserMiniCSharpVisitor.prototype.visitLessThanOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#lessOrEqualThanOp.
ParserMiniCSharpVisitor.prototype.visitLessOrEqualThanOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#sumOp.
ParserMiniCSharpVisitor.prototype.visitSumOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#subsOp.
ParserMiniCSharpVisitor.prototype.visitSubsOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#multOp.
ParserMiniCSharpVisitor.prototype.visitMultOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#divOp.
ParserMiniCSharpVisitor.prototype.visitDivOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ParserMiniCSharp#percentOp.
ParserMiniCSharpVisitor.prototype.visitPercentOp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ParserMiniCSharpVisitor = ParserMiniCSharpVisitor;