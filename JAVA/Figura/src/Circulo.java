import java.lang.module.FindException;

public class Circulo extends Figura{
    private int raio;
    private final double pi = Math.PI;

    public Circulo(String nome, String cor, int raio) {
        super(nome, cor);
        if (raio<= 0) {
            throw new RuntimeException("O raio do círculo não pode ser igual ou menor que zero");
        }

        this.raio=raio;
    }

    @Override
    public double calcularArea() throws FiguraException {
        if (raio%2 == 1){
            throw new FiguraException("O raio do círculo não pode ser um número ímpar.");
        }

        return pi*(Math.pow(raio,2));

    }

    public int getRaio() {
        return raio;
    }

    public void setRaio(int raio) {
        this.raio = raio;
    }

    public double getPi() {
        return pi;
    }
}
