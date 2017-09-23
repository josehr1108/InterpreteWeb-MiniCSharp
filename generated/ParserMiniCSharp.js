// Generated from C:/Users/josah/Documents/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ParserMiniCSharpListener = require('./ParserMiniCSharpListener').ParserMiniCSharpListener;
var ParserMiniCSharpVisitor = require('./ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;

var grammarFileName = "ParserMiniCSharp.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003C\u010e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u00027\n\u0002\f\u0002\u000e\u0002:\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005Q\n\u0005\f\u0005",
    "\u000e\u0005T\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006Z\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006a\n\u0006\f\u0006\u000e\u0006d\u000b\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007n\n\u0007\f\u0007\u000e\u0007q\u000b",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t~\n\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u00b2\n\t\u0003\n\u0003\n\u0007\n\u00b6\n\n\f\n\u000e",
    "\n\u00b9\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000b\u00c0\n\u000b\f\u000b\u000e\u000b\u00c3\u000b\u000b\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u00c8\n\f\f\f\u000e\f\u00cb\u000b\f\u0003",
    "\r\u0003\r\u0003\r\u0007\r\u00d0\n\r\f\r\u000e\r\u00d3\u000b\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00de\n\u000f\f\u000f\u000e",
    "\u000f\u00e1\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00e7\n\u0010\f\u0010\u000e\u0010\u00ea\u000b\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00fa\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012",
    "\u0103\n\u0012\f\u0012\u000e\u0012\u0106\u000b\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0002",
    "\u0002\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(\u0002\b\u0003\u0002<=\u0004\u0002\u0005\t;",
    ";\u0003\u0002\u0014\u0015\u0003\u000216\u0003\u0002+,\u0003\u0002-/",
    "\u0002\u011b\u0002*\u0003\u0002\u0002\u0002\u0004>\u0003\u0002\u0002",
    "\u0002\u0006E\u0003\u0002\u0002\u0002\bL\u0003\u0002\u0002\u0002\nY",
    "\u0003\u0002\u0002\u0002\fg\u0003\u0002\u0002\u0002\u000er\u0003\u0002",
    "\u0002\u0002\u0010\u00b1\u0003\u0002\u0002\u0002\u0012\u00b3\u0003\u0002",
    "\u0002\u0002\u0014\u00bc\u0003\u0002\u0002\u0002\u0016\u00c4\u0003\u0002",
    "\u0002\u0002\u0018\u00cc\u0003\u0002\u0002\u0002\u001a\u00d4\u0003\u0002",
    "\u0002\u0002\u001c\u00d8\u0003\u0002\u0002\u0002\u001e\u00e2\u0003\u0002",
    "\u0002\u0002 \u00f9\u0003\u0002\u0002\u0002\"\u00fb\u0003\u0002\u0002",
    "\u0002$\u0107\u0003\u0002\u0002\u0002&\u0109\u0003\u0002\u0002\u0002",
    "(\u010b\u0003\u0002\u0002\u0002*+\u0007\u0003\u0002\u0002+1\u0007;\u0002",
    "\u0002,0\u0005\u0004\u0003\u0002-0\u0005\u0006\u0004\u0002.0\u0005\b",
    "\u0005\u0002/,\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/.\u0003",
    "\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u000248\u0007\u001c\u0002\u000257\u0005\n\u0006\u000265\u0003\u0002",
    "\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003",
    "\u0002\u0002\u00029;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ";<\u0007\u001b\u0002\u0002<=\u0007\u0002\u0002\u0003=\u0003\u0003\u0002",
    "\u0002\u0002>?\u0007\u0004\u0002\u0002?@\u0005\u000e\b\u0002@A\u0007",
    ";\u0002\u0002AB\u00070\u0002\u0002BC\t\u0002\u0002\u0002CD\u0007\'\u0002",
    "\u0002D\u0005\u0003\u0002\u0002\u0002EF\u0005\u000e\b\u0002FG\u0007",
    ";\u0002\u0002GH\u0007$\u0002\u0002HI\u0007;\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JK\u0007\'\u0002\u0002K\u0007\u0003\u0002\u0002\u0002LM",
    "\u0007\u0003\u0002\u0002MN\u0007;\u0002\u0002NR\u0007\u001c\u0002\u0002",
    "OQ\u0005\u0006\u0004\u0002PO\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002",
    "\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SU\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002UV\u0007\u001b\u0002\u0002V\t",
    "\u0003\u0002\u0002\u0002WZ\u0005\u000e\b\u0002XZ\u0007\u0016\u0002\u0002",
    "YW\u0003\u0002\u0002\u0002YX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002",
    "\u0002[\\\u0007;\u0002\u0002\\]\u0007\u0018\u0002\u0002]^\u0005\f\u0007",
    "\u0002^b\u0007\u0017\u0002\u0002_a\u0005\u0006\u0004\u0002`_\u0003\u0002",
    "\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003",
    "\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002",
    "ef\u0005\u0012\n\u0002f\u000b\u0003\u0002\u0002\u0002gh\u0005\u000e",
    "\b\u0002ho\u0007;\u0002\u0002ij\u0007$\u0002\u0002jk\u0005\u000e\b\u0002",
    "kl\u0007;\u0002\u0002ln\u0003\u0002\u0002\u0002mi\u0003\u0002\u0002",
    "\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002p\r\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs",
    "\t\u0003\u0002\u0002s\u000f\u0003\u0002\u0002\u0002t}\u0005\"\u0012",
    "\u0002uv\u00070\u0002\u0002v~\u0005\u001c\u000f\u0002wx\u0007\u0018",
    "\u0002\u0002xy\u0005\u0014\u000b\u0002yz\u0007\u0017\u0002\u0002z~\u0003",
    "\u0002\u0002\u0002{~\u00079\u0002\u0002|~\u0007:\u0002\u0002}u\u0003",
    "\u0002\u0002\u0002}w\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002",
    "}|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0007\'\u0002\u0002\u0080\u00b2\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0007\n\u0002\u0002\u0082\u0083\u0007\u0018\u0002\u0002\u0083\u0084",
    "\u0005\u0016\f\u0002\u0084\u0085\u0007\u0017\u0002\u0002\u0085\u0086",
    "\u0005\u0010\t\u0002\u0086\u0087\u0007\u000b\u0002\u0002\u0087\u0088",
    "\u0005\u0010\t\u0002\u0088\u00b2\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0007\f\u0002\u0002\u008a\u008b\u0007\u0018\u0002\u0002\u008b\u008c",
    "\u0005\u001c\u000f\u0002\u008c\u008d\u0007\'\u0002\u0002\u008d\u008e",
    "\u0005\u0016\f\u0002\u008e\u008f\u0007\'\u0002\u0002\u008f\u0090\u0005",
    "\u0010\t\u0002\u0090\u0091\u0007\u0017\u0002\u0002\u0091\u0092\u0005",
    "\u0010\t\u0002\u0092\u00b2\u0003\u0002\u0002\u0002\u0093\u0094\u0007",
    "\r\u0002\u0002\u0094\u0095\u0007\u0018\u0002\u0002\u0095\u0096\u0005",
    "\u0016\f\u0002\u0096\u0097\u0007\u0017\u0002\u0002\u0097\u0098\u0005",
    "\u0010\t\u0002\u0098\u00b2\u0003\u0002\u0002\u0002\u0099\u00b2\u0007",
    "\u000e\u0002\u0002\u009a\u009b\u0007\u000f\u0002\u0002\u009b\u00b2\u0007",
    "\'\u0002\u0002\u009c\u009d\u0007\u0010\u0002\u0002\u009d\u009e\u0005",
    "\u001c\u000f\u0002\u009e\u009f\u0007\'\u0002\u0002\u009f\u00b2\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0007\u0011\u0002\u0002\u00a1\u00a2\u0007",
    "\u0018\u0002\u0002\u00a2\u00a3\u0005\"\u0012\u0002\u00a3\u00a4\u0007",
    "\u0017\u0002\u0002\u00a4\u00a5\u0007\'\u0002\u0002\u00a5\u00b2\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0007\u0012\u0002\u0002\u00a7\u00a8\u0007",
    "\u0018\u0002\u0002\u00a8\u00a9\u0005\u001c\u000f\u0002\u00a9\u00aa\u0007",
    "\'\u0002\u0002\u00aa\u00ab\u0007<\u0002\u0002\u00ab\u00ac\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0007\u0017\u0002\u0002\u00ad\u00ae\u0007\'",
    "\u0002\u0002\u00ae\u00b2\u0003\u0002\u0002\u0002\u00af\u00b2\u0005\u0012",
    "\n\u0002\u00b0\u00b2\u0007\'\u0002\u0002\u00b1t\u0003\u0002\u0002\u0002",
    "\u00b1\u0081\u0003\u0002\u0002\u0002\u00b1\u0089\u0003\u0002\u0002\u0002",
    "\u00b1\u0093\u0003\u0002\u0002\u0002\u00b1\u0099\u0003\u0002\u0002\u0002",
    "\u00b1\u009a\u0003\u0002\u0002\u0002\u00b1\u009c\u0003\u0002\u0002\u0002",
    "\u00b1\u00a0\u0003\u0002\u0002\u0002\u00b1\u00a6\u0003\u0002\u0002\u0002",
    "\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002",
    "\u00b2\u0011\u0003\u0002\u0002\u0002\u00b3\u00b7\u0007\u001c\u0002\u0002",
    "\u00b4\u00b6\u0005\u0010\t\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002",
    "\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00ba\u0003\u0002\u0002\u0002",
    "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u001b\u0002\u0002",
    "\u00bb\u0013\u0003\u0002\u0002\u0002\u00bc\u00c1\u0005\u001c\u000f\u0002",
    "\u00bd\u00be\u0007$\u0002\u0002\u00be\u00c0\u0005\u001c\u000f\u0002",
    "\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002",
    "\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002",
    "\u00c2\u0015\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002",
    "\u00c4\u00c9\u0005\u0018\r\u0002\u00c5\u00c6\u00078\u0002\u0002\u00c6",
    "\u00c8\u0005\u0018\r\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8",
    "\u00cb\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0003\u0002\u0002\u0002\u00ca\u0017\u0003\u0002\u0002\u0002\u00cb",
    "\u00c9\u0003\u0002\u0002\u0002\u00cc\u00d1\u0005\u001a\u000e\u0002\u00cd",
    "\u00ce\u00077\u0002\u0002\u00ce\u00d0\u0005\u001a\u000e\u0002\u00cf",
    "\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1",
    "\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2",
    "\u0019\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4",
    "\u00d5\u0005\u001c\u000f\u0002\u00d5\u00d6\u0005$\u0013\u0002\u00d6",
    "\u00d7\u0005\u001c\u000f\u0002\u00d7\u001b\u0003\u0002\u0002\u0002\u00d8",
    "\u00d9\u0007,\u0002\u0002\u00d9\u00df\u0005\u001e\u0010\u0002\u00da",
    "\u00db\u0005&\u0014\u0002\u00db\u00dc\u0005\u001e\u0010\u0002\u00dc",
    "\u00de\u0003\u0002\u0002\u0002\u00dd\u00da\u0003\u0002\u0002\u0002\u00de",
    "\u00e1\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df",
    "\u00e0\u0003\u0002\u0002\u0002\u00e0\u001d\u0003\u0002\u0002\u0002\u00e1",
    "\u00df\u0003\u0002\u0002\u0002\u00e2\u00e8\u0005 \u0011\u0002\u00e3",
    "\u00e4\u0005(\u0015\u0002\u00e4\u00e5\u0005 \u0011\u0002\u00e5\u00e7",
    "\u0003\u0002\u0002\u0002\u00e6\u00e3\u0003\u0002\u0002\u0002\u00e7\u00ea",
    "\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9",
    "\u0003\u0002\u0002\u0002\u00e9\u001f\u0003\u0002\u0002\u0002\u00ea\u00e8",
    "\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005\"\u0012\u0002\u00ec\u00ed",
    "\u0007\u0018\u0002\u0002\u00ed\u00ee\u0005\u0014\u000b\u0002\u00ee\u00ef",
    "\u0007\u0017\u0002\u0002\u00ef\u00fa\u0003\u0002\u0002\u0002\u00f0\u00fa",
    "\u0007<\u0002\u0002\u00f1\u00fa\u0007=\u0002\u0002\u00f2\u00fa\t\u0004",
    "\u0002\u0002\u00f3\u00f4\u0007\u0013\u0002\u0002\u00f4\u00fa\u0007;",
    "\u0002\u0002\u00f5\u00f6\u0007\u0018\u0002\u0002\u00f6\u00f7\u0005\u001c",
    "\u000f\u0002\u00f7\u00f8\u0007\u0017\u0002\u0002\u00f8\u00fa\u0003\u0002",
    "\u0002\u0002\u00f9\u00eb\u0003\u0002\u0002\u0002\u00f9\u00f0\u0003\u0002",
    "\u0002\u0002\u00f9\u00f1\u0003\u0002\u0002\u0002\u00f9\u00f2\u0003\u0002",
    "\u0002\u0002\u00f9\u00f3\u0003\u0002\u0002\u0002\u00f9\u00f5\u0003\u0002",
    "\u0002\u0002\u00fa!\u0003\u0002\u0002\u0002\u00fb\u0104\u0007;\u0002",
    "\u0002\u00fc\u00fd\u0007)\u0002\u0002\u00fd\u0103\u0007;\u0002\u0002",
    "\u00fe\u00ff\u0007\u001a\u0002\u0002\u00ff\u0100\u0005\u001c\u000f\u0002",
    "\u0100\u0101\u0007\u001b\u0002\u0002\u0101\u0103\u0003\u0002\u0002\u0002",
    "\u0102\u00fc\u0003\u0002\u0002\u0002\u0102\u00fe\u0003\u0002\u0002\u0002",
    "\u0103\u0106\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002",
    "\u0104\u0105\u0003\u0002\u0002\u0002\u0105#\u0003\u0002\u0002\u0002",
    "\u0106\u0104\u0003\u0002\u0002\u0002\u0107\u0108\t\u0005\u0002\u0002",
    "\u0108%\u0003\u0002\u0002\u0002\u0109\u010a\t\u0006\u0002\u0002\u010a",
    "\'\u0003\u0002\u0002\u0002\u010b\u010c\t\u0007\u0002\u0002\u010c)\u0003",
    "\u0002\u0002\u0002\u0014/18RYbo}\u00b1\u00b7\u00c1\u00c9\u00d1\u00df",
    "\u00e8\u00f9\u0102\u0104"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'const'", "'char'", "'int'", "'float'", 
                     "'bool'", "'string'", "'if'", "'else'", "'for'", "'while'", 
                     "'foreach'", "'break'", "'return'", "'read'", "'write'", 
                     "'new'", "'true'", "'false'", "'void'", null, null, 
                     "']'", "'['", "'}'", "'{'", "'\u00C2\u00A1'", "'!'", 
                     "'\"'", "'#'", "'$'", "'&'", "'''", "','", "'.'", "':'", 
                     "';'", "'?'", "'@'", "'_'", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'='", "'=='", "'!='", "'>'", "'>='", "'<'", 
                     "'<='", "'&&'", "'||'", "'++'", "'--'" ];

var symbolicNames = [ null, "CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", 
                      "STRING", "IF", "ELSE", "FOR", "WHILE", "FOREACH", 
                      "BREAK", "RETURN", "READ", "WRITE", "NEW", "TRUE", 
                      "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
                      "RIGHT_SQUARE_BRACKETR", "LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", 
                      "LEFT_CURLY_BRACKET", "EXCLAMATION_UP", "EXCLAMATION_DOWN", 
                      "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", "DOLLAR_SIGN", 
                      "AMPERSAND", "QUOTATION_MARKS", "COMMA", "DOT", "COLON", 
                      "SEMICOLON", "QUESTION_SIGN", "AT", "UNDERSCORE", 
                      "SUM", "SUBTRACTION", "MULTIPLICATION", "DIVISION", 
                      "PERCENTAGE", "ASIGN", "EQUAL_EQUAL", "INEQUALITY", 
                      "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "LESS_THAN", 
                      "LESS_THAN_OR_EQUAL", "AND", "OR", "PLUS_PLUS", "MINUS_MINUS", 
                      "IDENT", "NUMBER", "CHAR_CONST", "PRINTABLE_CHAR", 
                      "LETTER", "DIGIT", "LINE_COMMENT", "SPECIAL_COMMENT", 
                      "WS" ];

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
ParserMiniCSharp.CLASS = 1;
ParserMiniCSharp.CONST = 2;
ParserMiniCSharp.CHAR = 3;
ParserMiniCSharp.INT = 4;
ParserMiniCSharp.FLOAT = 5;
ParserMiniCSharp.BOOL = 6;
ParserMiniCSharp.STRING = 7;
ParserMiniCSharp.IF = 8;
ParserMiniCSharp.ELSE = 9;
ParserMiniCSharp.FOR = 10;
ParserMiniCSharp.WHILE = 11;
ParserMiniCSharp.FOREACH = 12;
ParserMiniCSharp.BREAK = 13;
ParserMiniCSharp.RETURN = 14;
ParserMiniCSharp.READ = 15;
ParserMiniCSharp.WRITE = 16;
ParserMiniCSharp.NEW = 17;
ParserMiniCSharp.TRUE = 18;
ParserMiniCSharp.FALSE = 19;
ParserMiniCSharp.VOID = 20;
ParserMiniCSharp.RIGHT_PARENTHESIS = 21;
ParserMiniCSharp.LEFT_PARENTHESIS = 22;
ParserMiniCSharp.RIGHT_SQUARE_BRACKETR = 23;
ParserMiniCSharp.LEFT_SQUARE_BRACKET = 24;
ParserMiniCSharp.RIGHT_CURLY_BRACKET = 25;
ParserMiniCSharp.LEFT_CURLY_BRACKET = 26;
ParserMiniCSharp.EXCLAMATION_UP = 27;
ParserMiniCSharp.EXCLAMATION_DOWN = 28;
ParserMiniCSharp.DOUBLE_QUOTATION_MARKS = 29;
ParserMiniCSharp.NUMBER_SIGN = 30;
ParserMiniCSharp.DOLLAR_SIGN = 31;
ParserMiniCSharp.AMPERSAND = 32;
ParserMiniCSharp.QUOTATION_MARKS = 33;
ParserMiniCSharp.COMMA = 34;
ParserMiniCSharp.DOT = 35;
ParserMiniCSharp.COLON = 36;
ParserMiniCSharp.SEMICOLON = 37;
ParserMiniCSharp.QUESTION_SIGN = 38;
ParserMiniCSharp.AT = 39;
ParserMiniCSharp.UNDERSCORE = 40;
ParserMiniCSharp.SUM = 41;
ParserMiniCSharp.SUBTRACTION = 42;
ParserMiniCSharp.MULTIPLICATION = 43;
ParserMiniCSharp.DIVISION = 44;
ParserMiniCSharp.PERCENTAGE = 45;
ParserMiniCSharp.ASIGN = 46;
ParserMiniCSharp.EQUAL_EQUAL = 47;
ParserMiniCSharp.INEQUALITY = 48;
ParserMiniCSharp.GREATER_THAN = 49;
ParserMiniCSharp.GREATER_THAN_OR_EQUAL = 50;
ParserMiniCSharp.LESS_THAN = 51;
ParserMiniCSharp.LESS_THAN_OR_EQUAL = 52;
ParserMiniCSharp.AND = 53;
ParserMiniCSharp.OR = 54;
ParserMiniCSharp.PLUS_PLUS = 55;
ParserMiniCSharp.MINUS_MINUS = 56;
ParserMiniCSharp.IDENT = 57;
ParserMiniCSharp.NUMBER = 58;
ParserMiniCSharp.CHAR_CONST = 59;
ParserMiniCSharp.PRINTABLE_CHAR = 60;
ParserMiniCSharp.LETTER = 61;
ParserMiniCSharp.DIGIT = 62;
ParserMiniCSharp.LINE_COMMENT = 63;
ParserMiniCSharp.SPECIAL_COMMENT = 64;
ParserMiniCSharp.WS = 65;

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

ProgramContext.prototype.EOF = function() {
    return this.getToken(ParserMiniCSharp.EOF, 0);
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

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
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
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CLASS) | (1 << ParserMiniCSharp.CONST) | (1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 45;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.CONST:
                this.state = 42;
                this.constDecl();
                break;
            case ParserMiniCSharp.CHAR:
            case ParserMiniCSharp.INT:
            case ParserMiniCSharp.FLOAT:
            case ParserMiniCSharp.BOOL:
            case ParserMiniCSharp.STRING:
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
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING) | (1 << ParserMiniCSharp.VOID))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 51;
            this.methodDecl();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this.match(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
        this.state = 58;
        this.match(ParserMiniCSharp.EOF);
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

ConstDeclContext.prototype.ASIGN = function() {
    return this.getToken(ParserMiniCSharp.ASIGN, 0);
};

ConstDeclContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

ConstDeclContext.prototype.NUMBER = function() {
    return this.getToken(ParserMiniCSharp.NUMBER, 0);
};

ConstDeclContext.prototype.CHAR_CONST = function() {
    return this.getToken(ParserMiniCSharp.CHAR_CONST, 0);
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

ConstDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitConstDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.ConstDeclContext = ConstDeclContext;

ParserMiniCSharp.prototype.constDecl = function() {

    var localctx = new ConstDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ParserMiniCSharp.RULE_constDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(ParserMiniCSharp.CONST);
        this.state = 61;
        this.type();
        this.state = 62;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 63;
        this.match(ParserMiniCSharp.ASIGN);
        this.state = 64;
        _la = this._input.LA(1);
        if(!(_la===ParserMiniCSharp.NUMBER || _la===ParserMiniCSharp.CHAR_CONST)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 65;
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

VarDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitVarDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.VarDeclContext = VarDeclContext;

ParserMiniCSharp.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ParserMiniCSharp.RULE_varDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.type();
        this.state = 68;
        this.match(ParserMiniCSharp.IDENT);

        this.state = 69;
        this.match(ParserMiniCSharp.COMMA);
        this.state = 70;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 72;
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

ClassDeclContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
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

ClassDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitClassDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.ClassDeclContext = ClassDeclContext;

ParserMiniCSharp.prototype.classDecl = function() {

    var localctx = new ClassDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ParserMiniCSharp.RULE_classDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ParserMiniCSharp.CLASS);
        this.state = 75;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 76;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 77;
            this.varDecl();
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 83;
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

MethodDeclContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
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

MethodDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitMethodDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.MethodDeclContext = MethodDeclContext;

ParserMiniCSharp.prototype.methodDecl = function() {

    var localctx = new MethodDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ParserMiniCSharp.RULE_methodDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.CHAR:
        case ParserMiniCSharp.INT:
        case ParserMiniCSharp.FLOAT:
        case ParserMiniCSharp.BOOL:
        case ParserMiniCSharp.STRING:
        case ParserMiniCSharp.IDENT:
            this.state = 85;
            this.type();
            break;
        case ParserMiniCSharp.VOID:
            this.state = 86;
            this.match(ParserMiniCSharp.VOID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 89;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 90;
        this.match(ParserMiniCSharp.LEFT_PARENTHESIS);

        this.state = 91;
        this.formPars();
        this.state = 92;
        this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 93;
            this.varDecl();
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 99;
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


FormParsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.COMMA);
    } else {
        return this.getToken(ParserMiniCSharp.COMMA, i);
    }
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

FormParsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitFormPars(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.FormParsContext = FormParsContext;

ParserMiniCSharp.prototype.formPars = function() {

    var localctx = new FormParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ParserMiniCSharp.RULE_formPars);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.type();
        this.state = 102;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.COMMA) {
            this.state = 103;
            this.match(ParserMiniCSharp.COMMA);
            this.state = 104;
            this.type();
            this.state = 105;
            this.match(ParserMiniCSharp.IDENT);
            this.state = 111;
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

TypeContext.prototype.CHAR = function() {
    return this.getToken(ParserMiniCSharp.CHAR, 0);
};

TypeContext.prototype.INT = function() {
    return this.getToken(ParserMiniCSharp.INT, 0);
};

TypeContext.prototype.FLOAT = function() {
    return this.getToken(ParserMiniCSharp.FLOAT, 0);
};

TypeContext.prototype.BOOL = function() {
    return this.getToken(ParserMiniCSharp.BOOL, 0);
};

TypeContext.prototype.STRING = function() {
    return this.getToken(ParserMiniCSharp.STRING, 0);
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

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.TypeContext = TypeContext;

ParserMiniCSharp.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ParserMiniCSharp.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT)) {
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


StatementContext.prototype.ASIGN = function() {
    return this.getToken(ParserMiniCSharp.ASIGN, 0);
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

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.StatementContext = StatementContext;

ParserMiniCSharp.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ParserMiniCSharp.RULE_statement);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.designator();
            this.state = 123;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.ASIGN:
                this.state = 115;
                this.match(ParserMiniCSharp.ASIGN);
                this.state = 116;
                this.expr();
                break;
            case ParserMiniCSharp.LEFT_PARENTHESIS:
                this.state = 117;
                this.match(ParserMiniCSharp.LEFT_PARENTHESIS);

                this.state = 118;
                this.actPars();
                this.state = 119;
                this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
                break;
            case ParserMiniCSharp.PLUS_PLUS:
                this.state = 121;
                this.match(ParserMiniCSharp.PLUS_PLUS);
                break;
            case ParserMiniCSharp.MINUS_MINUS:
                this.state = 122;
                this.match(ParserMiniCSharp.MINUS_MINUS);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 125;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 127;
            this.match(ParserMiniCSharp.IF);
            this.state = 128;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 129;
            this.condition();
            this.state = 130;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 131;
            this.statement();

            this.state = 132;
            this.match(ParserMiniCSharp.ELSE);
            this.state = 133;
            this.statement();
            break;
        case ParserMiniCSharp.FOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
            this.match(ParserMiniCSharp.FOR);
            this.state = 136;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 137;
            this.expr();
            this.state = 138;
            this.match(ParserMiniCSharp.SEMICOLON);

            this.state = 139;
            this.condition();
            this.state = 140;
            this.match(ParserMiniCSharp.SEMICOLON);

            this.state = 141;
            this.statement();
            this.state = 142;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 143;
            this.statement();
            break;
        case ParserMiniCSharp.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 145;
            this.match(ParserMiniCSharp.WHILE);
            this.state = 146;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 147;
            this.condition();
            this.state = 148;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 149;
            this.statement();
            break;
        case ParserMiniCSharp.FOREACH:
            this.enterOuterAlt(localctx, 5);
            this.state = 151;
            this.match(ParserMiniCSharp.FOREACH);
            break;
        case ParserMiniCSharp.BREAK:
            this.enterOuterAlt(localctx, 6);
            this.state = 152;
            this.match(ParserMiniCSharp.BREAK);
            this.state = 153;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.RETURN:
            this.enterOuterAlt(localctx, 7);
            this.state = 154;
            this.match(ParserMiniCSharp.RETURN);

            this.state = 155;
            this.expr();
            this.state = 156;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.READ:
            this.enterOuterAlt(localctx, 8);
            this.state = 158;
            this.match(ParserMiniCSharp.READ);
            this.state = 159;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 160;
            this.designator();
            this.state = 161;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 162;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.WRITE:
            this.enterOuterAlt(localctx, 9);
            this.state = 164;
            this.match(ParserMiniCSharp.WRITE);
            this.state = 165;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 166;
            this.expr();

            this.state = 167;
            this.match(ParserMiniCSharp.SEMICOLON);
            this.state = 168;
            this.match(ParserMiniCSharp.NUMBER);
            this.state = 170;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 171;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.LEFT_CURLY_BRACKET:
            this.enterOuterAlt(localctx, 10);
            this.state = 173;
            this.block();
            break;
        case ParserMiniCSharp.SEMICOLON:
            this.enterOuterAlt(localctx, 11);
            this.state = 174;
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

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.BlockContext = BlockContext;

ParserMiniCSharp.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ParserMiniCSharp.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.IF) | (1 << ParserMiniCSharp.FOR) | (1 << ParserMiniCSharp.WHILE) | (1 << ParserMiniCSharp.FOREACH) | (1 << ParserMiniCSharp.BREAK) | (1 << ParserMiniCSharp.RETURN) | (1 << ParserMiniCSharp.READ) | (1 << ParserMiniCSharp.WRITE) | (1 << ParserMiniCSharp.LEFT_CURLY_BRACKET))) !== 0) || _la===ParserMiniCSharp.SEMICOLON || _la===ParserMiniCSharp.IDENT) {
            this.state = 178;
            this.statement();
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 184;
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

ActParsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.COMMA);
    } else {
        return this.getToken(ParserMiniCSharp.COMMA, i);
    }
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

ActParsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitActPars(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.ActParsContext = ActParsContext;

ParserMiniCSharp.prototype.actPars = function() {

    var localctx = new ActParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ParserMiniCSharp.RULE_actPars);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.expr();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.COMMA) {
            this.state = 187;
            this.match(ParserMiniCSharp.COMMA);
            this.state = 188;
            this.expr();
            this.state = 193;
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

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.ConditionContext = ConditionContext;

ParserMiniCSharp.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ParserMiniCSharp.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.condTerm();
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.OR) {
            this.state = 195;
            this.match(ParserMiniCSharp.OR);
            this.state = 196;
            this.condTerm();
            this.state = 201;
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

CondTermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitCondTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.CondTermContext = CondTermContext;

ParserMiniCSharp.prototype.condTerm = function() {

    var localctx = new CondTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ParserMiniCSharp.RULE_condTerm);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.condFact();
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.AND) {
            this.state = 203;
            this.match(ParserMiniCSharp.AND);
            this.state = 204;
            this.condFact();
            this.state = 209;
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

CondFactContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitCondFact(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.CondFactContext = CondFactContext;

ParserMiniCSharp.prototype.condFact = function() {

    var localctx = new CondFactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ParserMiniCSharp.RULE_condFact);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.expr();
        this.state = 211;
        this.relop();
        this.state = 212;
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

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.ExprContext = ExprContext;

ParserMiniCSharp.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ParserMiniCSharp.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.match(ParserMiniCSharp.SUBTRACTION);
        this.state = 215;
        this.term();
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.SUM || _la===ParserMiniCSharp.SUBTRACTION) {
            this.state = 216;
            this.addop();
            this.state = 217;
            this.term();
            this.state = 223;
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

TermContext.prototype.mulop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MulopContext);
    } else {
        return this.getTypedRuleContext(MulopContext,i);
    }
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

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.TermContext = TermContext;

ParserMiniCSharp.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ParserMiniCSharp.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.factor();
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (ParserMiniCSharp.MULTIPLICATION - 43)) | (1 << (ParserMiniCSharp.DIVISION - 43)) | (1 << (ParserMiniCSharp.PERCENTAGE - 43)))) !== 0)) {
            this.state = 225;
            this.mulop();
            this.state = 226;
            this.factor();
            this.state = 232;
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

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.FactorContext = FactorContext;

ParserMiniCSharp.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ParserMiniCSharp.RULE_factor);
    var _la = 0; // Token type
    try {
        this.state = 247;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.designator();

            this.state = 234;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);

            this.state = 235;
            this.actPars();
            this.state = 236;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            break;
        case ParserMiniCSharp.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 238;
            this.match(ParserMiniCSharp.NUMBER);
            break;
        case ParserMiniCSharp.CHAR_CONST:
            this.enterOuterAlt(localctx, 3);
            this.state = 239;
            this.match(ParserMiniCSharp.CHAR_CONST);
            break;
        case ParserMiniCSharp.TRUE:
        case ParserMiniCSharp.FALSE:
            this.enterOuterAlt(localctx, 4);
            this.state = 240;
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
            this.state = 241;
            this.match(ParserMiniCSharp.NEW);
            this.state = 242;
            this.match(ParserMiniCSharp.IDENT);
            break;
        case ParserMiniCSharp.LEFT_PARENTHESIS:
            this.enterOuterAlt(localctx, 6);
            this.state = 243;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 244;
            this.expr();
            this.state = 245;
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

DesignatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitDesignator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.DesignatorContext = DesignatorContext;

ParserMiniCSharp.prototype.designator = function() {

    var localctx = new DesignatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ParserMiniCSharp.RULE_designator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.LEFT_SQUARE_BRACKET || _la===ParserMiniCSharp.AT) {
            this.state = 256;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.AT:
                this.state = 250;
                this.match(ParserMiniCSharp.AT);
                this.state = 251;
                this.match(ParserMiniCSharp.IDENT);
                break;
            case ParserMiniCSharp.LEFT_SQUARE_BRACKET:
                this.state = 252;
                this.match(ParserMiniCSharp.LEFT_SQUARE_BRACKET);
                this.state = 253;
                this.expr();
                this.state = 254;
                this.match(ParserMiniCSharp.RIGHT_CURLY_BRACKET);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 260;
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

RelopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitRelop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.RelopContext = RelopContext;

ParserMiniCSharp.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ParserMiniCSharp.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (ParserMiniCSharp.EQUAL_EQUAL - 47)) | (1 << (ParserMiniCSharp.INEQUALITY - 47)) | (1 << (ParserMiniCSharp.GREATER_THAN - 47)) | (1 << (ParserMiniCSharp.GREATER_THAN_OR_EQUAL - 47)) | (1 << (ParserMiniCSharp.LESS_THAN - 47)) | (1 << (ParserMiniCSharp.LESS_THAN_OR_EQUAL - 47)))) !== 0))) {
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

AddopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitAddop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.AddopContext = AddopContext;

ParserMiniCSharp.prototype.addop = function() {

    var localctx = new AddopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ParserMiniCSharp.RULE_addop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
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

MulopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitMulop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ParserMiniCSharp.MulopContext = MulopContext;

ParserMiniCSharp.prototype.mulop = function() {

    var localctx = new MulopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ParserMiniCSharp.RULE_mulop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (ParserMiniCSharp.MULTIPLICATION - 43)) | (1 << (ParserMiniCSharp.DIVISION - 43)) | (1 << (ParserMiniCSharp.PERCENTAGE - 43)))) !== 0))) {
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
