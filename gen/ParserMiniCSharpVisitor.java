// Generated from C:/Users/Andres/Documents/Compiladores/Proyecto/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
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
	 * Visit a parse tree produced by {@link ParserMiniCSharp#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType(ParserMiniCSharp.TypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(ParserMiniCSharp.StatementContext ctx);
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
	 * Visit a parse tree produced by {@link ParserMiniCSharp#factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFactor(ParserMiniCSharp.FactorContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#designator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDesignator(ParserMiniCSharp.DesignatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#relop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRelop(ParserMiniCSharp.RelopContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#addop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAddop(ParserMiniCSharp.AddopContext ctx);
	/**
	 * Visit a parse tree produced by {@link ParserMiniCSharp#mulop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMulop(ParserMiniCSharp.MulopContext ctx);
}