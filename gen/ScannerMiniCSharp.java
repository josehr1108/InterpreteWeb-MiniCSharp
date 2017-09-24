// Generated from C:/Users/Andres/Documents/Compiladores/Proyecto/InterpreteWeb-MiniCSharp\ScannerMiniCSharp.g4 by ANTLR 4.7
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", "STRING", "IF", "ELSE", 
		"FOR", "WHILE", "FOREACH", "BREAK", "RETURN", "READ", "WRITE", "NEW", 
		"TRUE", "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", "RIGHT_SQUARE_BRACKETR", 
		"LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", "LEFT_CURLY_BRACKET", "EXCLAMATION_UP", 
		"EXCLAMATION_DOWN", "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", "DOLLAR_SIGN", 
		"AMPERSAND", "QUOTATION_MARKS", "COMMA", "DOT", "COLON", "SEMICOLON", 
		"QUESTION_SIGN", "AT", "UNDERSCORE", "SUM", "SUBTRACTION", "MULTIPLICATION", 
		"DIVISION", "PERCENTAGE", "ASIGN", "EQUAL_EQUAL", "INEQUALITY", "GREATER_THAN", 
		"GREATER_THAN_OR_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", "AND", "OR", 
		"PLUS_PLUS", "MINUS_MINUS", "IDENT", "NUMBER", "CHAR_CONST", "PRINTABLE_CHAR", 
		"LETTER", "DIGIT", "SPECIAL_CHARACTERS", "LINE_COMMENT", "SPECIAL_COMMENT", 
		"DELIMITED_COMMENT", "WS"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2C\u01b1\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\3\2\3\2\3\2\3\2\3\2\3\2\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t"+
		"\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31"+
		"\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37"+
		"\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3"+
		"*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\60\3\61\3\61\3\61\3\62\3\62"+
		"\3\63\3\63\3\63\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\66\3\67\3\67\3\67"+
		"\38\38\38\39\39\39\3:\3:\3:\3:\7:\u014c\n:\f:\16:\u014f\13:\3;\3;\7;\u0153"+
		"\n;\f;\16;\u0156\13;\3<\3<\3<\5<\u015b\n<\3<\3<\3=\3=\3=\5=\u0162\n=\3"+
		">\3>\3?\3?\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3"+
		"@\3@\5@\u017d\n@\3A\3A\3A\3A\7A\u0183\nA\fA\16A\u0186\13A\3A\5A\u0189"+
		"\nA\3A\3A\3A\3A\3B\3B\3B\3B\3B\3B\7B\u0195\nB\fB\16B\u0198\13B\3B\3B\3"+
		"B\3B\3B\3C\3C\3C\3C\7C\u01a3\nC\fC\16C\u01a6\13C\3C\3C\3C\3D\6D\u01ac"+
		"\nD\rD\16D\u01ad\3D\3D\5\u0184\u0196\u01a4\2E\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26"+
		"+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S"+
		"+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177\2\u0081"+
		"A\u0083B\u0085\2\u0087C\3\2\5\4\2\f\f\17\17\4\2C\\c|\5\2\13\f\17\17\""+
		"\"\2\u01d0\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2"+
		"\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S"+
		"\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2"+
		"\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2"+
		"\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y"+
		"\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0087"+
		"\3\2\2\2\3\u0089\3\2\2\2\5\u008f\3\2\2\2\7\u0095\3\2\2\2\t\u009a\3\2\2"+
		"\2\13\u009e\3\2\2\2\r\u00a4\3\2\2\2\17\u00a9\3\2\2\2\21\u00b0\3\2\2\2"+
		"\23\u00b3\3\2\2\2\25\u00b8\3\2\2\2\27\u00bc\3\2\2\2\31\u00c2\3\2\2\2\33"+
		"\u00ca\3\2\2\2\35\u00d0\3\2\2\2\37\u00d7\3\2\2\2!\u00dc\3\2\2\2#\u00e2"+
		"\3\2\2\2%\u00e6\3\2\2\2\'\u00eb\3\2\2\2)\u00f1\3\2\2\2+\u00f6\3\2\2\2"+
		"-\u00f8\3\2\2\2/\u00fa\3\2\2\2\61\u00fc\3\2\2\2\63\u00fe\3\2\2\2\65\u0100"+
		"\3\2\2\2\67\u0102\3\2\2\29\u0105\3\2\2\2;\u0107\3\2\2\2=\u0109\3\2\2\2"+
		"?\u010b\3\2\2\2A\u010d\3\2\2\2C\u010f\3\2\2\2E\u0111\3\2\2\2G\u0113\3"+
		"\2\2\2I\u0115\3\2\2\2K\u0117\3\2\2\2M\u0119\3\2\2\2O\u011b\3\2\2\2Q\u011d"+
		"\3\2\2\2S\u011f\3\2\2\2U\u0121\3\2\2\2W\u0123\3\2\2\2Y\u0125\3\2\2\2["+
		"\u0127\3\2\2\2]\u0129\3\2\2\2_\u012b\3\2\2\2a\u012e\3\2\2\2c\u0131\3\2"+
		"\2\2e\u0133\3\2\2\2g\u0136\3\2\2\2i\u0138\3\2\2\2k\u013b\3\2\2\2m\u013e"+
		"\3\2\2\2o\u0141\3\2\2\2q\u0144\3\2\2\2s\u0147\3\2\2\2u\u0150\3\2\2\2w"+
		"\u0157\3\2\2\2y\u0161\3\2\2\2{\u0163\3\2\2\2}\u0165\3\2\2\2\177\u017c"+
		"\3\2\2\2\u0081\u017e\3\2\2\2\u0083\u018e\3\2\2\2\u0085\u019e\3\2\2\2\u0087"+
		"\u01ab\3\2\2\2\u0089\u008a\7e\2\2\u008a\u008b\7n\2\2\u008b\u008c\7c\2"+
		"\2\u008c\u008d\7u\2\2\u008d\u008e\7u\2\2\u008e\4\3\2\2\2\u008f\u0090\7"+
		"e\2\2\u0090\u0091\7q\2\2\u0091\u0092\7p\2\2\u0092\u0093\7u\2\2\u0093\u0094"+
		"\7v\2\2\u0094\6\3\2\2\2\u0095\u0096\7e\2\2\u0096\u0097\7j\2\2\u0097\u0098"+
		"\7c\2\2\u0098\u0099\7t\2\2\u0099\b\3\2\2\2\u009a\u009b\7k\2\2\u009b\u009c"+
		"\7p\2\2\u009c\u009d\7v\2\2\u009d\n\3\2\2\2\u009e\u009f\7h\2\2\u009f\u00a0"+
		"\7n\2\2\u00a0\u00a1\7q\2\2\u00a1\u00a2\7c\2\2\u00a2\u00a3\7v\2\2\u00a3"+
		"\f\3\2\2\2\u00a4\u00a5\7d\2\2\u00a5\u00a6\7q\2\2\u00a6\u00a7\7q\2\2\u00a7"+
		"\u00a8\7n\2\2\u00a8\16\3\2\2\2\u00a9\u00aa\7u\2\2\u00aa\u00ab\7v\2\2\u00ab"+
		"\u00ac\7t\2\2\u00ac\u00ad\7k\2\2\u00ad\u00ae\7p\2\2\u00ae\u00af\7i\2\2"+
		"\u00af\20\3\2\2\2\u00b0\u00b1\7k\2\2\u00b1\u00b2\7h\2\2\u00b2\22\3\2\2"+
		"\2\u00b3\u00b4\7g\2\2\u00b4\u00b5\7n\2\2\u00b5\u00b6\7u\2\2\u00b6\u00b7"+
		"\7g\2\2\u00b7\24\3\2\2\2\u00b8\u00b9\7h\2\2\u00b9\u00ba\7q\2\2\u00ba\u00bb"+
		"\7t\2\2\u00bb\26\3\2\2\2\u00bc\u00bd\7y\2\2\u00bd\u00be\7j\2\2\u00be\u00bf"+
		"\7k\2\2\u00bf\u00c0\7n\2\2\u00c0\u00c1\7g\2\2\u00c1\30\3\2\2\2\u00c2\u00c3"+
		"\7h\2\2\u00c3\u00c4\7q\2\2\u00c4\u00c5\7t\2\2\u00c5\u00c6\7g\2\2\u00c6"+
		"\u00c7\7c\2\2\u00c7\u00c8\7e\2\2\u00c8\u00c9\7j\2\2\u00c9\32\3\2\2\2\u00ca"+
		"\u00cb\7d\2\2\u00cb\u00cc\7t\2\2\u00cc\u00cd\7g\2\2\u00cd\u00ce\7c\2\2"+
		"\u00ce\u00cf\7m\2\2\u00cf\34\3\2\2\2\u00d0\u00d1\7t\2\2\u00d1\u00d2\7"+
		"g\2\2\u00d2\u00d3\7v\2\2\u00d3\u00d4\7w\2\2\u00d4\u00d5\7t\2\2\u00d5\u00d6"+
		"\7p\2\2\u00d6\36\3\2\2\2\u00d7\u00d8\7t\2\2\u00d8\u00d9\7g\2\2\u00d9\u00da"+
		"\7c\2\2\u00da\u00db\7f\2\2\u00db \3\2\2\2\u00dc\u00dd\7y\2\2\u00dd\u00de"+
		"\7t\2\2\u00de\u00df\7k\2\2\u00df\u00e0\7v\2\2\u00e0\u00e1\7g\2\2\u00e1"+
		"\"\3\2\2\2\u00e2\u00e3\7p\2\2\u00e3\u00e4\7g\2\2\u00e4\u00e5\7y\2\2\u00e5"+
		"$\3\2\2\2\u00e6\u00e7\7v\2\2\u00e7\u00e8\7t\2\2\u00e8\u00e9\7w\2\2\u00e9"+
		"\u00ea\7g\2\2\u00ea&\3\2\2\2\u00eb\u00ec\7h\2\2\u00ec\u00ed\7c\2\2\u00ed"+
		"\u00ee\7n\2\2\u00ee\u00ef\7u\2\2\u00ef\u00f0\7g\2\2\u00f0(\3\2\2\2\u00f1"+
		"\u00f2\7x\2\2\u00f2\u00f3\7q\2\2\u00f3\u00f4\7k\2\2\u00f4\u00f5\7f\2\2"+
		"\u00f5*\3\2\2\2\u00f6\u00f7\7*\2\2\u00f7,\3\2\2\2\u00f8\u00f9\7*\2\2\u00f9"+
		".\3\2\2\2\u00fa\u00fb\7_\2\2\u00fb\60\3\2\2\2\u00fc\u00fd\7]\2\2\u00fd"+
		"\62\3\2\2\2\u00fe\u00ff\7\177\2\2\u00ff\64\3\2\2\2\u0100\u0101\7}\2\2"+
		"\u0101\66\3\2\2\2\u0102\u0103\7\u00c4\2\2\u0103\u0104\7\u00a3\2\2\u0104"+
		"8\3\2\2\2\u0105\u0106\7#\2\2\u0106:\3\2\2\2\u0107\u0108\7$\2\2\u0108<"+
		"\3\2\2\2\u0109\u010a\7%\2\2\u010a>\3\2\2\2\u010b\u010c\7&\2\2\u010c@\3"+
		"\2\2\2\u010d\u010e\7(\2\2\u010eB\3\2\2\2\u010f\u0110\7)\2\2\u0110D\3\2"+
		"\2\2\u0111\u0112\7.\2\2\u0112F\3\2\2\2\u0113\u0114\7\60\2\2\u0114H\3\2"+
		"\2\2\u0115\u0116\7<\2\2\u0116J\3\2\2\2\u0117\u0118\7=\2\2\u0118L\3\2\2"+
		"\2\u0119\u011a\7A\2\2\u011aN\3\2\2\2\u011b\u011c\7B\2\2\u011cP\3\2\2\2"+
		"\u011d\u011e\7a\2\2\u011eR\3\2\2\2\u011f\u0120\7-\2\2\u0120T\3\2\2\2\u0121"+
		"\u0122\7/\2\2\u0122V\3\2\2\2\u0123\u0124\7,\2\2\u0124X\3\2\2\2\u0125\u0126"+
		"\7\61\2\2\u0126Z\3\2\2\2\u0127\u0128\7\'\2\2\u0128\\\3\2\2\2\u0129\u012a"+
		"\7?\2\2\u012a^\3\2\2\2\u012b\u012c\7?\2\2\u012c\u012d\7?\2\2\u012d`\3"+
		"\2\2\2\u012e\u012f\7#\2\2\u012f\u0130\7?\2\2\u0130b\3\2\2\2\u0131\u0132"+
		"\7@\2\2\u0132d\3\2\2\2\u0133\u0134\7@\2\2\u0134\u0135\7?\2\2\u0135f\3"+
		"\2\2\2\u0136\u0137\7>\2\2\u0137h\3\2\2\2\u0138\u0139\7>\2\2\u0139\u013a"+
		"\7?\2\2\u013aj\3\2\2\2\u013b\u013c\7(\2\2\u013c\u013d\7(\2\2\u013dl\3"+
		"\2\2\2\u013e\u013f\7~\2\2\u013f\u0140\7~\2\2\u0140n\3\2\2\2\u0141\u0142"+
		"\7-\2\2\u0142\u0143\7-\2\2\u0143p\3\2\2\2\u0144\u0145\7/\2\2\u0145\u0146"+
		"\7/\2\2\u0146r\3\2\2\2\u0147\u014d\5{>\2\u0148\u014c\5{>\2\u0149\u014c"+
		"\5}?\2\u014a\u014c\5Q)\2\u014b\u0148\3\2\2\2\u014b\u0149\3\2\2\2\u014b"+
		"\u014a\3\2\2\2\u014c\u014f\3\2\2\2\u014d\u014b\3\2\2\2\u014d\u014e\3\2"+
		"\2\2\u014et\3\2\2\2\u014f\u014d\3\2\2\2\u0150\u0154\5}?\2\u0151\u0153"+
		"\5}?\2\u0152\u0151\3\2\2\2\u0153\u0156\3\2\2\2\u0154\u0152\3\2\2\2\u0154"+
		"\u0155\3\2\2\2\u0155v\3\2\2\2\u0156\u0154\3\2\2\2\u0157\u015a\5C\"\2\u0158"+
		"\u015b\5y=\2\u0159\u015b\t\2\2\2\u015a\u0158\3\2\2\2\u015a\u0159\3\2\2"+
		"\2\u015b\u015c\3\2\2\2\u015c\u015d\5C\"\2\u015dx\3\2\2\2\u015e\u0162\5"+
		"{>\2\u015f\u0162\5}?\2\u0160\u0162\5\177@\2\u0161\u015e\3\2\2\2\u0161"+
		"\u015f\3\2\2\2\u0161\u0160\3\2\2\2\u0162z\3\2\2\2\u0163\u0164\t\3\2\2"+
		"\u0164|\3\2\2\2\u0165\u0166\4\62;\2\u0166~\3\2\2\2\u0167\u017d\59\35\2"+
		"\u0168\u017d\5;\36\2\u0169\u017d\5=\37\2\u016a\u017d\5? \2\u016b\u017d"+
		"\5[.\2\u016c\u017d\5A!\2\u016d\u017d\5C\"\2\u016e\u017d\5-\27\2\u016f"+
		"\u017d\5+\26\2\u0170\u017d\5W,\2\u0171\u017d\5S*\2\u0172\u017d\5U+\2\u0173"+
		"\u017d\5G$\2\u0174\u017d\5Y-\2\u0175\u017d\5I%\2\u0176\u017d\5K&\2\u0177"+
		"\u017d\5g\64\2\u0178\u017d\5]/\2\u0179\u017d\5c\62\2\u017a\u017d\5M\'"+
		"\2\u017b\u017d\5O(\2\u017c\u0167\3\2\2\2\u017c\u0168\3\2\2\2\u017c\u0169"+
		"\3\2\2\2\u017c\u016a\3\2\2\2\u017c\u016b\3\2\2\2\u017c\u016c\3\2\2\2\u017c"+
		"\u016d\3\2\2\2\u017c\u016e\3\2\2\2\u017c\u016f\3\2\2\2\u017c\u0170\3\2"+
		"\2\2\u017c\u0171\3\2\2\2\u017c\u0172\3\2\2\2\u017c\u0173\3\2\2\2\u017c"+
		"\u0174\3\2\2\2\u017c\u0175\3\2\2\2\u017c\u0176\3\2\2\2\u017c\u0177\3\2"+
		"\2\2\u017c\u0178\3\2\2\2\u017c\u0179\3\2\2\2\u017c\u017a\3\2\2\2\u017c"+
		"\u017b\3\2\2\2\u017d\u0080\3\2\2\2\u017e\u017f\7\61\2\2\u017f\u0180\7"+
		"\61\2\2\u0180\u0184\3\2\2\2\u0181\u0183\13\2\2\2\u0182\u0181\3\2\2\2\u0183"+
		"\u0186\3\2\2\2\u0184\u0185\3\2\2\2\u0184\u0182\3\2\2\2\u0185\u0188\3\2"+
		"\2\2\u0186\u0184\3\2\2\2\u0187\u0189\7\17\2\2\u0188\u0187\3\2\2\2\u0188"+
		"\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\7\f\2\2\u018b\u018c\3\2"+
		"\2\2\u018c\u018d\bA\2\2\u018d\u0082\3\2\2\2\u018e\u018f\7\61\2\2\u018f"+
		"\u0190\7,\2\2\u0190\u0196\3\2\2\2\u0191\u0195\5\u0083B\2\u0192\u0195\5"+
		"\u0085C\2\u0193\u0195\13\2\2\2\u0194\u0191\3\2\2\2\u0194\u0192\3\2\2\2"+
		"\u0194\u0193\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0197\3\2\2\2\u0196\u0194"+
		"\3\2\2\2\u0197\u0199\3\2\2\2\u0198\u0196\3\2\2\2\u0199\u019a\7,\2\2\u019a"+
		"\u019b\7\61\2\2\u019b\u019c\3\2\2\2\u019c\u019d\bB\2\2\u019d\u0084\3\2"+
		"\2\2\u019e\u019f\7\61\2\2\u019f\u01a0\7,\2\2\u01a0\u01a4\3\2\2\2\u01a1"+
		"\u01a3\13\2\2\2\u01a2\u01a1\3\2\2\2\u01a3\u01a6\3\2\2\2\u01a4\u01a5\3"+
		"\2\2\2\u01a4\u01a2\3\2\2\2\u01a5\u01a7\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a7"+
		"\u01a8\7,\2\2\u01a8\u01a9\7\61\2\2\u01a9\u0086\3\2\2\2\u01aa\u01ac\t\4"+
		"\2\2\u01ab\u01aa\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ab\3\2\2\2\u01ad"+
		"\u01ae\3\2\2\2\u01ae\u01af\3\2\2\2\u01af\u01b0\bD\2\2\u01b0\u0088\3\2"+
		"\2\2\17\2\u014b\u014d\u0154\u015a\u0161\u017c\u0184\u0188\u0194\u0196"+
		"\u01a4\u01ad\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}