// Generated from C:/Users/josah/Documents/MiniCSharp\ScannerMiniCSharp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002D\u01d3\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
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
    "F\tF\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003",
    ",\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u00031\u0003",
    "1\u00032\u00032\u00032\u00033\u00033\u00033\u00034\u00034\u00035\u0003",
    "5\u00035\u00036\u00036\u00037\u00037\u00037\u00038\u00038\u00038\u0003",
    "9\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003;\u0003<\u0003<\u0003",
    "<\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003",
    "=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003",
    "=\u0003=\u0005=\u0167\n=\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003",
    ">\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003",
    ">\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0005",
    ">\u0183\n>\u0003?\u0003?\u0003?\u0003?\u0007?\u0189\n?\f?\u000e?\u018c",
    "\u000b?\u0003@\u0003@\u0007@\u0190\n@\f@\u000e@\u0193\u000b@\u0003A",
    "\u0003A\u0003A\u0005A\u0198\nA\u0003A\u0003A\u0003B\u0003B\u0003B\u0005",
    "B\u019f\nB\u0003C\u0003C\u0003C\u0003C\u0007C\u01a5\nC\fC\u000eC\u01a8",
    "\u000bC\u0003C\u0005C\u01ab\nC\u0003C\u0003C\u0003C\u0003C\u0003D\u0003",
    "D\u0003D\u0003D\u0003D\u0003D\u0007D\u01b7\nD\fD\u000eD\u01ba\u000b",
    "D\u0003D\u0003D\u0003D\u0003D\u0003D\u0003E\u0003E\u0003E\u0003E\u0007",
    "E\u01c5\nE\fE\u000eE\u01c8\u000bE\u0003E\u0003E\u0003E\u0003F\u0006",
    "F\u01ce\nF\rF\u000eF\u01cf\u0003F\u0003F\u0005\u01a6\u01b8\u01c6\u0002",
    "G\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'",
    "M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y\u0002{\u0002}>\u007f?",
    "\u0081@\u0083A\u0085B\u0087C\u0089\u0002\u008bD\u0003\u0002\u0005\u0004",
    "\u0002C\\c|\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002\u020a\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002",
    "\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002",
    "I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003",
    "\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002",
    "\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002",
    "\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002",
    "\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002",
    "_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003",
    "\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002",
    "\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002",
    "\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002",
    "\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002",
    "u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002}\u0003",
    "\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002\u0002\u0081\u0003",
    "\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002\u0002\u0085\u0003",
    "\u0002\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0002\u008b\u0003",
    "\u0002\u0002\u0002\u0003\u008d\u0003\u0002\u0002\u0002\u0005\u0092\u0003",
    "\u0002\u0002\u0002\u0007\u0096\u0003\u0002\u0002\u0002\t\u009c\u0003",
    "\u0002\u0002\u0002\u000b\u00a1\u0003\u0002\u0002\u0002\r\u00a8\u0003",
    "\u0002\u0002\u0002\u000f\u00ae\u0003\u0002\u0002\u0002\u0011\u00b4\u0003",
    "\u0002\u0002\u0002\u0013\u00ba\u0003\u0002\u0002\u0002\u0015\u00bf\u0003",
    "\u0002\u0002\u0002\u0017\u00c2\u0003\u0002\u0002\u0002\u0019\u00c6\u0003",
    "\u0002\u0002\u0002\u001b\u00cb\u0003\u0002\u0002\u0002\u001d\u00d2\u0003",
    "\u0002\u0002\u0002\u001f\u00d7\u0003\u0002\u0002\u0002!\u00dd\u0003",
    "\u0002\u0002\u0002#\u00e3\u0003\u0002\u0002\u0002%\u00eb\u0003\u0002",
    "\u0002\u0002\'\u00ef\u0003\u0002\u0002\u0002)\u00f4\u0003\u0002\u0002",
    "\u0002+\u00fa\u0003\u0002\u0002\u0002-\u00fc\u0003\u0002\u0002\u0002",
    "/\u00fe\u0003\u0002\u0002\u00021\u0101\u0003\u0002\u0002\u00023\u0103",
    "\u0003\u0002\u0002\u00025\u0105\u0003\u0002\u0002\u00027\u0107\u0003",
    "\u0002\u0002\u00029\u0109\u0003\u0002\u0002\u0002;\u010b\u0003\u0002",
    "\u0002\u0002=\u010d\u0003\u0002\u0002\u0002?\u010f\u0003\u0002\u0002",
    "\u0002A\u0111\u0003\u0002\u0002\u0002C\u0113\u0003\u0002\u0002\u0002",
    "E\u0115\u0003\u0002\u0002\u0002G\u0117\u0003\u0002\u0002\u0002I\u0119",
    "\u0003\u0002\u0002\u0002K\u011b\u0003\u0002\u0002\u0002M\u011d\u0003",
    "\u0002\u0002\u0002O\u011f\u0003\u0002\u0002\u0002Q\u0121\u0003\u0002",
    "\u0002\u0002S\u0123\u0003\u0002\u0002\u0002U\u0125\u0003\u0002\u0002",
    "\u0002W\u0127\u0003\u0002\u0002\u0002Y\u0129\u0003\u0002\u0002\u0002",
    "[\u012b\u0003\u0002\u0002\u0002]\u012d\u0003\u0002\u0002\u0002_\u012f",
    "\u0003\u0002\u0002\u0002a\u0131\u0003\u0002\u0002\u0002c\u0133\u0003",
    "\u0002\u0002\u0002e\u0136\u0003\u0002\u0002\u0002g\u0139\u0003\u0002",
    "\u0002\u0002i\u013b\u0003\u0002\u0002\u0002k\u013e\u0003\u0002\u0002",
    "\u0002m\u0140\u0003\u0002\u0002\u0002o\u0143\u0003\u0002\u0002\u0002",
    "q\u0146\u0003\u0002\u0002\u0002s\u0149\u0003\u0002\u0002\u0002u\u014b",
    "\u0003\u0002\u0002\u0002w\u014e\u0003\u0002\u0002\u0002y\u0166\u0003",
    "\u0002\u0002\u0002{\u0182\u0003\u0002\u0002\u0002}\u0184\u0003\u0002",
    "\u0002\u0002\u007f\u018d\u0003\u0002\u0002\u0002\u0081\u0194\u0003\u0002",
    "\u0002\u0002\u0083\u019e\u0003\u0002\u0002\u0002\u0085\u01a0\u0003\u0002",
    "\u0002\u0002\u0087\u01b0\u0003\u0002\u0002\u0002\u0089\u01c0\u0003\u0002",
    "\u0002\u0002\u008b\u01cd\u0003\u0002\u0002\u0002\u008d\u008e\u0007e",
    "\u0002\u0002\u008e\u008f\u0007j\u0002\u0002\u008f\u0090\u0007c\u0002",
    "\u0002\u0090\u0091\u0007t\u0002\u0002\u0091\u0004\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0007k\u0002\u0002\u0093\u0094\u0007p\u0002\u0002",
    "\u0094\u0095\u0007v\u0002\u0002\u0095\u0006\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0007h\u0002\u0002\u0097\u0098\u0007n\u0002\u0002\u0098",
    "\u0099\u0007q\u0002\u0002\u0099\u009a\u0007c\u0002\u0002\u009a\u009b",
    "\u0007v\u0002\u0002\u009b\b\u0003\u0002\u0002\u0002\u009c\u009d\u0007",
    "d\u0002\u0002\u009d\u009e\u0007q\u0002\u0002\u009e\u009f\u0007q\u0002",
    "\u0002\u009f\u00a0\u0007n\u0002\u0002\u00a0\n\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0007u\u0002\u0002\u00a2\u00a3\u0007v\u0002\u0002\u00a3",
    "\u00a4\u0007t\u0002\u0002\u00a4\u00a5\u0007k\u0002\u0002\u00a5\u00a6",
    "\u0007p\u0002\u0002\u00a6\u00a7\u0007i\u0002\u0002\u00a7\f\u0003\u0002",
    "\u0002\u0002\u00a8\u00a9\u0007d\u0002\u0002\u00a9\u00aa\u0007t\u0002",
    "\u0002\u00aa\u00ab\u0007g\u0002\u0002\u00ab\u00ac\u0007c\u0002\u0002",
    "\u00ac\u00ad\u0007m\u0002\u0002\u00ad\u000e\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0007e\u0002\u0002\u00af\u00b0\u0007n\u0002\u0002\u00b0",
    "\u00b1\u0007c\u0002\u0002\u00b1\u00b2\u0007u\u0002\u0002\u00b2\u00b3",
    "\u0007u\u0002\u0002\u00b3\u0010\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0007e\u0002\u0002\u00b5\u00b6\u0007q\u0002\u0002\u00b6\u00b7\u0007",
    "p\u0002\u0002\u00b7\u00b8\u0007u\u0002\u0002\u00b8\u00b9\u0007v\u0002",
    "\u0002\u00b9\u0012\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007g\u0002",
    "\u0002\u00bb\u00bc\u0007n\u0002\u0002\u00bc\u00bd\u0007u\u0002\u0002",
    "\u00bd\u00be\u0007g\u0002\u0002\u00be\u0014\u0003\u0002\u0002\u0002",
    "\u00bf\u00c0\u0007k\u0002\u0002\u00c0\u00c1\u0007h\u0002\u0002\u00c1",
    "\u0016\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007p\u0002\u0002\u00c3",
    "\u00c4\u0007g\u0002\u0002\u00c4\u00c5\u0007y\u0002\u0002\u00c5\u0018",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007t\u0002\u0002\u00c7\u00c8",
    "\u0007g\u0002\u0002\u00c8\u00c9\u0007c\u0002\u0002\u00c9\u00ca\u0007",
    "f\u0002\u0002\u00ca\u001a\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007",
    "t\u0002\u0002\u00cc\u00cd\u0007g\u0002\u0002\u00cd\u00ce\u0007v\u0002",
    "\u0002\u00ce\u00cf\u0007w\u0002\u0002\u00cf\u00d0\u0007t\u0002\u0002",
    "\u00d0\u00d1\u0007p\u0002\u0002\u00d1\u001c\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\u0007x\u0002\u0002\u00d3\u00d4\u0007q\u0002\u0002\u00d4",
    "\u00d5\u0007k\u0002\u0002\u00d5\u00d6\u0007f\u0002\u0002\u00d6\u001e",
    "\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007y\u0002\u0002\u00d8\u00d9",
    "\u0007j\u0002\u0002\u00d9\u00da\u0007k\u0002\u0002\u00da\u00db\u0007",
    "n\u0002\u0002\u00db\u00dc\u0007g\u0002\u0002\u00dc \u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0007y\u0002\u0002\u00de\u00df\u0007t\u0002\u0002",
    "\u00df\u00e0\u0007k\u0002\u0002\u00e0\u00e1\u0007v\u0002\u0002\u00e1",
    "\u00e2\u0007g\u0002\u0002\u00e2\"\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0007h\u0002\u0002\u00e4\u00e5\u0007q\u0002\u0002\u00e5\u00e6\u0007",
    "t\u0002\u0002\u00e6\u00e7\u0007g\u0002\u0002\u00e7\u00e8\u0007c\u0002",
    "\u0002\u00e8\u00e9\u0007e\u0002\u0002\u00e9\u00ea\u0007j\u0002\u0002",
    "\u00ea$\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007h\u0002\u0002\u00ec",
    "\u00ed\u0007q\u0002\u0002\u00ed\u00ee\u0007t\u0002\u0002\u00ee&\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\u0007v\u0002\u0002\u00f0\u00f1\u0007",
    "t\u0002\u0002\u00f1\u00f2\u0007w\u0002\u0002\u00f2\u00f3\u0007g\u0002",
    "\u0002\u00f3(\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007h\u0002\u0002",
    "\u00f5\u00f6\u0007c\u0002\u0002\u00f6\u00f7\u0007n\u0002\u0002\u00f7",
    "\u00f8\u0007u\u0002\u0002\u00f8\u00f9\u0007g\u0002\u0002\u00f9*\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\t\u0002\u0002\u0002\u00fb,\u0003\u0002",
    "\u0002\u0002\u00fc\u00fd\u00042;\u0002\u00fd.\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0007\u00c4\u0002\u0002\u00ff\u0100\u0007\u00a3\u0002\u0002",
    "\u01000\u0003\u0002\u0002\u0002\u0101\u0102\u0007#\u0002\u0002\u0102",
    "2\u0003\u0002\u0002\u0002\u0103\u0104\u0007$\u0002\u0002\u01044\u0003",
    "\u0002\u0002\u0002\u0105\u0106\u0007%\u0002\u0002\u01066\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0007&\u0002\u0002\u01088\u0003\u0002\u0002",
    "\u0002\u0109\u010a\u0007(\u0002\u0002\u010a:\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0007)\u0002\u0002\u010c<\u0003\u0002\u0002\u0002\u010d",
    "\u010e\u0007*\u0002\u0002\u010e>\u0003\u0002\u0002\u0002\u010f\u0110",
    "\u0007*\u0002\u0002\u0110@\u0003\u0002\u0002\u0002\u0111\u0112\u0007",
    "_\u0002\u0002\u0112B\u0003\u0002\u0002\u0002\u0113\u0114\u0007]\u0002",
    "\u0002\u0114D\u0003\u0002\u0002\u0002\u0115\u0116\u0007\u007f\u0002",
    "\u0002\u0116F\u0003\u0002\u0002\u0002\u0117\u0118\u0007}\u0002\u0002",
    "\u0118H\u0003\u0002\u0002\u0002\u0119\u011a\u0007.\u0002\u0002\u011a",
    "J\u0003\u0002\u0002\u0002\u011b\u011c\u00070\u0002\u0002\u011cL\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u00071\u0002\u0002\u011eN\u0003\u0002",
    "\u0002\u0002\u011f\u0120\u0007<\u0002\u0002\u0120P\u0003\u0002\u0002",
    "\u0002\u0121\u0122\u0007=\u0002\u0002\u0122R\u0003\u0002\u0002\u0002",
    "\u0123\u0124\u0007A\u0002\u0002\u0124T\u0003\u0002\u0002\u0002\u0125",
    "\u0126\u0007B\u0002\u0002\u0126V\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0007a\u0002\u0002\u0128X\u0003\u0002\u0002\u0002\u0129\u012a\u0007",
    "-\u0002\u0002\u012aZ\u0003\u0002\u0002\u0002\u012b\u012c\u0007/\u0002",
    "\u0002\u012c\\\u0003\u0002\u0002\u0002\u012d\u012e\u0007,\u0002\u0002",
    "\u012e^\u0003\u0002\u0002\u0002\u012f\u0130\u00071\u0002\u0002\u0130",
    "`\u0003\u0002\u0002\u0002\u0131\u0132\u0007\'\u0002\u0002\u0132b\u0003",
    "\u0002\u0002\u0002\u0133\u0134\u0007?\u0002\u0002\u0134\u0135\u0007",
    "?\u0002\u0002\u0135d\u0003\u0002\u0002\u0002\u0136\u0137\u0007#\u0002",
    "\u0002\u0137\u0138\u0007?\u0002\u0002\u0138f\u0003\u0002\u0002\u0002",
    "\u0139\u013a\u0007@\u0002\u0002\u013ah\u0003\u0002\u0002\u0002\u013b",
    "\u013c\u0007@\u0002\u0002\u013c\u013d\u0007?\u0002\u0002\u013dj\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0007>\u0002\u0002\u013fl\u0003\u0002",
    "\u0002\u0002\u0140\u0141\u0007>\u0002\u0002\u0141\u0142\u0007?\u0002",
    "\u0002\u0142n\u0003\u0002\u0002\u0002\u0143\u0144\u0007(\u0002\u0002",
    "\u0144\u0145\u0007(\u0002\u0002\u0145p\u0003\u0002\u0002\u0002\u0146",
    "\u0147\u0007~\u0002\u0002\u0147\u0148\u0007~\u0002\u0002\u0148r\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0007?\u0002\u0002\u014at\u0003\u0002",
    "\u0002\u0002\u014b\u014c\u0007-\u0002\u0002\u014c\u014d\u0007-\u0002",
    "\u0002\u014dv\u0003\u0002\u0002\u0002\u014e\u014f\u0007/\u0002\u0002",
    "\u014f\u0150\u0007/\u0002\u0002\u0150x\u0003\u0002\u0002\u0002\u0151",
    "\u0167\u00051\u0019\u0002\u0152\u0167\u00053\u001a\u0002\u0153\u0167",
    "\u00055\u001b\u0002\u0154\u0167\u00057\u001c\u0002\u0155\u0167\u0005",
    "a1\u0002\u0156\u0167\u00059\u001d\u0002\u0157\u0167\u0005;\u001e\u0002",
    "\u0158\u0167\u0005? \u0002\u0159\u0167\u0005=\u001f\u0002\u015a\u0167",
    "\u0005]/\u0002\u015b\u0167\u0005Y-\u0002\u015c\u0167\u0005[.\u0002\u015d",
    "\u0167\u0005K&\u0002\u015e\u0167\u0005_0\u0002\u015f\u0167\u0005O(\u0002",
    "\u0160\u0167\u0005Q)\u0002\u0161\u0167\u0005k6\u0002\u0162\u0167\u0005",
    "s:\u0002\u0163\u0167\u0005g4\u0002\u0164\u0167\u0005S*\u0002\u0165\u0167",
    "\u0005U+\u0002\u0166\u0151\u0003\u0002\u0002\u0002\u0166\u0152\u0003",
    "\u0002\u0002\u0002\u0166\u0153\u0003\u0002\u0002\u0002\u0166\u0154\u0003",
    "\u0002\u0002\u0002\u0166\u0155\u0003\u0002\u0002\u0002\u0166\u0156\u0003",
    "\u0002\u0002\u0002\u0166\u0157\u0003\u0002\u0002\u0002\u0166\u0158\u0003",
    "\u0002\u0002\u0002\u0166\u0159\u0003\u0002\u0002\u0002\u0166\u015a\u0003",
    "\u0002\u0002\u0002\u0166\u015b\u0003\u0002\u0002\u0002\u0166\u015c\u0003",
    "\u0002\u0002\u0002\u0166\u015d\u0003\u0002\u0002\u0002\u0166\u015e\u0003",
    "\u0002\u0002\u0002\u0166\u015f\u0003\u0002\u0002\u0002\u0166\u0160\u0003",
    "\u0002\u0002\u0002\u0166\u0161\u0003\u0002\u0002\u0002\u0166\u0162\u0003",
    "\u0002\u0002\u0002\u0166\u0163\u0003\u0002\u0002\u0002\u0166\u0164\u0003",
    "\u0002\u0002\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0167z\u0003",
    "\u0002\u0002\u0002\u0168\u0183\u0005Y-\u0002\u0169\u0183\u0005[.\u0002",
    "\u016a\u0183\u0005]/\u0002\u016b\u0183\u0005_0\u0002\u016c\u0183\u0005",
    "a1\u0002\u016d\u0183\u0005c2\u0002\u016e\u0183\u0005e3\u0002\u016f\u0183",
    "\u0005g4\u0002\u0170\u0183\u0005i5\u0002\u0171\u0183\u0005k6\u0002\u0172",
    "\u0183\u0005m7\u0002\u0173\u0183\u0005o8\u0002\u0174\u0183\u0005q9\u0002",
    "\u0175\u0183\u0005q9\u0002\u0176\u0183\u0005s:\u0002\u0177\u0183\u0005",
    "u;\u0002\u0178\u0183\u0005w<\u0002\u0179\u0183\u0005Q)\u0002\u017a\u0183",
    "\u0005I%\u0002\u017b\u0183\u0005U+\u0002\u017c\u0183\u0005? \u0002\u017d",
    "\u0183\u0005=\u001f\u0002\u017e\u0183\u0005C\"\u0002\u017f\u0183\u0005",
    "A!\u0002\u0180\u0183\u0005G$\u0002\u0181\u0183\u0005E#\u0002\u0182\u0168",
    "\u0003\u0002\u0002\u0002\u0182\u0169\u0003\u0002\u0002\u0002\u0182\u016a",
    "\u0003\u0002\u0002\u0002\u0182\u016b\u0003\u0002\u0002\u0002\u0182\u016c",
    "\u0003\u0002\u0002\u0002\u0182\u016d\u0003\u0002\u0002\u0002\u0182\u016e",
    "\u0003\u0002\u0002\u0002\u0182\u016f\u0003\u0002\u0002\u0002\u0182\u0170",
    "\u0003\u0002\u0002\u0002\u0182\u0171\u0003\u0002\u0002\u0002\u0182\u0172",
    "\u0003\u0002\u0002\u0002\u0182\u0173\u0003\u0002\u0002\u0002\u0182\u0174",
    "\u0003\u0002\u0002\u0002\u0182\u0175\u0003\u0002\u0002\u0002\u0182\u0176",
    "\u0003\u0002\u0002\u0002\u0182\u0177\u0003\u0002\u0002\u0002\u0182\u0178",
    "\u0003\u0002\u0002\u0002\u0182\u0179\u0003\u0002\u0002\u0002\u0182\u017a",
    "\u0003\u0002\u0002\u0002\u0182\u017b\u0003\u0002\u0002\u0002\u0182\u017c",
    "\u0003\u0002\u0002\u0002\u0182\u017d\u0003\u0002\u0002\u0002\u0182\u017e",
    "\u0003\u0002\u0002\u0002\u0182\u017f\u0003\u0002\u0002\u0002\u0182\u0180",
    "\u0003\u0002\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0183|",
    "\u0003\u0002\u0002\u0002\u0184\u018a\u0005+\u0016\u0002\u0185\u0189",
    "\u0005+\u0016\u0002\u0186\u0189\u0005-\u0017\u0002\u0187\u0189\u0005",
    "W,\u0002\u0188\u0185\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002",
    "\u0002\u0002\u0188\u0187\u0003\u0002\u0002\u0002\u0189\u018c\u0003\u0002",
    "\u0002\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002",
    "\u0002\u0002\u018b~\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002",
    "\u0002\u0002\u018d\u0191\u0005-\u0017\u0002\u018e\u0190\u0005-\u0017",
    "\u0002\u018f\u018e\u0003\u0002\u0002\u0002\u0190\u0193\u0003\u0002\u0002",
    "\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002",
    "\u0002\u0192\u0080\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002\u0002",
    "\u0002\u0194\u0197\u0005;\u001e\u0002\u0195\u0198\u0005\u0083B\u0002",
    "\u0196\u0198\t\u0003\u0002\u0002\u0197\u0195\u0003\u0002\u0002\u0002",
    "\u0197\u0196\u0003\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0005;\u001e\u0002\u019a\u0082\u0003\u0002\u0002\u0002",
    "\u019b\u019f\u0005+\u0016\u0002\u019c\u019f\u0005-\u0017\u0002\u019d",
    "\u019f\u0005y=\u0002\u019e\u019b\u0003\u0002\u0002\u0002\u019e\u019c",
    "\u0003\u0002\u0002\u0002\u019e\u019d\u0003\u0002\u0002\u0002\u019f\u0084",
    "\u0003\u0002\u0002\u0002\u01a0\u01a1\u00071\u0002\u0002\u01a1\u01a2",
    "\u00071\u0002\u0002\u01a2\u01a6\u0003\u0002\u0002\u0002\u01a3\u01a5",
    "\u000b\u0002\u0002\u0002\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a5\u01a8",
    "\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a6\u01a4",
    "\u0003\u0002\u0002\u0002\u01a7\u01aa\u0003\u0002\u0002\u0002\u01a8\u01a6",
    "\u0003\u0002\u0002\u0002\u01a9\u01ab\u0007\u000f\u0002\u0002\u01aa\u01a9",
    "\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01ab\u01ac",
    "\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007\f\u0002\u0002\u01ad\u01ae",
    "\u0003\u0002\u0002\u0002\u01ae\u01af\bC\u0002\u0002\u01af\u0086\u0003",
    "\u0002\u0002\u0002\u01b0\u01b1\u00071\u0002\u0002\u01b1\u01b2\u0007",
    ",\u0002\u0002\u01b2\u01b8\u0003\u0002\u0002\u0002\u01b3\u01b7\u0005",
    "\u0087D\u0002\u01b4\u01b7\u0005\u0089E\u0002\u01b5\u01b7\u000b\u0002",
    "\u0002\u0002\u01b6\u01b3\u0003\u0002\u0002\u0002\u01b6\u01b4\u0003\u0002",
    "\u0002\u0002\u01b6\u01b5\u0003\u0002\u0002\u0002\u01b7\u01ba\u0003\u0002",
    "\u0002\u0002\u01b8\u01b9\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003\u0002",
    "\u0002\u0002\u01b9\u01bb\u0003\u0002\u0002\u0002\u01ba\u01b8\u0003\u0002",
    "\u0002\u0002\u01bb\u01bc\u0007,\u0002\u0002\u01bc\u01bd\u00071\u0002",
    "\u0002\u01bd\u01be\u0003\u0002\u0002\u0002\u01be\u01bf\bD\u0002\u0002",
    "\u01bf\u0088\u0003\u0002\u0002\u0002\u01c0\u01c1\u00071\u0002\u0002",
    "\u01c1\u01c2\u0007,\u0002\u0002\u01c2\u01c6\u0003\u0002\u0002\u0002",
    "\u01c3\u01c5\u000b\u0002\u0002\u0002\u01c4\u01c3\u0003\u0002\u0002\u0002",
    "\u01c5\u01c8\u0003\u0002\u0002\u0002\u01c6\u01c7\u0003\u0002\u0002\u0002",
    "\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c7\u01c9\u0003\u0002\u0002\u0002",
    "\u01c8\u01c6\u0003\u0002\u0002\u0002\u01c9\u01ca\u0007,\u0002\u0002",
    "\u01ca\u01cb\u00071\u0002\u0002\u01cb\u008a\u0003\u0002\u0002\u0002",
    "\u01cc\u01ce\t\u0004\u0002\u0002\u01cd\u01cc\u0003\u0002\u0002\u0002",
    "\u01ce\u01cf\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002",
    "\u01cf\u01d0\u0003\u0002\u0002\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002",
    "\u01d1\u01d2\bF\u0002\u0002\u01d2\u008c\u0003\u0002\u0002\u0002\u0010",
    "\u0002\u0166\u0182\u0188\u018a\u0191\u0197\u019e\u01a6\u01aa\u01b6\u01b8",
    "\u01c6\u01cf\u0003\b\u0002\u0002"].join("");


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
ScannerMiniCSharp.CHAR = 1;
ScannerMiniCSharp.INT = 2;
ScannerMiniCSharp.FLOAT = 3;
ScannerMiniCSharp.BOOL = 4;
ScannerMiniCSharp.STRING = 5;
ScannerMiniCSharp.BREAK = 6;
ScannerMiniCSharp.CLASS = 7;
ScannerMiniCSharp.CONST = 8;
ScannerMiniCSharp.ELSE = 9;
ScannerMiniCSharp.IF = 10;
ScannerMiniCSharp.NEW = 11;
ScannerMiniCSharp.READ = 12;
ScannerMiniCSharp.RETURN = 13;
ScannerMiniCSharp.VOID = 14;
ScannerMiniCSharp.WHILE = 15;
ScannerMiniCSharp.WRITE = 16;
ScannerMiniCSharp.FOREACH = 17;
ScannerMiniCSharp.FOR = 18;
ScannerMiniCSharp.TRUE = 19;
ScannerMiniCSharp.FALSE = 20;
ScannerMiniCSharp.LETTER = 21;
ScannerMiniCSharp.DIGIT = 22;
ScannerMiniCSharp.EXCLAMATION_UP = 23;
ScannerMiniCSharp.EXCLAMATION_DOWN = 24;
ScannerMiniCSharp.DOUBLE_QUOTATION_MARKS = 25;
ScannerMiniCSharp.NUMBER_SIGN = 26;
ScannerMiniCSharp.DOLLAR_SIGN = 27;
ScannerMiniCSharp.AMPERSAND = 28;
ScannerMiniCSharp.QUOTATION_MARKS = 29;
ScannerMiniCSharp.RIGHT_PARENTHESIS = 30;
ScannerMiniCSharp.LEFT_PARENTHESIS = 31;
ScannerMiniCSharp.RIGHT_SQUARE_BRACKETR = 32;
ScannerMiniCSharp.LEFT_SQUARE_BRACKET = 33;
ScannerMiniCSharp.RIGHT_CURLY_BRACKET = 34;
ScannerMiniCSharp.LEFT_CURLY_BRACKET = 35;
ScannerMiniCSharp.COMMA = 36;
ScannerMiniCSharp.DOT = 37;
ScannerMiniCSharp.FORWARD_SLASH = 38;
ScannerMiniCSharp.COLON = 39;
ScannerMiniCSharp.SEMICOLON = 40;
ScannerMiniCSharp.QUESTION_SIGN = 41;
ScannerMiniCSharp.AT = 42;
ScannerMiniCSharp.UNDERSCORE = 43;
ScannerMiniCSharp.SUM = 44;
ScannerMiniCSharp.SUBTRACTION = 45;
ScannerMiniCSharp.MULTIPLICATION = 46;
ScannerMiniCSharp.DIVISION = 47;
ScannerMiniCSharp.PERCENTAGE = 48;
ScannerMiniCSharp.EQUAL_EQUAL = 49;
ScannerMiniCSharp.INEQUALITY = 50;
ScannerMiniCSharp.GREATER_THAN = 51;
ScannerMiniCSharp.GREATER_THAN_OR_EQUAL = 52;
ScannerMiniCSharp.LESS_THAN = 53;
ScannerMiniCSharp.LESS_THAN_OR_EQUAL = 54;
ScannerMiniCSharp.AND = 55;
ScannerMiniCSharp.OR = 56;
ScannerMiniCSharp.EQUAL = 57;
ScannerMiniCSharp.PLUS_PLUS = 58;
ScannerMiniCSharp.MINUS_MINUS = 59;
ScannerMiniCSharp.IDENT = 60;
ScannerMiniCSharp.NUMBER = 61;
ScannerMiniCSharp.CHAR_CONST = 62;
ScannerMiniCSharp.PRINTABLE_CHAR = 63;
ScannerMiniCSharp.LINE_COMMENT = 64;
ScannerMiniCSharp.SPECIAL_COMMENT = 65;
ScannerMiniCSharp.WS = 66;

ScannerMiniCSharp.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ScannerMiniCSharp.prototype.modeNames = [ "DEFAULT_MODE" ];

ScannerMiniCSharp.prototype.literalNames = [ null, "'char'", "'int'", "'float'", 
                                             "'bool'", "'string'", "'break'", 
                                             "'class'", "'const'", "'else'", 
                                             "'if'", "'new'", "'read'", 
                                             "'return'", "'void'", "'while'", 
                                             "'write'", "'foreach'", "'for'", 
                                             "'true'", "'false'", null, 
                                             null, "'\u00C2\u00A1'", "'!'", 
                                             "'\"'", "'#'", "'$'", "'&'", 
                                             "'''", null, null, "']'", "'['", 
                                             "'}'", "'{'", "','", "'.'", 
                                             null, "':'", "';'", "'?'", 
                                             "'@'", "'_'", "'+'", "'-'", 
                                             "'*'", null, "'%'", "'=='", 
                                             "'!='", "'>'", "'>='", "'<'", 
                                             "'<='", "'&&'", "'||'", "'='", 
                                             "'++'", "'--'" ];

ScannerMiniCSharp.prototype.symbolicNames = [ null, "CHAR", "INT", "FLOAT", 
                                              "BOOL", "STRING", "BREAK", 
                                              "CLASS", "CONST", "ELSE", 
                                              "IF", "NEW", "READ", "RETURN", 
                                              "VOID", "WHILE", "WRITE", 
                                              "FOREACH", "FOR", "TRUE", 
                                              "FALSE", "LETTER", "DIGIT", 
                                              "EXCLAMATION_UP", "EXCLAMATION_DOWN", 
                                              "DOUBLE_QUOTATION_MARKS", 
                                              "NUMBER_SIGN", "DOLLAR_SIGN", 
                                              "AMPERSAND", "QUOTATION_MARKS", 
                                              "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
                                              "RIGHT_SQUARE_BRACKETR", "LEFT_SQUARE_BRACKET", 
                                              "RIGHT_CURLY_BRACKET", "LEFT_CURLY_BRACKET", 
                                              "COMMA", "DOT", "FORWARD_SLASH", 
                                              "COLON", "SEMICOLON", "QUESTION_SIGN", 
                                              "AT", "UNDERSCORE", "SUM", 
                                              "SUBTRACTION", "MULTIPLICATION", 
                                              "DIVISION", "PERCENTAGE", 
                                              "EQUAL_EQUAL", "INEQUALITY", 
                                              "GREATER_THAN", "GREATER_THAN_OR_EQUAL", 
                                              "LESS_THAN", "LESS_THAN_OR_EQUAL", 
                                              "AND", "OR", "EQUAL", "PLUS_PLUS", 
                                              "MINUS_MINUS", "IDENT", "NUMBER", 
                                              "CHAR_CONST", "PRINTABLE_CHAR", 
                                              "LINE_COMMENT", "SPECIAL_COMMENT", 
                                              "WS" ];

ScannerMiniCSharp.prototype.ruleNames = [ "CHAR", "INT", "FLOAT", "BOOL", 
                                          "STRING", "BREAK", "CLASS", "CONST", 
                                          "ELSE", "IF", "NEW", "READ", "RETURN", 
                                          "VOID", "WHILE", "WRITE", "FOREACH", 
                                          "FOR", "TRUE", "FALSE", "LETTER", 
                                          "DIGIT", "EXCLAMATION_UP", "EXCLAMATION_DOWN", 
                                          "DOUBLE_QUOTATION_MARKS", "NUMBER_SIGN", 
                                          "DOLLAR_SIGN", "AMPERSAND", "QUOTATION_MARKS", 
                                          "RIGHT_PARENTHESIS", "LEFT_PARENTHESIS", 
                                          "RIGHT_SQUARE_BRACKETR", "LEFT_SQUARE_BRACKET", 
                                          "RIGHT_CURLY_BRACKET", "LEFT_CURLY_BRACKET", 
                                          "COMMA", "DOT", "FORWARD_SLASH", 
                                          "COLON", "SEMICOLON", "QUESTION_SIGN", 
                                          "AT", "UNDERSCORE", "SUM", "SUBTRACTION", 
                                          "MULTIPLICATION", "DIVISION", 
                                          "PERCENTAGE", "EQUAL_EQUAL", "INEQUALITY", 
                                          "GREATER_THAN", "GREATER_THAN_OR_EQUAL", 
                                          "LESS_THAN", "LESS_THAN_OR_EQUAL", 
                                          "AND", "OR", "EQUAL", "PLUS_PLUS", 
                                          "MINUS_MINUS", "SPECIAL_CHARACTERS", 
                                          "OPERATORS", "IDENT", "NUMBER", 
                                          "CHAR_CONST", "PRINTABLE_CHAR", 
                                          "LINE_COMMENT", "SPECIAL_COMMENT", 
                                          "DELIMITED_COMMENT", "WS" ];

ScannerMiniCSharp.prototype.grammarFileName = "ScannerMiniCSharp.g4";



exports.ScannerMiniCSharp = ScannerMiniCSharp;

