package Atividade1;

public class Funcionários {
    private String nome;
    private int idade;
    private String cargo;
    private String situação;

    public Funcionários(String nome,int idade,String cargo,String situação){
        this.nome = nome;
        this.idade  = idade;
        this.cargo = cargo;
        this.situação = situação;
    }

    public void demitirFuncionario(){
        setSituação("inativo");
        System.out.println("O(A) funcionário(a) "+getNome()+" foi demitido(a). Situação = "+getSituação());
    }

    public void trocarCargoFuncionario(){
        setCargo("B2");
        System.out.println("Parabéns "+getNome()+" você foi promovido(a)! Cargo = "+getCargo());
    }

    public void pagarSalario(){
        System.out.println("O salário do(a) funcionário(a) "+getNome()+" foi pago.");
    }

    public void aniversario(){
        setIdade(idade+1);
        System.out.println("Parabéns "+getNome()+", você fez "+getIdade()+" anos.");
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getSituação() {
        return situação;
    }

    public void setSituação(String situação) {
        this.situação = situação;
    }



}
