parser grammar ParserMiniCSharp;

options{
    tokenVocab = ScannerMiniCSharp;
}


program	    : CLASS IDENT ( constDecl | varDecl | classDecl )* LEFT_CURLY_BRACKET ( methodDecl )* RIGHT_CURLY_BRACKET;
constDecl   : CONST type IDENT EQUAL ( Number | CharConst ) SEMICOLON;
varDecl	: type IDENT ( COMMA IDENT ) SEMICOLON;
classDecl	: CLASS IDENT LEFT_CURLY_BRACKET ( varDecl ) RIGHT_CURLY_BRACKET;
methodDecl	: ( type | VOID ) IDENT LEFT_PARENTHESIS  ( formPars ) RIGHT_PARENTHESIS ( varDecl ) block;
formPars	: type IDENT ( COMMA type IDENT );
type		: IDENT;
statement	: designator ( EQUAL expr | LEFT_PARENTHESIS ( actPars ) RIGHT_PARENTHESIS  | PLUS_PLUS | MINUS_MINUS ) SEMICOLON
		 |  IF LEFT_PARENTHESIS condition RIGHT_PARENTHESIS statement ( ELSE statement )
		 |  FOR LEFT_PARENTHESIS expr SEMICOLON  (condition) SEMICOLON  (statement) RIGHT_PARENTHESIS statement
		 |  WHILE LEFT_PARENTHESIS condition RIGHT_PARENTHESIS statement
		 |  FOREACH
		 |  BREAK SEMICOLON
		 |  RETURN ( expr ) SEMICOLON
		 |  READ LEFT_PARENTHESIS designator RIGHT_PARENTHESIS SEMICOLON
		 |  WRITE LEFT_PARENTHESIS expr ( SEMICOLON NUMBER ) RIGHT_PARENTHESIS SEMICOLON
		 |  block
		 |  SEMICOLON;
block   : LEFT_CURLY_BRACKET ( statement )* RIGHT_CURLY_BRACKET;
actPars	: expr ( SEMICOLON expr );
condition	: condTerm ( OR condTerm )*;
condTerm	: condFact ( AND condFact )*;
condFact	: expr relop expr;
expr		: ( SUBTRACTION ) term ( addop term )*;
term		: factor ( mulop factor );
factor		: designator ( LEFT_PARENTHESIS ( actPars ) RIGHT_PARENTHESIS )
		 |  NUMBER
		 |  CHAR_CONST
		 |  (TRUE | FALSE)
		 |  NEW IDENT
		 |  LEFT_PARENTHESIS expr RIGHT_PARENTHESIS;
designator	: IDENT ( AT IDENT | LEFT_SQUARE_BRACKET expr RIGHT_CURLY_BRACKET )*;
relop		: EQUAL_EQUAL  | INEQUALITY | GREATER_THAN | GREATER_THAN_OR_EQUAL | LESS_THAN | LESS_THAN_OR_EQUAL;
addop		: SUM | SUBTRACTION;
mulop		: MULTIPLICATION | DIVISION | PERCENTAGE;

