// Generated from C:/Users/Andres/Documents/Compiladores/prueba txt/Proyecto/InterpreteWeb-MiniCSharp\ParserMiniCSharp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ParserMiniCSharpVisitor = require('./ParserMiniCSharpVisitor').ParserMiniCSharpVisitor;

var grammarFileName = "ParserMiniCSharp.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003F\u013e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u00027\n\u0002\f\u0002\u000e\u0002:\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0005\u0004H\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004M\n\u0004\f\u0004\u000e\u0004P\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005X\n\u0005",
    "\f\u0005\u000e\u0005[\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0005\u0006a\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006f\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006j\n\u0006\f",
    "\u0006\u000e\u0006m\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "w\n\u0007\f\u0007\u000e\u0007z\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u0082\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u0089\n\t\u0003\t\u0003\t\u0003\t\u0005\t\u008e\n\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u0099\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t",
    "\u00a0\n\t\u0003\t\u0003\t\u0005\t\u00a4\n\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u00bc\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00ca",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00d1\n\t\u0003",
    "\n\u0003\n\u0007\n\u00d5\n\n\f\n\u000e\n\u00d8\u000b\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00df\n\u000b\f\u000b",
    "\u000e\u000b\u00e2\u000b\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00e7",
    "\n\f\f\f\u000e\f\u00ea\u000b\f\u0003\r\u0003\r\u0003\r\u0007\r\u00ef",
    "\n\r\f\r\u000e\r\u00f2\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0005\u000f\u00f9\n\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u00ff\n\u000f\f\u000f\u000e\u000f",
    "\u0102\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007",
    "\u0010\u0108\n\u0010\f\u0010\u000e\u0010\u010b\u000b\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u0110\n\u0011\u0003\u0011\u0005",
    "\u0011\u0113\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u011f\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u0128\n\u0012",
    "\f\u0012\u000e\u0012\u012b\u000b\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0133\n\u0013",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u0137\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u013c\n\u0015\u0003\u0015\u0002\u0002",
    "\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(\u0002\u0004\u0004\u0002==??\u0003\u0002\u0015\u0016",
    "\u0002\u0165\u0002*\u0003\u0002\u0002\u0002\u0004>\u0003\u0002\u0002",
    "\u0002\u0006E\u0003\u0002\u0002\u0002\bS\u0003\u0002\u0002\u0002\n`",
    "\u0003\u0002\u0002\u0002\fp\u0003\u0002\u0002\u0002\u000e\u0081\u0003",
    "\u0002\u0002\u0002\u0010\u00d0\u0003\u0002\u0002\u0002\u0012\u00d2\u0003",
    "\u0002\u0002\u0002\u0014\u00db\u0003\u0002\u0002\u0002\u0016\u00e3\u0003",
    "\u0002\u0002\u0002\u0018\u00eb\u0003\u0002\u0002\u0002\u001a\u00f3\u0003",
    "\u0002\u0002\u0002\u001c\u00f8\u0003\u0002\u0002\u0002\u001e\u0103\u0003",
    "\u0002\u0002\u0002 \u011e\u0003\u0002\u0002\u0002\"\u0120\u0003\u0002",
    "\u0002\u0002$\u0132\u0003\u0002\u0002\u0002&\u0136\u0003\u0002\u0002",
    "\u0002(\u013b\u0003\u0002\u0002\u0002*+\u0007\u0003\u0002\u0002+1\u0007",
    "<\u0002\u0002,0\u0005\u0004\u0003\u0002-0\u0005\u0006\u0004\u0002.0",
    "\u0005\b\u0005\u0002/,\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002",
    "/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002",
    "\u000212\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000248\u0007\u001d\u0002\u000257\u0005\n\u0006\u000265\u0003",
    "\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u0002",
    "89\u0003\u0002\u0002\u00029;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002",
    "\u0002;<\u0007\u001c\u0002\u0002<=\u0007\u0002\u0002\u0003=\u0003\u0003",
    "\u0002\u0002\u0002>?\u0007\u0004\u0002\u0002?@\u0005\u000e\b\u0002@",
    "A\u0007<\u0002\u0002AB\u00071\u0002\u0002BC\t\u0002\u0002\u0002CD\u0007",
    "(\u0002\u0002D\u0005\u0003\u0002\u0002\u0002EG\u0005\u000e\b\u0002F",
    "H\u0007>\u0002\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IN\u0007<\u0002\u0002JK\u0007%\u0002\u0002",
    "KM\u0007<\u0002\u0002LJ\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002",
    "\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OQ\u0003\u0002",
    "\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0007(\u0002\u0002R\u0007\u0003",
    "\u0002\u0002\u0002ST\u0007\u0003\u0002\u0002TU\u0007<\u0002\u0002UY",
    "\u0007\u001d\u0002\u0002VX\u0005\u0006\u0004\u0002WV\u0003\u0002\u0002",
    "\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z\\\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\",
    "]\u0007\u001c\u0002\u0002]\t\u0003\u0002\u0002\u0002^a\u0005\u000e\b",
    "\u0002_a\u0007\u0017\u0002\u0002`^\u0003\u0002\u0002\u0002`_\u0003\u0002",
    "\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0007<\u0002\u0002ce\u0007",
    "\u0019\u0002\u0002df\u0005\f\u0007\u0002ed\u0003\u0002\u0002\u0002e",
    "f\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gk\u0007\u0018\u0002",
    "\u0002hj\u0005\u0006\u0004\u0002ih\u0003\u0002\u0002\u0002jm\u0003\u0002",
    "\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002ln\u0003",
    "\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002no\u0005\u0012\n\u0002o",
    "\u000b\u0003\u0002\u0002\u0002pq\u0005\u000e\b\u0002qx\u0007<\u0002",
    "\u0002rs\u0007%\u0002\u0002st\u0005\u000e\b\u0002tu\u0007<\u0002\u0002",
    "uw\u0003\u0002\u0002\u0002vr\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\r\u0003",
    "\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{\u0082\u0007<\u0002\u0002",
    "|\u0082\u0007\u0005\u0002\u0002}\u0082\u0007\u0006\u0002\u0002~\u0082",
    "\u0007\u0007\u0002\u0002\u007f\u0082\u0007\b\u0002\u0002\u0080\u0082",
    "\u0007\t\u0002\u0002\u0081{\u0003\u0002\u0002\u0002\u0081|\u0003\u0002",
    "\u0002\u0002\u0081}\u0003\u0002\u0002\u0002\u0081~\u0003\u0002\u0002",
    "\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002",
    "\u0002\u0082\u000f\u0003\u0002\u0002\u0002\u0083\u008d\u0005\"\u0012",
    "\u0002\u0084\u0085\u00071\u0002\u0002\u0085\u008e\u0005\u001c\u000f",
    "\u0002\u0086\u0088\u0007\u0019\u0002\u0002\u0087\u0089\u0005\u0014\u000b",
    "\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008e\u0007\u0018\u0002",
    "\u0002\u008b\u008e\u0007:\u0002\u0002\u008c\u008e\u0007;\u0002\u0002",
    "\u008d\u0084\u0003\u0002\u0002\u0002\u008d\u0086\u0003\u0002\u0002\u0002",
    "\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008c\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0007(\u0002\u0002",
    "\u0090\u00d1\u0003\u0002\u0002\u0002\u0091\u0092\u0007\n\u0002\u0002",
    "\u0092\u0093\u0007\u0019\u0002\u0002\u0093\u0094\u0005\u0016\f\u0002",
    "\u0094\u0095\u0007\u0018\u0002\u0002\u0095\u0098\u0005\u0010\t\u0002",
    "\u0096\u0097\u0007\u000b\u0002\u0002\u0097\u0099\u0005\u0010\t\u0002",
    "\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002",
    "\u0099\u00d1\u0003\u0002\u0002\u0002\u009a\u009b\u0007\f\u0002\u0002",
    "\u009b\u009c\u0007\u0019\u0002\u0002\u009c\u009d\u0005\u001c\u000f\u0002",
    "\u009d\u009f\u0007(\u0002\u0002\u009e\u00a0\u0005\u0016\f\u0002\u009f",
    "\u009e\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a3\u0007(\u0002\u0002\u00a2",
    "\u00a4\u0005\u0010\t\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0007\u0018\u0002\u0002\u00a6\u00a7\u0005\u0010\t\u0002\u00a7",
    "\u00d1\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\r\u0002\u0002\u00a9",
    "\u00aa\u0007\u0019\u0002\u0002\u00aa\u00ab\u0005\u0016\f\u0002\u00ab",
    "\u00ac\u0007\u0018\u0002\u0002\u00ac\u00ad\u0005\u0010\t\u0002\u00ad",
    "\u00d1\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u000e\u0002\u0002\u00af",
    "\u00b0\u0007\u0019\u0002\u0002\u00b0\u00b1\u0005\u000e\b\u0002\u00b1",
    "\u00b2\u0007<\u0002\u0002\u00b2\u00b3\u0007\u0013\u0002\u0002\u00b3",
    "\u00b4\u0007<\u0002\u0002\u00b4\u00b5\u0007\u0018\u0002\u0002\u00b5",
    "\u00b6\u0005\u0012\n\u0002\u00b6\u00d1\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0007\u000f\u0002\u0002\u00b8\u00d1\u0007(\u0002\u0002\u00b9",
    "\u00bb\u0007\u0010\u0002\u0002\u00ba\u00bc\u0005\u001c\u000f\u0002\u00bb",
    "\u00ba\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\u0003\u0002\u0002\u0002\u00bd\u00d1\u0007(\u0002\u0002\u00be",
    "\u00bf\u0007\u0011\u0002\u0002\u00bf\u00c0\u0007\u0019\u0002\u0002\u00c0",
    "\u00c1\u0005\"\u0012\u0002\u00c1\u00c2\u0007\u0018\u0002\u0002\u00c2",
    "\u00c3\u0007(\u0002\u0002\u00c3\u00d1\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0007\u0012\u0002\u0002\u00c5\u00c6\u0007\u0019\u0002\u0002\u00c6",
    "\u00c9\u0005\u001c\u000f\u0002\u00c7\u00c8\u0007%\u0002\u0002\u00c8",
    "\u00ca\u0007=\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb",
    "\u00cc\u0007\u0018\u0002\u0002\u00cc\u00cd\u0007(\u0002\u0002\u00cd",
    "\u00d1\u0003\u0002\u0002\u0002\u00ce\u00d1\u0005\u0012\n\u0002\u00cf",
    "\u00d1\u0007(\u0002\u0002\u00d0\u0083\u0003\u0002\u0002\u0002\u00d0",
    "\u0091\u0003\u0002\u0002\u0002\u00d0\u009a\u0003\u0002\u0002\u0002\u00d0",
    "\u00a8\u0003\u0002\u0002\u0002\u00d0\u00ae\u0003\u0002\u0002\u0002\u00d0",
    "\u00b7\u0003\u0002\u0002\u0002\u00d0\u00b9\u0003\u0002\u0002\u0002\u00d0",
    "\u00be\u0003\u0002\u0002\u0002\u00d0\u00c4\u0003\u0002\u0002\u0002\u00d0",
    "\u00ce\u0003\u0002\u0002\u0002\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d1",
    "\u0011\u0003\u0002\u0002\u0002\u00d2\u00d6\u0007\u001d\u0002\u0002\u00d3",
    "\u00d5\u0005\u0010\t\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d5",
    "\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6",
    "\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002\u00d8",
    "\u00d6\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u001c\u0002\u0002\u00da",
    "\u0013\u0003\u0002\u0002\u0002\u00db\u00e0\u0005\u001c\u000f\u0002\u00dc",
    "\u00dd\u0007%\u0002\u0002\u00dd\u00df\u0005\u001c\u000f\u0002\u00de",
    "\u00dc\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1",
    "\u0015\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3",
    "\u00e8\u0005\u0018\r\u0002\u00e4\u00e5\u00079\u0002\u0002\u00e5\u00e7",
    "\u0005\u0018\r\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7\u00ea",
    "\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9",
    "\u0003\u0002\u0002\u0002\u00e9\u0017\u0003\u0002\u0002\u0002\u00ea\u00e8",
    "\u0003\u0002\u0002\u0002\u00eb\u00f0\u0005\u001a\u000e\u0002\u00ec\u00ed",
    "\u00078\u0002\u0002\u00ed\u00ef\u0005\u001a\u000e\u0002\u00ee\u00ec",
    "\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003\u0002\u0002\u0002\u00f0\u00ee",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u0019",
    "\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0005\u001c\u000f\u0002\u00f4\u00f5\u0005$\u0013\u0002\u00f5\u00f6",
    "\u0005\u001c\u000f\u0002\u00f6\u001b\u0003\u0002\u0002\u0002\u00f7\u00f9",
    "\u0007-\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u0100",
    "\u0005\u001e\u0010\u0002\u00fb\u00fc\u0005&\u0014\u0002\u00fc\u00fd",
    "\u0005\u001e\u0010\u0002\u00fd\u00ff\u0003\u0002\u0002\u0002\u00fe\u00fb",
    "\u0003\u0002\u0002\u0002\u00ff\u0102\u0003\u0002\u0002\u0002\u0100\u00fe",
    "\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u001d",
    "\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103\u0109",
    "\u0005 \u0011\u0002\u0104\u0105\u0005(\u0015\u0002\u0105\u0106\u0005",
    " \u0011\u0002\u0106\u0108\u0003\u0002\u0002\u0002\u0107\u0104\u0003",
    "\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u001f\u0003",
    "\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u0112\u0005",
    "\"\u0012\u0002\u010d\u010f\u0007\u0019\u0002\u0002\u010e\u0110\u0005",
    "\u0014\u000b\u0002\u010f\u010e\u0003\u0002\u0002\u0002\u010f\u0110\u0003",
    "\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0113\u0007",
    "\u0018\u0002\u0002\u0112\u010d\u0003\u0002\u0002\u0002\u0112\u0113\u0003",
    "\u0002\u0002\u0002\u0113\u011f\u0003\u0002\u0002\u0002\u0114\u011f\u0007",
    "=\u0002\u0002\u0115\u011f\u0007?\u0002\u0002\u0116\u011f\u0007@\u0002",
    "\u0002\u0117\u011f\t\u0003\u0002\u0002\u0118\u0119\u0007\u0014\u0002",
    "\u0002\u0119\u011f\u0007<\u0002\u0002\u011a\u011b\u0007\u0019\u0002",
    "\u0002\u011b\u011c\u0005\u001c\u000f\u0002\u011c\u011d\u0007\u0018\u0002",
    "\u0002\u011d\u011f\u0003\u0002\u0002\u0002\u011e\u010c\u0003\u0002\u0002",
    "\u0002\u011e\u0114\u0003\u0002\u0002\u0002\u011e\u0115\u0003\u0002\u0002",
    "\u0002\u011e\u0116\u0003\u0002\u0002\u0002\u011e\u0117\u0003\u0002\u0002",
    "\u0002\u011e\u0118\u0003\u0002\u0002\u0002\u011e\u011a\u0003\u0002\u0002",
    "\u0002\u011f!\u0003\u0002\u0002\u0002\u0120\u0129\u0007<\u0002\u0002",
    "\u0121\u0122\u0007&\u0002\u0002\u0122\u0128\u0007<\u0002\u0002\u0123",
    "\u0124\u0007\u001b\u0002\u0002\u0124\u0125\u0005\u001c\u000f\u0002\u0125",
    "\u0126\u0007\u001a\u0002\u0002\u0126\u0128\u0003\u0002\u0002\u0002\u0127",
    "\u0121\u0003\u0002\u0002\u0002\u0127\u0123\u0003\u0002\u0002\u0002\u0128",
    "\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129",
    "\u012a\u0003\u0002\u0002\u0002\u012a#\u0003\u0002\u0002\u0002\u012b",
    "\u0129\u0003\u0002\u0002\u0002\u012c\u0133\u00072\u0002\u0002\u012d",
    "\u0133\u00073\u0002\u0002\u012e\u0133\u00074\u0002\u0002\u012f\u0133",
    "\u00075\u0002\u0002\u0130\u0133\u00076\u0002\u0002\u0131\u0133\u0007",
    "7\u0002\u0002\u0132\u012c\u0003\u0002\u0002\u0002\u0132\u012d\u0003",
    "\u0002\u0002\u0002\u0132\u012e\u0003\u0002\u0002\u0002\u0132\u012f\u0003",
    "\u0002\u0002\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0132\u0131\u0003",
    "\u0002\u0002\u0002\u0133%\u0003\u0002\u0002\u0002\u0134\u0137\u0007",
    ",\u0002\u0002\u0135\u0137\u0007-\u0002\u0002\u0136\u0134\u0003\u0002",
    "\u0002\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0137\'\u0003\u0002",
    "\u0002\u0002\u0138\u013c\u0007.\u0002\u0002\u0139\u013c\u0007/\u0002",
    "\u0002\u013a\u013c\u00070\u0002\u0002\u013b\u0138\u0003\u0002\u0002",
    "\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013a\u0003\u0002\u0002",
    "\u0002\u013c)\u0003\u0002\u0002\u0002$/18GNY`ekx\u0081\u0088\u008d\u0098",
    "\u009f\u00a3\u00bb\u00c9\u00d0\u00d6\u00e0\u00e8\u00f0\u00f8\u0100\u0109",
    "\u010f\u0112\u011e\u0127\u0129\u0132\u0136\u013b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'const'", "'char'", "'int'", "'float'", 
                     "'bool'", "'string'", "'if'", "'else'", "'for'", "'while'", 
                     "'foreach'", "'break'", "'return'", "'read'", "'write'", 
                     "'in'", "'new'", "'true'", "'false'", "'void'", "')'", 
                     "'('", "']'", "'['", "'}'", "'{'", "'\u00C2\u00A1'", 
                     "'!'", "'\"'", "'#'", "'$'", "'&'", "'''", "','", "'.'", 
                     "':'", "';'", "'?'", "'@'", "'_'", "'+'", "'-'", "'*'", 
                     "'/'", "'%'", "'='", "'=='", "'!='", "'>'", "'>='", 
                     "'<'", "'<='", "'&&'", "'||'", "'++'", "'--'" ];

var symbolicNames = [ null, "CLASS", "CONST", "CHAR", "INT", "FLOAT", "BOOL", 
                      "STRING", "IF", "ELSE", "FOR", "WHILE", "FOREACH", 
                      "BREAK", "RETURN", "READ", "WRITE", "IN", "NEW", "TRUE", 
                      "FALSE", "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
                      "RIGHT_SQUARE_BRACKET", "LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", 
                      "LEFT_CURLY_BRACKET", "EXCLAMATION_UP", "EXCLAMATION_DOWN", 
                      "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", "DOLLAR_SIGN", 
                      "AMPERSAND", "QUOTATION_MARKS", "COMMA", "DOT", "COLON", 
                      "SEMICOLON", "QUESTION_SIGN", "AT", "UNDERSCORE", 
                      "SUM", "SUBTRACTION", "MULTIPLICATION", "DIVISION", 
                      "PERCENTAGE", "ASIGN", "EQUAL_EQUAL", "INEQUALITY", 
                      "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "LESS_THAN", 
                      "LESS_THAN_OR_EQUAL", "AND", "OR", "PLUS_PLUS", "MINUS_MINUS", 
                      "IDENT", "NUMBER", "LIST", "CHAR_CONST", "STRING_CONST", 
                      "PRINTABLE_CHAR", "LETTER", "DIGIT", "LINE_COMMENT", 
                      "SPECIAL_COMMENT", "WS" ];

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
ParserMiniCSharp.IN = 17;
ParserMiniCSharp.NEW = 18;
ParserMiniCSharp.TRUE = 19;
ParserMiniCSharp.FALSE = 20;
ParserMiniCSharp.VOID = 21;
ParserMiniCSharp.RIGHT_PARENTHESIS = 22;
ParserMiniCSharp.LEFT_PARENTHESIS = 23;
ParserMiniCSharp.RIGHT_SQUARE_BRACKET = 24;
ParserMiniCSharp.LEFT_SQUARE_BRACKET = 25;
ParserMiniCSharp.RIGHT_CURLY_BRACKET = 26;
ParserMiniCSharp.LEFT_CURLY_BRACKET = 27;
ParserMiniCSharp.EXCLAMATION_UP = 28;
ParserMiniCSharp.EXCLAMATION_DOWN = 29;
ParserMiniCSharp.DOUBLE_QUOTATION_MARKS = 30;
ParserMiniCSharp.NUMBER_SIGN = 31;
ParserMiniCSharp.DOLLAR_SIGN = 32;
ParserMiniCSharp.AMPERSAND = 33;
ParserMiniCSharp.QUOTATION_MARKS = 34;
ParserMiniCSharp.COMMA = 35;
ParserMiniCSharp.DOT = 36;
ParserMiniCSharp.COLON = 37;
ParserMiniCSharp.SEMICOLON = 38;
ParserMiniCSharp.QUESTION_SIGN = 39;
ParserMiniCSharp.AT = 40;
ParserMiniCSharp.UNDERSCORE = 41;
ParserMiniCSharp.SUM = 42;
ParserMiniCSharp.SUBTRACTION = 43;
ParserMiniCSharp.MULTIPLICATION = 44;
ParserMiniCSharp.DIVISION = 45;
ParserMiniCSharp.PERCENTAGE = 46;
ParserMiniCSharp.ASIGN = 47;
ParserMiniCSharp.EQUAL_EQUAL = 48;
ParserMiniCSharp.INEQUALITY = 49;
ParserMiniCSharp.GREATER_THAN = 50;
ParserMiniCSharp.GREATER_THAN_OR_EQUAL = 51;
ParserMiniCSharp.LESS_THAN = 52;
ParserMiniCSharp.LESS_THAN_OR_EQUAL = 53;
ParserMiniCSharp.AND = 54;
ParserMiniCSharp.OR = 55;
ParserMiniCSharp.PLUS_PLUS = 56;
ParserMiniCSharp.MINUS_MINUS = 57;
ParserMiniCSharp.IDENT = 58;
ParserMiniCSharp.NUMBER = 59;
ParserMiniCSharp.LIST = 60;
ParserMiniCSharp.CHAR_CONST = 61;
ParserMiniCSharp.STRING_CONST = 62;
ParserMiniCSharp.PRINTABLE_CHAR = 63;
ParserMiniCSharp.LETTER = 64;
ParserMiniCSharp.DIGIT = 65;
ParserMiniCSharp.LINE_COMMENT = 66;
ParserMiniCSharp.SPECIAL_COMMENT = 67;
ParserMiniCSharp.WS = 68;

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

VarDeclContext.prototype.LIST = function() {
    return this.getToken(ParserMiniCSharp.LIST, 0);
};

VarDeclContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.COMMA);
    } else {
        return this.getToken(ParserMiniCSharp.COMMA, i);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.type();
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ParserMiniCSharp.LIST) {
            this.state = 68;
            this.match(ParserMiniCSharp.LIST);
        }

        this.state = 71;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.COMMA) {
            this.state = 72;
            this.match(ParserMiniCSharp.COMMA);
            this.state = 73;
            this.match(ParserMiniCSharp.IDENT);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 79;
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
        this.state = 81;
        this.match(ParserMiniCSharp.CLASS);
        this.state = 82;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 83;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 84;
            this.varDecl();
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 90;
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
        this.state = 94;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.CHAR:
        case ParserMiniCSharp.INT:
        case ParserMiniCSharp.FLOAT:
        case ParserMiniCSharp.BOOL:
        case ParserMiniCSharp.STRING:
        case ParserMiniCSharp.IDENT:
            this.state = 92;
            this.type();
            break;
        case ParserMiniCSharp.VOID:
            this.state = 93;
            this.match(ParserMiniCSharp.VOID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 96;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 97;
        this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 98;
            this.formPars();
        }

        this.state = 101;
        this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.CHAR) | (1 << ParserMiniCSharp.INT) | (1 << ParserMiniCSharp.FLOAT) | (1 << ParserMiniCSharp.BOOL) | (1 << ParserMiniCSharp.STRING))) !== 0) || _la===ParserMiniCSharp.IDENT) {
            this.state = 102;
            this.varDecl();
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 108;
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
        this.state = 110;
        this.type();
        this.state = 111;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.COMMA) {
            this.state = 112;
            this.match(ParserMiniCSharp.COMMA);
            this.state = 113;
            this.type();
            this.state = 114;
            this.match(ParserMiniCSharp.IDENT);
            this.state = 120;
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


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CharTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharTypeContext.prototype = Object.create(TypeContext.prototype);
CharTypeContext.prototype.constructor = CharTypeContext;

ParserMiniCSharp.CharTypeContext = CharTypeContext;

CharTypeContext.prototype.CHAR = function() {
    return this.getToken(ParserMiniCSharp.CHAR, 0);
};
CharTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitCharType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FloatTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloatTypeContext.prototype = Object.create(TypeContext.prototype);
FloatTypeContext.prototype.constructor = FloatTypeContext;

ParserMiniCSharp.FloatTypeContext = FloatTypeContext;

FloatTypeContext.prototype.FLOAT = function() {
    return this.getToken(ParserMiniCSharp.FLOAT, 0);
};
FloatTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitFloatType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentTypeContext.prototype = Object.create(TypeContext.prototype);
IdentTypeContext.prototype.constructor = IdentTypeContext;

ParserMiniCSharp.IdentTypeContext = IdentTypeContext;

IdentTypeContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};
IdentTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitIdentType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntTypeContext.prototype = Object.create(TypeContext.prototype);
IntTypeContext.prototype.constructor = IntTypeContext;

ParserMiniCSharp.IntTypeContext = IntTypeContext;

IntTypeContext.prototype.INT = function() {
    return this.getToken(ParserMiniCSharp.INT, 0);
};
IntTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitIntType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringTypeContext.prototype = Object.create(TypeContext.prototype);
StringTypeContext.prototype.constructor = StringTypeContext;

ParserMiniCSharp.StringTypeContext = StringTypeContext;

StringTypeContext.prototype.STRING = function() {
    return this.getToken(ParserMiniCSharp.STRING, 0);
};
StringTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitStringType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolTypeContext.prototype = Object.create(TypeContext.prototype);
BoolTypeContext.prototype.constructor = BoolTypeContext;

ParserMiniCSharp.BoolTypeContext = BoolTypeContext;

BoolTypeContext.prototype.BOOL = function() {
    return this.getToken(ParserMiniCSharp.BOOL, 0);
};
BoolTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitBoolType(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ParserMiniCSharp.TypeContext = TypeContext;

ParserMiniCSharp.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ParserMiniCSharp.RULE_type);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            localctx = new IdentTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.match(ParserMiniCSharp.IDENT);
            break;
        case ParserMiniCSharp.CHAR:
            localctx = new CharTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.match(ParserMiniCSharp.CHAR);
            break;
        case ParserMiniCSharp.INT:
            localctx = new IntTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.match(ParserMiniCSharp.INT);
            break;
        case ParserMiniCSharp.FLOAT:
            localctx = new FloatTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 124;
            this.match(ParserMiniCSharp.FLOAT);
            break;
        case ParserMiniCSharp.BOOL:
            localctx = new BoolTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 125;
            this.match(ParserMiniCSharp.BOOL);
            break;
        case ParserMiniCSharp.STRING:
            localctx = new StringTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 126;
            this.match(ParserMiniCSharp.STRING);
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


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function WhileStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileStatementContext.prototype = Object.create(StatementContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

ParserMiniCSharp.WhileStatementContext = WhileStatementContext;

WhileStatementContext.prototype.WHILE = function() {
    return this.getToken(ParserMiniCSharp.WHILE, 0);
};

WhileStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

WhileStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

WhileStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SemicolonStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SemicolonStatementContext.prototype = Object.create(StatementContext.prototype);
SemicolonStatementContext.prototype.constructor = SemicolonStatementContext;

ParserMiniCSharp.SemicolonStatementContext = SemicolonStatementContext;

SemicolonStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};
SemicolonStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitSemicolonStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WriteStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WriteStatementContext.prototype = Object.create(StatementContext.prototype);
WriteStatementContext.prototype.constructor = WriteStatementContext;

ParserMiniCSharp.WriteStatementContext = WriteStatementContext;

WriteStatementContext.prototype.WRITE = function() {
    return this.getToken(ParserMiniCSharp.WRITE, 0);
};

WriteStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

WriteStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WriteStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

WriteStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

WriteStatementContext.prototype.COMMA = function() {
    return this.getToken(ParserMiniCSharp.COMMA, 0);
};

WriteStatementContext.prototype.NUMBER = function() {
    return this.getToken(ParserMiniCSharp.NUMBER, 0);
};
WriteStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitWriteStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForeachStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForeachStatementContext.prototype = Object.create(StatementContext.prototype);
ForeachStatementContext.prototype.constructor = ForeachStatementContext;

ParserMiniCSharp.ForeachStatementContext = ForeachStatementContext;

ForeachStatementContext.prototype.FOREACH = function() {
    return this.getToken(ParserMiniCSharp.FOREACH, 0);
};

ForeachStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

ForeachStatementContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ForeachStatementContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.IDENT);
    } else {
        return this.getToken(ParserMiniCSharp.IDENT, i);
    }
};


ForeachStatementContext.prototype.IN = function() {
    return this.getToken(ParserMiniCSharp.IN, 0);
};

ForeachStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

ForeachStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
ForeachStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitForeachStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlockStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockStatementContext.prototype = Object.create(StatementContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

ParserMiniCSharp.BlockStatementContext = BlockStatementContext;

BlockStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
BlockStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitBlockStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FirstDesignStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FirstDesignStatementContext.prototype = Object.create(StatementContext.prototype);
FirstDesignStatementContext.prototype.constructor = FirstDesignStatementContext;

ParserMiniCSharp.FirstDesignStatementContext = FirstDesignStatementContext;

FirstDesignStatementContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

FirstDesignStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

FirstDesignStatementContext.prototype.ASIGN = function() {
    return this.getToken(ParserMiniCSharp.ASIGN, 0);
};

FirstDesignStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FirstDesignStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

FirstDesignStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

FirstDesignStatementContext.prototype.PLUS_PLUS = function() {
    return this.getToken(ParserMiniCSharp.PLUS_PLUS, 0);
};

FirstDesignStatementContext.prototype.MINUS_MINUS = function() {
    return this.getToken(ParserMiniCSharp.MINUS_MINUS, 0);
};

FirstDesignStatementContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};
FirstDesignStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitFirstDesignStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForStatementContext.prototype = Object.create(StatementContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ParserMiniCSharp.ForStatementContext = ForStatementContext;

ForStatementContext.prototype.FOR = function() {
    return this.getToken(ParserMiniCSharp.FOR, 0);
};

ForStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

ForStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ForStatementContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.SEMICOLON);
    } else {
        return this.getToken(ParserMiniCSharp.SEMICOLON, i);
    }
};


ForStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

ForStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ForStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};
ForStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitForStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BreakStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BreakStatementContext.prototype = Object.create(StatementContext.prototype);
BreakStatementContext.prototype.constructor = BreakStatementContext;

ParserMiniCSharp.BreakStatementContext = BreakStatementContext;

BreakStatementContext.prototype.BREAK = function() {
    return this.getToken(ParserMiniCSharp.BREAK, 0);
};

BreakStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};
BreakStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitBreakStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReadStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReadStatementContext.prototype = Object.create(StatementContext.prototype);
ReadStatementContext.prototype.constructor = ReadStatementContext;

ParserMiniCSharp.ReadStatementContext = ReadStatementContext;

ReadStatementContext.prototype.READ = function() {
    return this.getToken(ParserMiniCSharp.READ, 0);
};

ReadStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

ReadStatementContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

ReadStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

ReadStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};
ReadStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitReadStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IfStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfStatementContext.prototype = Object.create(StatementContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

ParserMiniCSharp.IfStatementContext = IfStatementContext;

IfStatementContext.prototype.IF = function() {
    return this.getToken(ParserMiniCSharp.IF, 0);
};

IfStatementContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

IfStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

IfStatementContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

IfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfStatementContext.prototype.ELSE = function() {
    return this.getToken(ParserMiniCSharp.ELSE, 0);
};
IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReturnStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnStatementContext.prototype = Object.create(StatementContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ParserMiniCSharp.ReturnStatementContext = ReturnStatementContext;

ReturnStatementContext.prototype.RETURN = function() {
    return this.getToken(ParserMiniCSharp.RETURN, 0);
};

ReturnStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(ParserMiniCSharp.SEMICOLON, 0);
};

ReturnStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ParserMiniCSharp.StatementContext = StatementContext;

ParserMiniCSharp.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ParserMiniCSharp.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 206;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            localctx = new FirstDesignStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.designator();
            this.state = 139;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.ASIGN:
                this.state = 130;
                this.match(ParserMiniCSharp.ASIGN);
                this.state = 131;
                this.expr();
                break;
            case ParserMiniCSharp.LEFT_PARENTHESIS:
                this.state = 132;
                this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.NEW) | (1 << ParserMiniCSharp.TRUE) | (1 << ParserMiniCSharp.FALSE) | (1 << ParserMiniCSharp.LEFT_PARENTHESIS))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (ParserMiniCSharp.SUBTRACTION - 43)) | (1 << (ParserMiniCSharp.IDENT - 43)) | (1 << (ParserMiniCSharp.NUMBER - 43)) | (1 << (ParserMiniCSharp.CHAR_CONST - 43)) | (1 << (ParserMiniCSharp.STRING_CONST - 43)))) !== 0)) {
                    this.state = 133;
                    this.actPars();
                }

                this.state = 136;
                this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
                break;
            case ParserMiniCSharp.PLUS_PLUS:
                this.state = 137;
                this.match(ParserMiniCSharp.PLUS_PLUS);
                break;
            case ParserMiniCSharp.MINUS_MINUS:
                this.state = 138;
                this.match(ParserMiniCSharp.MINUS_MINUS);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 141;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.IF:
            localctx = new IfStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.match(ParserMiniCSharp.IF);
            this.state = 144;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 145;
            this.condition();
            this.state = 146;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 147;
            this.statement();
            this.state = 150;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            if(la_===1) {
                this.state = 148;
                this.match(ParserMiniCSharp.ELSE);
                this.state = 149;
                this.statement();

            }
            break;
        case ParserMiniCSharp.FOR:
            localctx = new ForStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this.match(ParserMiniCSharp.FOR);
            this.state = 153;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 154;
            this.expr();
            this.state = 155;
            this.match(ParserMiniCSharp.SEMICOLON);
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.NEW) | (1 << ParserMiniCSharp.TRUE) | (1 << ParserMiniCSharp.FALSE) | (1 << ParserMiniCSharp.LEFT_PARENTHESIS))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (ParserMiniCSharp.SUBTRACTION - 43)) | (1 << (ParserMiniCSharp.IDENT - 43)) | (1 << (ParserMiniCSharp.NUMBER - 43)) | (1 << (ParserMiniCSharp.CHAR_CONST - 43)) | (1 << (ParserMiniCSharp.STRING_CONST - 43)))) !== 0)) {
                this.state = 156;
                this.condition();
            }

            this.state = 159;
            this.match(ParserMiniCSharp.SEMICOLON);
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.IF) | (1 << ParserMiniCSharp.FOR) | (1 << ParserMiniCSharp.WHILE) | (1 << ParserMiniCSharp.FOREACH) | (1 << ParserMiniCSharp.BREAK) | (1 << ParserMiniCSharp.RETURN) | (1 << ParserMiniCSharp.READ) | (1 << ParserMiniCSharp.WRITE) | (1 << ParserMiniCSharp.LEFT_CURLY_BRACKET))) !== 0) || _la===ParserMiniCSharp.SEMICOLON || _la===ParserMiniCSharp.IDENT) {
                this.state = 160;
                this.statement();
            }

            this.state = 163;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 164;
            this.statement();
            break;
        case ParserMiniCSharp.WHILE:
            localctx = new WhileStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 166;
            this.match(ParserMiniCSharp.WHILE);
            this.state = 167;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 168;
            this.condition();
            this.state = 169;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 170;
            this.statement();
            break;
        case ParserMiniCSharp.FOREACH:
            localctx = new ForeachStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 172;
            this.match(ParserMiniCSharp.FOREACH);
            this.state = 173;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 174;
            this.type();
            this.state = 175;
            this.match(ParserMiniCSharp.IDENT);
            this.state = 176;
            this.match(ParserMiniCSharp.IN);
            this.state = 177;
            this.match(ParserMiniCSharp.IDENT);
            this.state = 178;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 179;
            this.block();
            break;
        case ParserMiniCSharp.BREAK:
            localctx = new BreakStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 181;
            this.match(ParserMiniCSharp.BREAK);
            this.state = 182;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.RETURN:
            localctx = new ReturnStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 183;
            this.match(ParserMiniCSharp.RETURN);
            this.state = 185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.NEW) | (1 << ParserMiniCSharp.TRUE) | (1 << ParserMiniCSharp.FALSE) | (1 << ParserMiniCSharp.LEFT_PARENTHESIS))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (ParserMiniCSharp.SUBTRACTION - 43)) | (1 << (ParserMiniCSharp.IDENT - 43)) | (1 << (ParserMiniCSharp.NUMBER - 43)) | (1 << (ParserMiniCSharp.CHAR_CONST - 43)) | (1 << (ParserMiniCSharp.STRING_CONST - 43)))) !== 0)) {
                this.state = 184;
                this.expr();
            }

            this.state = 187;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.READ:
            localctx = new ReadStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 188;
            this.match(ParserMiniCSharp.READ);
            this.state = 189;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 190;
            this.designator();
            this.state = 191;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 192;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.WRITE:
            localctx = new WriteStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 194;
            this.match(ParserMiniCSharp.WRITE);
            this.state = 195;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 196;
            this.expr();
            this.state = 199;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ParserMiniCSharp.COMMA) {
                this.state = 197;
                this.match(ParserMiniCSharp.COMMA);
                this.state = 198;
                this.match(ParserMiniCSharp.NUMBER);
            }

            this.state = 201;
            this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            this.state = 202;
            this.match(ParserMiniCSharp.SEMICOLON);
            break;
        case ParserMiniCSharp.LEFT_CURLY_BRACKET:
            localctx = new BlockStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 204;
            this.block();
            break;
        case ParserMiniCSharp.SEMICOLON:
            localctx = new SemicolonStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 205;
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
        this.state = 208;
        this.match(ParserMiniCSharp.LEFT_CURLY_BRACKET);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.IF) | (1 << ParserMiniCSharp.FOR) | (1 << ParserMiniCSharp.WHILE) | (1 << ParserMiniCSharp.FOREACH) | (1 << ParserMiniCSharp.BREAK) | (1 << ParserMiniCSharp.RETURN) | (1 << ParserMiniCSharp.READ) | (1 << ParserMiniCSharp.WRITE) | (1 << ParserMiniCSharp.LEFT_CURLY_BRACKET))) !== 0) || _la===ParserMiniCSharp.SEMICOLON || _la===ParserMiniCSharp.IDENT) {
            this.state = 209;
            this.statement();
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 215;
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
        this.state = 217;
        this.expr();
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.COMMA) {
            this.state = 218;
            this.match(ParserMiniCSharp.COMMA);
            this.state = 219;
            this.expr();
            this.state = 224;
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
        this.state = 225;
        this.condTerm();
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.OR) {
            this.state = 226;
            this.match(ParserMiniCSharp.OR);
            this.state = 227;
            this.condTerm();
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
        this.state = 233;
        this.condFact();
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.AND) {
            this.state = 234;
            this.match(ParserMiniCSharp.AND);
            this.state = 235;
            this.condFact();
            this.state = 240;
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
        this.state = 241;
        this.expr();
        this.state = 242;
        this.relop();
        this.state = 243;
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
        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ParserMiniCSharp.SUBTRACTION) {
            this.state = 245;
            this.match(ParserMiniCSharp.SUBTRACTION);
        }

        this.state = 248;
        this.term();
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.SUM || _la===ParserMiniCSharp.SUBTRACTION) {
            this.state = 249;
            this.addop();
            this.state = 250;
            this.term();
            this.state = 256;
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
        this.state = 257;
        this.factor();
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (ParserMiniCSharp.MULTIPLICATION - 44)) | (1 << (ParserMiniCSharp.DIVISION - 44)) | (1 << (ParserMiniCSharp.PERCENTAGE - 44)))) !== 0)) {
            this.state = 258;
            this.mulop();
            this.state = 259;
            this.factor();
            this.state = 265;
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


 
FactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumberFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberFactorContext.prototype = Object.create(FactorContext.prototype);
NumberFactorContext.prototype.constructor = NumberFactorContext;

ParserMiniCSharp.NumberFactorContext = NumberFactorContext;

NumberFactorContext.prototype.NUMBER = function() {
    return this.getToken(ParserMiniCSharp.NUMBER, 0);
};
NumberFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitNumberFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DesignatorFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DesignatorFactorContext.prototype = Object.create(FactorContext.prototype);
DesignatorFactorContext.prototype.constructor = DesignatorFactorContext;

ParserMiniCSharp.DesignatorFactorContext = DesignatorFactorContext;

DesignatorFactorContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

DesignatorFactorContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

DesignatorFactorContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};

DesignatorFactorContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};
DesignatorFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitDesignatorFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewFactorContext.prototype = Object.create(FactorContext.prototype);
NewFactorContext.prototype.constructor = NewFactorContext;

ParserMiniCSharp.NewFactorContext = NewFactorContext;

NewFactorContext.prototype.NEW = function() {
    return this.getToken(ParserMiniCSharp.NEW, 0);
};

NewFactorContext.prototype.IDENT = function() {
    return this.getToken(ParserMiniCSharp.IDENT, 0);
};
NewFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitNewFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CharconstFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharconstFactorContext.prototype = Object.create(FactorContext.prototype);
CharconstFactorContext.prototype.constructor = CharconstFactorContext;

ParserMiniCSharp.CharconstFactorContext = CharconstFactorContext;

CharconstFactorContext.prototype.CHAR_CONST = function() {
    return this.getToken(ParserMiniCSharp.CHAR_CONST, 0);
};
CharconstFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitCharconstFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionFactorContext.prototype = Object.create(FactorContext.prototype);
ExpressionFactorContext.prototype.constructor = ExpressionFactorContext;

ParserMiniCSharp.ExpressionFactorContext = ExpressionFactorContext;

ExpressionFactorContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.LEFT_PARENTHESIS, 0);
};

ExpressionFactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExpressionFactorContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ParserMiniCSharp.RIGHT_PARENTHESIS, 0);
};
ExpressionFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitExpressionFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringConstFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringConstFactorContext.prototype = Object.create(FactorContext.prototype);
StringConstFactorContext.prototype.constructor = StringConstFactorContext;

ParserMiniCSharp.StringConstFactorContext = StringConstFactorContext;

StringConstFactorContext.prototype.STRING_CONST = function() {
    return this.getToken(ParserMiniCSharp.STRING_CONST, 0);
};
StringConstFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitStringConstFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolFactorContext.prototype = Object.create(FactorContext.prototype);
BoolFactorContext.prototype.constructor = BoolFactorContext;

ParserMiniCSharp.BoolFactorContext = BoolFactorContext;

BoolFactorContext.prototype.TRUE = function() {
    return this.getToken(ParserMiniCSharp.TRUE, 0);
};

BoolFactorContext.prototype.FALSE = function() {
    return this.getToken(ParserMiniCSharp.FALSE, 0);
};
BoolFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitBoolFactor(this);
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
        this.state = 284;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.IDENT:
            localctx = new DesignatorFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 266;
            this.designator();
            this.state = 272;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ParserMiniCSharp.LEFT_PARENTHESIS) {
                this.state = 267;
                this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
                this.state = 269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParserMiniCSharp.NEW) | (1 << ParserMiniCSharp.TRUE) | (1 << ParserMiniCSharp.FALSE) | (1 << ParserMiniCSharp.LEFT_PARENTHESIS))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (ParserMiniCSharp.SUBTRACTION - 43)) | (1 << (ParserMiniCSharp.IDENT - 43)) | (1 << (ParserMiniCSharp.NUMBER - 43)) | (1 << (ParserMiniCSharp.CHAR_CONST - 43)) | (1 << (ParserMiniCSharp.STRING_CONST - 43)))) !== 0)) {
                    this.state = 268;
                    this.actPars();
                }

                this.state = 271;
                this.match(ParserMiniCSharp.RIGHT_PARENTHESIS);
            }

            break;
        case ParserMiniCSharp.NUMBER:
            localctx = new NumberFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 274;
            this.match(ParserMiniCSharp.NUMBER);
            break;
        case ParserMiniCSharp.CHAR_CONST:
            localctx = new CharconstFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 275;
            this.match(ParserMiniCSharp.CHAR_CONST);
            break;
        case ParserMiniCSharp.STRING_CONST:
            localctx = new StringConstFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 276;
            this.match(ParserMiniCSharp.STRING_CONST);
            break;
        case ParserMiniCSharp.TRUE:
        case ParserMiniCSharp.FALSE:
            localctx = new BoolFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 277;
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
            localctx = new NewFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 278;
            this.match(ParserMiniCSharp.NEW);
            this.state = 279;
            this.match(ParserMiniCSharp.IDENT);
            break;
        case ParserMiniCSharp.LEFT_PARENTHESIS:
            localctx = new ExpressionFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 280;
            this.match(ParserMiniCSharp.LEFT_PARENTHESIS);
            this.state = 281;
            this.expr();
            this.state = 282;
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


DesignatorContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.DOT);
    } else {
        return this.getToken(ParserMiniCSharp.DOT, i);
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

DesignatorContext.prototype.RIGHT_SQUARE_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParserMiniCSharp.RIGHT_SQUARE_BRACKET);
    } else {
        return this.getToken(ParserMiniCSharp.RIGHT_SQUARE_BRACKET, i);
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
        this.state = 286;
        this.match(ParserMiniCSharp.IDENT);
        this.state = 295;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ParserMiniCSharp.LEFT_SQUARE_BRACKET || _la===ParserMiniCSharp.DOT) {
            this.state = 293;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ParserMiniCSharp.DOT:
                this.state = 287;
                this.match(ParserMiniCSharp.DOT);
                this.state = 288;
                this.match(ParserMiniCSharp.IDENT);
                break;
            case ParserMiniCSharp.LEFT_SQUARE_BRACKET:
                this.state = 289;
                this.match(ParserMiniCSharp.LEFT_SQUARE_BRACKET);
                this.state = 290;
                this.expr();
                this.state = 291;
                this.match(ParserMiniCSharp.RIGHT_SQUARE_BRACKET);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 297;
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


 
RelopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LessOrEqualThanOpContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LessOrEqualThanOpContext.prototype = Object.create(RelopContext.prototype);
LessOrEqualThanOpContext.prototype.constructor = LessOrEqualThanOpContext;

ParserMiniCSharp.LessOrEqualThanOpContext = LessOrEqualThanOpContext;

LessOrEqualThanOpContext.prototype.LESS_THAN_OR_EQUAL = function() {
    return this.getToken(ParserMiniCSharp.LESS_THAN_OR_EQUAL, 0);
};
LessOrEqualThanOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitLessOrEqualThanOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GreaterThanOpContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GreaterThanOpContext.prototype = Object.create(RelopContext.prototype);
GreaterThanOpContext.prototype.constructor = GreaterThanOpContext;

ParserMiniCSharp.GreaterThanOpContext = GreaterThanOpContext;

GreaterThanOpContext.prototype.GREATER_THAN = function() {
    return this.getToken(ParserMiniCSharp.GREATER_THAN, 0);
};
GreaterThanOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitGreaterThanOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LessThanOpContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LessThanOpContext.prototype = Object.create(RelopContext.prototype);
LessThanOpContext.prototype.constructor = LessThanOpContext;

ParserMiniCSharp.LessThanOpContext = LessThanOpContext;

LessThanOpContext.prototype.LESS_THAN = function() {
    return this.getToken(ParserMiniCSharp.LESS_THAN, 0);
};
LessThanOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitLessThanOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualEqualOpContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualEqualOpContext.prototype = Object.create(RelopContext.prototype);
EqualEqualOpContext.prototype.constructor = EqualEqualOpContext;

ParserMiniCSharp.EqualEqualOpContext = EqualEqualOpContext;

EqualEqualOpContext.prototype.EQUAL_EQUAL = function() {
    return this.getToken(ParserMiniCSharp.EQUAL_EQUAL, 0);
};
EqualEqualOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitEqualEqualOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GreaterOrEqualThanOpContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GreaterOrEqualThanOpContext.prototype = Object.create(RelopContext.prototype);
GreaterOrEqualThanOpContext.prototype.constructor = GreaterOrEqualThanOpContext;

ParserMiniCSharp.GreaterOrEqualThanOpContext = GreaterOrEqualThanOpContext;

GreaterOrEqualThanOpContext.prototype.GREATER_THAN_OR_EQUAL = function() {
    return this.getToken(ParserMiniCSharp.GREATER_THAN_OR_EQUAL, 0);
};
GreaterOrEqualThanOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitGreaterOrEqualThanOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InequalityOpContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InequalityOpContext.prototype = Object.create(RelopContext.prototype);
InequalityOpContext.prototype.constructor = InequalityOpContext;

ParserMiniCSharp.InequalityOpContext = InequalityOpContext;

InequalityOpContext.prototype.INEQUALITY = function() {
    return this.getToken(ParserMiniCSharp.INEQUALITY, 0);
};
InequalityOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitInequalityOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ParserMiniCSharp.RelopContext = RelopContext;

ParserMiniCSharp.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ParserMiniCSharp.RULE_relop);
    try {
        this.state = 304;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.EQUAL_EQUAL:
            localctx = new EqualEqualOpContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 298;
            this.match(ParserMiniCSharp.EQUAL_EQUAL);
            break;
        case ParserMiniCSharp.INEQUALITY:
            localctx = new InequalityOpContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 299;
            this.match(ParserMiniCSharp.INEQUALITY);
            break;
        case ParserMiniCSharp.GREATER_THAN:
            localctx = new GreaterThanOpContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 300;
            this.match(ParserMiniCSharp.GREATER_THAN);
            break;
        case ParserMiniCSharp.GREATER_THAN_OR_EQUAL:
            localctx = new GreaterOrEqualThanOpContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 301;
            this.match(ParserMiniCSharp.GREATER_THAN_OR_EQUAL);
            break;
        case ParserMiniCSharp.LESS_THAN:
            localctx = new LessThanOpContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 302;
            this.match(ParserMiniCSharp.LESS_THAN);
            break;
        case ParserMiniCSharp.LESS_THAN_OR_EQUAL:
            localctx = new LessOrEqualThanOpContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 303;
            this.match(ParserMiniCSharp.LESS_THAN_OR_EQUAL);
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


 
AddopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SumOpContext(parser, ctx) {
	AddopContext.call(this, parser);
    AddopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumOpContext.prototype = Object.create(AddopContext.prototype);
SumOpContext.prototype.constructor = SumOpContext;

ParserMiniCSharp.SumOpContext = SumOpContext;

SumOpContext.prototype.SUM = function() {
    return this.getToken(ParserMiniCSharp.SUM, 0);
};
SumOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitSumOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubsOpContext(parser, ctx) {
	AddopContext.call(this, parser);
    AddopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubsOpContext.prototype = Object.create(AddopContext.prototype);
SubsOpContext.prototype.constructor = SubsOpContext;

ParserMiniCSharp.SubsOpContext = SubsOpContext;

SubsOpContext.prototype.SUBTRACTION = function() {
    return this.getToken(ParserMiniCSharp.SUBTRACTION, 0);
};
SubsOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitSubsOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ParserMiniCSharp.AddopContext = AddopContext;

ParserMiniCSharp.prototype.addop = function() {

    var localctx = new AddopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ParserMiniCSharp.RULE_addop);
    try {
        this.state = 308;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.SUM:
            localctx = new SumOpContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 306;
            this.match(ParserMiniCSharp.SUM);
            break;
        case ParserMiniCSharp.SUBTRACTION:
            localctx = new SubsOpContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 307;
            this.match(ParserMiniCSharp.SUBTRACTION);
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


 
MulopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DivOpContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivOpContext.prototype = Object.create(MulopContext.prototype);
DivOpContext.prototype.constructor = DivOpContext;

ParserMiniCSharp.DivOpContext = DivOpContext;

DivOpContext.prototype.DIVISION = function() {
    return this.getToken(ParserMiniCSharp.DIVISION, 0);
};
DivOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitDivOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultOpContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultOpContext.prototype = Object.create(MulopContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

ParserMiniCSharp.MultOpContext = MultOpContext;

MultOpContext.prototype.MULTIPLICATION = function() {
    return this.getToken(ParserMiniCSharp.MULTIPLICATION, 0);
};
MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PercentOpContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PercentOpContext.prototype = Object.create(MulopContext.prototype);
PercentOpContext.prototype.constructor = PercentOpContext;

ParserMiniCSharp.PercentOpContext = PercentOpContext;

PercentOpContext.prototype.PERCENTAGE = function() {
    return this.getToken(ParserMiniCSharp.PERCENTAGE, 0);
};
PercentOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ParserMiniCSharpVisitor ) {
        return visitor.visitPercentOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ParserMiniCSharp.MulopContext = MulopContext;

ParserMiniCSharp.prototype.mulop = function() {

    var localctx = new MulopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ParserMiniCSharp.RULE_mulop);
    try {
        this.state = 313;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParserMiniCSharp.MULTIPLICATION:
            localctx = new MultOpContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 310;
            this.match(ParserMiniCSharp.MULTIPLICATION);
            break;
        case ParserMiniCSharp.DIVISION:
            localctx = new DivOpContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 311;
            this.match(ParserMiniCSharp.DIVISION);
            break;
        case ParserMiniCSharp.PERCENTAGE:
            localctx = new PercentOpContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 312;
            this.match(ParserMiniCSharp.PERCENTAGE);
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


exports.ParserMiniCSharp = ParserMiniCSharp;
