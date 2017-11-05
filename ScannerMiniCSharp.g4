lexer grammar ScannerMiniCSharp;

//Tokens palabras reservadas
CLASS   :   'class';
CONST   :   'const';
//Tokens Tipos de datos
CHAR    :   'char';
INT     :   'int';
FLOAT   :   'float';
BOOL    :   'bool' ;
STRING  :   'string';

//Tokens Statement
IF      :   'if';
ELSE    :   'else';
FOR     :   'for';
WHILE   :   'while';
FOREACH :   'foreach';
BREAK   :   'break';
RETURN  :   'return';
READ    :   'read';
WRITE   :   'write';
IN      :   'in';

//Tokens Factor

NEW     :   'new';
TRUE    :   'true';
FALSE   :   'false';

//Token MethodDecl
VOID    :   'void';

//Tokens de agrupamiento
RIGHT_PARENTHESIS   :   ')';
LEFT_PARENTHESIS    :   '(';
RIGHT_SQUARE_BRACKET :   ']';
LEFT_SQUARE_BRACKET :   '[';
RIGHT_CURLY_BRACKET :   '}';
LEFT_CURLY_BRACKET :   '{';

//Tokens de simbolos
EXCLAMATION_UP      :   '¡';
EXCLAMATION_DOWN    :   '!';
DOUBLE_QUOTATION_MARKS     :   '"';
NUMBER_SIGN  :   '#';
DOLLAR_SIGN  :   '$';
AMPERSAND   :   '&';
QUOTATION_MARKS :   '\'';
COMMA       :   ',';
DOT         :   '.';
COLON   :   ':' ;
SEMICOLON   :   ';';
QUESTION_SIGN   :   '?';
AT  :   '@';
UNDERSCORE  :   '_';

//Tokens para operadores
SUM :   '+';
SUBTRACTION :   '-';
MULTIPLICATION  :   '*';
DIVISION    :   '/';
PERCENTAGE  :   '%';
ASIGN    :   '=';

//Tokens para operaciones logicas
EQUAL_EQUAL   :   '==';
INEQUALITY      :   '!=';
GREATER_THAN    :   '>';
GREATER_THAN_OR_EQUAL   :   '>=';
LESS_THAN   :   '<';
LESS_THAN_OR_EQUAL  :   '<=';
AND :   '&&';
OR  :   '||';
PLUS_PLUS   :   '++';
MINUS_MINUS :   '--';

//Patrones Tokens
IDENT : LETTER ( LETTER | DIGIT | UNDERSCORE )*;
NUMBER  :   DIGIT (DIGIT)* | DIGIT (DIGIT)* DOT DIGIT (DIGIT)*;
LIST : LEFT_SQUARE_BRACKET RIGHT_SQUARE_BRACKET;
CHAR_CONST  : QUOTATION_MARKS ( PRINTABLE_CHAR | '\n' | '\r' ) QUOTATION_MARKS;
STRING_CONST  : DOUBLE_QUOTATION_MARKS ( PRINTABLE_CHAR | '\n' | '\r' ) DOUBLE_QUOTATION_MARKS;
PRINTABLE_CHAR : LETTER | DIGIT | SPECIAL_CHARACTERS;

// Tokens para caracteres
LETTER  :   'A'..'Z' | 'a'..'z';
DIGIT   :	'0'..'9';

//Tokens fragment de caracteres especiales
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
    |   MULTIPLICATION
    |   SUM
    |   SUBTRACTION
    |   DOT
    |   DIVISION
    |   COLON
    |   SEMICOLON
    |   LESS_THAN
    |   ASIGN
    |   GREATER_THAN
    |   QUESTION_SIGN
    |   AT;

//Tokens fragment de operadores
/*fragment
OPERATORS   :   SUM
            |   SUBTRACTION
            |   MULTIPLICATION
            |   DIVISION
            |   PERCENTAGE
            |   EQUAL_EQUAL
            |   INEQUALITY
            |   GREATER_THAN
            |   GREATER_THAN_OR_EQUAL
            |   LESS_THAN
            |   LESS_THAN_OR_EQUAL
            |   AND
            |   OR
            |   OR
            |   EQUAL
            |   PLUS_PLUS
            |   MINUS_MINUS
            |   SEMICOLON
            |   COMMA
            |   AT
            |   LEFT_PARENTHESIS
            |   RIGHT_PARENTHESIS
            |   LEFT_SQUARE_BRACKET
            |   RIGHT_SQUARE_BRACKETR
            |   LEFT_CURLY_BRACKET
            |   RIGHT_CURLY_BRACKET;


*/

//Comentarios y espacios vacios
LINE_COMMENT:   '//' .*? '\r'? '\n' -> skip ;

SPECIAL_COMMENT : '/*' ( SPECIAL_COMMENT | DELIMITED_COMMENT | . )*? '*/' -> skip;

fragment
DELIMITED_COMMENT   : '/*' .*? '*/' ;

WS          :   [ \t\n\r]+ -> skip ;










