// Generated from C:/Users/Andres/Documents/Compiladores/prueba txt/Proyecto/InterpreteWeb-MiniCSharp\ScannerMiniCSharp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002F\u01d9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u0003",
    "1\u00031\u00031\u00032\u00032\u00032\u00033\u00033\u00034\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00036\u00037\u00037\u00037\u00038\u0003",
    "8\u00038\u00039\u00039\u00039\u0003:\u0003:\u0003:\u0003;\u0003;\u0003",
    ";\u0003;\u0007;\u0155\n;\f;\u000e;\u0158\u000b;\u0003<\u0003<\u0007",
    "<\u015c\n<\f<\u000e<\u015f\u000b<\u0003<\u0003<\u0007<\u0163\n<\f<\u000e",
    "<\u0166\u000b<\u0003<\u0003<\u0003<\u0007<\u016b\n<\f<\u000e<\u016e",
    "\u000b<\u0005<\u0170\n<\u0003=\u0003=\u0003=\u0003>\u0003>\u0003>\u0005",
    ">\u0178\n>\u0003>\u0003>\u0003?\u0003?\u0003?\u0003?\u0007?\u0180\n",
    "?\f?\u000e?\u0183\u000b?\u0003?\u0003?\u0003@\u0003@\u0003@\u0005@\u018a",
    "\n@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003C\u0003C\u0003C\u0003",
    "C\u0003C\u0003C\u0003C\u0003C\u0003C\u0003C\u0003C\u0003C\u0003C\u0003",
    "C\u0003C\u0003C\u0003C\u0003C\u0003C\u0005C\u01a5\nC\u0003D\u0003D\u0003",
    "D\u0003D\u0007D\u01ab\nD\fD\u000eD\u01ae\u000bD\u0003D\u0005D\u01b1",
    "\nD\u0003D\u0003D\u0003D\u0003D\u0003E\u0003E\u0003E\u0003E\u0003E\u0003",
    "E\u0007E\u01bd\nE\fE\u000eE\u01c0\u000bE\u0003E\u0003E\u0003E\u0003",
    "E\u0003E\u0003F\u0003F\u0003F\u0003F\u0007F\u01cb\nF\fF\u000eF\u01ce",
    "\u000bF\u0003F\u0003F\u0003F\u0003G\u0006G\u01d4\nG\rG\u000eG\u01d5",
    "\u0003G\u0003G\u0005\u01ac\u01be\u01cc\u0002H\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d",
    "9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o",
    "9q:s;u<w=y>{?}@\u007fA\u0081B\u0083C\u0085\u0002\u0087D\u0089E\u008b",
    "\u0002\u008dF\u0003\u0002\u0005\u0004\u0002\f\f\u000f\u000f\u0004\u0002",
    "C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u01fe\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002",
    "\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002",
    "\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002",
    "\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002",
    "s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003",
    "\u0002\u0002\u0002\u0002y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002",
    "\u0002\u0002\u0002}\u0003\u0002\u0002\u0002\u0002\u007f\u0003\u0002",
    "\u0002\u0002\u0002\u0081\u0003\u0002\u0002\u0002\u0002\u0083\u0003\u0002",
    "\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0002\u0089\u0003\u0002",
    "\u0002\u0002\u0002\u008d\u0003\u0002\u0002\u0002\u0003\u008f\u0003\u0002",
    "\u0002\u0002\u0005\u0095\u0003\u0002\u0002\u0002\u0007\u009b\u0003\u0002",
    "\u0002\u0002\t\u00a0\u0003\u0002\u0002\u0002\u000b\u00a4\u0003\u0002",
    "\u0002\u0002\r\u00aa\u0003\u0002\u0002\u0002\u000f\u00af\u0003\u0002",
    "\u0002\u0002\u0011\u00b6\u0003\u0002\u0002\u0002\u0013\u00b9\u0003\u0002",
    "\u0002\u0002\u0015\u00be\u0003\u0002\u0002\u0002\u0017\u00c2\u0003\u0002",
    "\u0002\u0002\u0019\u00c8\u0003\u0002\u0002\u0002\u001b\u00d0\u0003\u0002",
    "\u0002\u0002\u001d\u00d6\u0003\u0002\u0002\u0002\u001f\u00dd\u0003\u0002",
    "\u0002\u0002!\u00e2\u0003\u0002\u0002\u0002#\u00e8\u0003\u0002\u0002",
    "\u0002%\u00eb\u0003\u0002\u0002\u0002\'\u00ef\u0003\u0002\u0002\u0002",
    ")\u00f4\u0003\u0002\u0002\u0002+\u00fa\u0003\u0002\u0002\u0002-\u00ff",
    "\u0003\u0002\u0002\u0002/\u0101\u0003\u0002\u0002\u00021\u0103\u0003",
    "\u0002\u0002\u00023\u0105\u0003\u0002\u0002\u00025\u0107\u0003\u0002",
    "\u0002\u00027\u0109\u0003\u0002\u0002\u00029\u010b\u0003\u0002\u0002",
    "\u0002;\u010e\u0003\u0002\u0002\u0002=\u0110\u0003\u0002\u0002\u0002",
    "?\u0112\u0003\u0002\u0002\u0002A\u0114\u0003\u0002\u0002\u0002C\u0116",
    "\u0003\u0002\u0002\u0002E\u0118\u0003\u0002\u0002\u0002G\u011a\u0003",
    "\u0002\u0002\u0002I\u011c\u0003\u0002\u0002\u0002K\u011e\u0003\u0002",
    "\u0002\u0002M\u0120\u0003\u0002\u0002\u0002O\u0122\u0003\u0002\u0002",
    "\u0002Q\u0124\u0003\u0002\u0002\u0002S\u0126\u0003\u0002\u0002\u0002",
    "U\u0128\u0003\u0002\u0002\u0002W\u012a\u0003\u0002\u0002\u0002Y\u012c",
    "\u0003\u0002\u0002\u0002[\u012e\u0003\u0002\u0002\u0002]\u0130\u0003",
    "\u0002\u0002\u0002_\u0132\u0003\u0002\u0002\u0002a\u0134\u0003\u0002",
    "\u0002\u0002c\u0137\u0003\u0002\u0002\u0002e\u013a\u0003\u0002\u0002",
    "\u0002g\u013c\u0003\u0002\u0002\u0002i\u013f\u0003\u0002\u0002\u0002",
    "k\u0141\u0003\u0002\u0002\u0002m\u0144\u0003\u0002\u0002\u0002o\u0147",
    "\u0003\u0002\u0002\u0002q\u014a\u0003\u0002\u0002\u0002s\u014d\u0003",
    "\u0002\u0002\u0002u\u0150\u0003\u0002\u0002\u0002w\u016f\u0003\u0002",
    "\u0002\u0002y\u0171\u0003\u0002\u0002\u0002{\u0174\u0003\u0002\u0002",
    "\u0002}\u017b\u0003\u0002\u0002\u0002\u007f\u0189\u0003\u0002\u0002",
    "\u0002\u0081\u018b\u0003\u0002\u0002\u0002\u0083\u018d\u0003\u0002\u0002",
    "\u0002\u0085\u01a4\u0003\u0002\u0002\u0002\u0087\u01a6\u0003\u0002\u0002",
    "\u0002\u0089\u01b6\u0003\u0002\u0002\u0002\u008b\u01c6\u0003\u0002\u0002",
    "\u0002\u008d\u01d3\u0003\u0002\u0002\u0002\u008f\u0090\u0007e\u0002",
    "\u0002\u0090\u0091\u0007n\u0002\u0002\u0091\u0092\u0007c\u0002\u0002",
    "\u0092\u0093\u0007u\u0002\u0002\u0093\u0094\u0007u\u0002\u0002\u0094",
    "\u0004\u0003\u0002\u0002\u0002\u0095\u0096\u0007e\u0002\u0002\u0096",
    "\u0097\u0007q\u0002\u0002\u0097\u0098\u0007p\u0002\u0002\u0098\u0099",
    "\u0007u\u0002\u0002\u0099\u009a\u0007v\u0002\u0002\u009a\u0006\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007e\u0002\u0002\u009c\u009d\u0007",
    "j\u0002\u0002\u009d\u009e\u0007c\u0002\u0002\u009e\u009f\u0007t\u0002",
    "\u0002\u009f\b\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007k\u0002\u0002",
    "\u00a1\u00a2\u0007p\u0002\u0002\u00a2\u00a3\u0007v\u0002\u0002\u00a3",
    "\n\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007h\u0002\u0002\u00a5\u00a6",
    "\u0007n\u0002\u0002\u00a6\u00a7\u0007q\u0002\u0002\u00a7\u00a8\u0007",
    "c\u0002\u0002\u00a8\u00a9\u0007v\u0002\u0002\u00a9\f\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0007d\u0002\u0002\u00ab\u00ac\u0007q\u0002\u0002",
    "\u00ac\u00ad\u0007q\u0002\u0002\u00ad\u00ae\u0007n\u0002\u0002\u00ae",
    "\u000e\u0003\u0002\u0002\u0002\u00af\u00b0\u0007u\u0002\u0002\u00b0",
    "\u00b1\u0007v\u0002\u0002\u00b1\u00b2\u0007t\u0002\u0002\u00b2\u00b3",
    "\u0007k\u0002\u0002\u00b3\u00b4\u0007p\u0002\u0002\u00b4\u00b5\u0007",
    "i\u0002\u0002\u00b5\u0010\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007",
    "k\u0002\u0002\u00b7\u00b8\u0007h\u0002\u0002\u00b8\u0012\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0007g\u0002\u0002\u00ba\u00bb\u0007n\u0002",
    "\u0002\u00bb\u00bc\u0007u\u0002\u0002\u00bc\u00bd\u0007g\u0002\u0002",
    "\u00bd\u0014\u0003\u0002\u0002\u0002\u00be\u00bf\u0007h\u0002\u0002",
    "\u00bf\u00c0\u0007q\u0002\u0002\u00c0\u00c1\u0007t\u0002\u0002\u00c1",
    "\u0016\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007y\u0002\u0002\u00c3",
    "\u00c4\u0007j\u0002\u0002\u00c4\u00c5\u0007k\u0002\u0002\u00c5\u00c6",
    "\u0007n\u0002\u0002\u00c6\u00c7\u0007g\u0002\u0002\u00c7\u0018\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0007h\u0002\u0002\u00c9\u00ca\u0007",
    "q\u0002\u0002\u00ca\u00cb\u0007t\u0002\u0002\u00cb\u00cc\u0007g\u0002",
    "\u0002\u00cc\u00cd\u0007c\u0002\u0002\u00cd\u00ce\u0007e\u0002\u0002",
    "\u00ce\u00cf\u0007j\u0002\u0002\u00cf\u001a\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0007d\u0002\u0002\u00d1\u00d2\u0007t\u0002\u0002\u00d2",
    "\u00d3\u0007g\u0002\u0002\u00d3\u00d4\u0007c\u0002\u0002\u00d4\u00d5",
    "\u0007m\u0002\u0002\u00d5\u001c\u0003\u0002\u0002\u0002\u00d6\u00d7",
    "\u0007t\u0002\u0002\u00d7\u00d8\u0007g\u0002\u0002\u00d8\u00d9\u0007",
    "v\u0002\u0002\u00d9\u00da\u0007w\u0002\u0002\u00da\u00db\u0007t\u0002",
    "\u0002\u00db\u00dc\u0007p\u0002\u0002\u00dc\u001e\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0007t\u0002\u0002\u00de\u00df\u0007g\u0002\u0002",
    "\u00df\u00e0\u0007c\u0002\u0002\u00e0\u00e1\u0007f\u0002\u0002\u00e1",
    " \u0003\u0002\u0002\u0002\u00e2\u00e3\u0007y\u0002\u0002\u00e3\u00e4",
    "\u0007t\u0002\u0002\u00e4\u00e5\u0007k\u0002\u0002\u00e5\u00e6\u0007",
    "v\u0002\u0002\u00e6\u00e7\u0007g\u0002\u0002\u00e7\"\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\u0007k\u0002\u0002\u00e9\u00ea\u0007p\u0002\u0002",
    "\u00ea$\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007p\u0002\u0002\u00ec",
    "\u00ed\u0007g\u0002\u0002\u00ed\u00ee\u0007y\u0002\u0002\u00ee&\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\u0007v\u0002\u0002\u00f0\u00f1\u0007",
    "t\u0002\u0002\u00f1\u00f2\u0007w\u0002\u0002\u00f2\u00f3\u0007g\u0002",
    "\u0002\u00f3(\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007h\u0002\u0002",
    "\u00f5\u00f6\u0007c\u0002\u0002\u00f6\u00f7\u0007n\u0002\u0002\u00f7",
    "\u00f8\u0007u\u0002\u0002\u00f8\u00f9\u0007g\u0002\u0002\u00f9*\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\u0007x\u0002\u0002\u00fb\u00fc\u0007",
    "q\u0002\u0002\u00fc\u00fd\u0007k\u0002\u0002\u00fd\u00fe\u0007f\u0002",
    "\u0002\u00fe,\u0003\u0002\u0002\u0002\u00ff\u0100\u0007+\u0002\u0002",
    "\u0100.\u0003\u0002\u0002\u0002\u0101\u0102\u0007*\u0002\u0002\u0102",
    "0\u0003\u0002\u0002\u0002\u0103\u0104\u0007_\u0002\u0002\u01042\u0003",
    "\u0002\u0002\u0002\u0105\u0106\u0007]\u0002\u0002\u01064\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0007\u007f\u0002\u0002\u01086\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0007}\u0002\u0002\u010a8\u0003\u0002\u0002",
    "\u0002\u010b\u010c\u0007\u00c4\u0002\u0002\u010c\u010d\u0007\u00a3\u0002",
    "\u0002\u010d:\u0003\u0002\u0002\u0002\u010e\u010f\u0007#\u0002\u0002",
    "\u010f<\u0003\u0002\u0002\u0002\u0110\u0111\u0007$\u0002\u0002\u0111",
    ">\u0003\u0002\u0002\u0002\u0112\u0113\u0007%\u0002\u0002\u0113@\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0007&\u0002\u0002\u0115B\u0003\u0002",
    "\u0002\u0002\u0116\u0117\u0007(\u0002\u0002\u0117D\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0007)\u0002\u0002\u0119F\u0003\u0002\u0002\u0002",
    "\u011a\u011b\u0007.\u0002\u0002\u011bH\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u00070\u0002\u0002\u011dJ\u0003\u0002\u0002\u0002\u011e\u011f",
    "\u0007<\u0002\u0002\u011fL\u0003\u0002\u0002\u0002\u0120\u0121\u0007",
    "=\u0002\u0002\u0121N\u0003\u0002\u0002\u0002\u0122\u0123\u0007A\u0002",
    "\u0002\u0123P\u0003\u0002\u0002\u0002\u0124\u0125\u0007B\u0002\u0002",
    "\u0125R\u0003\u0002\u0002\u0002\u0126\u0127\u0007a\u0002\u0002\u0127",
    "T\u0003\u0002\u0002\u0002\u0128\u0129\u0007-\u0002\u0002\u0129V\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u0007/\u0002\u0002\u012bX\u0003\u0002",
    "\u0002\u0002\u012c\u012d\u0007,\u0002\u0002\u012dZ\u0003\u0002\u0002",
    "\u0002\u012e\u012f\u00071\u0002\u0002\u012f\\\u0003\u0002\u0002\u0002",
    "\u0130\u0131\u0007\'\u0002\u0002\u0131^\u0003\u0002\u0002\u0002\u0132",
    "\u0133\u0007?\u0002\u0002\u0133`\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0007?\u0002\u0002\u0135\u0136\u0007?\u0002\u0002\u0136b\u0003\u0002",
    "\u0002\u0002\u0137\u0138\u0007#\u0002\u0002\u0138\u0139\u0007?\u0002",
    "\u0002\u0139d\u0003\u0002\u0002\u0002\u013a\u013b\u0007@\u0002\u0002",
    "\u013bf\u0003\u0002\u0002\u0002\u013c\u013d\u0007@\u0002\u0002\u013d",
    "\u013e\u0007?\u0002\u0002\u013eh\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0007>\u0002\u0002\u0140j\u0003\u0002\u0002\u0002\u0141\u0142\u0007",
    ">\u0002\u0002\u0142\u0143\u0007?\u0002\u0002\u0143l\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u0007(\u0002\u0002\u0145\u0146\u0007(\u0002\u0002",
    "\u0146n\u0003\u0002\u0002\u0002\u0147\u0148\u0007~\u0002\u0002\u0148",
    "\u0149\u0007~\u0002\u0002\u0149p\u0003\u0002\u0002\u0002\u014a\u014b",
    "\u0007-\u0002\u0002\u014b\u014c\u0007-\u0002\u0002\u014cr\u0003\u0002",
    "\u0002\u0002\u014d\u014e\u0007/\u0002\u0002\u014e\u014f\u0007/\u0002",
    "\u0002\u014ft\u0003\u0002\u0002\u0002\u0150\u0156\u0005\u0081A\u0002",
    "\u0151\u0155\u0005\u0081A\u0002\u0152\u0155\u0005\u0083B\u0002\u0153",
    "\u0155\u0005S*\u0002\u0154\u0151\u0003\u0002\u0002\u0002\u0154\u0152",
    "\u0003\u0002\u0002\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0155\u0158",
    "\u0003\u0002\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0156\u0157",
    "\u0003\u0002\u0002\u0002\u0157v\u0003\u0002\u0002\u0002\u0158\u0156",
    "\u0003\u0002\u0002\u0002\u0159\u015d\u0005\u0083B\u0002\u015a\u015c",
    "\u0005\u0083B\u0002\u015b\u015a\u0003\u0002\u0002\u0002\u015c\u015f",
    "\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015d\u015e",
    "\u0003\u0002\u0002\u0002\u015e\u0170\u0003\u0002\u0002\u0002\u015f\u015d",
    "\u0003\u0002\u0002\u0002\u0160\u0164\u0005\u0083B\u0002\u0161\u0163",
    "\u0005\u0083B\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163\u0166",
    "\u0003\u0002\u0002\u0002\u0164\u0162\u0003\u0002\u0002\u0002\u0164\u0165",
    "\u0003\u0002\u0002\u0002\u0165\u0167\u0003\u0002\u0002\u0002\u0166\u0164",
    "\u0003\u0002\u0002\u0002\u0167\u0168\u0005I%\u0002\u0168\u016c\u0005",
    "\u0083B\u0002\u0169\u016b\u0005\u0083B\u0002\u016a\u0169\u0003\u0002",
    "\u0002\u0002\u016b\u016e\u0003\u0002\u0002\u0002\u016c\u016a\u0003\u0002",
    "\u0002\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u0170\u0003\u0002",
    "\u0002\u0002\u016e\u016c\u0003\u0002\u0002\u0002\u016f\u0159\u0003\u0002",
    "\u0002\u0002\u016f\u0160\u0003\u0002\u0002\u0002\u0170x\u0003\u0002",
    "\u0002\u0002\u0171\u0172\u00053\u001a\u0002\u0172\u0173\u00051\u0019",
    "\u0002\u0173z\u0003\u0002\u0002\u0002\u0174\u0177\u0005E#\u0002\u0175",
    "\u0178\u0005\u007f@\u0002\u0176\u0178\t\u0002\u0002\u0002\u0177\u0175",
    "\u0003\u0002\u0002\u0002\u0177\u0176\u0003\u0002\u0002\u0002\u0178\u0179",
    "\u0003\u0002\u0002\u0002\u0179\u017a\u0005E#\u0002\u017a|\u0003\u0002",
    "\u0002\u0002\u017b\u0181\u0005=\u001f\u0002\u017c\u0180\u0005\u0081",
    "A\u0002\u017d\u0180\u0005\u0083B\u0002\u017e\u0180\u0005\u007f@\u0002",
    "\u017f\u017c\u0003\u0002\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002",
    "\u017f\u017e\u0003\u0002\u0002\u0002\u0180\u0183\u0003\u0002\u0002\u0002",
    "\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002\u0002",
    "\u0182\u0184\u0003\u0002\u0002\u0002\u0183\u0181\u0003\u0002\u0002\u0002",
    "\u0184\u0185\u0005=\u001f\u0002\u0185~\u0003\u0002\u0002\u0002\u0186",
    "\u018a\u0005\u0081A\u0002\u0187\u018a\u0005\u0083B\u0002\u0188\u018a",
    "\u0005\u0085C\u0002\u0189\u0186\u0003\u0002\u0002\u0002\u0189\u0187",
    "\u0003\u0002\u0002\u0002\u0189\u0188\u0003\u0002\u0002\u0002\u018a\u0080",
    "\u0003\u0002\u0002\u0002\u018b\u018c\t\u0003\u0002\u0002\u018c\u0082",
    "\u0003\u0002\u0002\u0002\u018d\u018e\u00042;\u0002\u018e\u0084\u0003",
    "\u0002\u0002\u0002\u018f\u01a5\u0005;\u001e\u0002\u0190\u01a5\u0005",
    "=\u001f\u0002\u0191\u01a5\u0005? \u0002\u0192\u01a5\u0005A!\u0002\u0193",
    "\u01a5\u0005]/\u0002\u0194\u01a5\u0005C\"\u0002\u0195\u01a5\u0005E#",
    "\u0002\u0196\u01a5\u0005/\u0018\u0002\u0197\u01a5\u0005-\u0017\u0002",
    "\u0198\u01a5\u0005Y-\u0002\u0199\u01a5\u0005U+\u0002\u019a\u01a5\u0005",
    "W,\u0002\u019b\u01a5\u0005I%\u0002\u019c\u01a5\u0005[.\u0002\u019d\u01a5",
    "\u0005K&\u0002\u019e\u01a5\u0005M\'\u0002\u019f\u01a5\u0005i5\u0002",
    "\u01a0\u01a5\u0005_0\u0002\u01a1\u01a5\u0005e3\u0002\u01a2\u01a5\u0005",
    "O(\u0002\u01a3\u01a5\u0005Q)\u0002\u01a4\u018f\u0003\u0002\u0002\u0002",
    "\u01a4\u0190\u0003\u0002\u0002\u0002\u01a4\u0191\u0003\u0002\u0002\u0002",
    "\u01a4\u0192\u0003\u0002\u0002\u0002\u01a4\u0193\u0003\u0002\u0002\u0002",
    "\u01a4\u0194\u0003\u0002\u0002\u0002\u01a4\u0195\u0003\u0002\u0002\u0002",
    "\u01a4\u0196\u0003\u0002\u0002\u0002\u01a4\u0197\u0003\u0002\u0002\u0002",
    "\u01a4\u0198\u0003\u0002\u0002\u0002\u01a4\u0199\u0003\u0002\u0002\u0002",
    "\u01a4\u019a\u0003\u0002\u0002\u0002\u01a4\u019b\u0003\u0002\u0002\u0002",
    "\u01a4\u019c\u0003\u0002\u0002\u0002\u01a4\u019d\u0003\u0002\u0002\u0002",
    "\u01a4\u019e\u0003\u0002\u0002\u0002\u01a4\u019f\u0003\u0002\u0002\u0002",
    "\u01a4\u01a0\u0003\u0002\u0002\u0002\u01a4\u01a1\u0003\u0002\u0002\u0002",
    "\u01a4\u01a2\u0003\u0002\u0002\u0002\u01a4\u01a3\u0003\u0002\u0002\u0002",
    "\u01a5\u0086\u0003\u0002\u0002\u0002\u01a6\u01a7\u00071\u0002\u0002",
    "\u01a7\u01a8\u00071\u0002\u0002\u01a8\u01ac\u0003\u0002\u0002\u0002",
    "\u01a9\u01ab\u000b\u0002\u0002\u0002\u01aa\u01a9\u0003\u0002\u0002\u0002",
    "\u01ab\u01ae\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003\u0002\u0002\u0002",
    "\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ad\u01b0\u0003\u0002\u0002\u0002",
    "\u01ae\u01ac\u0003\u0002\u0002\u0002\u01af\u01b1\u0007\u000f\u0002\u0002",
    "\u01b0\u01af\u0003\u0002\u0002\u0002\u01b0\u01b1\u0003\u0002\u0002\u0002",
    "\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007\f\u0002\u0002",
    "\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4\u01b5\bD\u0002\u0002\u01b5",
    "\u0088\u0003\u0002\u0002\u0002\u01b6\u01b7\u00071\u0002\u0002\u01b7",
    "\u01b8\u0007,\u0002\u0002\u01b8\u01be\u0003\u0002\u0002\u0002\u01b9",
    "\u01bd\u0005\u0089E\u0002\u01ba\u01bd\u0005\u008bF\u0002\u01bb\u01bd",
    "\u000b\u0002\u0002\u0002\u01bc\u01b9\u0003\u0002\u0002\u0002\u01bc\u01ba",
    "\u0003\u0002\u0002\u0002\u01bc\u01bb\u0003\u0002\u0002\u0002\u01bd\u01c0",
    "\u0003\u0002\u0002\u0002\u01be\u01bf\u0003\u0002\u0002\u0002\u01be\u01bc",
    "\u0003\u0002\u0002\u0002\u01bf\u01c1\u0003\u0002\u0002\u0002\u01c0\u01be",
    "\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007,\u0002\u0002\u01c2\u01c3",
    "\u00071\u0002\u0002\u01c3\u01c4\u0003\u0002\u0002\u0002\u01c4\u01c5",
    "\bE\u0002\u0002\u01c5\u008a\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007",
    "1\u0002\u0002\u01c7\u01c8\u0007,\u0002\u0002\u01c8\u01cc\u0003\u0002",
    "\u0002\u0002\u01c9\u01cb\u000b\u0002\u0002\u0002\u01ca\u01c9\u0003\u0002",
    "\u0002\u0002\u01cb\u01ce\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003\u0002",
    "\u0002\u0002\u01cc\u01ca\u0003\u0002\u0002\u0002\u01cd\u01cf\u0003\u0002",
    "\u0002\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002\u01cf\u01d0\u0007,",
    "\u0002\u0002\u01d0\u01d1\u00071\u0002\u0002\u01d1\u008c\u0003\u0002",
    "\u0002\u0002\u01d2\u01d4\t\u0004\u0002\u0002\u01d3\u01d2\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d5\u01d3\u0003\u0002",
    "\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002\u0002\u01d6\u01d7\u0003\u0002",
    "\u0002\u0002\u01d7\u01d8\bG\u0002\u0002\u01d8\u008e\u0003\u0002\u0002",
    "\u0002\u0014\u0002\u0154\u0156\u015d\u0164\u016c\u016f\u0177\u017f\u0181",
    "\u0189\u01a4\u01ac\u01b0\u01bc\u01be\u01cc\u01d5\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ScannerMiniCSharp(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ScannerMiniCSharp.prototype = Object.create(antlr4.Lexer.prototype);
ScannerMiniCSharp.prototype.constructor = ScannerMiniCSharp;

ScannerMiniCSharp.EOF = antlr4.Token.EOF;
ScannerMiniCSharp.CLASS = 1;
ScannerMiniCSharp.CONST = 2;
ScannerMiniCSharp.CHAR = 3;
ScannerMiniCSharp.INT = 4;
ScannerMiniCSharp.FLOAT = 5;
ScannerMiniCSharp.BOOL = 6;
ScannerMiniCSharp.STRING = 7;
ScannerMiniCSharp.IF = 8;
ScannerMiniCSharp.ELSE = 9;
ScannerMiniCSharp.FOR = 10;
ScannerMiniCSharp.WHILE = 11;
ScannerMiniCSharp.FOREACH = 12;
ScannerMiniCSharp.BREAK = 13;
ScannerMiniCSharp.RETURN = 14;
ScannerMiniCSharp.READ = 15;
ScannerMiniCSharp.WRITE = 16;
ScannerMiniCSharp.IN = 17;
ScannerMiniCSharp.NEW = 18;
ScannerMiniCSharp.TRUE = 19;
ScannerMiniCSharp.FALSE = 20;
ScannerMiniCSharp.VOID = 21;
ScannerMiniCSharp.RIGHT_PARENTHESIS = 22;
ScannerMiniCSharp.LEFT_PARENTHESIS = 23;
ScannerMiniCSharp.RIGHT_SQUARE_BRACKET = 24;
ScannerMiniCSharp.LEFT_SQUARE_BRACKET = 25;
ScannerMiniCSharp.RIGHT_CURLY_BRACKET = 26;
ScannerMiniCSharp.LEFT_CURLY_BRACKET = 27;
ScannerMiniCSharp.EXCLAMATION_UP = 28;
ScannerMiniCSharp.EXCLAMATION_DOWN = 29;
ScannerMiniCSharp.DOUBLE_QUOTATION_MARKS = 30;
ScannerMiniCSharp.NUMBER_SIGN = 31;
ScannerMiniCSharp.DOLLAR_SIGN = 32;
ScannerMiniCSharp.AMPERSAND = 33;
ScannerMiniCSharp.QUOTATION_MARKS = 34;
ScannerMiniCSharp.COMMA = 35;
ScannerMiniCSharp.DOT = 36;
ScannerMiniCSharp.COLON = 37;
ScannerMiniCSharp.SEMICOLON = 38;
ScannerMiniCSharp.QUESTION_SIGN = 39;
ScannerMiniCSharp.AT = 40;
ScannerMiniCSharp.UNDERSCORE = 41;
ScannerMiniCSharp.SUM = 42;
ScannerMiniCSharp.SUBTRACTION = 43;
ScannerMiniCSharp.MULTIPLICATION = 44;
ScannerMiniCSharp.DIVISION = 45;
ScannerMiniCSharp.PERCENTAGE = 46;
ScannerMiniCSharp.ASIGN = 47;
ScannerMiniCSharp.EQUAL_EQUAL = 48;
ScannerMiniCSharp.INEQUALITY = 49;
ScannerMiniCSharp.GREATER_THAN = 50;
ScannerMiniCSharp.GREATER_THAN_OR_EQUAL = 51;
ScannerMiniCSharp.LESS_THAN = 52;
ScannerMiniCSharp.LESS_THAN_OR_EQUAL = 53;
ScannerMiniCSharp.AND = 54;
ScannerMiniCSharp.OR = 55;
ScannerMiniCSharp.PLUS_PLUS = 56;
ScannerMiniCSharp.MINUS_MINUS = 57;
ScannerMiniCSharp.IDENT = 58;
ScannerMiniCSharp.NUMBER = 59;
ScannerMiniCSharp.LIST = 60;
ScannerMiniCSharp.CHAR_CONST = 61;
ScannerMiniCSharp.STRING_CONST = 62;
ScannerMiniCSharp.PRINTABLE_CHAR = 63;
ScannerMiniCSharp.LETTER = 64;
ScannerMiniCSharp.DIGIT = 65;
ScannerMiniCSharp.LINE_COMMENT = 66;
ScannerMiniCSharp.SPECIAL_COMMENT = 67;
ScannerMiniCSharp.WS = 68;

ScannerMiniCSharp.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ScannerMiniCSharp.prototype.modeNames = [ "DEFAULT_MODE" ];

ScannerMiniCSharp.prototype.literalNames = [ null, "'class'", "'const'", 
                                             "'char'", "'int'", "'float'", 
                                             "'bool'", "'string'", "'if'", 
                                             "'else'", "'for'", "'while'", 
                                             "'foreach'", "'break'", "'return'", 
                                             "'read'", "'write'", "'in'", 
                                             "'new'", "'true'", "'false'", 
                                             "'void'", "')'", "'('", "']'", 
                                             "'['", "'}'", "'{'", "'\u00C2\u00A1'", 
                                             "'!'", "'\"'", "'#'", "'$'", 
                                             "'&'", "'''", "','", "'.'", 
                                             "':'", "';'", "'?'", "'@'", 
                                             "'_'", "'+'", "'-'", "'*'", 
                                             "'/'", "'%'", "'='", "'=='", 
                                             "'!='", "'>'", "'>='", "'<'", 
                                             "'<='", "'&&'", "'||'", "'++'", 
                                             "'--'" ];

ScannerMiniCSharp.prototype.symbolicNames = [ null, "CLASS", "CONST", "CHAR", 
                                              "INT", "FLOAT", "BOOL", "STRING", 
                                              "IF", "ELSE", "FOR", "WHILE", 
                                              "FOREACH", "BREAK", "RETURN", 
                                              "READ", "WRITE", "IN", "NEW", 
                                              "TRUE", "FALSE", "VOID", "RIGHT_PARENTHESIS", 
                                              "LEFT_PARENTHESIS", "RIGHT_SQUARE_BRACKET", 
                                              "LEFT_SQUARE_BRACKET", "RIGHT_CURLY_BRACKET", 
                                              "LEFT_CURLY_BRACKET", "EXCLAMATION_UP", 
                                              "EXCLAMATION_DOWN", "DOUBLE_QUOTATION_MARKS", 
                                              "NUMBER_SIGN", "DOLLAR_SIGN", 
                                              "AMPERSAND", "QUOTATION_MARKS", 
                                              "COMMA", "DOT", "COLON", "SEMICOLON", 
                                              "QUESTION_SIGN", "AT", "UNDERSCORE", 
                                              "SUM", "SUBTRACTION", "MULTIPLICATION", 
                                              "DIVISION", "PERCENTAGE", 
                                              "ASIGN", "EQUAL_EQUAL", "INEQUALITY", 
                                              "GREATER_THAN", "GREATER_THAN_OR_EQUAL", 
                                              "LESS_THAN", "LESS_THAN_OR_EQUAL", 
                                              "AND", "OR", "PLUS_PLUS", 
                                              "MINUS_MINUS", "IDENT", "NUMBER", 
                                              "LIST", "CHAR_CONST", "STRING_CONST", 
                                              "PRINTABLE_CHAR", "LETTER", 
                                              "DIGIT", "LINE_COMMENT", "SPECIAL_COMMENT", 
                                              "WS" ];

ScannerMiniCSharp.prototype.ruleNames = [ "CLASS", "CONST", "CHAR", "INT", 
                                          "FLOAT", "BOOL", "STRING", "IF", 
                                          "ELSE", "FOR", "WHILE", "FOREACH", 
                                          "BREAK", "RETURN", "READ", "WRITE", 
                                          "IN", "NEW", "TRUE", "FALSE", 
                                          "VOID", "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
                                          "RIGHT_SQUARE_BRACKET", "LEFT_SQUARE_BRACKET", 
                                          "RIGHT_CURLY_BRACKET", "LEFT_CURLY_BRACKET", 
                                          "EXCLAMATION_UP", "EXCLAMATION_DOWN", 
                                          "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", 
                                          "DOLLAR_SIGN", "AMPERSAND", "QUOTATION_MARKS", 
                                          "COMMA", "DOT", "COLON", "SEMICOLON", 
                                          "QUESTION_SIGN", "AT", "UNDERSCORE", 
                                          "SUM", "SUBTRACTION", "MULTIPLICATION", 
                                          "DIVISION", "PERCENTAGE", "ASIGN", 
                                          "EQUAL_EQUAL", "INEQUALITY", "GREATER_THAN", 
                                          "GREATER_THAN_OR_EQUAL", "LESS_THAN", 
                                          "LESS_THAN_OR_EQUAL", "AND", "OR", 
                                          "PLUS_PLUS", "MINUS_MINUS", "IDENT", 
                                          "NUMBER", "LIST", "CHAR_CONST", 
                                          "STRING_CONST", "PRINTABLE_CHAR", 
                                          "LETTER", "DIGIT", "SPECIAL_CHARACTERS", 
                                          "LINE_COMMENT", "SPECIAL_COMMENT", 
                                          "DELIMITED_COMMENT", "WS" ];

ScannerMiniCSharp.prototype.grammarFileName = "ScannerMiniCSharp.g4";



exports.ScannerMiniCSharp = ScannerMiniCSharp;

