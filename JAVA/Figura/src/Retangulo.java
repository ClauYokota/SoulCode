import java.lang.module.FindException;

public class Retangulo extends Figura{

    private int lado1;
    private int lado2;
    public Retangulo(String nome, String cor,int lado1, int lado2) {
        super(nome, cor);

        if(lado1 <= 0 || lado2 <=0){
            throw new RuntimeException("As medidas do retângulo não podem ser igual ou menor que zero");
        }

        this.lado1=lado1;
        this.lado2=lado2;
    }

    @Override
    public double calcularArea() throws FiguraException {
        if (lado1%2 != 0 || lado2%2 != 0){
            throw new FiguraException("As medidas do retângulo não podem ser ímpar.");
        }

        return getLado2()*getLado1();
    }

    public int getLado1() {
        return lado1;
    }

    public void setLado1(int lado1) {
        this.lado1 = lado1;
    }

    public int getLado2() {
        return lado2;
    }

    public void setLado2(int lado2) {
        this.lado2 = lado2;
    }
}
