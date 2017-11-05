// Generated from C:/Users/josah/Documents/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ParserMiniCSharp}.
 */
public interface ParserMiniCSharpListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(ParserMiniCSharp.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(ParserMiniCSharp.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#constDecl}.
	 * @param ctx the parse tree
	 */
	void enterConstDecl(ParserMiniCSharp.ConstDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#constDecl}.
	 * @param ctx the parse tree
	 */
	void exitConstDecl(ParserMiniCSharp.ConstDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#varDecl}.
	 * @param ctx the parse tree
	 */
	void enterVarDecl(ParserMiniCSharp.VarDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#varDecl}.
	 * @param ctx the parse tree
	 */
	void exitVarDecl(ParserMiniCSharp.VarDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#classDecl}.
	 * @param ctx the parse tree
	 */
	void enterClassDecl(ParserMiniCSharp.ClassDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#classDecl}.
	 * @param ctx the parse tree
	 */
	void exitClassDecl(ParserMiniCSharp.ClassDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#methodDecl}.
	 * @param ctx the parse tree
	 */
	void enterMethodDecl(ParserMiniCSharp.MethodDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#methodDecl}.
	 * @param ctx the parse tree
	 */
	void exitMethodDecl(ParserMiniCSharp.MethodDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#formPars}.
	 * @param ctx the parse tree
	 */
	void enterFormPars(ParserMiniCSharp.FormParsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#formPars}.
	 * @param ctx the parse tree
	 */
	void exitFormPars(ParserMiniCSharp.FormParsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code identType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterIdentType(ParserMiniCSharp.IdentTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code identType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitIdentType(ParserMiniCSharp.IdentTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code charType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterCharType(ParserMiniCSharp.CharTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code charType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitCharType(ParserMiniCSharp.CharTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterIntType(ParserMiniCSharp.IntTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitIntType(ParserMiniCSharp.IntTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code floatType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterFloatType(ParserMiniCSharp.FloatTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code floatType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitFloatType(ParserMiniCSharp.FloatTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code boolType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterBoolType(ParserMiniCSharp.BoolTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code boolType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitBoolType(ParserMiniCSharp.BoolTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterStringType(ParserMiniCSharp.StringTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringType}
	 * labeled alternative in {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitStringType(ParserMiniCSharp.StringTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code firstDesignStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterFirstDesignStatement(ParserMiniCSharp.FirstDesignStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code firstDesignStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitFirstDesignStatement(ParserMiniCSharp.FirstDesignStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ifStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(ParserMiniCSharp.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ifStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(ParserMiniCSharp.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code forStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(ParserMiniCSharp.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code forStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(ParserMiniCSharp.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code whileStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(ParserMiniCSharp.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code whileStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(ParserMiniCSharp.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code foreachStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterForeachStatement(ParserMiniCSharp.ForeachStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code foreachStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitForeachStatement(ParserMiniCSharp.ForeachStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code breakStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterBreakStatement(ParserMiniCSharp.BreakStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code breakStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitBreakStatement(ParserMiniCSharp.BreakStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code returnStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(ParserMiniCSharp.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code returnStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(ParserMiniCSharp.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code readStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterReadStatement(ParserMiniCSharp.ReadStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code readStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitReadStatement(ParserMiniCSharp.ReadStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code writeStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterWriteStatement(ParserMiniCSharp.WriteStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code writeStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitWriteStatement(ParserMiniCSharp.WriteStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code blockStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatement(ParserMiniCSharp.BlockStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code blockStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatement(ParserMiniCSharp.BlockStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code semicolonStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterSemicolonStatement(ParserMiniCSharp.SemicolonStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code semicolonStatement}
	 * labeled alternative in {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitSemicolonStatement(ParserMiniCSharp.SemicolonStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(ParserMiniCSharp.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(ParserMiniCSharp.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#actPars}.
	 * @param ctx the parse tree
	 */
	void enterActPars(ParserMiniCSharp.ActParsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#actPars}.
	 * @param ctx the parse tree
	 */
	void exitActPars(ParserMiniCSharp.ActParsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(ParserMiniCSharp.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(ParserMiniCSharp.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#condTerm}.
	 * @param ctx the parse tree
	 */
	void enterCondTerm(ParserMiniCSharp.CondTermContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#condTerm}.
	 * @param ctx the parse tree
	 */
	void exitCondTerm(ParserMiniCSharp.CondTermContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#condFact}.
	 * @param ctx the parse tree
	 */
	void enterCondFact(ParserMiniCSharp.CondFactContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#condFact}.
	 * @param ctx the parse tree
	 */
	void exitCondFact(ParserMiniCSharp.CondFactContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(ParserMiniCSharp.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(ParserMiniCSharp.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(ParserMiniCSharp.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(ParserMiniCSharp.TermContext ctx);
	/**
	 * Enter a parse tree produced by the {@code designatorFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterDesignatorFactor(ParserMiniCSharp.DesignatorFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code designatorFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitDesignatorFactor(ParserMiniCSharp.DesignatorFactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numberFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterNumberFactor(ParserMiniCSharp.NumberFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numberFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitNumberFactor(ParserMiniCSharp.NumberFactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code charconstFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterCharconstFactor(ParserMiniCSharp.CharconstFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code charconstFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitCharconstFactor(ParserMiniCSharp.CharconstFactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringConstFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterStringConstFactor(ParserMiniCSharp.StringConstFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringConstFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitStringConstFactor(ParserMiniCSharp.StringConstFactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code boolFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterBoolFactor(ParserMiniCSharp.BoolFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code boolFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitBoolFactor(ParserMiniCSharp.BoolFactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code newFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterNewFactor(ParserMiniCSharp.NewFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code newFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitNewFactor(ParserMiniCSharp.NewFactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code expressionFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterExpressionFactor(ParserMiniCSharp.ExpressionFactorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code expressionFactor}
	 * labeled alternative in {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitExpressionFactor(ParserMiniCSharp.ExpressionFactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#designator}.
	 * @param ctx the parse tree
	 */
	void enterDesignator(ParserMiniCSharp.DesignatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#designator}.
	 * @param ctx the parse tree
	 */
	void exitDesignator(ParserMiniCSharp.DesignatorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code equalEqualOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterEqualEqualOp(ParserMiniCSharp.EqualEqualOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code equalEqualOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitEqualEqualOp(ParserMiniCSharp.EqualEqualOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inequalityOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterInequalityOp(ParserMiniCSharp.InequalityOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code inequalityOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitInequalityOp(ParserMiniCSharp.InequalityOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code greaterThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterGreaterThanOp(ParserMiniCSharp.GreaterThanOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code greaterThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitGreaterThanOp(ParserMiniCSharp.GreaterThanOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code greaterOrEqualThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterGreaterOrEqualThanOp(ParserMiniCSharp.GreaterOrEqualThanOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code greaterOrEqualThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitGreaterOrEqualThanOp(ParserMiniCSharp.GreaterOrEqualThanOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lessThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterLessThanOp(ParserMiniCSharp.LessThanOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lessThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitLessThanOp(ParserMiniCSharp.LessThanOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lessOrEqualThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterLessOrEqualThanOp(ParserMiniCSharp.LessOrEqualThanOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lessOrEqualThanOp}
	 * labeled alternative in {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitLessOrEqualThanOp(ParserMiniCSharp.LessOrEqualThanOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sumOp}
	 * labeled alternative in {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 */
	void enterSumOp(ParserMiniCSharp.SumOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sumOp}
	 * labeled alternative in {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 */
	void exitSumOp(ParserMiniCSharp.SumOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subsOp}
	 * labeled alternative in {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 */
	void enterSubsOp(ParserMiniCSharp.SubsOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subsOp}
	 * labeled alternative in {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 */
	void exitSubsOp(ParserMiniCSharp.SubsOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void enterMultOp(ParserMiniCSharp.MultOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void exitMultOp(ParserMiniCSharp.MultOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code divOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void enterDivOp(ParserMiniCSharp.DivOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code divOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void exitDivOp(ParserMiniCSharp.DivOpContext ctx);
	/**
	 * Enter a parse tree produced by the {@code percentOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void enterPercentOp(ParserMiniCSharp.PercentOpContext ctx);
	/**
	 * Exit a parse tree produced by the {@code percentOp}
	 * labeled alternative in {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void exitPercentOp(ParserMiniCSharp.PercentOpContext ctx);
}