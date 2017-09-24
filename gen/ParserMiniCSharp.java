// Generated from C:/Users/Andres/Documents/Compiladores/Proyecto/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
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
		NEW=17, TRUE=18, FALSE=19, VOID=20, RIGHT_PARENTHESIS=21, LEFT_PARENTHESIS=22, 
		RIGHT_SQUARE_BRACKETR=23, LEFT_SQUARE_BRACKET=24, RIGHT_CURLY_BRACKET=25, 
		LEFT_CURLY_BRACKET=26, EXCLAMATION_UP=27, EXCLAMATION_DOWN=28, DOUBLE_QUOTATION_MARKS=29, 
		NUMBER_SIGN=30, DOLLAR_SIGN=31, AMPERSAND=32, QUOTATION_MARKS=33, COMMA=34, 
		DOT=35, COLON=36, SEMICOLON=37, QUESTION_SIGN=38, AT=39, UNDERSCORE=40, 
		SUM=41, SUBTRACTION=42, MULTIPLICATION=43, DIVISION=44, PERCENTAGE=45, 
		ASIGN=46, EQUAL_EQUAL=47, INEQUALITY=48, GREATER_THAN=49, GREATER_THAN_OR_EQUAL=50, 
		LESS_THAN=51, LESS_THAN_OR_EQUAL=52, AND=53, OR=54, PLUS_PLUS=55, MINUS_MINUS=56, 
		IDENT=57, NUMBER=58, CHAR_CONST=59, PRINTABLE_CHAR=60, LETTER=61, DIGIT=62, 
		LINE_COMMENT=63, SPECIAL_COMMENT=64, WS=65;
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
		"'read'", "'write'", "'new'", "'true'", "'false'", "'void'", null, null, 
		"']'", "'['", "'}'", "'{'", "'\u00C2\u00A1'", "'!'", "'\"'", "'#'", "'$'", 
		"'&'", "'''", "','", "'.'", "':'", "';'", "'?'", "'@'", "'_'", "'+'", 
		"'-'", "'*'", "'/'", "'%'", "'='", "'=='", "'!='", "'>'", "'>='", "'<'", 
		"'<='", "'&&'", "'||'", "'++'", "'--'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", "STRING", "IF", 
		"ELSE", "FOR", "WHILE", "FOREACH", "BREAK", "RETURN", "READ", "WRITE", 
		"NEW", "TRUE", "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
		"RIGHT_SQUARE_BRACKETR", "LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", 
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitProgram(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitProgram(this);
			else return visitor.visitChildren(this);
		}
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterConstDecl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitConstDecl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitConstDecl(this);
			else return visitor.visitChildren(this);
		}
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
		public TerminalNode COMMA() { return getToken(ParserMiniCSharp.COMMA, 0); }
		public VarDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDecl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterVarDecl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitVarDecl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitVarDecl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VarDeclContext varDecl() throws RecognitionException {
		VarDeclContext _localctx = new VarDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_varDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			type();
			setState(68);
			match(IDENT);
			{
			setState(69);
			match(COMMA);
			setState(70);
			match(IDENT);
			}
			setState(72);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterClassDecl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitClassDecl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitClassDecl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassDeclContext classDecl() throws RecognitionException {
		ClassDeclContext _localctx = new ClassDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_classDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(CLASS);
			setState(75);
			match(IDENT);
			setState(76);
			match(LEFT_CURLY_BRACKET);
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				{
				setState(77);
				varDecl();
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterMethodDecl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitMethodDecl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitMethodDecl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MethodDeclContext methodDecl() throws RecognitionException {
		MethodDeclContext _localctx = new MethodDeclContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_methodDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
			case INT:
			case FLOAT:
			case BOOL:
			case STRING:
			case IDENT:
				{
				setState(85);
				type();
				}
				break;
			case VOID:
				{
				setState(86);
				match(VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(89);
			match(IDENT);
			setState(90);
			match(LEFT_PARENTHESIS);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				setState(91);
				formPars();
				}
			}

			setState(94);
			match(RIGHT_PARENTHESIS);
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) {
				{
				{
				setState(95);
				varDecl();
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterFormPars(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitFormPars(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitFormPars(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormParsContext formPars() throws RecognitionException {
		FormParsContext _localctx = new FormParsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_formPars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			type();
			setState(104);
			match(IDENT);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(105);
				match(COMMA);
				setState(106);
				type();
				setState(107);
				match(IDENT);
				}
				}
				setState(113);
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
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public TerminalNode CHAR() { return getToken(ParserMiniCSharp.CHAR, 0); }
		public TerminalNode INT() { return getToken(ParserMiniCSharp.INT, 0); }
		public TerminalNode FLOAT() { return getToken(ParserMiniCSharp.FLOAT, 0); }
		public TerminalNode BOOL() { return getToken(ParserMiniCSharp.BOOL, 0); }
		public TerminalNode STRING() { return getToken(ParserMiniCSharp.STRING, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << STRING) | (1L << IDENT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class StatementContext extends ParserRuleContext {
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(ParserMiniCSharp.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(ParserMiniCSharp.SEMICOLON, i);
		}
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
		public TerminalNode IF() { return getToken(ParserMiniCSharp.IF, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(ParserMiniCSharp.ELSE, 0); }
		public TerminalNode FOR() { return getToken(ParserMiniCSharp.FOR, 0); }
		public TerminalNode WHILE() { return getToken(ParserMiniCSharp.WHILE, 0); }
		public TerminalNode FOREACH() { return getToken(ParserMiniCSharp.FOREACH, 0); }
		public TerminalNode BREAK() { return getToken(ParserMiniCSharp.BREAK, 0); }
		public TerminalNode RETURN() { return getToken(ParserMiniCSharp.RETURN, 0); }
		public TerminalNode READ() { return getToken(ParserMiniCSharp.READ, 0); }
		public TerminalNode WRITE() { return getToken(ParserMiniCSharp.WRITE, 0); }
		public TerminalNode COMMA() { return getToken(ParserMiniCSharp.COMMA, 0); }
		public TerminalNode NUMBER() { return getToken(ParserMiniCSharp.NUMBER, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_statement);
		int _la;
		try {
			setState(184);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				designator();
				setState(126);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ASIGN:
					{
					setState(117);
					match(ASIGN);
					setState(118);
					expr();
					}
					break;
				case LEFT_PARENTHESIS:
					{
					setState(119);
					match(LEFT_PARENTHESIS);
					setState(121);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
						{
						setState(120);
						actPars();
						}
					}

					setState(123);
					match(RIGHT_PARENTHESIS);
					}
					break;
				case PLUS_PLUS:
					{
					setState(124);
					match(PLUS_PLUS);
					}
					break;
				case MINUS_MINUS:
					{
					setState(125);
					match(MINUS_MINUS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(128);
				match(SEMICOLON);
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				match(IF);
				setState(131);
				match(LEFT_PARENTHESIS);
				setState(132);
				condition();
				setState(133);
				match(RIGHT_PARENTHESIS);
				setState(134);
				statement();
				{
				setState(135);
				match(ELSE);
				setState(136);
				statement();
				}
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(138);
				match(FOR);
				setState(139);
				match(LEFT_PARENTHESIS);
				setState(140);
				expr();
				setState(141);
				match(SEMICOLON);
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
					{
					setState(142);
					condition();
					}
				}

				setState(145);
				match(SEMICOLON);
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << FOREACH) | (1L << BREAK) | (1L << RETURN) | (1L << READ) | (1L << WRITE) | (1L << LEFT_CURLY_BRACKET) | (1L << SEMICOLON) | (1L << IDENT))) != 0)) {
					{
					setState(146);
					statement();
					}
				}

				setState(149);
				match(RIGHT_PARENTHESIS);
				setState(150);
				statement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 4);
				{
				setState(152);
				match(WHILE);
				setState(153);
				match(LEFT_PARENTHESIS);
				setState(154);
				condition();
				setState(155);
				match(RIGHT_PARENTHESIS);
				setState(156);
				statement();
				}
				break;
			case FOREACH:
				enterOuterAlt(_localctx, 5);
				{
				setState(158);
				match(FOREACH);
				}
				break;
			case BREAK:
				enterOuterAlt(_localctx, 6);
				{
				setState(159);
				match(BREAK);
				setState(160);
				match(SEMICOLON);
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 7);
				{
				setState(161);
				match(RETURN);
				setState(163);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
					{
					setState(162);
					expr();
					}
				}

				setState(165);
				match(SEMICOLON);
				}
				break;
			case READ:
				enterOuterAlt(_localctx, 8);
				{
				setState(166);
				match(READ);
				setState(167);
				match(LEFT_PARENTHESIS);
				setState(168);
				designator();
				setState(169);
				match(RIGHT_PARENTHESIS);
				setState(170);
				match(SEMICOLON);
				}
				break;
			case WRITE:
				enterOuterAlt(_localctx, 9);
				{
				setState(172);
				match(WRITE);
				setState(173);
				match(LEFT_PARENTHESIS);
				setState(174);
				expr();
				setState(177);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(175);
					match(COMMA);
					setState(176);
					match(NUMBER);
					}
				}

				setState(179);
				match(RIGHT_PARENTHESIS);
				setState(180);
				match(SEMICOLON);
				}
				break;
			case LEFT_CURLY_BRACKET:
				enterOuterAlt(_localctx, 10);
				{
				setState(182);
				block();
				}
				break;
			case SEMICOLON:
				enterOuterAlt(_localctx, 11);
				{
				setState(183);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(LEFT_CURLY_BRACKET);
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << FOREACH) | (1L << BREAK) | (1L << RETURN) | (1L << READ) | (1L << WRITE) | (1L << LEFT_CURLY_BRACKET) | (1L << SEMICOLON) | (1L << IDENT))) != 0)) {
				{
				{
				setState(187);
				statement();
				}
				}
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(193);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterActPars(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitActPars(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitActPars(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ActParsContext actPars() throws RecognitionException {
		ActParsContext _localctx = new ActParsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_actPars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			expr();
			setState(200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(196);
				match(COMMA);
				setState(197);
				expr();
				}
				}
				setState(202);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterCondition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitCondition(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			condTerm();
			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(204);
				match(OR);
				setState(205);
				condTerm();
				}
				}
				setState(210);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterCondTerm(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitCondTerm(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitCondTerm(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CondTermContext condTerm() throws RecognitionException {
		CondTermContext _localctx = new CondTermContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_condTerm);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			condFact();
			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(212);
				match(AND);
				setState(213);
				condFact();
				}
				}
				setState(218);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterCondFact(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitCondFact(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitCondFact(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CondFactContext condFact() throws RecognitionException {
		CondFactContext _localctx = new CondFactContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_condFact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			expr();
			setState(220);
			relop();
			setState(221);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SUBTRACTION) {
				{
				setState(223);
				match(SUBTRACTION);
				}
			}

			setState(226);
			term();
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SUM || _la==SUBTRACTION) {
				{
				{
				setState(227);
				addop();
				setState(228);
				term();
				}
				}
				setState(234);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterTerm(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitTerm(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitTerm(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			factor();
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULTIPLICATION) | (1L << DIVISION) | (1L << PERCENTAGE))) != 0)) {
				{
				{
				setState(236);
				mulop();
				setState(237);
				factor();
				}
				}
				setState(243);
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
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public TerminalNode LEFT_PARENTHESIS() { return getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0); }
		public TerminalNode RIGHT_PARENTHESIS() { return getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0); }
		public ActParsContext actPars() {
			return getRuleContext(ActParsContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(ParserMiniCSharp.NUMBER, 0); }
		public TerminalNode CHAR_CONST() { return getToken(ParserMiniCSharp.CHAR_CONST, 0); }
		public TerminalNode TRUE() { return getToken(ParserMiniCSharp.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ParserMiniCSharp.FALSE, 0); }
		public TerminalNode NEW() { return getToken(ParserMiniCSharp.NEW, 0); }
		public TerminalNode IDENT() { return getToken(ParserMiniCSharp.IDENT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterFactor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitFactor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitFactor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_factor);
		int _la;
		try {
			setState(260);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(244);
				designator();
				{
				setState(245);
				match(LEFT_PARENTHESIS);
				setState(247);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEW) | (1L << TRUE) | (1L << FALSE) | (1L << LEFT_PARENTHESIS) | (1L << SUBTRACTION) | (1L << IDENT) | (1L << NUMBER) | (1L << CHAR_CONST))) != 0)) {
					{
					setState(246);
					actPars();
					}
				}

				setState(249);
				match(RIGHT_PARENTHESIS);
				}
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(251);
				match(NUMBER);
				}
				break;
			case CHAR_CONST:
				enterOuterAlt(_localctx, 3);
				{
				setState(252);
				match(CHAR_CONST);
				}
				break;
			case TRUE:
			case FALSE:
				enterOuterAlt(_localctx, 4);
				{
				setState(253);
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
				enterOuterAlt(_localctx, 5);
				{
				setState(254);
				match(NEW);
				setState(255);
				match(IDENT);
				}
				break;
			case LEFT_PARENTHESIS:
				enterOuterAlt(_localctx, 6);
				{
				setState(256);
				match(LEFT_PARENTHESIS);
				setState(257);
				expr();
				setState(258);
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
		public List<TerminalNode> RIGHT_CURLY_BRACKET() { return getTokens(ParserMiniCSharp.RIGHT_CURLY_BRACKET); }
		public TerminalNode RIGHT_CURLY_BRACKET(int i) {
			return getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, i);
		}
		public DesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterDesignator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitDesignator(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitDesignator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DesignatorContext designator() throws RecognitionException {
		DesignatorContext _localctx = new DesignatorContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_designator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			match(IDENT);
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LEFT_SQUARE_BRACKET || _la==AT) {
				{
				setState(269);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case AT:
					{
					setState(263);
					match(AT);
					setState(264);
					match(IDENT);
					}
					break;
				case LEFT_SQUARE_BRACKET:
					{
					setState(265);
					match(LEFT_SQUARE_BRACKET);
					setState(266);
					expr();
					setState(267);
					match(RIGHT_CURLY_BRACKET);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(273);
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
		public TerminalNode EQUAL_EQUAL() { return getToken(ParserMiniCSharp.EQUAL_EQUAL, 0); }
		public TerminalNode INEQUALITY() { return getToken(ParserMiniCSharp.INEQUALITY, 0); }
		public TerminalNode GREATER_THAN() { return getToken(ParserMiniCSharp.GREATER_THAN, 0); }
		public TerminalNode GREATER_THAN_OR_EQUAL() { return getToken(ParserMiniCSharp.GREATER_THAN_OR_EQUAL, 0); }
		public TerminalNode LESS_THAN() { return getToken(ParserMiniCSharp.LESS_THAN, 0); }
		public TerminalNode LESS_THAN_OR_EQUAL() { return getToken(ParserMiniCSharp.LESS_THAN_OR_EQUAL, 0); }
		public RelopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterRelop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitRelop(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitRelop(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RelopContext relop() throws RecognitionException {
		RelopContext _localctx = new RelopContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_relop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQUAL_EQUAL) | (1L << INEQUALITY) | (1L << GREATER_THAN) | (1L << GREATER_THAN_OR_EQUAL) | (1L << LESS_THAN) | (1L << LESS_THAN_OR_EQUAL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class AddopContext extends ParserRuleContext {
		public TerminalNode SUM() { return getToken(ParserMiniCSharp.SUM, 0); }
		public TerminalNode SUBTRACTION() { return getToken(ParserMiniCSharp.SUBTRACTION, 0); }
		public AddopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterAddop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitAddop(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitAddop(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AddopContext addop() throws RecognitionException {
		AddopContext _localctx = new AddopContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_addop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			_la = _input.LA(1);
			if ( !(_la==SUM || _la==SUBTRACTION) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static class MulopContext extends ParserRuleContext {
		public TerminalNode MULTIPLICATION() { return getToken(ParserMiniCSharp.MULTIPLICATION, 0); }
		public TerminalNode DIVISION() { return getToken(ParserMiniCSharp.DIVISION, 0); }
		public TerminalNode PERCENTAGE() { return getToken(ParserMiniCSharp.PERCENTAGE, 0); }
		public MulopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mulop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).enterMulop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ParserMiniCSharpListener ) ((ParserMiniCSharpListener)listener).exitMulop(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ParserMiniCSharpVisitor ) return ((ParserMiniCSharpVisitor<? extends T>)visitor).visitMulop(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MulopContext mulop() throws RecognitionException {
		MulopContext _localctx = new MulopContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_mulop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULTIPLICATION) | (1L << DIVISION) | (1L << PERCENTAGE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3C\u011b\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\2\3\2\3\2\7\2\60\n\2\f\2\16\2"+
		"\63\13\2\3\2\3\2\7\2\67\n\2\f\2\16\2:\13\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5Q\n\5\f\5"+
		"\16\5T\13\5\3\5\3\5\3\6\3\6\5\6Z\n\6\3\6\3\6\3\6\5\6_\n\6\3\6\3\6\7\6"+
		"c\n\6\f\6\16\6f\13\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\7\7p\n\7\f\7\16\7"+
		"s\13\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\5\t|\n\t\3\t\3\t\3\t\5\t\u0081\n\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0092"+
		"\n\t\3\t\3\t\5\t\u0096\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\5\t\u00a6\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\5\t\u00b4\n\t\3\t\3\t\3\t\3\t\3\t\5\t\u00bb\n\t\3\n\3\n\7\n\u00bf"+
		"\n\n\f\n\16\n\u00c2\13\n\3\n\3\n\3\13\3\13\3\13\7\13\u00c9\n\13\f\13\16"+
		"\13\u00cc\13\13\3\f\3\f\3\f\7\f\u00d1\n\f\f\f\16\f\u00d4\13\f\3\r\3\r"+
		"\3\r\7\r\u00d9\n\r\f\r\16\r\u00dc\13\r\3\16\3\16\3\16\3\16\3\17\5\17\u00e3"+
		"\n\17\3\17\3\17\3\17\3\17\7\17\u00e9\n\17\f\17\16\17\u00ec\13\17\3\20"+
		"\3\20\3\20\3\20\7\20\u00f2\n\20\f\20\16\20\u00f5\13\20\3\21\3\21\3\21"+
		"\5\21\u00fa\n\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\5\21\u0107\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\7\22\u0110\n\22\f"+
		"\22\16\22\u0113\13\22\3\23\3\23\3\24\3\24\3\25\3\25\3\25\2\2\26\2\4\6"+
		"\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(\2\b\3\2<=\4\2\5\t;;\3\2\24\25"+
		"\3\2\61\66\3\2+,\3\2-/\2\u0130\2*\3\2\2\2\4>\3\2\2\2\6E\3\2\2\2\bL\3\2"+
		"\2\2\nY\3\2\2\2\fi\3\2\2\2\16t\3\2\2\2\20\u00ba\3\2\2\2\22\u00bc\3\2\2"+
		"\2\24\u00c5\3\2\2\2\26\u00cd\3\2\2\2\30\u00d5\3\2\2\2\32\u00dd\3\2\2\2"+
		"\34\u00e2\3\2\2\2\36\u00ed\3\2\2\2 \u0106\3\2\2\2\"\u0108\3\2\2\2$\u0114"+
		"\3\2\2\2&\u0116\3\2\2\2(\u0118\3\2\2\2*+\7\3\2\2+\61\7;\2\2,\60\5\4\3"+
		"\2-\60\5\6\4\2.\60\5\b\5\2/,\3\2\2\2/-\3\2\2\2/.\3\2\2\2\60\63\3\2\2\2"+
		"\61/\3\2\2\2\61\62\3\2\2\2\62\64\3\2\2\2\63\61\3\2\2\2\648\7\34\2\2\65"+
		"\67\5\n\6\2\66\65\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3\2\2\29;\3\2\2\2"+
		":8\3\2\2\2;<\7\33\2\2<=\7\2\2\3=\3\3\2\2\2>?\7\4\2\2?@\5\16\b\2@A\7;\2"+
		"\2AB\7\60\2\2BC\t\2\2\2CD\7\'\2\2D\5\3\2\2\2EF\5\16\b\2FG\7;\2\2GH\7$"+
		"\2\2HI\7;\2\2IJ\3\2\2\2JK\7\'\2\2K\7\3\2\2\2LM\7\3\2\2MN\7;\2\2NR\7\34"+
		"\2\2OQ\5\6\4\2PO\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2SU\3\2\2\2TR\3\2"+
		"\2\2UV\7\33\2\2V\t\3\2\2\2WZ\5\16\b\2XZ\7\26\2\2YW\3\2\2\2YX\3\2\2\2Z"+
		"[\3\2\2\2[\\\7;\2\2\\^\7\30\2\2]_\5\f\7\2^]\3\2\2\2^_\3\2\2\2_`\3\2\2"+
		"\2`d\7\27\2\2ac\5\6\4\2ba\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2\2eg\3\2"+
		"\2\2fd\3\2\2\2gh\5\22\n\2h\13\3\2\2\2ij\5\16\b\2jq\7;\2\2kl\7$\2\2lm\5"+
		"\16\b\2mn\7;\2\2np\3\2\2\2ok\3\2\2\2ps\3\2\2\2qo\3\2\2\2qr\3\2\2\2r\r"+
		"\3\2\2\2sq\3\2\2\2tu\t\3\2\2u\17\3\2\2\2v\u0080\5\"\22\2wx\7\60\2\2x\u0081"+
		"\5\34\17\2y{\7\30\2\2z|\5\24\13\2{z\3\2\2\2{|\3\2\2\2|}\3\2\2\2}\u0081"+
		"\7\27\2\2~\u0081\79\2\2\177\u0081\7:\2\2\u0080w\3\2\2\2\u0080y\3\2\2\2"+
		"\u0080~\3\2\2\2\u0080\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0083\7\'"+
		"\2\2\u0083\u00bb\3\2\2\2\u0084\u0085\7\n\2\2\u0085\u0086\7\30\2\2\u0086"+
		"\u0087\5\26\f\2\u0087\u0088\7\27\2\2\u0088\u0089\5\20\t\2\u0089\u008a"+
		"\7\13\2\2\u008a\u008b\5\20\t\2\u008b\u00bb\3\2\2\2\u008c\u008d\7\f\2\2"+
		"\u008d\u008e\7\30\2\2\u008e\u008f\5\34\17\2\u008f\u0091\7\'\2\2\u0090"+
		"\u0092\5\26\f\2\u0091\u0090\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0093\3"+
		"\2\2\2\u0093\u0095\7\'\2\2\u0094\u0096\5\20\t\2\u0095\u0094\3\2\2\2\u0095"+
		"\u0096\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0098\7\27\2\2\u0098\u0099\5"+
		"\20\t\2\u0099\u00bb\3\2\2\2\u009a\u009b\7\r\2\2\u009b\u009c\7\30\2\2\u009c"+
		"\u009d\5\26\f\2\u009d\u009e\7\27\2\2\u009e\u009f\5\20\t\2\u009f\u00bb"+
		"\3\2\2\2\u00a0\u00bb\7\16\2\2\u00a1\u00a2\7\17\2\2\u00a2\u00bb\7\'\2\2"+
		"\u00a3\u00a5\7\20\2\2\u00a4\u00a6\5\34\17\2\u00a5\u00a4\3\2\2\2\u00a5"+
		"\u00a6\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00bb\7\'\2\2\u00a8\u00a9\7\21"+
		"\2\2\u00a9\u00aa\7\30\2\2\u00aa\u00ab\5\"\22\2\u00ab\u00ac\7\27\2\2\u00ac"+
		"\u00ad\7\'\2\2\u00ad\u00bb\3\2\2\2\u00ae\u00af\7\22\2\2\u00af\u00b0\7"+
		"\30\2\2\u00b0\u00b3\5\34\17\2\u00b1\u00b2\7$\2\2\u00b2\u00b4\7<\2\2\u00b3"+
		"\u00b1\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\7\27"+
		"\2\2\u00b6\u00b7\7\'\2\2\u00b7\u00bb\3\2\2\2\u00b8\u00bb\5\22\n\2\u00b9"+
		"\u00bb\7\'\2\2\u00bav\3\2\2\2\u00ba\u0084\3\2\2\2\u00ba\u008c\3\2\2\2"+
		"\u00ba\u009a\3\2\2\2\u00ba\u00a0\3\2\2\2\u00ba\u00a1\3\2\2\2\u00ba\u00a3"+
		"\3\2\2\2\u00ba\u00a8\3\2\2\2\u00ba\u00ae\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba"+
		"\u00b9\3\2\2\2\u00bb\21\3\2\2\2\u00bc\u00c0\7\34\2\2\u00bd\u00bf\5\20"+
		"\t\2\u00be\u00bd\3\2\2\2\u00bf\u00c2\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0"+
		"\u00c1\3\2\2\2\u00c1\u00c3\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\u00c4\7\33"+
		"\2\2\u00c4\23\3\2\2\2\u00c5\u00ca\5\34\17\2\u00c6\u00c7\7$\2\2\u00c7\u00c9"+
		"\5\34\17\2\u00c8\u00c6\3\2\2\2\u00c9\u00cc\3\2\2\2\u00ca\u00c8\3\2\2\2"+
		"\u00ca\u00cb\3\2\2\2\u00cb\25\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cd\u00d2"+
		"\5\30\r\2\u00ce\u00cf\78\2\2\u00cf\u00d1\5\30\r\2\u00d0\u00ce\3\2\2\2"+
		"\u00d1\u00d4\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3\27"+
		"\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d5\u00da\5\32\16\2\u00d6\u00d7\7\67\2"+
		"\2\u00d7\u00d9\5\32\16\2\u00d8\u00d6\3\2\2\2\u00d9\u00dc\3\2\2\2\u00da"+
		"\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db\31\3\2\2\2\u00dc\u00da\3\2\2"+
		"\2\u00dd\u00de\5\34\17\2\u00de\u00df\5$\23\2\u00df\u00e0\5\34\17\2\u00e0"+
		"\33\3\2\2\2\u00e1\u00e3\7,\2\2\u00e2\u00e1\3\2\2\2\u00e2\u00e3\3\2\2\2"+
		"\u00e3\u00e4\3\2\2\2\u00e4\u00ea\5\36\20\2\u00e5\u00e6\5&\24\2\u00e6\u00e7"+
		"\5\36\20\2\u00e7\u00e9\3\2\2\2\u00e8\u00e5\3\2\2\2\u00e9\u00ec\3\2\2\2"+
		"\u00ea\u00e8\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\35\3\2\2\2\u00ec\u00ea"+
		"\3\2\2\2\u00ed\u00f3\5 \21\2\u00ee\u00ef\5(\25\2\u00ef\u00f0\5 \21\2\u00f0"+
		"\u00f2\3\2\2\2\u00f1\u00ee\3\2\2\2\u00f2\u00f5\3\2\2\2\u00f3\u00f1\3\2"+
		"\2\2\u00f3\u00f4\3\2\2\2\u00f4\37\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f6\u00f7"+
		"\5\"\22\2\u00f7\u00f9\7\30\2\2\u00f8\u00fa\5\24\13\2\u00f9\u00f8\3\2\2"+
		"\2\u00f9\u00fa\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\7\27\2\2\u00fc"+
		"\u0107\3\2\2\2\u00fd\u0107\7<\2\2\u00fe\u0107\7=\2\2\u00ff\u0107\t\4\2"+
		"\2\u0100\u0101\7\23\2\2\u0101\u0107\7;\2\2\u0102\u0103\7\30\2\2\u0103"+
		"\u0104\5\34\17\2\u0104\u0105\7\27\2\2\u0105\u0107\3\2\2\2\u0106\u00f6"+
		"\3\2\2\2\u0106\u00fd\3\2\2\2\u0106\u00fe\3\2\2\2\u0106\u00ff\3\2\2\2\u0106"+
		"\u0100\3\2\2\2\u0106\u0102\3\2\2\2\u0107!\3\2\2\2\u0108\u0111\7;\2\2\u0109"+
		"\u010a\7)\2\2\u010a\u0110\7;\2\2\u010b\u010c\7\32\2\2\u010c\u010d\5\34"+
		"\17\2\u010d\u010e\7\33\2\2\u010e\u0110\3\2\2\2\u010f\u0109\3\2\2\2\u010f"+
		"\u010b\3\2\2\2\u0110\u0113\3\2\2\2\u0111\u010f\3\2\2\2\u0111\u0112\3\2"+
		"\2\2\u0112#\3\2\2\2\u0113\u0111\3\2\2\2\u0114\u0115\t\5\2\2\u0115%\3\2"+
		"\2\2\u0116\u0117\t\6\2\2\u0117\'\3\2\2\2\u0118\u0119\t\7\2\2\u0119)\3"+
		"\2\2\2\34/\618RY^dq{\u0080\u0091\u0095\u00a5\u00b3\u00ba\u00c0\u00ca\u00d2"+
		"\u00da\u00e2\u00ea\u00f3\u00f9\u0106\u010f\u0111";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}