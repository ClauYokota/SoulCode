import org.w3c.dom.ls.LSOutput;

import java.lang.module.FindException;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;

public class Matematica {
    public static void main(String[] args) throws FiguraException{

        Retangulo r1 = new Retangulo("Retângulo", "laranja", 10, 6);
        Circulo c1 = new Circulo("Círculo", "azul", -2);
        Triangulo t1 = new Triangulo("Triângulo", "roxo", 20, 8);

        List <Figura>listaFigura = new ArrayList<Figura>();
        listaFigura.add(r1);
        listaFigura.add(c1);
        listaFigura.add(t1);

        for (Figura f:listaFigura) {
        try {
            System.out.printf("%s%s%s%s%s%.2f%s%n", "A área do ", f.getNome(), " ", f.getCor(), " é igual a ", f.calcularArea(), " m²");

            }catch(RuntimeException e){
            System.out.println("Erro! "+e.getMessage());
            }catch (FiguraException e){
            System.out.println("Erro! "+e.getMessage());
            }
        }


    }
}
