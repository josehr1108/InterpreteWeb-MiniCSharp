// Generated from C:/Users/josah/Documents/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link ParserMiniCSharp}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface ParserMiniCSharpVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(ParserMiniCSharp.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#constDecl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstDecl(ParserMiniCSharp.ConstDeclContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#varDecl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarDecl(ParserMiniCSharp.VarDeclContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#classDecl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassDecl(ParserMiniCSharp.ClassDeclContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#methodDecl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodDecl(ParserMiniCSharp.MethodDeclContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#formPars}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormPars(ParserMiniCSharp.FormParsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code identType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentType(ParserMiniCSharp.IdentTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code charType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCharType(ParserMiniCSharp.CharTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code intType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntType(ParserMiniCSharp.IntTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code floatType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFloatType(ParserMiniCSharp.FloatTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code boolType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBoolType(ParserMiniCSharp.BoolTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code stringType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringType(ParserMiniCSharp.StringTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code firstDesignStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFirstDesignStatement(ParserMiniCSharp.FirstDesignStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ifStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfStatement(ParserMiniCSharp.IfStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code forStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForStatement(ParserMiniCSharp.ForStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code whileStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhileStatement(ParserMiniCSharp.WhileStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code foreachStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForeachStatement(ParserMiniCSharp.ForeachStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code breakStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBreakStatement(ParserMiniCSharp.BreakStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code returnStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturnStatement(ParserMiniCSharp.ReturnStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code readStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReadStatement(ParserMiniCSharp.ReadStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code writeStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWriteStatement(ParserMiniCSharp.WriteStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code blockStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlockStatement(ParserMiniCSharp.BlockStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code semicolonStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSemicolonStatement(ParserMiniCSharp.SemicolonStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(ParserMiniCSharp.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#actPars}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitActPars(ParserMiniCSharp.ActParsContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#condition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCondition(ParserMiniCSharp.ConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#condTerm}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCondTerm(ParserMiniCSharp.CondTermContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#condFact}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCondFact(ParserMiniCSharp.CondFactContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr(ParserMiniCSharp.ExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#term}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTerm(ParserMiniCSharp.TermContext ctx);
	/**
	 * Visit a parse tree produced by the {@code designatorFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDesignatorFactor(ParserMiniCSharp.DesignatorFactorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code numberFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumberFactor(ParserMiniCSharp.NumberFactorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code charconstFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCharconstFactor(ParserMiniCSharp.CharconstFactorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code stringConstFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringConstFactor(ParserMiniCSharp.StringConstFactorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code boolFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBoolFactor(ParserMiniCSharp.BoolFactorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code newFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNewFactor(ParserMiniCSharp.NewFactorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expressionFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressionFactor(ParserMiniCSharp.ExpressionFactorContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#designator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDesignator(ParserMiniCSharp.DesignatorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code equalEqualOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEqualEqualOp(ParserMiniCSharp.EqualEqualOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code inequalityOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInequalityOp(ParserMiniCSharp.InequalityOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code greaterThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGreaterThanOp(ParserMiniCSharp.GreaterThanOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code greaterOrEqualThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGreaterOrEqualThanOp(ParserMiniCSharp.GreaterOrEqualThanOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code lessThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLessThanOp(ParserMiniCSharp.LessThanOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code lessOrEqualThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLessOrEqualThanOp(ParserMiniCSharp.LessOrEqualThanOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code sumOp}
	 * labeled alternative in {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSumOp(ParserMiniCSharp.SumOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subsOp}
	 * labeled alternative in {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubsOp(ParserMiniCSharp.SubsOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code multOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultOp(ParserMiniCSharp.MultOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code divOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDivOp(ParserMiniCSharp.DivOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code percentOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPercentOp(ParserMiniCSharp.PercentOpContext ctx);
}