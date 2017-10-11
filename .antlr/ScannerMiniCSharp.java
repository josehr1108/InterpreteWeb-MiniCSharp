// Generated from c:\Users\Andres\Documents\Compiladores\Proyecto Git\InterpreteWeb-MiniCSharp\ScannerMiniCSharp.g4 by ANTLR 4.7
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ScannerMiniCSharp extends Lexer {
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
		IDENT=58, NUMBER=59, LIST=60, CHAR_CONST=61, PRINTABLE_CHAR=62, LETTER=63, 
		DIGIT=64, LINE_COMMENT=65, SPECIAL_COMMENT=66, WS=67;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", "STRING", "IF", "ELSE", 
		"FOR", "WHILE", "FOREACH", "BREAK", "RETURN", "READ", "WRITE", "IN", "NEW", 
		"TRUE", "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", "RIGHT_SQUARE_BRACKET", 
		"LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", "LEFT_CURLY_BRACKET", "EXCLAMATION_UP", 
		"EXCLAMATION_DOWN", "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", "DOLLAR_SIGN", 
		"AMPERSAND", "QUOTATION_MARKS", "COMMA", "DOT", "COLON", "SEMICOLON", 
		"QUESTION_SIGN", "AT", "UNDERSCORE", "SUM", "SUBTRACTION", "MULTIPLICATION", 
		"DIVISION", "PERCENTAGE", "ASIGN", "EQUAL_EQUAL", "INEQUALITY", "GREATER_THAN", 
		"GREATER_THAN_OR_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", "AND", "OR", 
		"PLUS_PLUS", "MINUS_MINUS", "IDENT", "NUMBER", "LIST", "CHAR_CONST", "PRINTABLE_CHAR", 
		"LETTER", "DIGIT", "SPECIAL_CHARACTERS", "LINE_COMMENT", "SPECIAL_COMMENT", 
		"DELIMITED_COMMENT", "WS"
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
		"AND", "OR", "PLUS_PLUS", "MINUS_MINUS", "IDENT", "NUMBER", "LIST", "CHAR_CONST", 
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


	public ScannerMiniCSharp(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ScannerMiniCSharp.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2E\u01bb\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3"+
		"\21\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3"+
		"\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3"+
		"\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\35\3"+
		"\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'"+
		"\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3"+
		"\61\3\62\3\62\3\62\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\66\3\66\3\66\3"+
		"\67\3\67\3\67\38\38\38\39\39\39\3:\3:\3:\3;\3;\3;\3;\7;\u0153\n;\f;\16"+
		";\u0156\13;\3<\3<\7<\u015a\n<\f<\16<\u015d\13<\3=\3=\3=\3>\3>\3>\5>\u0165"+
		"\n>\3>\3>\3?\3?\3?\5?\u016c\n?\3@\3@\3A\3A\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\5B\u0187\nB\3C\3C\3C\3C\7C\u018d"+
		"\nC\fC\16C\u0190\13C\3C\5C\u0193\nC\3C\3C\3C\3C\3D\3D\3D\3D\3D\3D\7D\u019f"+
		"\nD\fD\16D\u01a2\13D\3D\3D\3D\3D\3D\3E\3E\3E\3E\7E\u01ad\nE\fE\16E\u01b0"+
		"\13E\3E\3E\3E\3F\6F\u01b6\nF\rF\16F\u01b7\3F\3F\5\u018e\u01a0\u01ae\2"+
		"G\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20"+
		"\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37"+
		"= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o"+
		"9q:s;u<w=y>{?}@\177A\u0081B\u0083\2\u0085C\u0087D\u0089\2\u008bE\3\2\5"+
		"\4\2\f\f\17\17\4\2C\\c|\5\2\13\f\17\17\"\"\2\u01da\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3"+
		"\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2"+
		"\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2"+
		"\177\3\2\2\2\2\u0081\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u008b\3"+
		"\2\2\2\3\u008d\3\2\2\2\5\u0093\3\2\2\2\7\u0099\3\2\2\2\t\u009e\3\2\2\2"+
		"\13\u00a2\3\2\2\2\r\u00a8\3\2\2\2\17\u00ad\3\2\2\2\21\u00b4\3\2\2\2\23"+
		"\u00b7\3\2\2\2\25\u00bc\3\2\2\2\27\u00c0\3\2\2\2\31\u00c6\3\2\2\2\33\u00ce"+
		"\3\2\2\2\35\u00d4\3\2\2\2\37\u00db\3\2\2\2!\u00e0\3\2\2\2#\u00e6\3\2\2"+
		"\2%\u00e9\3\2\2\2\'\u00ed\3\2\2\2)\u00f2\3\2\2\2+\u00f8\3\2\2\2-\u00fd"+
		"\3\2\2\2/\u00ff\3\2\2\2\61\u0101\3\2\2\2\63\u0103\3\2\2\2\65\u0105\3\2"+
		"\2\2\67\u0107\3\2\2\29\u0109\3\2\2\2;\u010c\3\2\2\2=\u010e\3\2\2\2?\u0110"+
		"\3\2\2\2A\u0112\3\2\2\2C\u0114\3\2\2\2E\u0116\3\2\2\2G\u0118\3\2\2\2I"+
		"\u011a\3\2\2\2K\u011c\3\2\2\2M\u011e\3\2\2\2O\u0120\3\2\2\2Q\u0122\3\2"+
		"\2\2S\u0124\3\2\2\2U\u0126\3\2\2\2W\u0128\3\2\2\2Y\u012a\3\2\2\2[\u012c"+
		"\3\2\2\2]\u012e\3\2\2\2_\u0130\3\2\2\2a\u0132\3\2\2\2c\u0135\3\2\2\2e"+
		"\u0138\3\2\2\2g\u013a\3\2\2\2i\u013d\3\2\2\2k\u013f\3\2\2\2m\u0142\3\2"+
		"\2\2o\u0145\3\2\2\2q\u0148\3\2\2\2s\u014b\3\2\2\2u\u014e\3\2\2\2w\u0157"+
		"\3\2\2\2y\u015e\3\2\2\2{\u0161\3\2\2\2}\u016b\3\2\2\2\177\u016d\3\2\2"+
		"\2\u0081\u016f\3\2\2\2\u0083\u0186\3\2\2\2\u0085\u0188\3\2\2\2\u0087\u0198"+
		"\3\2\2\2\u0089\u01a8\3\2\2\2\u008b\u01b5\3\2\2\2\u008d\u008e\7e\2\2\u008e"+
		"\u008f\7n\2\2\u008f\u0090\7c\2\2\u0090\u0091\7u\2\2\u0091\u0092\7u\2\2"+
		"\u0092\4\3\2\2\2\u0093\u0094\7e\2\2\u0094\u0095\7q\2\2\u0095\u0096\7p"+
		"\2\2\u0096\u0097\7u\2\2\u0097\u0098\7v\2\2\u0098\6\3\2\2\2\u0099\u009a"+
		"\7e\2\2\u009a\u009b\7j\2\2\u009b\u009c\7c\2\2\u009c\u009d\7t\2\2\u009d"+
		"\b\3\2\2\2\u009e\u009f\7k\2\2\u009f\u00a0\7p\2\2\u00a0\u00a1\7v\2\2\u00a1"+
		"\n\3\2\2\2\u00a2\u00a3\7h\2\2\u00a3\u00a4\7n\2\2\u00a4\u00a5\7q\2\2\u00a5"+
		"\u00a6\7c\2\2\u00a6\u00a7\7v\2\2\u00a7\f\3\2\2\2\u00a8\u00a9\7d\2\2\u00a9"+
		"\u00aa\7q\2\2\u00aa\u00ab\7q\2\2\u00ab\u00ac\7n\2\2\u00ac\16\3\2\2\2\u00ad"+
		"\u00ae\7u\2\2\u00ae\u00af\7v\2\2\u00af\u00b0\7t\2\2\u00b0\u00b1\7k\2\2"+
		"\u00b1\u00b2\7p\2\2\u00b2\u00b3\7i\2\2\u00b3\20\3\2\2\2\u00b4\u00b5\7"+
		"k\2\2\u00b5\u00b6\7h\2\2\u00b6\22\3\2\2\2\u00b7\u00b8\7g\2\2\u00b8\u00b9"+
		"\7n\2\2\u00b9\u00ba\7u\2\2\u00ba\u00bb\7g\2\2\u00bb\24\3\2\2\2\u00bc\u00bd"+
		"\7h\2\2\u00bd\u00be\7q\2\2\u00be\u00bf\7t\2\2\u00bf\26\3\2\2\2\u00c0\u00c1"+
		"\7y\2\2\u00c1\u00c2\7j\2\2\u00c2\u00c3\7k\2\2\u00c3\u00c4\7n\2\2\u00c4"+
		"\u00c5\7g\2\2\u00c5\30\3\2\2\2\u00c6\u00c7\7h\2\2\u00c7\u00c8\7q\2\2\u00c8"+
		"\u00c9\7t\2\2\u00c9\u00ca\7g\2\2\u00ca\u00cb\7c\2\2\u00cb\u00cc\7e\2\2"+
		"\u00cc\u00cd\7j\2\2\u00cd\32\3\2\2\2\u00ce\u00cf\7d\2\2\u00cf\u00d0\7"+
		"t\2\2\u00d0\u00d1\7g\2\2\u00d1\u00d2\7c\2\2\u00d2\u00d3\7m\2\2\u00d3\34"+
		"\3\2\2\2\u00d4\u00d5\7t\2\2\u00d5\u00d6\7g\2\2\u00d6\u00d7\7v\2\2\u00d7"+
		"\u00d8\7w\2\2\u00d8\u00d9\7t\2\2\u00d9\u00da\7p\2\2\u00da\36\3\2\2\2\u00db"+
		"\u00dc\7t\2\2\u00dc\u00dd\7g\2\2\u00dd\u00de\7c\2\2\u00de\u00df\7f\2\2"+
		"\u00df \3\2\2\2\u00e0\u00e1\7y\2\2\u00e1\u00e2\7t\2\2\u00e2\u00e3\7k\2"+
		"\2\u00e3\u00e4\7v\2\2\u00e4\u00e5\7g\2\2\u00e5\"\3\2\2\2\u00e6\u00e7\7"+
		"k\2\2\u00e7\u00e8\7p\2\2\u00e8$\3\2\2\2\u00e9\u00ea\7p\2\2\u00ea\u00eb"+
		"\7g\2\2\u00eb\u00ec\7y\2\2\u00ec&\3\2\2\2\u00ed\u00ee\7v\2\2\u00ee\u00ef"+
		"\7t\2\2\u00ef\u00f0\7w\2\2\u00f0\u00f1\7g\2\2\u00f1(\3\2\2\2\u00f2\u00f3"+
		"\7h\2\2\u00f3\u00f4\7c\2\2\u00f4\u00f5\7n\2\2\u00f5\u00f6\7u\2\2\u00f6"+
		"\u00f7\7g\2\2\u00f7*\3\2\2\2\u00f8\u00f9\7x\2\2\u00f9\u00fa\7q\2\2\u00fa"+
		"\u00fb\7k\2\2\u00fb\u00fc\7f\2\2\u00fc,\3\2\2\2\u00fd\u00fe\7+\2\2\u00fe"+
		".\3\2\2\2\u00ff\u0100\7*\2\2\u0100\60\3\2\2\2\u0101\u0102\7_\2\2\u0102"+
		"\62\3\2\2\2\u0103\u0104\7]\2\2\u0104\64\3\2\2\2\u0105\u0106\7\177\2\2"+
		"\u0106\66\3\2\2\2\u0107\u0108\7}\2\2\u01088\3\2\2\2\u0109\u010a\7\u00c4"+
		"\2\2\u010a\u010b\7\u00a3\2\2\u010b:\3\2\2\2\u010c\u010d\7#\2\2\u010d<"+
		"\3\2\2\2\u010e\u010f\7$\2\2\u010f>\3\2\2\2\u0110\u0111\7%\2\2\u0111@\3"+
		"\2\2\2\u0112\u0113\7&\2\2\u0113B\3\2\2\2\u0114\u0115\7(\2\2\u0115D\3\2"+
		"\2\2\u0116\u0117\7)\2\2\u0117F\3\2\2\2\u0118\u0119\7.\2\2\u0119H\3\2\2"+
		"\2\u011a\u011b\7\60\2\2\u011bJ\3\2\2\2\u011c\u011d\7<\2\2\u011dL\3\2\2"+
		"\2\u011e\u011f\7=\2\2\u011fN\3\2\2\2\u0120\u0121\7A\2\2\u0121P\3\2\2\2"+
		"\u0122\u0123\7B\2\2\u0123R\3\2\2\2\u0124\u0125\7a\2\2\u0125T\3\2\2\2\u0126"+
		"\u0127\7-\2\2\u0127V\3\2\2\2\u0128\u0129\7/\2\2\u0129X\3\2\2\2\u012a\u012b"+
		"\7,\2\2\u012bZ\3\2\2\2\u012c\u012d\7\61\2\2\u012d\\\3\2\2\2\u012e\u012f"+
		"\7\'\2\2\u012f^\3\2\2\2\u0130\u0131\7?\2\2\u0131`\3\2\2\2\u0132\u0133"+
		"\7?\2\2\u0133\u0134\7?\2\2\u0134b\3\2\2\2\u0135\u0136\7#\2\2\u0136\u0137"+
		"\7?\2\2\u0137d\3\2\2\2\u0138\u0139\7@\2\2\u0139f\3\2\2\2\u013a\u013b\7"+
		"@\2\2\u013b\u013c\7?\2\2\u013ch\3\2\2\2\u013d\u013e\7>\2\2\u013ej\3\2"+
		"\2\2\u013f\u0140\7>\2\2\u0140\u0141\7?\2\2\u0141l\3\2\2\2\u0142\u0143"+
		"\7(\2\2\u0143\u0144\7(\2\2\u0144n\3\2\2\2\u0145\u0146\7~\2\2\u0146\u0147"+
		"\7~\2\2\u0147p\3\2\2\2\u0148\u0149\7-\2\2\u0149\u014a\7-\2\2\u014ar\3"+
		"\2\2\2\u014b\u014c\7/\2\2\u014c\u014d\7/\2\2\u014dt\3\2\2\2\u014e\u0154"+
		"\5\177@\2\u014f\u0153\5\177@\2\u0150\u0153\5\u0081A\2\u0151\u0153\5S*"+
		"\2\u0152\u014f\3\2\2\2\u0152\u0150\3\2\2\2\u0152\u0151\3\2\2\2\u0153\u0156"+
		"\3\2\2\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155v\3\2\2\2\u0156"+
		"\u0154\3\2\2\2\u0157\u015b\5\u0081A\2\u0158\u015a\5\u0081A\2\u0159\u0158"+
		"\3\2\2\2\u015a\u015d\3\2\2\2\u015b\u0159\3\2\2\2\u015b\u015c\3\2\2\2\u015c"+
		"x\3\2\2\2\u015d\u015b\3\2\2\2\u015e\u015f\5\63\32\2\u015f\u0160\5\61\31"+
		"\2\u0160z\3\2\2\2\u0161\u0164\5E#\2\u0162\u0165\5}?\2\u0163\u0165\t\2"+
		"\2\2\u0164\u0162\3\2\2\2\u0164\u0163\3\2\2\2\u0165\u0166\3\2\2\2\u0166"+
		"\u0167\5E#\2\u0167|\3\2\2\2\u0168\u016c\5\177@\2\u0169\u016c\5\u0081A"+
		"\2\u016a\u016c\5\u0083B\2\u016b\u0168\3\2\2\2\u016b\u0169\3\2\2\2\u016b"+
		"\u016a\3\2\2\2\u016c~\3\2\2\2\u016d\u016e\t\3\2\2\u016e\u0080\3\2\2\2"+
		"\u016f\u0170\4\62;\2\u0170\u0082\3\2\2\2\u0171\u0187\5;\36\2\u0172\u0187"+
		"\5=\37\2\u0173\u0187\5? \2\u0174\u0187\5A!\2\u0175\u0187\5]/\2\u0176\u0187"+
		"\5C\"\2\u0177\u0187\5E#\2\u0178\u0187\5/\30\2\u0179\u0187\5-\27\2\u017a"+
		"\u0187\5Y-\2\u017b\u0187\5U+\2\u017c\u0187\5W,\2\u017d\u0187\5I%\2\u017e"+
		"\u0187\5[.\2\u017f\u0187\5K&\2\u0180\u0187\5M\'\2\u0181\u0187\5i\65\2"+
		"\u0182\u0187\5_\60\2\u0183\u0187\5e\63\2\u0184\u0187\5O(\2\u0185\u0187"+
		"\5Q)\2\u0186\u0171\3\2\2\2\u0186\u0172\3\2\2\2\u0186\u0173\3\2\2\2\u0186"+
		"\u0174\3\2\2\2\u0186\u0175\3\2\2\2\u0186\u0176\3\2\2\2\u0186\u0177\3\2"+
		"\2\2\u0186\u0178\3\2\2\2\u0186\u0179\3\2\2\2\u0186\u017a\3\2\2\2\u0186"+
		"\u017b\3\2\2\2\u0186\u017c\3\2\2\2\u0186\u017d\3\2\2\2\u0186\u017e\3\2"+
		"\2\2\u0186\u017f\3\2\2\2\u0186\u0180\3\2\2\2\u0186\u0181\3\2\2\2\u0186"+
		"\u0182\3\2\2\2\u0186\u0183\3\2\2\2\u0186\u0184\3\2\2\2\u0186\u0185\3\2"+
		"\2\2\u0187\u0084\3\2\2\2\u0188\u0189\7\61\2\2\u0189\u018a\7\61\2\2\u018a"+
		"\u018e\3\2\2\2\u018b\u018d\13\2\2\2\u018c\u018b\3\2\2\2\u018d\u0190\3"+
		"\2\2\2\u018e\u018f\3\2\2\2\u018e\u018c\3\2\2\2\u018f\u0192\3\2\2\2\u0190"+
		"\u018e\3\2\2\2\u0191\u0193\7\17\2\2\u0192\u0191\3\2\2\2\u0192\u0193\3"+
		"\2\2\2\u0193\u0194\3\2\2\2\u0194\u0195\7\f\2\2\u0195\u0196\3\2\2\2\u0196"+
		"\u0197\bC\2\2\u0197\u0086\3\2\2\2\u0198\u0199\7\61\2\2\u0199\u019a\7,"+
		"\2\2\u019a\u01a0\3\2\2\2\u019b\u019f\5\u0087D\2\u019c\u019f\5\u0089E\2"+
		"\u019d\u019f\13\2\2\2\u019e\u019b\3\2\2\2\u019e\u019c\3\2\2\2\u019e\u019d"+
		"\3\2\2\2\u019f\u01a2\3\2\2\2\u01a0\u01a1\3\2\2\2\u01a0\u019e\3\2\2\2\u01a1"+
		"\u01a3\3\2\2\2\u01a2\u01a0\3\2\2\2\u01a3\u01a4\7,\2\2\u01a4\u01a5\7\61"+
		"\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a7\bD\2\2\u01a7\u0088\3\2\2\2\u01a8"+
		"\u01a9\7\61\2\2\u01a9\u01aa\7,\2\2\u01aa\u01ae\3\2\2\2\u01ab\u01ad\13"+
		"\2\2\2\u01ac\u01ab\3\2\2\2\u01ad\u01b0\3\2\2\2\u01ae\u01af\3\2\2\2\u01ae"+
		"\u01ac\3\2\2\2\u01af\u01b1\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b1\u01b2\7,"+
		"\2\2\u01b2\u01b3\7\61\2\2\u01b3\u008a\3\2\2\2\u01b4\u01b6\t\4\2\2\u01b5"+
		"\u01b4\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7\u01b5\3\2\2\2\u01b7\u01b8\3\2"+
		"\2\2\u01b8\u01b9\3\2\2\2\u01b9\u01ba\bF\2\2\u01ba\u008c\3\2\2\2\17\2\u0152"+
		"\u0154\u015b\u0164\u016b\u0186\u018e\u0192\u019e\u01a0\u01ae\u01b7\3\b"+
		"\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}