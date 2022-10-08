public abstract class Livro implements LivroInterface {
//O abstract  permite tirar as linhas de baixo fazendo com que as subclasses tenham que implementar os métodos.
//    @Override
//    public boolean verificarDisponibilidade() {
//        return false;
//    }
//
//    @Override
//    public void emprestarLivro() {
//
//    }
    private String nome;
    private int quantidade;

    public Livro(String nome, int quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    public Livro(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}
