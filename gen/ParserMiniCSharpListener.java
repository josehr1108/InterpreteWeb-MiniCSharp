// Generated from C:/Users/Andres/Documents/Compiladores/Proyecto/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
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
	 * Enter a parse tree produced by {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void enterType(ParserMiniCSharp.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 */
	void exitType(ParserMiniCSharp.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(ParserMiniCSharp.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(ParserMiniCSharp.StatementContext ctx);
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
	 * Enter a parse tree produced by {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(ParserMiniCSharp.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(ParserMiniCSharp.FactorContext ctx);
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
	 * Enter a parse tree produced by {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void enterRelop(ParserMiniCSharp.RelopContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 */
	void exitRelop(ParserMiniCSharp.RelopContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 */
	void enterAddop(ParserMiniCSharp.AddopContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 */
	void exitAddop(ParserMiniCSharp.AddopContext ctx);
	/**
	 * Enter a parse tree produced by {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void enterMulop(ParserMiniCSharp.MulopContext ctx);
	/**
	 * Exit a parse tree produced by {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 */
	void exitMulop(ParserMiniCSharp.MulopContext ctx);
}