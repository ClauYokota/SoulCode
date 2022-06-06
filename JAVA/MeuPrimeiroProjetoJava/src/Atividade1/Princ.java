package Atividade1;

public class Princ {
    public static void main(String[] args) {
        Funcionários f1 = new Funcionários("Ricardo",25,"B1","Ativo");
        Funcionários f2 = new Funcionários("Helena",25,"B1","Ativo");
        Funcionários f3 = new Funcionários("Marina",25,"B1","Ativo");
        Funcionários f4 = new Funcionários("Marcia",25,"B1","Ativo");

        f1.demitirFuncionario();
        f2.trocarCargoFuncionario();
        f3.aniversario();
        f4.pagarSalario();
    }
}
