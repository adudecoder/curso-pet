Algoritmo "semnome"
Var

  tempoServico: inteiro
  salarioAutal: real
  salarioNovo: real
  

Inicio

EscrevaL("Tempo de serviço do funcionario: ")
Leia(tempoServico)
EscrevaL("Salario do funcionario: ")
Leia(salarioAutal)

se tempoServico <= 10 entao
     salarioNovo <- (salarioAutal * 10) / 100
     EscrevaL("O aumento foi de 10%", salarioNovo)
senao
     salarioNovo <- (salarioAutal * 25) / 100
     EscrevaL("O aumento foi de 25%", salarioNovo)
fimse

Fimalgoritmo