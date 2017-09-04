lexer grammar ScannerMiniCSharp;

//Tokens palabras reservadas

CHAR    :   'char';  //
INT     :   'int';   //
FLOAT   :   'float'; //
BOOL    :   'bool' ;  ///
STRING  :   'string'; //

BREAK   :   'break';//
CLASS   :   'class';//

CONST   :   'const';//
ELSE    :   'else';//
IF      :   'if';//
NEW     :   'new';//
READ    :   'read';//
RETURN  :   'return';//
VOID    :   'void';//
WHILE   :   'while';//
WRITE   :   'write';//
FOREACH :   'foreach';//
FOR     :   'for';//
TRUE    :   'true';//
FALSE   :   'false';//
// Tokens para caracteres
LETTER  :   'A'..'Z' | 'a'..'z';//
DIGIT   :	'0'..'9';//

EXCLAMATION_UP      :   '¡';//no
EXCLAMATION_DOWN    :   '!';//

DOUBLE_QUOTATION_MARKS     :   '"';//

NUMBER_SIGN  :   '#';//

DOLLAR_SIGN  :   '$';//

AMPERSAND   :   '&';//
QUOTATION_MARKS :   '\'';//
RIGHT_PARENTHESIS   :   '(';//
LEFT_PARENTHESIS    :   '(';//
RIGHT_SQUARE_BRACKETR :   ']';//
LEFT_SQUARE_BRACKET :   '[';//
RIGHT_CURLY_BRACKET :   '}';//
LEFT_CURLY_BRACKET :   '{';//
ASTERISK    :   '*';//repetido

COMMA       :   ',';//
HYPHEN      :   '-';//
DOT         :   '.';//
FORWARD_SLASH   :   '/';//
COLON   :   ':' ;//
SEMICOLON   :   ';';//

QUESTION_SIGN   :   '?';//
AT  :   '@';//
UNDERSCORE  :   '_';//
//Tokens para operadores
SUM :   '+';//
SUBTRACTION :   '-'; //repetifo
MULTIPLICATION  :   '*';//repetido
DIVISION    :   '/';//repetifo
PERCENTAGE  :   '%';//
EQUAL_EQUAL   :   '==';//
INEQUALITY      :   '!=';//
GREATER_THAN    :   '>';//
GREATER_THAN_OR_EQUAL   :   '>=';//
LESS_THAN   :   '<';//
LESS_THAN_OR_EQUAL  :   '<=';//
AND :   '&&';//
OR  :   '||';//
EQUAL   :   '=';//
PLUS_PLUS   :   '++';//
MINUS_MINUS :   '--';//

fragment
SPECIAL_CHARACTERS  :   EXCLAMATION_DOWN
    |   DOUBLE_QUOTATION_MARKS
    |   NUMBER_SIGN
    |   DOLLAR_SIGN
    |   PERCENTAGE
    |   AMPERSAND
    |   QUOTATION_MARKS
    |   LEFT_PARENTHESIS
    |   RIGHT_PARENTHESIS
    |   ASTERISK
    |   SUM
    |   SUBTRACTION
    |   DOT
    |   DIVISION
    |   COLON
    |   SEMICOLON
    |   LESS_THAN
    |   EQUAL
    |   GREATER_THAN
    |   QUESTION_SIGN
    |   AT;
//Patrones Tokens
IDENT : LETTER ( LETTER | DIGIT | UNDERSCORE )*;//
NUMBER  :   DIGIT (DIGIT)*;//
CHAR_CONST  : QUOTATION_MARKS ( PRINTABLE_CHAR | '\n' | '\r' ) QUOTATION_MARKS;//
PRINTABLE_CHAR : LETTER | DIGIT | SPECIAL_CHARACTERS;//

//Comentarios y espacios vacios
LINE_COMMENT:   '//' .*? '\r'? '\n' -> skip ;

SPECIAL_COMMENT : '/*' ( SPECIAL_COMMENT | DELIMITED_COMMENT | . )*? '*/' -> skip;

fragment
DELIMITED_COMMENT   : '/*' .*? '*/' ;

WS          :   [ \t\n\r]+ -> skip ;










