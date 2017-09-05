// Generated from C:/Users/josah/Documents/MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ParserMiniCSharpListener = require('./ParserMiniCSharpListener').ParserMiniCSharpListener;
var grammarFileName = "ParserMiniCSharp.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003F\u00f5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u00027\n\u0002\f\u0002\u000e\u0002:\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006T\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tn",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a2\n\t",
    "\u0003\n\u0003\n\u0007\n\u00a6\n\n\f\n\u000e\n\u00a9\u000b\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u00b4\n\f\f\f\u000e\f\u00b7\u000b\f\u0003\r\u0003",
    "\r\u0003\r\u0007\r\u00bc\n\r\f\r\u000e\r\u00bf\u000b\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u00ca\n\u000f\f\u000f\u000e\u000f\u00cd",
    "\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00e1\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00ea",
    "\n\u0012\f\u0012\u000e\u0012\u00ed\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0002\u0002",
    "\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(\u0002\u0007\u0003\u0002EF\u0003\u0002\u0015\u0016",
    "\u0003\u000238\u0003\u0002./\u0003\u000202\u0002\u00fd\u0002*\u0003",
    "\u0002\u0002\u0002\u0004=\u0003\u0002\u0002\u0002\u0006D\u0003\u0002",
    "\u0002\u0002\bK\u0003\u0002\u0002\u0002\nS\u0003\u0002\u0002\u0002\f",
    "\\\u0003\u0002\u0002\u0002\u000eb\u0003\u0002\u0002\u0002\u0010\u00a1",
    "\u0003\u0002\u0002\u0002\u0012\u00a3\u0003\u0002\u0002\u0002\u0014\u00ac",
    "\u0003\u0002\u0002\u0002\u0016\u00b0\u0003\u0002\u0002\u0002\u0018\u00b8",
    "\u0003\u0002\u0002\u0002\u001a\u00c0\u0003\u0002\u0002\u0002\u001c\u00c4",
    "\u0003\u0002\u0002\u0002\u001e\u00ce\u0003\u0002\u0002\u0002 \u00e0",
    "\u0003\u0002\u0002\u0002\"\u00e2\u0003\u0002\u0002\u0002$\u00ee\u0003",
    "\u0002\u0002\u0002&\u00f0\u0003\u0002\u0002\u0002(\u00f2\u0003\u0002",
    "\u0002\u0002*+\u0007\t\u0002\u0002+1\u0007>\u0002\u0002,0\u0005\u0004",
    "\u0003\u0002-0\u0005\u0006\u0004\u0002.0\u0005\b\u0005\u0002/,\u0003",
    "\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u0002",
    "03\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000224\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000248\u0007%",
    "\u0002\u000257\u0005\n\u0006\u000265\u0003\u0002\u0002\u00027:\u0003",
    "\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u0002",
    "9;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0007$\u0002",
    "\u0002<\u0003\u0003\u0002\u0002\u0002=>\u0007\n\u0002\u0002>?\u0005",
    "\u000e\b\u0002?@\u0007>\u0002\u0002@A\u0007;\u0002\u0002AB\t\u0002\u0002",
    "\u0002BC\u0007*\u0002\u0002C\u0005\u0003\u0002\u0002\u0002DE\u0005\u000e",
    "\b\u0002EF\u0007>\u0002\u0002FG\u0007&\u0002\u0002GH\u0007>\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IJ\u0007*\u0002\u0002J\u0007\u0003\u0002\u0002",
    "\u0002KL\u0007\t\u0002\u0002LM\u0007>\u0002\u0002MN\u0007%\u0002\u0002",
    "NO\u0005\u0006\u0004\u0002OP\u0007$\u0002\u0002P\t\u0003\u0002\u0002",
    "\u0002QT\u0005\u000e\b\u0002RT\u0007\u0010\u0002\u0002SQ\u0003\u0002",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UV\u0007",
    ">\u0002\u0002VW\u0007!\u0002\u0002WX\u0005\f\u0007\u0002XY\u0007 \u0002",
    "\u0002YZ\u0005\u0006\u0004\u0002Z[\u0005\u0012\n\u0002[\u000b\u0003",
    "\u0002\u0002\u0002\\]\u0005\u000e\b\u0002]^\u0007>\u0002\u0002^_\u0007",
    "&\u0002\u0002_`\u0005\u000e\b\u0002`a\u0007>\u0002\u0002a\r\u0003\u0002",
    "\u0002\u0002bc\u0007>\u0002\u0002c\u000f\u0003\u0002\u0002\u0002dm\u0005",
    "\"\u0012\u0002ef\u0007;\u0002\u0002fn\u0005\u001c\u000f\u0002gh\u0007",
    "!\u0002\u0002hi\u0005\u0014\u000b\u0002ij\u0007 \u0002\u0002jn\u0003",
    "\u0002\u0002\u0002kn\u0007<\u0002\u0002ln\u0007=\u0002\u0002me\u0003",
    "\u0002\u0002\u0002mg\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002",
    "ml\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0007*\u0002",
    "\u0002p\u00a2\u0003\u0002\u0002\u0002qr\u0007\f\u0002\u0002rs\u0007",
    "!\u0002\u0002st\u0005\u0016\f\u0002tu\u0007 \u0002\u0002uv\u0005\u0010",
    "\t\u0002vw\u0007\u000b\u0002\u0002wx\u0005\u0010\t\u0002x\u00a2\u0003",
    "\u0002\u0002\u0002yz\u0007\u0014\u0002\u0002z{\u0007!\u0002\u0002{|",
    "\u0005\u001c\u000f\u0002|}\u0007*\u0002\u0002}~\u0005\u0016\f\u0002",
    "~\u007f\u0007*\u0002\u0002\u007f\u0080\u0005\u0010\t\u0002\u0080\u0081",
    "\u0007 \u0002\u0002\u0081\u0082\u0005\u0010\t\u0002\u0082\u00a2\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0007\u0011\u0002\u0002\u0084\u0085\u0007",
    "!\u0002\u0002\u0085\u0086\u0005\u0016\f\u0002\u0086\u0087\u0007 \u0002",
    "\u0002\u0087\u0088\u0005\u0010\t\u0002\u0088\u00a2\u0003\u0002\u0002",
    "\u0002\u0089\u00a2\u0007\u0013\u0002\u0002\u008a\u008b\u0007\b\u0002",
    "\u0002\u008b\u00a2\u0007*\u0002\u0002\u008c\u008d\u0007\u000f\u0002",
    "\u0002\u008d\u008e\u0005\u001c\u000f\u0002\u008e\u008f\u0007*\u0002",
    "\u0002\u008f\u00a2\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u000e\u0002",
    "\u0002\u0091\u0092\u0007!\u0002\u0002\u0092\u0093\u0005\"\u0012\u0002",
    "\u0093\u0094\u0007 \u0002\u0002\u0094\u0095\u0007*\u0002\u0002\u0095",
    "\u00a2\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0012\u0002\u0002\u0097",
    "\u0098\u0007!\u0002\u0002\u0098\u0099\u0005\u001c\u000f\u0002\u0099",
    "\u009a\u0007*\u0002\u0002\u009a\u009b\u0007?\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0007 \u0002\u0002\u009d\u009e",
    "\u0007*\u0002\u0002\u009e\u00a2\u0003\u0002\u0002\u0002\u009f\u00a2",
    "\u0005\u0012\n\u0002\u00a0\u00a2\u0007*\u0002\u0002\u00a1d\u0003\u0002",
    "\u0002\u0002\u00a1q\u0003\u0002\u0002\u0002\u00a1y\u0003\u0002\u0002",
    "\u0002\u00a1\u0083\u0003\u0002\u0002\u0002\u00a1\u0089\u0003\u0002\u0002",
    "\u0002\u00a1\u008a\u0003\u0002\u0002\u0002\u00a1\u008c\u0003\u0002\u0002",
    "\u0002\u00a1\u0090\u0003\u0002\u0002\u0002\u00a1\u0096\u0003\u0002\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u0011\u0003\u0002\u0002\u0002\u00a3\u00a7\u0007%\u0002",
    "\u0002\u00a4\u00a6\u0005\u0010\t\u0002\u00a5\u00a4\u0003\u0002\u0002",
    "\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002",
    "\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007$\u0002",
    "\u0002\u00ab\u0013\u0003\u0002\u0002\u0002\u00ac\u00ad\u0005\u001c\u000f",
    "\u0002\u00ad\u00ae\u0007*\u0002\u0002\u00ae\u00af\u0005\u001c\u000f",
    "\u0002\u00af\u0015\u0003\u0002\u0002\u0002\u00b0\u00b5\u0005\u0018\r",
    "\u0002\u00b1\u00b2\u0007:\u0002\u0002\u00b2\u00b4\u0005\u0018\r\u0002",
    "\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002",
    "\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002",
    "\u00b6\u0017\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002",
    "\u00b8\u00bd\u0005\u001a\u000e\u0002\u00b9\u00ba\u00079\u0002\u0002",
    "\u00ba\u00bc\u0005\u001a\u000e\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002",
    "\u00bc\u00bf\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002",
    "\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u0019\u0003\u0002\u0002\u0002",
    "\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c1\u0005\u001c\u000f\u0002",
    "\u00c1\u00c2\u0005$\u0013\u0002\u00c2\u00c3\u0005\u001c\u000f\u0002",
    "\u00c3\u001b\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007/\u0002\u0002",
    "\u00c5\u00cb\u0005\u001e\u0010\u0002\u00c6\u00c7\u0005&\u0014\u0002",
    "\u00c7\u00c8\u0005\u001e\u0010\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002",
    "\u00c9\u00c6\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002",
    "\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002",
    "\u00cc\u001d\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0005 \u0011\u0002\u00cf\u00d0\u0005(\u0015\u0002\u00d0",
    "\u00d1\u0005 \u0011\u0002\u00d1\u001f\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0005\"\u0012\u0002\u00d3\u00d4\u0007!\u0002\u0002\u00d4\u00d5",
    "\u0005\u0014\u000b\u0002\u00d5\u00d6\u0007 \u0002\u0002\u00d6\u00e1",
    "\u0003\u0002\u0002\u0002\u00d7\u00e1\u0007?\u0002\u0002\u00d8\u00e1",
    "\u0007@\u0002\u0002\u00d9\u00e1\t\u0003\u0002\u0002\u00da\u00db\u0007",
    "\r\u0002\u0002\u00db\u00e1\u0007>\u0002\u0002\u00dc\u00dd\u0007!\u0002",
    "\u0002\u00dd\u00de\u0005\u001c\u000f\u0002\u00de\u00df\u0007 \u0002",
    "\u0002\u00df\u00e1\u0003\u0002\u0002\u0002\u00e0\u00d2\u0003\u0002\u0002",
    "\u0002\u00e0\u00d7\u0003\u0002\u0002\u0002\u00e0\u00d8\u0003\u0002\u0002",
    "\u0002\u00e0\u00d9\u0003\u0002\u0002\u0002\u00e0\u00da\u0003\u0002\u0002",
    "\u0002\u00e0\u00dc\u0003\u0002\u0002\u0002\u00e1!\u0003\u0002\u0002",
    "\u0002\u00e2\u00eb\u0007>\u0002\u0002\u00e3\u00e4\u0007,\u0002\u0002",
    "\u00e4\u00ea\u0007>\u0002\u0002\u00e5\u00e6\u0007#\u0002\u0002\u00e6",
    "\u00e7\u0005\u001c\u000f\u0002\u00e7\u00e8\u0007$\u0002\u0002\u00e8",
    "\u00ea\u0003\u0002\u0002\u0002\u00e9\u00e3\u0003\u0002\u0002\u0002\u00e9",
    "\u00e5\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec",
    "#\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ee",
    "\u00ef\t\u0004\u0002\u0002\u00ef%\u0003\u0002\u0002\u0002\u00f0\u00f1",
    "\t\u0005\u0002\u0002\u00f1\'\u0003\u0002\u0002\u0002\u00f2\u00f3\t\u0006",
    "\u0002\u0002\u00f3)\u0003\u0002\u0002\u0002\u000f/18Sm\u00a1\u00a7\u00b5",
    "\u00bd\u00cb\u00e0\u00e9\u00eb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'char'", "'int'", "'float'", "'bool'", "'string'", 
                     "'break'", "'class'", "'const'", "'else'", "'if'", 
                     "'new'", "'read'", "'return'", "'void'", "'while'", 
                     "'write'", "'foreach'", "'for'", "'true'", "'false'", 
                     null, null, "'\u00C2\u00A1'", "'!'", "'\"'", "'#'", 
                     "'$'", "'&'", "'''", null, null, "']'", "'['", "'}'", 
                     "'{'", "','", "'.'", null, "':'", "';'", "'?'", "'@'", 
                     "'_'", "'+'", "'-'", "'*'", null, "'%'", "'=='", "'!='", 
                     "'>'", "'>='", "'<'", "'<='", "'&&'", "'||'", "'='", 
                     "'++'", "'--'" ];

var symbolicNames = [ null, "CHAR", "INT", "FLOAT", "BOOL", "STRING", "BREAK", 
                      "CLASS", "CONST", "ELSE", "IF", "NEW", "READ", "RETURN", 
                      "VOID", "WHILE", "WRITE", "FOREACH", "FOR", "TRUE", 
                      "FALSE", "LETTER", "DIGIT", "EXCLAMATION_UP", "EXCLAMATION_DOWN", 
                      "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", "DOLLAR_SIGN", 
                      "AMPERSAND", "QUOTATION_MARKS", "RIGHT_PARENTHESIS", 
                      "LEFT_PARENTHESIS", "RIGHT_SQUARE_BRACKETR", "LEFT_SQUARE_BRACKET", 
                      "RIGHT_CURLY_BRACKET", "LEFT_CURLY_BRACKET", "COMMA", 
                      "DOT", "FORWARD_SLASH", "COLON", "SEMICOLON", "QUESTION_SIGN", 
                      "AT", "UNDERSCORE", "SUM", "SUBTRACTION", "MULTIPLICATION", 
                      "DIVISION", "PERCENTAGE", "EQUAL_EQUAL", "INEQUALITY", 
                      "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "LESS_THAN", 
                      "LESS_THAN_OR_EQUAL", "AND", "OR", "EQUAL", "PLUS_PLUS", 
                      "MINUS_MINUS", "IDENT", "NUMBER", "CHAR_CONST", "PRINTABLE_CHAR", 
                      "LINE_COMMENT", "SPECIAL_COMMENT", "WS", "Number", 
                      "CharConst" ];

var ruleNames =  [ "program", "constDecl", "varDecl", "classDecl", "methodDecl", 
                   "formPars", "type", "statement", "block", "actPars", 
                   "condition", "condTerm", "condFact", "expr", "term", 
                   "factor", "designator", "relop", "addop", "mulop" ];

function ParserMiniCSharp (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ParserMiniCSharp.prototype = Object.create(antlr4.Parser.prototype);
ParserMiniCSharp.prototype.constructor = ParserMiniCSharp;

Object.defineProperty(ParserMiniCSharp.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ParserMiniCSharp.EOF = antlr4.Token.EOF;
ParserMiniCSharp.CHAR = 1;
ParserMiniCSharp.INT = 2;
ParserMiniCSharp.FLOAT = 3;
ParserMiniCSharp.BOOL = 4;
ParserMiniCSharp.STRING = 5;
ParserMiniCSharp.BREAK = 6;
ParserMiniCSharp.CLASS = 7;
ParserMiniCSharp.CONST = 8;
ParserMiniCSharp.ELSE = 9;
ParserMiniCSharp.IF = 10;
ParserMiniCSharp.NEW = 11;
ParserMiniCSharp.READ = 12;
ParserMiniCSharp.RETURN = 13;
ParserMiniCSharp.VOID = 14;
ParserMiniCSharp.WHILE = 15;
ParserMiniCSharp.WRITE = 16;
ParserMiniCSharp.FOREACH = 17;
ParserMiniCSharp.FOR = 18;
ParserMiniCSharp.TRUE = 19;
ParserMiniCSharp.FALSE = 20;
ParserMiniCSharp.LETTER = 21;
ParserMiniCSharp.DIGIT = 22;
ParserMiniCSharp.EXCLAMATION_UP = 23;
ParserMiniCSharp.EXCLAMATION_DOWN = 24;
ParserMiniCSharp.DOUBLE_QUOTATION_MARKS = 25;
ParserMiniCSharp.NUMBER_SIGN = 26;
ParserMiniCSharp.DOLLAR_SIGN = 27;
ParserMiniCSharp.AMPERSAND = 28;
ParserMiniCSharp.QUOTATION_MARKS = 29;
ParserMiniCSharp.RIGHT_PARENTHESIS = 30;
ParserMiniCSharp.LEFT_PARENTHESIS = 31;
ParserMiniCSharp.RIGHT_SQUARE_BRACKETR = 32;
ParserMiniCSharp.LEFT_SQUARE_BRACKET = 33;
ParserMiniCSharp.RIGHT_CURLY_BRACKET = 34;
ParserMiniCSharp.LEFT_CURLY_BRACKET = 35;
ParserMiniCSharp.COMMA = 36;
ParserMiniCSharp.DOT = 37;
ParserMiniCSharp.FORWARD_SLASH = 38;
ParserMiniCSharp.COLON = 39;
ParserMiniCSharp.SEMICOLON = 40;
ParserMiniCSharp.QUESTION_SIGN = 41;
ParserMiniCSharp.AT = 42;
ParserMiniCSharp.UNDERSCORE = 43;
ParserMiniCSharp.SUM = 44;
ParserMiniCSharp.SUBTRACTION = 45;
ParserMiniCSharp.MULTIPLICATION = 46;
ParserMiniCSharp.DIVISION = 47;
ParserMiniCSharp.PERCENTAGE = 48;
ParserMiniCSharp.EQUAL_EQUAL = 49;
ParserMiniCSharp.INEQUALITY = 50;
ParserMiniCSharp.GREATER_THAN = 51;
ParserMiniCSharp.GREATER_THAN_OR_EQUAL = 52;
ParserMiniCSharp.LESS_THAN = 53;
ParserMiniCSharp.LESS_THAN_OR_EQUAL = 54;
ParserMiniCSharp.AND = 55;
ParserMiniCSharp.OR = 56;
ParserMiniCSharp.EQUAL = 57;
ParserMiniCSharp.PLUS_PLUS = 58;
ParserMiniCSharp.MINUS_MINUS = 59;
ParserMiniCSharp.IDENT = 60;
ParserMiniCSharp.NUMBER = 61;
ParserMiniCSharp.CHAR_CONST = 62;
ParserMiniCSharp.PRINTABLE_CHAR = 63;
ParserMiniCSharp.LINE_COMMENT = 64;
ParserMiniCSharp.SPECIAL_COMMENT = 65;
ParserMiniCSharp.WS = 66;
ParserMiniCSharp.Number = 67;
ParserMiniCSharp.CharConst = 68;

ParserMiniCSharp.RULE_program = 0;
ParserMiniCSharp.RULE_constDecl = 1;
ParserMiniCSharp.RULE_varDecl = 2;
ParserMiniCSharp.RULE_classDecl = 3;
ParserMiniCSharp.RULE_methodDecl = 4;
ParserMiniCSharp.RULE_formPars = 5;
ParserMiniCSharp.RULE_type = 6;
ParserMiniCSharp.RULE_statement = 7;
ParserMiniCSharp.RULE_block = 8;
ParserMiniCSharp.RULE_actPars = 9;
ParserMiniCSharp.RULE_condition = 10;
ParserMiniCSharp.RULE_condTerm = 11;
ParserMiniCSharp.RULE_condFact = 12;
ParserMiniCSharp.RULE_expr = 13;
ParserMiniCSharp.RULE_term = 14;
ParserMiniCSharp.RULE_factor = 15;
ParserMiniCSharp.RULE_designator = 16;
ParserMiniCSharp.RULE_relop = 17;
ParserMiniCSharp.RULE_addop = 18;
ParserMiniCSharp.RULE_mulop = 19;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.CLASS = function() {
    return this.getToken(ParserMiniCSharp.CLASS, 0);
};

ProgramContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};

ProgramContext.prototype.LEFT_CURLY_BRACKET = function() {
    return this.getToken(ParserMiniCSharp.LEFT_CURLY_BRACKET, 0);
};

ProgramContext.prototype.RIGHT_CURLY_BRACKET = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, 0);
};

ProgramContext.prototype.constDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstDeclContext);
    } else {
        return this.getTypedRuleContext(ConstDeclContext,i);
    }
};

ProgramContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};

ProgramContext.prototype.classDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDeclContext);
    } else {
        return this.getTypedRuleContext(ClassDeclContext,i);
    }
};

ProgramContext.prototype.methodDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MethodDeclContext);
    } else {
        return this.getTypedRuleContext(MethodDeclContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitProgram(this);
	}
};




ParserMiniCSharp.ProgramContext = ProgramContext;

ParserMiniCSharp.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ParserMiniCSharp.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(ParserMiniCSharp.CLASS);
        this.state = 41;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.CLASS || _la===ParserMiniCSharp.CONST || _la===ParserMiniCSharp.IDENT) {
            this.state = 45;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.CONST:
                this.state = 42;
                this.constDecl();
                break;
            case ParserMiniCSharp.IDENT:
                this.state = 43;
                this.varDecl();
                break;
            case ParserMiniCSharp.CLASS:
                this.state = 44;
                this.classDecl();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 50;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.VOID || _la===ParserMiniCSharp.IDENT) {
            this.state = 51;
            this.methodDecl();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this.match(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_constDecl;
    return this;
}

ConstDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstDeclContext.prototype.constructor = ConstDeclContext;

ConstDeclContext.prototype.CONST = function() {
    return this.getToken(ParserMiniCSharp.CONST, 0);
};

ConstDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ConstDeclContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};

ConstDeclContext.prototype.EQUAL = function() {
    return this.getToken(ParserMiniCSharp.EQUAL, 0);
};

ConstDeclContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

ConstDeclContext.prototype.Number = function() {
    return this.getToken(ParserMiniCSharp.Number, 0);
};

ConstDeclContext.prototype.CharConst = function() {
    return this.getToken(ParserMiniCSharp.CharConst, 0);
};

ConstDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterConstDecl(this);
	}
};

ConstDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitConstDecl(this);
	}
};




ParserMiniCSharp.ConstDeclContext = ConstDeclContext;

ParserMiniCSharp.prototype.constDecl = function() {

    var localctx = new ConstDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ParserMiniCSharp.RULE_constDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(ParserMiniCSharp.CONST);
        this.state = 60;
        this.type();
        this.state = 61;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 62;
        this.match(ParserMiniCSharp.EQUAL);
        this.state = 63;
        _la = this._input.LA(1);
        if(!(_la===ParserMiniCSharp.Number || _la===ParserMiniCSharp.CharConst)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 64;
        this.match(ParserMiniCSharp.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;

VarDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VarDeclContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.IDENT);
    } else {
        return this.getToken(ParserMiniCSharp.IDENT, i);
    }
};


VarDeclContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

VarDeclContext.prototype.COMMA = function() {
    return this.getToken(ParserMiniCSharp.COMMA, 0);
};

VarDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterVarDecl(this);
	}
};

VarDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitVarDecl(this);
	}
};




ParserMiniCSharp.VarDeclContext = VarDeclContext;

ParserMiniCSharp.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ParserMiniCSharp.RULE_varDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.type();
        this.state = 67;
        this.match(ParserMiniCSharp.IDENT);

        this.state = 68;
        this.match(ParserMiniCSharp.COMMA);
        this.state = 69;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 71;
        this.match(ParserMiniCSharp.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_classDecl;
    return this;
}

ClassDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclContext.prototype.constructor = ClassDeclContext;

ClassDeclContext.prototype.CLASS = function() {
    return this.getToken(ParserMiniCSharp.CLASS, 0);
};

ClassDeclContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};

ClassDeclContext.prototype.LEFT_CURLY_BRACKET = function() {
    return this.getToken(ParserMiniCSharp.LEFT_CURLY_BRACKET, 0);
};

ClassDeclContext.prototype.RIGHT_CURLY_BRACKET = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, 0);
};

ClassDeclContext.prototype.varDecl = function() {
    return this.getTypedRuleContext(VarDeclContext,0);
};

ClassDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterClassDecl(this);
	}
};

ClassDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitClassDecl(this);
	}
};




ParserMiniCSharp.ClassDeclContext = ClassDeclContext;

ParserMiniCSharp.prototype.classDecl = function() {

    var localctx = new ClassDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ParserMiniCSharp.RULE_classDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(ParserMiniCSharp.CLASS);
        this.state = 74;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 75;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);

        this.state = 76;
        this.varDecl();
        this.state = 77;
        this.match(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_methodDecl;
    return this;
}

MethodDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDeclContext.prototype.constructor = MethodDeclContext;

MethodDeclContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};

MethodDeclContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

MethodDeclContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

MethodDeclContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

MethodDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

MethodDeclContext.prototype.VOID = function() {
    return this.getToken(ParserMiniCSharp.VOID, 0);
};

MethodDeclContext.prototype.formPars = function() {
    return this.getTypedRuleContext(FormParsContext,0);
};

MethodDeclContext.prototype.varDecl = function() {
    return this.getTypedRuleContext(VarDeclContext,0);
};

MethodDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterMethodDecl(this);
	}
};

MethodDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitMethodDecl(this);
	}
};




ParserMiniCSharp.MethodDeclContext = MethodDeclContext;

ParserMiniCSharp.prototype.methodDecl = function() {

    var localctx = new MethodDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ParserMiniCSharp.RULE_methodDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            this.state = 79;
            this.type();
            break;
        case ParserMiniCSharp.VOID:
            this.state = 80;
            this.match(ParserMiniCSharp.VOID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 83;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 84;
        this.match(ParserMiniCSharp.LEFT_PARENTHESIS);

        this.state = 85;
        this.formPars();
        this.state = 86;
        this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);

        this.state = 87;
        this.varDecl();
        this.state = 88;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormParsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_formPars;
    return this;
}

FormParsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormParsContext.prototype.constructor = FormParsContext;

FormParsContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

FormParsContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.IDENT);
    } else {
        return this.getToken(ParserMiniCSharp.IDENT, i);
    }
};


FormParsContext.prototype.COMMA = function() {
    return this.getToken(ParserMiniCSharp.COMMA, 0);
};

FormParsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterFormPars(this);
	}
};

FormParsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitFormPars(this);
	}
};




ParserMiniCSharp.FormParsContext = FormParsContext;

ParserMiniCSharp.prototype.formPars = function() {

    var localctx = new FormParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ParserMiniCSharp.RULE_formPars);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.type();
        this.state = 91;
        this.match(ParserMiniCSharp.IDENT);

        this.state = 92;
        this.match(ParserMiniCSharp.COMMA);
        this.state = 93;
        this.type();
        this.state = 94;
        this.match(ParserMiniCSharp.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitType(this);
	}
};




ParserMiniCSharp.TypeContext = TypeContext;

ParserMiniCSharp.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ParserMiniCSharp.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(ParserMiniCSharp.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

StatementContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.SEMICOLON);
    } else {
        return this.getToken(ParserMiniCSharp.SEMICOLON, i);
    }
};


StatementContext.prototype.EQUAL = function() {
    return this.getToken(ParserMiniCSharp.EQUAL, 0);
};

StatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

StatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

StatementContext.prototype.PLUS_PLUS = function() {
    return this.getToken(ParserMiniCSharp.PLUS_PLUS, 0);
};

StatementContext.prototype.MINUS_MINUS = function() {
    return this.getToken(ParserMiniCSharp.MINUS_MINUS, 0);
};

StatementContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};

StatementContext.prototype.IF = function() {
    return this.getToken(ParserMiniCSharp.IF, 0);
};

StatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.ELSE = function() {
    return this.getToken(ParserMiniCSharp.ELSE, 0);
};

StatementContext.prototype.FOR = function() {
    return this.getToken(ParserMiniCSharp.FOR, 0);
};

StatementContext.prototype.WHILE = function() {
    return this.getToken(ParserMiniCSharp.WHILE, 0);
};

StatementContext.prototype.FOREACH = function() {
    return this.getToken(ParserMiniCSharp.FOREACH, 0);
};

StatementContext.prototype.BREAK = function() {
    return this.getToken(ParserMiniCSharp.BREAK, 0);
};

StatementContext.prototype.RETURN = function() {
    return this.getToken(ParserMiniCSharp.RETURN, 0);
};

StatementContext.prototype.READ = function() {
    return this.getToken(ParserMiniCSharp.READ, 0);
};

StatementContext.prototype.WRITE = function() {
    return this.getToken(ParserMiniCSharp.WRITE, 0);
};

StatementContext.prototype.NUMBER = function() {
    return this.getToken(ParserMiniCSharp.NUMBER, 0);
};

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitStatement(this);
	}
};




ParserMiniCSharp.StatementContext = StatementContext;

ParserMiniCSharp.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ParserMiniCSharp.RULE_statement);
    try {
        this.state = 159;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 98;
            this.designator();
            this.state = 107;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.EQUAL:
                this.state = 99;
                this.match(ParserMiniCSharp.EQUAL);
                this.state = 100;
                this.expr();
                break;
            case ParserMiniCSharp.LEFT_PARENTHESIS:
                this.state = 101;
                this.match(ParserMiniCSharp.LEFT_PARENTHESIS);

                this.state = 102;
                this.actPars();
                this.state = 103;
                this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
                break;
            case ParserMiniCSharp.PLUS_PLUS:
                this.state = 105;
                this.match(ParserMiniCSharp.PLUS_PLUS);
                break;
            case ParserMiniCSharp.MINUS_MINUS:
                this.state = 106;
                this.match(ParserMiniCSharp.MINUS_MINUS);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 109;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 111;
            this.match(ParserMiniCSharp.IF);
            this.state = 112;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 113;
            this.condition();
            this.state = 114;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 115;
            this.statement();

            this.state = 116;
            this.match(ParserMiniCSharp.ELSE);
            this.state = 117;
            this.statement();
            break;
        case ParserMiniCSharp.FOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 119;
            this.match(ParserMiniCSharp.FOR);
            this.state = 120;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 121;
            this.expr();
            this.state = 122;
            this.match(ParserMiniCSharp.SEMICOLON);

            this.state = 123;
            this.condition();
            this.state = 124;
            this.match(ParserMiniCSharp.SEMICOLON);

            this.state = 125;
            this.statement();
            this.state = 126;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 127;
            this.statement();
            break;
        case ParserMiniCSharp.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 129;
            this.match(ParserMiniCSharp.WHILE);
            this.state = 130;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 131;
            this.condition();
            this.state = 132;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 133;
            this.statement();
            break;
        case ParserMiniCSharp.FOREACH:
            this.enterOuterAlt(localctx, 5);
            this.state = 135;
            this.match(ParserMiniCSharp.FOREACH);
            break;
        case ParserMiniCSharp.BREAK:
            this.enterOuterAlt(localctx, 6);
            this.state = 136;
            this.match(ParserMiniCSharp.BREAK);
            this.state = 137;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.RETURN:
            this.enterOuterAlt(localctx, 7);
            this.state = 138;
            this.match(ParserMiniCSharp.RETURN);

            this.state = 139;
            this.expr();
            this.state = 140;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.READ:
            this.enterOuterAlt(localctx, 8);
            this.state = 142;
            this.match(ParserMiniCSharp.READ);
            this.state = 143;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 144;
            this.designator();
            this.state = 145;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 146;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.WRITE:
            this.enterOuterAlt(localctx, 9);
            this.state = 148;
            this.match(ParserMiniCSharp.WRITE);
            this.state = 149;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 150;
            this.expr();

            this.state = 151;
            this.match(ParserMiniCSharp.SEMICOLON);
            this.state = 152;
            this.match(ParserMiniCSharp.NUMBER);
            this.state = 154;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 155;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.LEFT_CURLY_BRACKET:
            this.enterOuterAlt(localctx, 10);
            this.state = 157;
            this.block();
            break;
        case ParserMiniCSharp.SEMICOLON:
            this.enterOuterAlt(localctx, 11);
            this.state = 158;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LEFT_CURLY_BRACKET = function() {
    return this.getToken(ParserMiniCSharp.LEFT_CURLY_BRACKET, 0);
};

BlockContext.prototype.RIGHT_CURLY_BRACKET = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, 0);
};

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitBlock(this);
	}
};




ParserMiniCSharp.BlockContext = BlockContext;

ParserMiniCSharp.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ParserMiniCSharp.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.BREAK) | (1 << ParserMiniCSharp.IF) | (1 << ParserMiniCSharp.READ) | (1 << ParserMiniCSharp.RETURN) | (1 << ParserMiniCSharp.WHILE) | (1 << ParserMiniCSharp.WRITE) | (1 << ParserMiniCSharp.FOREACH) | (1 << ParserMiniCSharp.FOR))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ParserMiniCSharp.LEFT_CURLY_BRACKET - 35)) | (1 << (ParserMiniCSharp.SEMICOLON - 35)) | (1 << (ParserMiniCSharp.IDENT - 35)))) !== 0)) {
            this.state = 162;
            this.statement();
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 168;
        this.match(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActParsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_actPars;
    return this;
}

ActParsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActParsContext.prototype.constructor = ActParsContext;

ActParsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ActParsContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

ActParsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterActPars(this);
	}
};

ActParsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitActPars(this);
	}
};




ParserMiniCSharp.ActParsContext = ActParsContext;

ParserMiniCSharp.prototype.actPars = function() {

    var localctx = new ActParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ParserMiniCSharp.RULE_actPars);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.expr();

        this.state = 171;
        this.match(ParserMiniCSharp.SEMICOLON);
        this.state = 172;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.condTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondTermContext);
    } else {
        return this.getTypedRuleContext(CondTermContext,i);
    }
};

ConditionContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.OR);
    } else {
        return this.getToken(ParserMiniCSharp.OR, i);
    }
};


ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitCondition(this);
	}
};




ParserMiniCSharp.ConditionContext = ConditionContext;

ParserMiniCSharp.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ParserMiniCSharp.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.condTerm();
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.OR) {
            this.state = 175;
            this.match(ParserMiniCSharp.OR);
            this.state = 176;
            this.condTerm();
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_condTerm;
    return this;
}

CondTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondTermContext.prototype.constructor = CondTermContext;

CondTermContext.prototype.condFact = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondFactContext);
    } else {
        return this.getTypedRuleContext(CondFactContext,i);
    }
};

CondTermContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.AND);
    } else {
        return this.getToken(ParserMiniCSharp.AND, i);
    }
};


CondTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterCondTerm(this);
	}
};

CondTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitCondTerm(this);
	}
};




ParserMiniCSharp.CondTermContext = CondTermContext;

ParserMiniCSharp.prototype.condTerm = function() {

    var localctx = new CondTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ParserMiniCSharp.RULE_condTerm);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.condFact();
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.AND) {
            this.state = 183;
            this.match(ParserMiniCSharp.AND);
            this.state = 184;
            this.condFact();
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondFactContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_condFact;
    return this;
}

CondFactContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondFactContext.prototype.constructor = CondFactContext;

CondFactContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CondFactContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};

CondFactContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterCondFact(this);
	}
};

CondFactContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitCondFact(this);
	}
};




ParserMiniCSharp.CondFactContext = CondFactContext;

ParserMiniCSharp.prototype.condFact = function() {

    var localctx = new CondFactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ParserMiniCSharp.RULE_condFact);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.expr();
        this.state = 191;
        this.relop();
        this.state = 192;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprContext.prototype.SUBTRACTION = function() {
    return this.getToken(ParserMiniCSharp.SUBTRACTION, 0);
};

ExprContext.prototype.addop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddopContext);
    } else {
        return this.getTypedRuleContext(AddopContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitExpr(this);
	}
};




ParserMiniCSharp.ExprContext = ExprContext;

ParserMiniCSharp.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ParserMiniCSharp.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(ParserMiniCSharp.SUBTRACTION);
        this.state = 195;
        this.term();
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.SUM || _la===ParserMiniCSharp.SUBTRACTION) {
            this.state = 196;
            this.addop();
            this.state = 197;
            this.term();
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TermContext.prototype.mulop = function() {
    return this.getTypedRuleContext(MulopContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitTerm(this);
	}
};




ParserMiniCSharp.TermContext = TermContext;

ParserMiniCSharp.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ParserMiniCSharp.RULE_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.factor();

        this.state = 205;
        this.mulop();
        this.state = 206;
        this.factor();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

FactorContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

FactorContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

FactorContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};

FactorContext.prototype.NUMBER = function() {
    return this.getToken(ParserMiniCSharp.NUMBER, 0);
};

FactorContext.prototype.CHAR_CONST = function() {
    return this.getToken(ParserMiniCSharp.CHAR_CONST, 0);
};

FactorContext.prototype.TRUE = function() {
    return this.getToken(ParserMiniCSharp.TRUE, 0);
};

FactorContext.prototype.FALSE = function() {
    return this.getToken(ParserMiniCSharp.FALSE, 0);
};

FactorContext.prototype.NEW = function() {
    return this.getToken(ParserMiniCSharp.NEW, 0);
};

FactorContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitFactor(this);
	}
};




ParserMiniCSharp.FactorContext = FactorContext;

ParserMiniCSharp.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ParserMiniCSharp.RULE_factor);
    var _la = 0; // Token type
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 208;
            this.designator();

            this.state = 209;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);

            this.state = 210;
            this.actPars();
            this.state = 211;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            break;
        case ParserMiniCSharp.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.match(ParserMiniCSharp.NUMBER);
            break;
        case ParserMiniCSharp.CHAR_CONST:
            this.enterOuterAlt(localctx, 3);
            this.state = 214;
            this.match(ParserMiniCSharp.CHAR_CONST);
            break;
        case ParserMiniCSharp.TRUE:
        case ParserMiniCSharp.FALSE:
            this.enterOuterAlt(localctx, 4);
            this.state = 215;
            _la = this._input.LA(1);
            if(!(_la===ParserMiniCSharp.TRUE || _la===ParserMiniCSharp.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case ParserMiniCSharp.NEW:
            this.enterOuterAlt(localctx, 5);
            this.state = 216;
            this.match(ParserMiniCSharp.NEW);
            this.state = 217;
            this.match(ParserMiniCSharp.IDENT);
            break;
        case ParserMiniCSharp.LEFT_PARENTHESIS:
            this.enterOuterAlt(localctx, 6);
            this.state = 218;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 219;
            this.expr();
            this.state = 220;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DesignatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_designator;
    return this;
}

DesignatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DesignatorContext.prototype.constructor = DesignatorContext;

DesignatorContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.IDENT);
    } else {
        return this.getToken(ParserMiniCSharp.IDENT, i);
    }
};


DesignatorContext.prototype.AT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.AT);
    } else {
        return this.getToken(ParserMiniCSharp.AT, i);
    }
};


DesignatorContext.prototype.LEFT_SQUARE_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.LEFT_SQUARE_BRACKET);
    } else {
        return this.getToken(ParserMiniCSharp.LEFT_SQUARE_BRACKET, i);
    }
};


DesignatorContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

DesignatorContext.prototype.RIGHT_CURLY_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
    } else {
        return this.getToken(ParserMiniCSharp.RIGHT_CURLY_BRACKET, i);
    }
};


DesignatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterDesignator(this);
	}
};

DesignatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitDesignator(this);
	}
};




ParserMiniCSharp.DesignatorContext = DesignatorContext;

ParserMiniCSharp.prototype.designator = function() {

    var localctx = new DesignatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ParserMiniCSharp.RULE_designator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.LEFT_SQUARE_BRACKET || _la===ParserMiniCSharp.AT) {
            this.state = 231;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.AT:
                this.state = 225;
                this.match(ParserMiniCSharp.AT);
                this.state = 226;
                this.match(ParserMiniCSharp.IDENT);
                break;
            case ParserMiniCSharp.LEFT_SQUARE_BRACKET:
                this.state = 227;
                this.match(ParserMiniCSharp.LEFT_SQUARE_BRACKET);
                this.state = 228;
                this.expr();
                this.state = 229;
                this.match(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;

RelopContext.prototype.EQUAL_EQUAL = function() {
    return this.getToken(ParserMiniCSharp.EQUAL_EQUAL, 0);
};

RelopContext.prototype.INEQUALITY = function() {
    return this.getToken(ParserMiniCSharp.INEQUALITY, 0);
};

RelopContext.prototype.GREATER_THAN = function() {
    return this.getToken(ParserMiniCSharp.GREATER_THAN, 0);
};

RelopContext.prototype.GREATER_THAN_OR_EQUAL = function() {
    return this.getToken(ParserMiniCSharp.GREATER_THAN_OR_EQUAL, 0);
};

RelopContext.prototype.LESS_THAN = function() {
    return this.getToken(ParserMiniCSharp.LESS_THAN, 0);
};

RelopContext.prototype.LESS_THAN_OR_EQUAL = function() {
    return this.getToken(ParserMiniCSharp.LESS_THAN_OR_EQUAL, 0);
};

RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitRelop(this);
	}
};




ParserMiniCSharp.RelopContext = RelopContext;

ParserMiniCSharp.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ParserMiniCSharp.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        _la = this._input.LA(1);
        if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (ParserMiniCSharp.EQUAL_EQUAL - 49)) | (1 << (ParserMiniCSharp.INEQUALITY - 49)) | (1 << (ParserMiniCSharp.GREATER_THAN - 49)) | (1 << (ParserMiniCSharp.GREATER_THAN_OR_EQUAL - 49)) | (1 << (ParserMiniCSharp.LESS_THAN - 49)) | (1 << (ParserMiniCSharp.LESS_THAN_OR_EQUAL - 49)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_addop;
    return this;
}

AddopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddopContext.prototype.constructor = AddopContext;

AddopContext.prototype.SUM = function() {
    return this.getToken(ParserMiniCSharp.SUM, 0);
};

AddopContext.prototype.SUBTRACTION = function() {
    return this.getToken(ParserMiniCSharp.SUBTRACTION, 0);
};

AddopContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterAddop(this);
	}
};

AddopContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitAddop(this);
	}
};




ParserMiniCSharp.AddopContext = AddopContext;

ParserMiniCSharp.prototype.addop = function() {

    var localctx = new AddopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ParserMiniCSharp.RULE_addop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        _la = this._input.LA(1);
        if(!(_la===ParserMiniCSharp.SUM || _la===ParserMiniCSharp.SUBTRACTION)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MulopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParserMiniCSharp.RULE_mulop;
    return this;
}

MulopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MulopContext.prototype.constructor = MulopContext;

MulopContext.prototype.MULTIPLICATION = function() {
    return this.getToken(ParserMiniCSharp.MULTIPLICATION, 0);
};

MulopContext.prototype.DIVISION = function() {
    return this.getToken(ParserMiniCSharp.DIVISION, 0);
};

MulopContext.prototype.PERCENTAGE = function() {
    return this.getToken(ParserMiniCSharp.PERCENTAGE, 0);
};

MulopContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.enterMulop(this);
	}
};

MulopContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserMiniCSharpListener ) {
        listener.exitMulop(this);
	}
};




ParserMiniCSharp.MulopContext = MulopContext;

ParserMiniCSharp.prototype.mulop = function() {

    var localctx = new MulopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ParserMiniCSharp.RULE_mulop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        _la = this._input.LA(1);
        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (ParserMiniCSharp.MULTIPLICATION - 46)) | (1 << (ParserMiniCSharp.DIVISION - 46)) | (1 << (ParserMiniCSharp.PERCENTAGE - 46)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ParserMiniCSharp = ParserMiniCSharp;
