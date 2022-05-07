Algoritmo "semnome"
Var

NOTA1, NOTA2, NOTA3, NOTA4, MEDIA : REAL

inicio

 EscrevaL("Digite a primeira nota: ")
 Leia(NOTA1)
 EscrevaL("Digite a segunda nota: ")
 Leia(NOTA2)
 EscrevaL("Digite a terceira nota: ")
 Leia(NOTA3)
 EscrevaL("Digite a quarta nota: ")
 Leia(NOTA4)
 
 MEDIA := (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4 ;

 se MEDIA <= 4  entao
    EscrevaL("A media do aluno foi: ", MEDIA)
    EscrevaL(" - ALUNO REPROVADO ")
 fimse
 
 se MEDIA <=  6.9 entao
    EscrevaL("A media do aluno foi: ", MEDIA)
    EscrevaL(" - ALUNO DE RECUPERAÇÃO ")
 fimse
 
 se MEDIA >= 7 entao
    EscrevaL("A media do aluno foi: ", MEDIA)
    EscrevaL(" - ALUNO APROVADO ")
 fimse

Fimalgoritmo