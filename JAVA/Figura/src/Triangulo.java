import java.lang.module.FindException;

public class Triangulo extends Figura{
    private int base;
    private int altura;

    public Triangulo(String nome, String cor, int base, int altura) {
        super(nome, cor);
        if(base <= 0 || altura <=0){
            throw new RuntimeException("As medidas do triângulo não podem ser igual ou menor que zero");
        }
        this.altura=altura;
        this.base=base;
    }

    @Override
    public double calcularArea() throws FiguraException {
        if (base%2 == 1 || altura%2 == 1){
            throw new FiguraException("As medidas do triângulo não podem ser ímpar.");
        }

        return ((getBase()*getAltura())/2);
    }

    public int getBase() {
        return base;
    }

    public void setBase(int base) {
        this.base = base;
    }

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }
}
