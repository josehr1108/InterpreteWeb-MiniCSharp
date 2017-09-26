parser grammar ParserMiniCSharp;

options{
    tokenVocab = ScannerMiniCSharp;
}


program	    : CLASS IDENT ( constDecl | varDecl | classDecl )* LEFT_CURLY_BRACKET ( methodDecl )* RIGHT_CURLY_BRACKET EOF;
constDecl   : CONST type IDENT ASIGN ( NUMBER | CHAR_CONST ) SEMICOLON;
varDecl	    : type IDENT ( COMMA IDENT ) SEMICOLON;
classDecl	: CLASS IDENT LEFT_CURLY_BRACKET ( varDecl )* RIGHT_CURLY_BRACKET;
methodDecl	: ( type | VOID ) IDENT LEFT_PARENTHESIS  ( formPars )? RIGHT_PARENTHESIS ( varDecl )* block;
formPars	: type IDENT ( COMMA type IDENT )*;
type		: IDENT                                                                                                                     #identType
            | CHAR                                                                                                                      #charType
            | INT                                                                                                                       #intType
            | FLOAT                                                                                                                     #floatType
            | BOOL                                                                                                                      #boolType
            | STRING                                                                                                                    #stringType
            ;
statement	: designator ( ASIGN expr | LEFT_PARENTHESIS ( actPars )? RIGHT_PARENTHESIS  | PLUS_PLUS | MINUS_MINUS ) SEMICOLON          #firstDesignStatement
		    |  IF LEFT_PARENTHESIS condition RIGHT_PARENTHESIS statement ( ELSE statement )                                             #ifStatement
		    |  FOR LEFT_PARENTHESIS expr SEMICOLON  (condition)? SEMICOLON  (statement)? RIGHT_PARENTHESIS statement                    #forStatement
		    |  WHILE LEFT_PARENTHESIS condition RIGHT_PARENTHESIS statement                                                             #whileStatement
		    |  FOREACH RIGHT_PARENTHESIS type IDENT IN IDENT RIGHT_PARENTHESIS block                                                    #foreachStatement
		    |  BREAK SEMICOLON                                                                                                          #breakStatement
		    |  RETURN ( expr )? SEMICOLON                                                                                               #returnStatement
		    |  READ LEFT_PARENTHESIS designator RIGHT_PARENTHESIS SEMICOLON                                                             #readStatement
		    |  WRITE LEFT_PARENTHESIS expr ( COMMA NUMBER )? RIGHT_PARENTHESIS SEMICOLON                                                #writeStatement
		    |  block                                                                                                                    #blockStatement
		    |  SEMICOLON                                                                                                                #semicolonStatement
		    ;
block       : LEFT_CURLY_BRACKET ( statement )* RIGHT_CURLY_BRACKET;
actPars	    : expr ( COMMA expr )*;
condition	: condTerm ( OR condTerm )*;
condTerm	: condFact ( AND condFact )*;
condFact	: expr relop expr;
expr		: ( SUBTRACTION )? term ( addop term )*;
term		: factor ( mulop factor )*;
factor		: designator ( LEFT_PARENTHESIS ( actPars )? RIGHT_PARENTHESIS )                                                            #designatorFactor
		    |  NUMBER                                                                                                                   #numberFactor
		    |  CHAR_CONST                                                                                                               #charconstFactor
		    |  (TRUE | FALSE)                                                                                                           #boolFactor
    		|  NEW IDENT                                                                                                                #newFactor
		    |  LEFT_PARENTHESIS expr RIGHT_PARENTHESIS                                                                                  #expressionFactor
		    ;
designator	: IDENT ( AT IDENT | LEFT_SQUARE_BRACKET expr RIGHT_CURLY_BRACKET )*;
relop		: EQUAL_EQUAL                                                                                                               #equalEqualOp
            | INEQUALITY                                                                                                                #inequalityOp
            | GREATER_THAN                                                                                                              #greaterThanOp
            | GREATER_THAN_OR_EQUAL                                                                                                     #greaterOrEqualThanOp
            | LESS_THAN                                                                                                                 #lessThanOp
            | LESS_THAN_OR_EQUAL                                                                                                        #lessOrEqualThanOp
            ;
addop		: SUM                                                                                                                       #sumOp
            | SUBTRACTION                                                                                                               #subsOp
            ;
mulop		: MULTIPLICATION                                                                                                            #multOp
            | DIVISION                                                                                                                  #divOp
            | PERCENTAGE                                                                                                                #percentOp
            ;

