// Generated from c:\Users\Andres\Documents\Compiladores\Proyecto\InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ParserMiniCSharp extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CLASS=1, CONST=2, CHAR=3, INT=4, FLOAT=5, BOOL=6, STRING=7, IF=8, ELSE=9, 
		FOR=10, WHILE=11, FOREACH=12, BREAK=13, RETURN=14, READ=15, WRITE=16, 
		IN=17, NEW=18, TRUE=19, FALSE=20, VOID=21, RIGHT_PARENTHESIS=22, LEFT_PARENTHESIS=23, 
		RIGHT_SQUARE_BRACKET=24, LEFT_SQUARE_BRACKET=25, RIGHT_CURLY_BRACKET=26, 
		LEFT_CURLY_BRACKET=27, EXCLAMATION_UP=28, EXCLAMATION_DOWN=29, DOUBLE_QUOTATION_MARKS=30, 
		NUMBER_SIGN=31, DOLLAR_SIGN=32, AMPERSAND=33, QUOTATION_MARKS=34, COMMA=35, 
		DOT=36, COLON=37, SEMICOLON=38, QUESTION_SIGN=39, AT=40, UNDERSCORE=41, 
		SUM=42, SUBTRACTION=43, MULTIPLICATION=44, DIVISION=45, PERCENTAGE=46, 
		ASIGN=47, EQUAL_EQUAL=48, INEQUALITY=49, GREATER_THAN=50, GREATER_THAN_OR_EQUAL=51, 
		LESS_THAN=52, LESS_THAN_OR_EQUAL=53, AND=54, OR=55, PLUS_PLUS=56, MINUS_MINUS=57, 
		IDENT=58, NUMBER=59, CHAR_CONST=60, PRINTABLE_CHAR=61, LETTER=62, DIGIT=63, 
		LINE_COMMENT=64, SPECIAL_COMMENT=65, WS=66;
	public static final int
		RULE_program = 0, RULE_constDecl = 1, RULE_varDecl = 2, RULE_classDecl = 3, 
		RULE_methodDecl = 4, RULE_formPars = 5, RULE_type = 6, RULE_statement = 7, 
		RULE_block = 8, RULE_actPars = 9, RULE_condition = 10, RULE_condTerm = 11, 
		RULE_condFact = 12, RULE_expr = 13, RULE_term = 14, RULE_factor = 15, 
		RULE_designator = 16, RULE_relop = 17, RULE_addop = 18, RULE_mulop = 19;
	public static final String[] ruleNames = {
		"program", "constDecl", "varDecl", "classDecl", "methodDecl", "formPars", 
		"type", "statement", "block", "actPars", "condition", "condTerm", "condFact", 
		"expr", "term", "factor", "designator", "relop", "addop", "mulop"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'char'", "'int'", "'float'", "'bool'", "'string'", 
		"'if'", "'else'", "'for'", "'while'", "'foreach'", "'break'", "'return'", 
		"'read'", "'write'", "'in'", "'new'", "'true'", "'false'", "'void'", "')'", 
		"'('", "']'", "'['", "'}'", "'{'", "'\u00C2\u00A1'", "'!'", "'\"'", "'#'", 
		"'$'", "'&'", "'''", "','", "'.'", "':'", "';'", "'?'", "'@'", "'_'", 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'=='", "'!='", "'>'", "'>='", 
		"'<'", "'<='", "'&&'", "'||'", "'++'", "'--'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", "STRING", "IF", 
		"ELSE", "FOR", "WHILE", "FOREACH", "BREAK", "RETURN", "READ", "WRITE", 
		"IN", "NEW", "TRUE", "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
		"RIGHT_SQUARE_BRACKET", "LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", 
		"LEFT_CURLY_BRACKET", "EXCLAMATION_UP", "EXCLAMATION_DOWN", "DOUBLE_QUOTATION_MARKS", 
		"NUMBER_SIGN", "DOLLAR_SIGN", "AMPERSAND", "QUOTATION_MARKS", "COMMA", 
		"DOT", "COLON", "SEMICOLON", "QUESTION_SIGN", "AT", "UNDERSCORE", "SUM", 
		"SUBTRACTION", "MULTIPLICATION", "DIVISION", "PERCENTAGE", "ASIGN", "EQUAL_EQUAL", 
		"INEQUALITY", "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", 
		"AND", "OR", "PLUS_PLUS", "MINUS_MINUS", "IDENT", "NUMBER", "CHAR_CONST", 
		"PRINTABLE_CHAR", "LETTER", "DIGIT", "LINE_COMMENT", "SPECIAL_COMMENT", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ParserMiniCSharp.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ParserMiniCSharp(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(ParserMiniCSharp.CLASS, 0); }
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public TerminalNode LEFT_CURLY_BRACKET() { return getToken(ParserMiniCSharp.LEFT_CURLY_BRACKET, 0); }
		public TerminalNode RIGHT_CURLY_BRACKET() { return getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, 0); }
		public TerminalNode EOF() { return getToken(ParserMiniCSharp.EOF, 0); }
		public List<ConstDeclContext> constDecl() {
			return getRuleContexts(ConstDeclContext.class);
		}
		public ConstDeclContext constDecl(int i) {
			return getRuleContext(ConstDeclContext.class,i);
		}
		public List<VarDeclContext> varDecl() {
			return getRuleContexts(VarDeclContext.class);
		}
		public VarDeclContext varDecl(int i) {
			return getRuleContext(VarDeclContext.class,i);
		}
		public List<ClassDeclContext> classDecl() {
			return getRuleContexts(ClassDeclContext.class);
		}
		public ClassDeclContext classDecl(int i) {
			return getRuleContext(ClassDeclContext.class,i);
		}
		public List<MethodDeclContext> methodDecl() {
			return getRuleContexts(MethodDeclContext.class);
		}
		public MethodDeclContext methodDecl(int i) {
			return getRuleContext(MethodDeclContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(CLASS);
			setState(41);
			match(IDENT);
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				setState(45);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CONST:
					{
					setState(42);
					constDecl();
					}
					break;
				case CHAR:
				case INT:
				case FLOAT:
				case BOOL:
				case STRING:
				case IDENT:
					{
					setState(43);
					varDecl();
					}
					break;
				case CLASS:
					{
					setState(44);
					classDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(49);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(50);
			match(LEFT_CURLY_BRACKET);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << VOID) | (1L << IDENT))) != 0)) {
				{
				{
				setState(51);
				methodDecl();
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57);
			match(RIGHT_CURLY_BRACKET);
			setState(58);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstDeclContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(ParserMiniCSharp.CONST, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public TerminalNode ASIGN() { return getToken(ParserMiniCSharp.ASIGN, 0); }
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public TerminalNode NUMBER() { return getToken(ParserMiniCSharp.NUMBER, 0); }
		public TerminalNode CHAR_CONST() { return getToken(ParserMiniCSharp.CHAR_CONST, 0); }
		public ConstDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDecl; }
	}

	public final ConstDeclContext constDecl() throws RecognitionException {
		ConstDeclContext _localctx = new ConstDeclContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_constDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(CONST);
			setState(61);
			type();
			setState(62);
			match(IDENT);
			setState(63);
			match(ASIGN);
			setState(64);
			_la = _input.LA(1);
			if ( !(_la==NUMBER || _la==CHAR_CONST) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(65);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDeclContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public List<TerminalNode> IDENT() { return getTokens(ParserMiniCSharp.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(ParserMiniCSharp.IDENT, i);
		}
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public TerminalNode LEFT_SQUARE_BRACKET() { return getToken(ParserMiniCSharp.LEFT_SQUARE_BRACKET, 0); }
		public TerminalNode RIGHT_SQUARE_BRACKET() { return getToken(ParserMiniCSharp.RIGHT_SQUARE_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ParserMiniCSharp.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ParserMiniCSharp.COMMA, i);
		}
		public VarDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDecl; }
	}

	public final VarDeclContext varDecl() throws RecognitionException {
		VarDeclContext _localctx = new VarDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_varDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			type();
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LEFT_SQUARE_BRACKET) {
				{
				setState(68);
				match(LEFT_SQUARE_BRACKET);
				setState(69);
				match(RIGHT_SQUARE_BRACKET);
				}
			}

			setState(72);
			match(IDENT);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(73);
				match(COMMA);
				setState(74);
				match(IDENT);
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(80);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(ParserMiniCSharp.CLASS, 0); }
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public TerminalNode LEFT_CURLY_BRACKET() { return getToken(ParserMiniCSharp.LEFT_CURLY_BRACKET, 0); }
		public TerminalNode RIGHT_CURLY_BRACKET() { return getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, 0); }
		public List<VarDeclContext> varDecl() {
			return getRuleContexts(VarDeclContext.class);
		}
		public VarDeclContext varDecl(int i) {
			return getRuleContext(VarDeclContext.class,i);
		}
		public ClassDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDecl; }
	}

	public final ClassDeclContext classDecl() throws RecognitionException {
		ClassDeclContext _localctx = new ClassDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_classDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(CLASS);
			setState(83);
			match(IDENT);
			setState(84);
			match(LEFT_CURLY_BRACKET);
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				{
				setState(85);
				varDecl();
				}
				}
				setState(90);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(91);
			match(RIGHT_CURLY_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodDeclContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode VOID() { return getToken(ParserMiniCSharp.VOID, 0); }
		public FormParsContext formPars() {
			return getRuleContext(FormParsContext.class,0);
		}
		public List<VarDeclContext> varDecl() {
			return getRuleContexts(VarDeclContext.class);
		}
		public VarDeclContext varDecl(int i) {
			return getRuleContext(VarDeclContext.class,i);
		}
		public MethodDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDecl; }
	}

	public final MethodDeclContext methodDecl() throws RecognitionException {
		MethodDeclContext _localctx = new MethodDeclContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_methodDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
			case INT:
			case FLOAT:
			case BOOL:
			case STRING:
			case IDENT:
				{
				setState(93);
				type();
				}
				break;
			case VOID:
				{
				setState(94);
				match(VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(97);
			match(IDENT);
			setState(98);
			match(LEFT_PARENTHESIS);
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				setState(99);
				formPars();
				}
			}

			setState(102);
			match(RIGHT_PARENTHESIS);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				{
				setState(103);
				varDecl();
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormParsContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> IDENT() { return getTokens(ParserMiniCSharp.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(ParserMiniCSharp.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ParserMiniCSharp.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ParserMiniCSharp.COMMA, i);
		}
		public FormParsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formPars; }
	}

	public final FormParsContext formPars() throws RecognitionException {
		FormParsContext _localctx = new FormParsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_formPars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			type();
			setState(112);
			match(IDENT);
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(113);
				match(COMMA);
				setState(114);
				type();
				setState(115);
				match(IDENT);
				}
				}
				setState(121);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	 
		public TypeContext() { }
		public void copyFrom(TypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CharTypeContext extends TypeContext {
		public TerminalNode CHAR() { return getToken(ParserMiniCSharp.CHAR, 0); }
		public CharTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class FloatTypeContext extends TypeContext {
		public TerminalNode FLOAT() { return getToken(ParserMiniCSharp.FLOAT, 0); }
		public FloatTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class IdentTypeContext extends TypeContext {
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public IdentTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class IntTypeContext extends TypeContext {
		public TerminalNode INT() { return getToken(ParserMiniCSharp.INT, 0); }
		public IntTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class StringTypeContext extends TypeContext {
		public TerminalNode STRING() { return getToken(ParserMiniCSharp.STRING, 0); }
		public StringTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class BoolTypeContext extends TypeContext {
		public TerminalNode BOOL() { return getToken(ParserMiniCSharp.BOOL, 0); }
		public BoolTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_type);
		try {
			setState(128);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				_localctx = new IdentTypeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(122);
				match(IDENT);
				}
				break;
			case CHAR:
				_localctx = new CharTypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(123);
				match(CHAR);
				}
				break;
			case INT:
				_localctx = new IntTypeContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(124);
				match(INT);
				}
				break;
			case FLOAT:
				_localctx = new FloatTypeContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(125);
				match(FLOAT);
				}
				break;
			case BOOL:
				_localctx = new BoolTypeContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(126);
				match(BOOL);
				}
				break;
			case STRING:
				_localctx = new StringTypeContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(127);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class WhileStatementContext extends StatementContext {
		public TerminalNode WHILE() { return getToken(ParserMiniCSharp.WHILE, 0); }
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SemicolonStatementContext extends StatementContext {
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public SemicolonStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class WriteStatementContext extends StatementContext {
		public TerminalNode WRITE() { return getToken(ParserMiniCSharp.WRITE, 0); }
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public TerminalNode COMMA() { return getToken(ParserMiniCSharp.COMMA, 0); }
		public TerminalNode NUMBER() { return getToken(ParserMiniCSharp.NUMBER, 0); }
		public WriteStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForeachStatementContext extends StatementContext {
		public TerminalNode FOREACH() { return getToken(ParserMiniCSharp.FOREACH, 0); }
		public List<TerminalNode> RIGHT_PARENTHESIS() { return getTokens(ParserMiniCSharp.RIGHT_PARENTHESIS); }
		public TerminalNode RIGHT_PARENTHESIS(int i) {
			return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, i);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public List<TerminalNode> IDENT() { return getTokens(ParserMiniCSharp.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(ParserMiniCSharp.IDENT, i);
		}
		public TerminalNode IN() { return getToken(ParserMiniCSharp.IN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ForeachStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class BlockStatementContext extends StatementContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public BlockStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class FirstDesignStatementContext extends StatementContext {
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public TerminalNode ASIGN() { return getToken(ParserMiniCSharp.ASIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public TerminalNode PLUS_PLUS() { return getToken(ParserMiniCSharp.PLUS_PLUS, 0); }
		public TerminalNode MINUS_MINUS() { return getToken(ParserMiniCSharp.MINUS_MINUS, 0); }
		public ActParsContext actPars() {
			return getRuleContext(ActParsContext.class,0);
		}
		public FirstDesignStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForStatementContext extends StatementContext {
		public TerminalNode FOR() { return getToken(ParserMiniCSharp.FOR, 0); }
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(ParserMiniCSharp.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(ParserMiniCSharp.SEMICOLON, i);
		}
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public ForStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class BreakStatementContext extends StatementContext {
		public TerminalNode BREAK() { return getToken(ParserMiniCSharp.BREAK, 0); }
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public BreakStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ReadStatementContext extends StatementContext {
		public TerminalNode READ() { return getToken(ParserMiniCSharp.READ, 0); }
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public ReadStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class IfStatementContext extends StatementContext {
		public TerminalNode IF() { return getToken(ParserMiniCSharp.IF, 0); }
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(ParserMiniCSharp.ELSE, 0); }
		public IfStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ReturnStatementContext extends StatementContext {
		public TerminalNode RETURN() { return getToken(ParserMiniCSharp.RETURN, 0); }
		public TerminalNode SEMICOLON() { return getToken(ParserMiniCSharp.SEMICOLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_statement);
		int _la;
		try {
			setState(206);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				_localctx = new FirstDesignStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				designator();
				setState(140);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ASIGN:
					{
					setState(131);
					match(ASIGN);
					setState(132);
					expr();
					}
					break;
				case LEFT_PARENTHESIS:
					{
					setState(133);
					match(LEFT_PARENTHESIS);
					setState(135);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
						{
						setState(134);
						actPars();
						}
					}

					setState(137);
					match(RIGHT_PARENTHESIS);
					}
					break;
				case PLUS_PLUS:
					{
					setState(138);
					match(PLUS_PLUS);
					}
					break;
				case MINUS_MINUS:
					{
					setState(139);
					match(MINUS_MINUS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(142);
				match(SEMICOLON);
				}
				break;
			case IF:
				_localctx = new IfStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(144);
				match(IF);
				setState(145);
				match(LEFT_PARENTHESIS);
				setState(146);
				condition();
				setState(147);
				match(RIGHT_PARENTHESIS);
				setState(148);
				statement();
				{
				setState(149);
				match(ELSE);
				setState(150);
				statement();
				}
				}
				break;
			case FOR:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(152);
				match(FOR);
				setState(153);
				match(LEFT_PARENTHESIS);
				setState(154);
				expr();
				setState(155);
				match(SEMICOLON);
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
					{
					setState(156);
					condition();
					}
				}

				setState(159);
				match(SEMICOLON);
				setState(161);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << FOREACH) | (1L << BREAK) | (1L << RETURN) | (1L << READ) | (1L << WRITE) | (1L << LEFT_CURLY_BRACKET) | (1L << SEMICOLON) | (1L << IDENT))) != 0)) {
					{
					setState(160);
					statement();
					}
				}

				setState(163);
				match(RIGHT_PARENTHESIS);
				setState(164);
				statement();
				}
				break;
			case WHILE:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(166);
				match(WHILE);
				setState(167);
				match(LEFT_PARENTHESIS);
				setState(168);
				condition();
				setState(169);
				match(RIGHT_PARENTHESIS);
				setState(170);
				statement();
				}
				break;
			case FOREACH:
				_localctx = new ForeachStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(172);
				match(FOREACH);
				setState(173);
				match(RIGHT_PARENTHESIS);
				setState(174);
				type();
				setState(175);
				match(IDENT);
				setState(176);
				match(IN);
				setState(177);
				match(IDENT);
				setState(178);
				match(RIGHT_PARENTHESIS);
				setState(179);
				block();
				}
				break;
			case BREAK:
				_localctx = new BreakStatementContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(181);
				match(BREAK);
				setState(182);
				match(SEMICOLON);
				}
				break;
			case RETURN:
				_localctx = new ReturnStatementContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(183);
				match(RETURN);
				setState(185);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
					{
					setState(184);
					expr();
					}
				}

				setState(187);
				match(SEMICOLON);
				}
				break;
			case READ:
				_localctx = new ReadStatementContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(188);
				match(READ);
				setState(189);
				match(LEFT_PARENTHESIS);
				setState(190);
				designator();
				setState(191);
				match(RIGHT_PARENTHESIS);
				setState(192);
				match(SEMICOLON);
				}
				break;
			case WRITE:
				_localctx = new WriteStatementContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(194);
				match(WRITE);
				setState(195);
				match(LEFT_PARENTHESIS);
				setState(196);
				expr();
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(197);
					match(COMMA);
					setState(198);
					match(NUMBER);
					}
				}

				setState(201);
				match(RIGHT_PARENTHESIS);
				setState(202);
				match(SEMICOLON);
				}
				break;
			case LEFT_CURLY_BRACKET:
				_localctx = new BlockStatementContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(204);
				block();
				}
				break;
			case SEMICOLON:
				_localctx = new SemicolonStatementContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(205);
				match(SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LEFT_CURLY_BRACKET() { return getToken(ParserMiniCSharp.LEFT_CURLY_BRACKET, 0); }
		public TerminalNode RIGHT_CURLY_BRACKET() { return getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(LEFT_CURLY_BRACKET);
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << FOREACH) | (1L << BREAK) | (1L << RETURN) | (1L << READ) | (1L << WRITE) | (1L << LEFT_CURLY_BRACKET) | (1L << SEMICOLON) | (1L << IDENT))) != 0)) {
				{
				{
				setState(209);
				statement();
				}
				}
				setState(214);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(215);
			match(RIGHT_CURLY_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActParsContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ParserMiniCSharp.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ParserMiniCSharp.COMMA, i);
		}
		public ActParsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actPars; }
	}

	public final ActParsContext actPars() throws RecognitionException {
		ActParsContext _localctx = new ActParsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_actPars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			expr();
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(218);
				match(COMMA);
				setState(219);
				expr();
				}
				}
				setState(224);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public List<CondTermContext> condTerm() {
			return getRuleContexts(CondTermContext.class);
		}
		public CondTermContext condTerm(int i) {
			return getRuleContext(CondTermContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(ParserMiniCSharp.OR); }
		public TerminalNode OR(int i) {
			return getToken(ParserMiniCSharp.OR, i);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			condTerm();
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(226);
				match(OR);
				setState(227);
				condTerm();
				}
				}
				setState(232);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CondTermContext extends ParserRuleContext {
		public List<CondFactContext> condFact() {
			return getRuleContexts(CondFactContext.class);
		}
		public CondFactContext condFact(int i) {
			return getRuleContext(CondFactContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(ParserMiniCSharp.AND); }
		public TerminalNode AND(int i) {
			return getToken(ParserMiniCSharp.AND, i);
		}
		public CondTermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condTerm; }
	}

	public final CondTermContext condTerm() throws RecognitionException {
		CondTermContext _localctx = new CondTermContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_condTerm);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			condFact();
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(234);
				match(AND);
				setState(235);
				condFact();
				}
				}
				setState(240);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CondFactContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public RelopContext relop() {
			return getRuleContext(RelopContext.class,0);
		}
		public CondFactContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condFact; }
	}

	public final CondFactContext condFact() throws RecognitionException {
		CondFactContext _localctx = new CondFactContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_condFact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			expr();
			setState(242);
			relop();
			setState(243);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public TerminalNode SUBTRACTION() { return getToken(ParserMiniCSharp.SUBTRACTION, 0); }
		public List<AddopContext> addop() {
			return getRuleContexts(AddopContext.class);
		}
		public AddopContext addop(int i) {
			return getRuleContext(AddopContext.class,i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SUBTRACTION) {
				{
				setState(245);
				match(SUBTRACTION);
				}
			}

			setState(248);
			term();
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SUM || _la==SUBTRACTION) {
				{
				{
				setState(249);
				addop();
				setState(250);
				term();
				}
				}
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public List<MulopContext> mulop() {
			return getRuleContexts(MulopContext.class);
		}
		public MulopContext mulop(int i) {
			return getRuleContext(MulopContext.class,i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			factor();
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULTIPLICATION) | (1L << DIVISION) | (1L << PERCENTAGE))) != 0)) {
				{
				{
				setState(258);
				mulop();
				setState(259);
				factor();
				}
				}
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorContext extends ParserRuleContext {
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	 
		public FactorContext() { }
		public void copyFrom(FactorContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NumberFactorContext extends FactorContext {
		public TerminalNode NUMBER() { return getToken(ParserMiniCSharp.NUMBER, 0); }
		public NumberFactorContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class DesignatorFactorContext extends FactorContext {
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public ActParsContext actPars() {
			return getRuleContext(ActParsContext.class,0);
		}
		public DesignatorFactorContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class NewFactorContext extends FactorContext {
		public TerminalNode NEW() { return getToken(ParserMiniCSharp.NEW, 0); }
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public NewFactorContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class CharconstFactorContext extends FactorContext {
		public TerminalNode CHAR_CONST() { return getToken(ParserMiniCSharp.CHAR_CONST, 0); }
		public CharconstFactorContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionFactorContext extends FactorContext {
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public ExpressionFactorContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class BoolFactorContext extends FactorContext {
		public TerminalNode TRUE() { return getToken(ParserMiniCSharp.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ParserMiniCSharp.FALSE, 0); }
		public BoolFactorContext(FactorContext ctx) { copyFrom(ctx); }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_factor);
		int _la;
		try {
			setState(282);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				_localctx = new DesignatorFactorContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(266);
				designator();
				{
				setState(267);
				match(LEFT_PARENTHESIS);
				setState(269);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
					{
					setState(268);
					actPars();
					}
				}

				setState(271);
				match(RIGHT_PARENTHESIS);
				}
				}
				break;
			case NUMBER:
				_localctx = new NumberFactorContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(273);
				match(NUMBER);
				}
				break;
			case CHAR_CONST:
				_localctx = new CharconstFactorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(274);
				match(CHAR_CONST);
				}
				break;
			case TRUE:
			case FALSE:
				_localctx = new BoolFactorContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(275);
				_la = _input.LA(1);
				if ( !(_la==TRUE || _la==FALSE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case NEW:
				_localctx = new NewFactorContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(276);
				match(NEW);
				setState(277);
				match(IDENT);
				}
				break;
			case LEFT_PARENTHESIS:
				_localctx = new ExpressionFactorContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(278);
				match(LEFT_PARENTHESIS);
				setState(279);
				expr();
				setState(280);
				match(RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DesignatorContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(ParserMiniCSharp.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(ParserMiniCSharp.IDENT, i);
		}
		public List<TerminalNode> AT() { return getTokens(ParserMiniCSharp.AT); }
		public TerminalNode AT(int i) {
			return getToken(ParserMiniCSharp.AT, i);
		}
		public List<TerminalNode> LEFT_SQUARE_BRACKET() { return getTokens(ParserMiniCSharp.LEFT_SQUARE_BRACKET); }
		public TerminalNode LEFT_SQUARE_BRACKET(int i) {
			return getToken(ParserMiniCSharp.LEFT_SQUARE_BRACKET, i);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> RIGHT_SQUARE_BRACKET() { return getTokens(ParserMiniCSharp.RIGHT_SQUARE_BRACKET); }
		public TerminalNode RIGHT_SQUARE_BRACKET(int i) {
			return getToken(ParserMiniCSharp.RIGHT_SQUARE_BRACKET, i);
		}
		public DesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designator; }
	}

	public final DesignatorContext designator() throws RecognitionException {
		DesignatorContext _localctx = new DesignatorContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_designator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			match(IDENT);
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LEFT_SQUARE_BRACKET || _la==AT) {
				{
				setState(291);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case AT:
					{
					setState(285);
					match(AT);
					setState(286);
					match(IDENT);
					}
					break;
				case LEFT_SQUARE_BRACKET:
					{
					setState(287);
					match(LEFT_SQUARE_BRACKET);
					setState(288);
					expr();
					setState(289);
					match(RIGHT_SQUARE_BRACKET);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelopContext extends ParserRuleContext {
		public RelopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relop; }
	 
		public RelopContext() { }
		public void copyFrom(RelopContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LessOrEqualThanOpContext extends RelopContext {
		public TerminalNode LESS_THAN_OR_EQUAL() { return getToken(ParserMiniCSharp.LESS_THAN_OR_EQUAL, 0); }
		public LessOrEqualThanOpContext(RelopContext ctx) { copyFrom(ctx); }
	}
	public static class GreaterThanOpContext extends RelopContext {
		public TerminalNode GREATER_THAN() { return getToken(ParserMiniCSharp.GREATER_THAN, 0); }
		public GreaterThanOpContext(RelopContext ctx) { copyFrom(ctx); }
	}
	public static class LessThanOpContext extends RelopContext {
		public TerminalNode LESS_THAN() { return getToken(ParserMiniCSharp.LESS_THAN, 0); }
		public LessThanOpContext(RelopContext ctx) { copyFrom(ctx); }
	}
	public static class EqualEqualOpContext extends RelopContext {
		public TerminalNode EQUAL_EQUAL() { return getToken(ParserMiniCSharp.EQUAL_EQUAL, 0); }
		public EqualEqualOpContext(RelopContext ctx) { copyFrom(ctx); }
	}
	public static class GreaterOrEqualThanOpContext extends RelopContext {
		public TerminalNode GREATER_THAN_OR_EQUAL() { return getToken(ParserMiniCSharp.GREATER_THAN_OR_EQUAL, 0); }
		public GreaterOrEqualThanOpContext(RelopContext ctx) { copyFrom(ctx); }
	}
	public static class InequalityOpContext extends RelopContext {
		public TerminalNode INEQUALITY() { return getToken(ParserMiniCSharp.INEQUALITY, 0); }
		public InequalityOpContext(RelopContext ctx) { copyFrom(ctx); }
	}

	public final RelopContext relop() throws RecognitionException {
		RelopContext _localctx = new RelopContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_relop);
		try {
			setState(302);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EQUAL_EQUAL:
				_localctx = new EqualEqualOpContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(296);
				match(EQUAL_EQUAL);
				}
				break;
			case INEQUALITY:
				_localctx = new InequalityOpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(297);
				match(INEQUALITY);
				}
				break;
			case GREATER_THAN:
				_localctx = new GreaterThanOpContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(298);
				match(GREATER_THAN);
				}
				break;
			case GREATER_THAN_OR_EQUAL:
				_localctx = new GreaterOrEqualThanOpContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(299);
				match(GREATER_THAN_OR_EQUAL);
				}
				break;
			case LESS_THAN:
				_localctx = new LessThanOpContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(300);
				match(LESS_THAN);
				}
				break;
			case LESS_THAN_OR_EQUAL:
				_localctx = new LessOrEqualThanOpContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(301);
				match(LESS_THAN_OR_EQUAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddopContext extends ParserRuleContext {
		public AddopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addop; }
	 
		public AddopContext() { }
		public void copyFrom(AddopContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SumOpContext extends AddopContext {
		public TerminalNode SUM() { return getToken(ParserMiniCSharp.SUM, 0); }
		public SumOpContext(AddopContext ctx) { copyFrom(ctx); }
	}
	public static class SubsOpContext extends AddopContext {
		public TerminalNode SUBTRACTION() { return getToken(ParserMiniCSharp.SUBTRACTION, 0); }
		public SubsOpContext(AddopContext ctx) { copyFrom(ctx); }
	}

	public final AddopContext addop() throws RecognitionException {
		AddopContext _localctx = new AddopContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_addop);
		try {
			setState(306);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SUM:
				_localctx = new SumOpContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(304);
				match(SUM);
				}
				break;
			case SUBTRACTION:
				_localctx = new SubsOpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(305);
				match(SUBTRACTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MulopContext extends ParserRuleContext {
		public MulopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mulop; }
	 
		public MulopContext() { }
		public void copyFrom(MulopContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DivOpContext extends MulopContext {
		public TerminalNode DIVISION() { return getToken(ParserMiniCSharp.DIVISION, 0); }
		public DivOpContext(MulopContext ctx) { copyFrom(ctx); }
	}
	public static class MultOpContext extends MulopContext {
		public TerminalNode MULTIPLICATION() { return getToken(ParserMiniCSharp.MULTIPLICATION, 0); }
		public MultOpContext(MulopContext ctx) { copyFrom(ctx); }
	}
	public static class PercentOpContext extends MulopContext {
		public TerminalNode PERCENTAGE() { return getToken(ParserMiniCSharp.PERCENTAGE, 0); }
		public PercentOpContext(MulopContext ctx) { copyFrom(ctx); }
	}

	public final MulopContext mulop() throws RecognitionException {
		MulopContext _localctx = new MulopContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_mulop);
		try {
			setState(311);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MULTIPLICATION:
				_localctx = new MultOpContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(308);
				match(MULTIPLICATION);
				}
				break;
			case DIVISION:
				_localctx = new DivOpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(309);
				match(DIVISION);
				}
				break;
			case PERCENTAGE:
				_localctx = new PercentOpContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(310);
				match(PERCENTAGE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3D\u013c\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\2\3\2\3\2\7\2\60\n\2\f\2\16\2"+
		"\63\13\2\3\2\3\2\7\2\67\n\2\f\2\16\2:\13\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\4\3\4\3\4\5\4I\n\4\3\4\3\4\3\4\7\4N\n\4\f\4\16\4Q\13\4"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\7\5Y\n\5\f\5\16\5\\\13\5\3\5\3\5\3\6\3\6\5\6"+
		"b\n\6\3\6\3\6\3\6\5\6g\n\6\3\6\3\6\7\6k\n\6\f\6\16\6n\13\6\3\6\3\6\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\7\7x\n\7\f\7\16\7{\13\7\3\b\3\b\3\b\3\b\3\b\3\b\5"+
		"\b\u0083\n\b\3\t\3\t\3\t\3\t\3\t\5\t\u008a\n\t\3\t\3\t\3\t\5\t\u008f\n"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u00a0"+
		"\n\t\3\t\3\t\5\t\u00a4\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u00bc\n\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u00ca\n\t\3\t\3\t\3\t\3\t\3\t"+
		"\5\t\u00d1\n\t\3\n\3\n\7\n\u00d5\n\n\f\n\16\n\u00d8\13\n\3\n\3\n\3\13"+
		"\3\13\3\13\7\13\u00df\n\13\f\13\16\13\u00e2\13\13\3\f\3\f\3\f\7\f\u00e7"+
		"\n\f\f\f\16\f\u00ea\13\f\3\r\3\r\3\r\7\r\u00ef\n\r\f\r\16\r\u00f2\13\r"+
		"\3\16\3\16\3\16\3\16\3\17\5\17\u00f9\n\17\3\17\3\17\3\17\3\17\7\17\u00ff"+
		"\n\17\f\17\16\17\u0102\13\17\3\20\3\20\3\20\3\20\7\20\u0108\n\20\f\20"+
		"\16\20\u010b\13\20\3\21\3\21\3\21\5\21\u0110\n\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u011d\n\21\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\7\22\u0126\n\22\f\22\16\22\u0129\13\22\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\5\23\u0131\n\23\3\24\3\24\5\24\u0135\n\24\3\25\3\25\3"+
		"\25\5\25\u013a\n\25\3\25\2\2\26\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(\2\4\3\2=>\3\2\25\26\2\u0160\2*\3\2\2\2\4>\3\2\2\2\6E\3\2\2\2\b"+
		"T\3\2\2\2\na\3\2\2\2\fq\3\2\2\2\16\u0082\3\2\2\2\20\u00d0\3\2\2\2\22\u00d2"+
		"\3\2\2\2\24\u00db\3\2\2\2\26\u00e3\3\2\2\2\30\u00eb\3\2\2\2\32\u00f3\3"+
		"\2\2\2\34\u00f8\3\2\2\2\36\u0103\3\2\2\2 \u011c\3\2\2\2\"\u011e\3\2\2"+
		"\2$\u0130\3\2\2\2&\u0134\3\2\2\2(\u0139\3\2\2\2*+\7\3\2\2+\61\7<\2\2,"+
		"\60\5\4\3\2-\60\5\6\4\2.\60\5\b\5\2/,\3\2\2\2/-\3\2\2\2/.\3\2\2\2\60\63"+
		"\3\2\2\2\61/\3\2\2\2\61\62\3\2\2\2\62\64\3\2\2\2\63\61\3\2\2\2\648\7\35"+
		"\2\2\65\67\5\n\6\2\66\65\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3\2\2\29;\3"+
		"\2\2\2:8\3\2\2\2;<\7\34\2\2<=\7\2\2\3=\3\3\2\2\2>?\7\4\2\2?@\5\16\b\2"+
		"@A\7<\2\2AB\7\61\2\2BC\t\2\2\2CD\7(\2\2D\5\3\2\2\2EH\5\16\b\2FG\7\33\2"+
		"\2GI\7\32\2\2HF\3\2\2\2HI\3\2\2\2IJ\3\2\2\2JO\7<\2\2KL\7%\2\2LN\7<\2\2"+
		"MK\3\2\2\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2RS\7(\2\2"+
		"S\7\3\2\2\2TU\7\3\2\2UV\7<\2\2VZ\7\35\2\2WY\5\6\4\2XW\3\2\2\2Y\\\3\2\2"+
		"\2ZX\3\2\2\2Z[\3\2\2\2[]\3\2\2\2\\Z\3\2\2\2]^\7\34\2\2^\t\3\2\2\2_b\5"+
		"\16\b\2`b\7\27\2\2a_\3\2\2\2a`\3\2\2\2bc\3\2\2\2cd\7<\2\2df\7\31\2\2e"+
		"g\5\f\7\2fe\3\2\2\2fg\3\2\2\2gh\3\2\2\2hl\7\30\2\2ik\5\6\4\2ji\3\2\2\2"+
		"kn\3\2\2\2lj\3\2\2\2lm\3\2\2\2mo\3\2\2\2nl\3\2\2\2op\5\22\n\2p\13\3\2"+
		"\2\2qr\5\16\b\2ry\7<\2\2st\7%\2\2tu\5\16\b\2uv\7<\2\2vx\3\2\2\2ws\3\2"+
		"\2\2x{\3\2\2\2yw\3\2\2\2yz\3\2\2\2z\r\3\2\2\2{y\3\2\2\2|\u0083\7<\2\2"+
		"}\u0083\7\5\2\2~\u0083\7\6\2\2\177\u0083\7\7\2\2\u0080\u0083\7\b\2\2\u0081"+
		"\u0083\7\t\2\2\u0082|\3\2\2\2\u0082}\3\2\2\2\u0082~\3\2\2\2\u0082\177"+
		"\3\2\2\2\u0082\u0080\3\2\2\2\u0082\u0081\3\2\2\2\u0083\17\3\2\2\2\u0084"+
		"\u008e\5\"\22\2\u0085\u0086\7\61\2\2\u0086\u008f\5\34\17\2\u0087\u0089"+
		"\7\31\2\2\u0088\u008a\5\24\13\2\u0089\u0088\3\2\2\2\u0089\u008a\3\2\2"+
		"\2\u008a\u008b\3\2\2\2\u008b\u008f\7\30\2\2\u008c\u008f\7:\2\2\u008d\u008f"+
		"\7;\2\2\u008e\u0085\3\2\2\2\u008e\u0087\3\2\2\2\u008e\u008c\3\2\2\2\u008e"+
		"\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090\u0091\7(\2\2\u0091\u00d1\3\2"+
		"\2\2\u0092\u0093\7\n\2\2\u0093\u0094\7\31\2\2\u0094\u0095\5\26\f\2\u0095"+
		"\u0096\7\30\2\2\u0096\u0097\5\20\t\2\u0097\u0098\7\13\2\2\u0098\u0099"+
		"\5\20\t\2\u0099\u00d1\3\2\2\2\u009a\u009b\7\f\2\2\u009b\u009c\7\31\2\2"+
		"\u009c\u009d\5\34\17\2\u009d\u009f\7(\2\2\u009e\u00a0\5\26\f\2\u009f\u009e"+
		"\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a3\7(\2\2\u00a2"+
		"\u00a4\5\20\t\2\u00a3\u00a2\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a5\3"+
		"\2\2\2\u00a5\u00a6\7\30\2\2\u00a6\u00a7\5\20\t\2\u00a7\u00d1\3\2\2\2\u00a8"+
		"\u00a9\7\r\2\2\u00a9\u00aa\7\31\2\2\u00aa\u00ab\5\26\f\2\u00ab\u00ac\7"+
		"\30\2\2\u00ac\u00ad\5\20\t\2\u00ad\u00d1\3\2\2\2\u00ae\u00af\7\16\2\2"+
		"\u00af\u00b0\7\30\2\2\u00b0\u00b1\5\16\b\2\u00b1\u00b2\7<\2\2\u00b2\u00b3"+
		"\7\23\2\2\u00b3\u00b4\7<\2\2\u00b4\u00b5\7\30\2\2\u00b5\u00b6\5\22\n\2"+
		"\u00b6\u00d1\3\2\2\2\u00b7\u00b8\7\17\2\2\u00b8\u00d1\7(\2\2\u00b9\u00bb"+
		"\7\20\2\2\u00ba\u00bc\5\34\17\2\u00bb\u00ba\3\2\2\2\u00bb\u00bc\3\2\2"+
		"\2\u00bc\u00bd\3\2\2\2\u00bd\u00d1\7(\2\2\u00be\u00bf\7\21\2\2\u00bf\u00c0"+
		"\7\31\2\2\u00c0\u00c1\5\"\22\2\u00c1\u00c2\7\30\2\2\u00c2\u00c3\7(\2\2"+
		"\u00c3\u00d1\3\2\2\2\u00c4\u00c5\7\22\2\2\u00c5\u00c6\7\31\2\2\u00c6\u00c9"+
		"\5\34\17\2\u00c7\u00c8\7%\2\2\u00c8\u00ca\7=\2\2\u00c9\u00c7\3\2\2\2\u00c9"+
		"\u00ca\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\7\30\2\2\u00cc\u00cd\7"+
		"(\2\2\u00cd\u00d1\3\2\2\2\u00ce\u00d1\5\22\n\2\u00cf\u00d1\7(\2\2\u00d0"+
		"\u0084\3\2\2\2\u00d0\u0092\3\2\2\2\u00d0\u009a\3\2\2\2\u00d0\u00a8\3\2"+
		"\2\2\u00d0\u00ae\3\2\2\2\u00d0\u00b7\3\2\2\2\u00d0\u00b9\3\2\2\2\u00d0"+
		"\u00be\3\2\2\2\u00d0\u00c4\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00cf\3\2"+
		"\2\2\u00d1\21\3\2\2\2\u00d2\u00d6\7\35\2\2\u00d3\u00d5\5\20\t\2\u00d4"+
		"\u00d3\3\2\2\2\u00d5\u00d8\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2"+
		"\2\2\u00d7\u00d9\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d9\u00da\7\34\2\2\u00da"+
		"\23\3\2\2\2\u00db\u00e0\5\34\17\2\u00dc\u00dd\7%\2\2\u00dd\u00df\5\34"+
		"\17\2\u00de\u00dc\3\2\2\2\u00df\u00e2\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0"+
		"\u00e1\3\2\2\2\u00e1\25\3\2\2\2\u00e2\u00e0\3\2\2\2\u00e3\u00e8\5\30\r"+
		"\2\u00e4\u00e5\79\2\2\u00e5\u00e7\5\30\r\2\u00e6\u00e4\3\2\2\2\u00e7\u00ea"+
		"\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\27\3\2\2\2\u00ea"+
		"\u00e8\3\2\2\2\u00eb\u00f0\5\32\16\2\u00ec\u00ed\78\2\2\u00ed\u00ef\5"+
		"\32\16\2\u00ee\u00ec\3\2\2\2\u00ef\u00f2\3\2\2\2\u00f0\u00ee\3\2\2\2\u00f0"+
		"\u00f1\3\2\2\2\u00f1\31\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f3\u00f4\5\34\17"+
		"\2\u00f4\u00f5\5$\23\2\u00f5\u00f6\5\34\17\2\u00f6\33\3\2\2\2\u00f7\u00f9"+
		"\7-\2\2\u00f8\u00f7\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa"+
		"\u0100\5\36\20\2\u00fb\u00fc\5&\24\2\u00fc\u00fd\5\36\20\2\u00fd\u00ff"+
		"\3\2\2\2\u00fe\u00fb\3\2\2\2\u00ff\u0102\3\2\2\2\u0100\u00fe\3\2\2\2\u0100"+
		"\u0101\3\2\2\2\u0101\35\3\2\2\2\u0102\u0100\3\2\2\2\u0103\u0109\5 \21"+
		"\2\u0104\u0105\5(\25\2\u0105\u0106\5 \21\2\u0106\u0108\3\2\2\2\u0107\u0104"+
		"\3\2\2\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"\37\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u010d\5\"\22\2\u010d\u010f\7\31"+
		"\2\2\u010e\u0110\5\24\13\2\u010f\u010e\3\2\2\2\u010f\u0110\3\2\2\2\u0110"+
		"\u0111\3\2\2\2\u0111\u0112\7\30\2\2\u0112\u011d\3\2\2\2\u0113\u011d\7"+
		"=\2\2\u0114\u011d\7>\2\2\u0115\u011d\t\3\2\2\u0116\u0117\7\24\2\2\u0117"+
		"\u011d\7<\2\2\u0118\u0119\7\31\2\2\u0119\u011a\5\34\17\2\u011a\u011b\7"+
		"\30\2\2\u011b\u011d\3\2\2\2\u011c\u010c\3\2\2\2\u011c\u0113\3\2\2\2\u011c"+
		"\u0114\3\2\2\2\u011c\u0115\3\2\2\2\u011c\u0116\3\2\2\2\u011c\u0118\3\2"+
		"\2\2\u011d!\3\2\2\2\u011e\u0127\7<\2\2\u011f\u0120\7*\2\2\u0120\u0126"+
		"\7<\2\2\u0121\u0122\7\33\2\2\u0122\u0123\5\34\17\2\u0123\u0124\7\32\2"+
		"\2\u0124\u0126\3\2\2\2\u0125\u011f\3\2\2\2\u0125\u0121\3\2\2\2\u0126\u0129"+
		"\3\2\2\2\u0127\u0125\3\2\2\2\u0127\u0128\3\2\2\2\u0128#\3\2\2\2\u0129"+
		"\u0127\3\2\2\2\u012a\u0131\7\62\2\2\u012b\u0131\7\63\2\2\u012c\u0131\7"+
		"\64\2\2\u012d\u0131\7\65\2\2\u012e\u0131\7\66\2\2\u012f\u0131\7\67\2\2"+
		"\u0130\u012a\3\2\2\2\u0130\u012b\3\2\2\2\u0130\u012c\3\2\2\2\u0130\u012d"+
		"\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u012f\3\2\2\2\u0131%\3\2\2\2\u0132"+
		"\u0135\7,\2\2\u0133\u0135\7-\2\2\u0134\u0132\3\2\2\2\u0134\u0133\3\2\2"+
		"\2\u0135\'\3\2\2\2\u0136\u013a\7.\2\2\u0137\u013a\7/\2\2\u0138\u013a\7"+
		"\60\2\2\u0139\u0136\3\2\2\2\u0139\u0137\3\2\2\2\u0139\u0138\3\2\2\2\u013a"+
		")\3\2\2\2\"/\618HOZafly\u0082\u0089\u008e\u009f\u00a3\u00bb\u00c9\u00d0"+
		"\u00d6\u00e0\u00e8\u00f0\u00f8\u0100\u0109\u010f\u011c\u0125\u0127\u0130"+
		"\u0134\u0139";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}