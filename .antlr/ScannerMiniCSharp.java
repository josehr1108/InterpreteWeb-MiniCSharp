// Generated from c:\Users\Andres\Documents\Compiladores\prueba txt\Proyecto\InterpreteWeb-MiniCSharp\ScannerMiniCSharp.g4 by ANTLR 4.7
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
		ASIGN=47, SPACE=48, EQUAL_EQUAL=49, INEQUALITY=50, GREATER_THAN=51, GREATER_THAN_OR_EQUAL=52, 
		LESS_THAN=53, LESS_THAN_OR_EQUAL=54, AND=55, OR=56, PLUS_PLUS=57, MINUS_MINUS=58, 
		IDENT=59, NUMBER=60, LIST=61, CHAR_CONST=62, STRING_CONST=63, PRINTABLE_CHAR=64, 
		LETTER=65, DIGIT=66, LINE_COMMENT=67, SPECIAL_COMMENT=68, WS=69;
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
		"DIVISION", "PERCENTAGE", "ASIGN", "SPACE", "EQUAL_EQUAL", "INEQUALITY", 
		"GREATER_THAN", "GREATER_THAN_OR_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", 
		"AND", "OR", "PLUS_PLUS", "MINUS_MINUS", "IDENT", "NUMBER", "LIST", "CHAR_CONST", 
		"STRING_CONST", "PRINTABLE_CHAR", "LETTER", "DIGIT", "SPECIAL_CHARACTERS", 
		"LINE_COMMENT", "SPECIAL_COMMENT", "DELIMITED_COMMENT", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'char'", "'int'", "'float'", "'bool'", "'string'", 
		"'if'", "'else'", "'for'", "'while'", "'foreach'", "'break'", "'return'", 
		"'read'", "'write'", "'in'", "'new'", "'true'", "'false'", "'void'", "')'", 
		"'('", "']'", "'['", "'}'", "'{'", "'\u00C2\u00A1'", "'!'", "'\"'", "'#'", 
		"'$'", "'&'", "'''", "','", "'.'", "':'", "';'", "'?'", "'@'", "'_'", 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'='", "' '", "'=='", "'!='", "'>'", 
		"'>='", "'<'", "'<='", "'&&'", "'||'", "'++'", "'--'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", "STRING", "IF", 
		"ELSE", "FOR", "WHILE", "FOREACH", "BREAK", "RETURN", "READ", "WRITE", 
		"IN", "NEW", "TRUE", "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
		"RIGHT_SQUARE_BRACKET", "LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", 
		"LEFT_CURLY_BRACKET", "EXCLAMATION_UP", "EXCLAMATION_DOWN", "DOUBLE_QUOTATION_MARKS", 
		"NUMBER_SIGN", "DOLLAR_SIGN", "AMPERSAND", "QUOTATION_MARKS", "COMMA", 
		"DOT", "COLON", "SEMICOLON", "QUESTION_SIGN", "AT", "UNDERSCORE", "SUM", 
		"SUBTRACTION", "MULTIPLICATION", "DIVISION", "PERCENTAGE", "ASIGN", "SPACE", 
		"EQUAL_EQUAL", "INEQUALITY", "GREATER_THAN", "GREATER_THAN_OR_EQUAL", 
		"LESS_THAN", "LESS_THAN_OR_EQUAL", "AND", "OR", "PLUS_PLUS", "MINUS_MINUS", 
		"IDENT", "NUMBER", "LIST", "CHAR_CONST", "STRING_CONST", "PRINTABLE_CHAR", 
		"LETTER", "DIGIT", "LINE_COMMENT", "SPECIAL_COMMENT", "WS"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2G\u01de\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3"+
		"\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24"+
		"\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35"+
		"\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3"+
		"&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60"+
		"\3\61\3\61\3\62\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3\65\3\65\3\65\3\66"+
		"\3\66\3\67\3\67\3\67\38\38\38\39\39\39\3:\3:\3:\3;\3;\3;\3<\3<\3<\3<\7"+
		"<\u0159\n<\f<\16<\u015c\13<\3=\3=\7=\u0160\n=\f=\16=\u0163\13=\3=\3=\7"+
		"=\u0167\n=\f=\16=\u016a\13=\3=\3=\3=\7=\u016f\n=\f=\16=\u0172\13=\5=\u0174"+
		"\n=\3>\3>\3>\3?\3?\3?\5?\u017c\n?\3?\3?\3@\3@\3@\3@\3@\7@\u0185\n@\f@"+
		"\16@\u0188\13@\3@\3@\3A\3A\3A\5A\u018f\nA\3B\3B\3C\3C\3D\3D\3D\3D\3D\3"+
		"D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\5D\u01aa\nD\3E\3E\3E\3"+
		"E\7E\u01b0\nE\fE\16E\u01b3\13E\3E\5E\u01b6\nE\3E\3E\3E\3E\3F\3F\3F\3F"+
		"\3F\3F\7F\u01c2\nF\fF\16F\u01c5\13F\3F\3F\3F\3F\3F\3G\3G\3G\3G\7G\u01d0"+
		"\nG\fG\16G\u01d3\13G\3G\3G\3G\3H\6H\u01d9\nH\rH\16H\u01da\3H\3H\5\u01b1"+
		"\u01c3\u01d1\2I\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64"+
		"g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087\2\u0089"+
		"E\u008bF\u008d\2\u008fG\3\2\5\4\2\f\f\17\17\4\2C\\c|\5\2\13\f\17\17\""+
		"\"\2\u0204\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2"+
		"\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S"+
		"\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2"+
		"\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2"+
		"\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y"+
		"\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3"+
		"\2\2\2\2\u0085\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008f\3\2\2\2"+
		"\3\u0091\3\2\2\2\5\u0097\3\2\2\2\7\u009d\3\2\2\2\t\u00a2\3\2\2\2\13\u00a6"+
		"\3\2\2\2\r\u00ac\3\2\2\2\17\u00b1\3\2\2\2\21\u00b8\3\2\2\2\23\u00bb\3"+
		"\2\2\2\25\u00c0\3\2\2\2\27\u00c4\3\2\2\2\31\u00ca\3\2\2\2\33\u00d2\3\2"+
		"\2\2\35\u00d8\3\2\2\2\37\u00df\3\2\2\2!\u00e4\3\2\2\2#\u00ea\3\2\2\2%"+
		"\u00ed\3\2\2\2\'\u00f1\3\2\2\2)\u00f6\3\2\2\2+\u00fc\3\2\2\2-\u0101\3"+
		"\2\2\2/\u0103\3\2\2\2\61\u0105\3\2\2\2\63\u0107\3\2\2\2\65\u0109\3\2\2"+
		"\2\67\u010b\3\2\2\29\u010d\3\2\2\2;\u0110\3\2\2\2=\u0112\3\2\2\2?\u0114"+
		"\3\2\2\2A\u0116\3\2\2\2C\u0118\3\2\2\2E\u011a\3\2\2\2G\u011c\3\2\2\2I"+
		"\u011e\3\2\2\2K\u0120\3\2\2\2M\u0122\3\2\2\2O\u0124\3\2\2\2Q\u0126\3\2"+
		"\2\2S\u0128\3\2\2\2U\u012a\3\2\2\2W\u012c\3\2\2\2Y\u012e\3\2\2\2[\u0130"+
		"\3\2\2\2]\u0132\3\2\2\2_\u0134\3\2\2\2a\u0136\3\2\2\2c\u0138\3\2\2\2e"+
		"\u013b\3\2\2\2g\u013e\3\2\2\2i\u0140\3\2\2\2k\u0143\3\2\2\2m\u0145\3\2"+
		"\2\2o\u0148\3\2\2\2q\u014b\3\2\2\2s\u014e\3\2\2\2u\u0151\3\2\2\2w\u0154"+
		"\3\2\2\2y\u0173\3\2\2\2{\u0175\3\2\2\2}\u0178\3\2\2\2\177\u017f\3\2\2"+
		"\2\u0081\u018e\3\2\2\2\u0083\u0190\3\2\2\2\u0085\u0192\3\2\2\2\u0087\u01a9"+
		"\3\2\2\2\u0089\u01ab\3\2\2\2\u008b\u01bb\3\2\2\2\u008d\u01cb\3\2\2\2\u008f"+
		"\u01d8\3\2\2\2\u0091\u0092\7e\2\2\u0092\u0093\7n\2\2\u0093\u0094\7c\2"+
		"\2\u0094\u0095\7u\2\2\u0095\u0096\7u\2\2\u0096\4\3\2\2\2\u0097\u0098\7"+
		"e\2\2\u0098\u0099\7q\2\2\u0099\u009a\7p\2\2\u009a\u009b\7u\2\2\u009b\u009c"+
		"\7v\2\2\u009c\6\3\2\2\2\u009d\u009e\7e\2\2\u009e\u009f\7j\2\2\u009f\u00a0"+
		"\7c\2\2\u00a0\u00a1\7t\2\2\u00a1\b\3\2\2\2\u00a2\u00a3\7k\2\2\u00a3\u00a4"+
		"\7p\2\2\u00a4\u00a5\7v\2\2\u00a5\n\3\2\2\2\u00a6\u00a7\7h\2\2\u00a7\u00a8"+
		"\7n\2\2\u00a8\u00a9\7q\2\2\u00a9\u00aa\7c\2\2\u00aa\u00ab\7v\2\2\u00ab"+
		"\f\3\2\2\2\u00ac\u00ad\7d\2\2\u00ad\u00ae\7q\2\2\u00ae\u00af\7q\2\2\u00af"+
		"\u00b0\7n\2\2\u00b0\16\3\2\2\2\u00b1\u00b2\7u\2\2\u00b2\u00b3\7v\2\2\u00b3"+
		"\u00b4\7t\2\2\u00b4\u00b5\7k\2\2\u00b5\u00b6\7p\2\2\u00b6\u00b7\7i\2\2"+
		"\u00b7\20\3\2\2\2\u00b8\u00b9\7k\2\2\u00b9\u00ba\7h\2\2\u00ba\22\3\2\2"+
		"\2\u00bb\u00bc\7g\2\2\u00bc\u00bd\7n\2\2\u00bd\u00be\7u\2\2\u00be\u00bf"+
		"\7g\2\2\u00bf\24\3\2\2\2\u00c0\u00c1\7h\2\2\u00c1\u00c2\7q\2\2\u00c2\u00c3"+
		"\7t\2\2\u00c3\26\3\2\2\2\u00c4\u00c5\7y\2\2\u00c5\u00c6\7j\2\2\u00c6\u00c7"+
		"\7k\2\2\u00c7\u00c8\7n\2\2\u00c8\u00c9\7g\2\2\u00c9\30\3\2\2\2\u00ca\u00cb"+
		"\7h\2\2\u00cb\u00cc\7q\2\2\u00cc\u00cd\7t\2\2\u00cd\u00ce\7g\2\2\u00ce"+
		"\u00cf\7c\2\2\u00cf\u00d0\7e\2\2\u00d0\u00d1\7j\2\2\u00d1\32\3\2\2\2\u00d2"+
		"\u00d3\7d\2\2\u00d3\u00d4\7t\2\2\u00d4\u00d5\7g\2\2\u00d5\u00d6\7c\2\2"+
		"\u00d6\u00d7\7m\2\2\u00d7\34\3\2\2\2\u00d8\u00d9\7t\2\2\u00d9\u00da\7"+
		"g\2\2\u00da\u00db\7v\2\2\u00db\u00dc\7w\2\2\u00dc\u00dd\7t\2\2\u00dd\u00de"+
		"\7p\2\2\u00de\36\3\2\2\2\u00df\u00e0\7t\2\2\u00e0\u00e1\7g\2\2\u00e1\u00e2"+
		"\7c\2\2\u00e2\u00e3\7f\2\2\u00e3 \3\2\2\2\u00e4\u00e5\7y\2\2\u00e5\u00e6"+
		"\7t\2\2\u00e6\u00e7\7k\2\2\u00e7\u00e8\7v\2\2\u00e8\u00e9\7g\2\2\u00e9"+
		"\"\3\2\2\2\u00ea\u00eb\7k\2\2\u00eb\u00ec\7p\2\2\u00ec$\3\2\2\2\u00ed"+
		"\u00ee\7p\2\2\u00ee\u00ef\7g\2\2\u00ef\u00f0\7y\2\2\u00f0&\3\2\2\2\u00f1"+
		"\u00f2\7v\2\2\u00f2\u00f3\7t\2\2\u00f3\u00f4\7w\2\2\u00f4\u00f5\7g\2\2"+
		"\u00f5(\3\2\2\2\u00f6\u00f7\7h\2\2\u00f7\u00f8\7c\2\2\u00f8\u00f9\7n\2"+
		"\2\u00f9\u00fa\7u\2\2\u00fa\u00fb\7g\2\2\u00fb*\3\2\2\2\u00fc\u00fd\7"+
		"x\2\2\u00fd\u00fe\7q\2\2\u00fe\u00ff\7k\2\2\u00ff\u0100\7f\2\2\u0100,"+
		"\3\2\2\2\u0101\u0102\7+\2\2\u0102.\3\2\2\2\u0103\u0104\7*\2\2\u0104\60"+
		"\3\2\2\2\u0105\u0106\7_\2\2\u0106\62\3\2\2\2\u0107\u0108\7]\2\2\u0108"+
		"\64\3\2\2\2\u0109\u010a\7\177\2\2\u010a\66\3\2\2\2\u010b\u010c\7}\2\2"+
		"\u010c8\3\2\2\2\u010d\u010e\7\u00c4\2\2\u010e\u010f\7\u00a3\2\2\u010f"+
		":\3\2\2\2\u0110\u0111\7#\2\2\u0111<\3\2\2\2\u0112\u0113\7$\2\2\u0113>"+
		"\3\2\2\2\u0114\u0115\7%\2\2\u0115@\3\2\2\2\u0116\u0117\7&\2\2\u0117B\3"+
		"\2\2\2\u0118\u0119\7(\2\2\u0119D\3\2\2\2\u011a\u011b\7)\2\2\u011bF\3\2"+
		"\2\2\u011c\u011d\7.\2\2\u011dH\3\2\2\2\u011e\u011f\7\60\2\2\u011fJ\3\2"+
		"\2\2\u0120\u0121\7<\2\2\u0121L\3\2\2\2\u0122\u0123\7=\2\2\u0123N\3\2\2"+
		"\2\u0124\u0125\7A\2\2\u0125P\3\2\2\2\u0126\u0127\7B\2\2\u0127R\3\2\2\2"+
		"\u0128\u0129\7a\2\2\u0129T\3\2\2\2\u012a\u012b\7-\2\2\u012bV\3\2\2\2\u012c"+
		"\u012d\7/\2\2\u012dX\3\2\2\2\u012e\u012f\7,\2\2\u012fZ\3\2\2\2\u0130\u0131"+
		"\7\61\2\2\u0131\\\3\2\2\2\u0132\u0133\7\'\2\2\u0133^\3\2\2\2\u0134\u0135"+
		"\7?\2\2\u0135`\3\2\2\2\u0136\u0137\7\"\2\2\u0137b\3\2\2\2\u0138\u0139"+
		"\7?\2\2\u0139\u013a\7?\2\2\u013ad\3\2\2\2\u013b\u013c\7#\2\2\u013c\u013d"+
		"\7?\2\2\u013df\3\2\2\2\u013e\u013f\7@\2\2\u013fh\3\2\2\2\u0140\u0141\7"+
		"@\2\2\u0141\u0142\7?\2\2\u0142j\3\2\2\2\u0143\u0144\7>\2\2\u0144l\3\2"+
		"\2\2\u0145\u0146\7>\2\2\u0146\u0147\7?\2\2\u0147n\3\2\2\2\u0148\u0149"+
		"\7(\2\2\u0149\u014a\7(\2\2\u014ap\3\2\2\2\u014b\u014c\7~\2\2\u014c\u014d"+
		"\7~\2\2\u014dr\3\2\2\2\u014e\u014f\7-\2\2\u014f\u0150\7-\2\2\u0150t\3"+
		"\2\2\2\u0151\u0152\7/\2\2\u0152\u0153\7/\2\2\u0153v\3\2\2\2\u0154\u015a"+
		"\5\u0083B\2\u0155\u0159\5\u0083B\2\u0156\u0159\5\u0085C\2\u0157\u0159"+
		"\5S*\2\u0158\u0155\3\2\2\2\u0158\u0156\3\2\2\2\u0158\u0157\3\2\2\2\u0159"+
		"\u015c\3\2\2\2\u015a\u0158\3\2\2\2\u015a\u015b\3\2\2\2\u015bx\3\2\2\2"+
		"\u015c\u015a\3\2\2\2\u015d\u0161\5\u0085C\2\u015e\u0160\5\u0085C\2\u015f"+
		"\u015e\3\2\2\2\u0160\u0163\3\2\2\2\u0161\u015f\3\2\2\2\u0161\u0162\3\2"+
		"\2\2\u0162\u0174\3\2\2\2\u0163\u0161\3\2\2\2\u0164\u0168\5\u0085C\2\u0165"+
		"\u0167\5\u0085C\2\u0166\u0165\3\2\2\2\u0167\u016a\3\2\2\2\u0168\u0166"+
		"\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016b\3\2\2\2\u016a\u0168\3\2\2\2\u016b"+
		"\u016c\5I%\2\u016c\u0170\5\u0085C\2\u016d\u016f\5\u0085C\2\u016e\u016d"+
		"\3\2\2\2\u016f\u0172\3\2\2\2\u0170\u016e\3\2\2\2\u0170\u0171\3\2\2\2\u0171"+
		"\u0174\3\2\2\2\u0172\u0170\3\2\2\2\u0173\u015d\3\2\2\2\u0173\u0164\3\2"+
		"\2\2\u0174z\3\2\2\2\u0175\u0176\5\63\32\2\u0176\u0177\5\61\31\2\u0177"+
		"|\3\2\2\2\u0178\u017b\5E#\2\u0179\u017c\5\u0081A\2\u017a\u017c\t\2\2\2"+
		"\u017b\u0179\3\2\2\2\u017b\u017a\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017e"+
		"\5E#\2\u017e~\3\2\2\2\u017f\u0186\5=\37\2\u0180\u0185\5\u0083B\2\u0181"+
		"\u0185\5\u0085C\2\u0182\u0185\5\u0081A\2\u0183\u0185\5a\61\2\u0184\u0180"+
		"\3\2\2\2\u0184\u0181\3\2\2\2\u0184\u0182\3\2\2\2\u0184\u0183\3\2\2\2\u0185"+
		"\u0188\3\2\2\2\u0186\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0189\3\2"+
		"\2\2\u0188\u0186\3\2\2\2\u0189\u018a\5=\37\2\u018a\u0080\3\2\2\2\u018b"+
		"\u018f\5\u0083B\2\u018c\u018f\5\u0085C\2\u018d\u018f\5\u0087D\2\u018e"+
		"\u018b\3\2\2\2\u018e\u018c\3\2\2\2\u018e\u018d\3\2\2\2\u018f\u0082\3\2"+
		"\2\2\u0190\u0191\t\3\2\2\u0191\u0084\3\2\2\2\u0192\u0193\4\62;\2\u0193"+
		"\u0086\3\2\2\2\u0194\u01aa\5;\36\2\u0195\u01aa\5=\37\2\u0196\u01aa\5?"+
		" \2\u0197\u01aa\5A!\2\u0198\u01aa\5]/\2\u0199\u01aa\5C\"\2\u019a\u01aa"+
		"\5E#\2\u019b\u01aa\5/\30\2\u019c\u01aa\5-\27\2\u019d\u01aa\5Y-\2\u019e"+
		"\u01aa\5U+\2\u019f\u01aa\5W,\2\u01a0\u01aa\5I%\2\u01a1\u01aa\5[.\2\u01a2"+
		"\u01aa\5K&\2\u01a3\u01aa\5M\'\2\u01a4\u01aa\5k\66\2\u01a5\u01aa\5_\60"+
		"\2\u01a6\u01aa\5g\64\2\u01a7\u01aa\5O(\2\u01a8\u01aa\5Q)\2\u01a9\u0194"+
		"\3\2\2\2\u01a9\u0195\3\2\2\2\u01a9\u0196\3\2\2\2\u01a9\u0197\3\2\2\2\u01a9"+
		"\u0198\3\2\2\2\u01a9\u0199\3\2\2\2\u01a9\u019a\3\2\2\2\u01a9\u019b\3\2"+
		"\2\2\u01a9\u019c\3\2\2\2\u01a9\u019d\3\2\2\2\u01a9\u019e\3\2\2\2\u01a9"+
		"\u019f\3\2\2\2\u01a9\u01a0\3\2\2\2\u01a9\u01a1\3\2\2\2\u01a9\u01a2\3\2"+
		"\2\2\u01a9\u01a3\3\2\2\2\u01a9\u01a4\3\2\2\2\u01a9\u01a5\3\2\2\2\u01a9"+
		"\u01a6\3\2\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01a8\3\2\2\2\u01aa\u0088\3\2"+
		"\2\2\u01ab\u01ac\7\61\2\2\u01ac\u01ad\7\61\2\2\u01ad\u01b1\3\2\2\2\u01ae"+
		"\u01b0\13\2\2\2\u01af\u01ae\3\2\2\2\u01b0\u01b3\3\2\2\2\u01b1\u01b2\3"+
		"\2\2\2\u01b1\u01af\3\2\2\2\u01b2\u01b5\3\2\2\2\u01b3\u01b1\3\2\2\2\u01b4"+
		"\u01b6\7\17\2\2\u01b5\u01b4\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7\3"+
		"\2\2\2\u01b7\u01b8\7\f\2\2\u01b8\u01b9\3\2\2\2\u01b9\u01ba\bE\2\2\u01ba"+
		"\u008a\3\2\2\2\u01bb\u01bc\7\61\2\2\u01bc\u01bd\7,\2\2\u01bd\u01c3\3\2"+
		"\2\2\u01be\u01c2\5\u008bF\2\u01bf\u01c2\5\u008dG\2\u01c0\u01c2\13\2\2"+
		"\2\u01c1\u01be\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c0\3\2\2\2\u01c2\u01c5"+
		"\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c3\u01c1\3\2\2\2\u01c4\u01c6\3\2\2\2\u01c5"+
		"\u01c3\3\2\2\2\u01c6\u01c7\7,\2\2\u01c7\u01c8\7\61\2\2\u01c8\u01c9\3\2"+
		"\2\2\u01c9\u01ca\bF\2\2\u01ca\u008c\3\2\2\2\u01cb\u01cc\7\61\2\2\u01cc"+
		"\u01cd\7,\2\2\u01cd\u01d1\3\2\2\2\u01ce\u01d0\13\2\2\2\u01cf\u01ce\3\2"+
		"\2\2\u01d0\u01d3\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d2"+
		"\u01d4\3\2\2\2\u01d3\u01d1\3\2\2\2\u01d4\u01d5\7,\2\2\u01d5\u01d6\7\61"+
		"\2\2\u01d6\u008e\3\2\2\2\u01d7\u01d9\t\4\2\2\u01d8\u01d7\3\2\2\2\u01d9"+
		"\u01da\3\2\2\2\u01da\u01d8\3\2\2\2\u01da\u01db\3\2\2\2\u01db\u01dc\3\2"+
		"\2\2\u01dc\u01dd\bH\2\2\u01dd\u0090\3\2\2\2\24\2\u0158\u015a\u0161\u0168"+
		"\u0170\u0173\u017b\u0184\u0186\u018e\u01a9\u01b1\u01b5\u01c1\u01c3\u01d1"+
		"\u01da\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}