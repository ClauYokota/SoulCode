import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraPorcentagemTest {
    public static void main(String[] args) {
        testCalculadoraPorcentagemValida();
        testCalculadoraPorcentagemInvalida();
    }
        public static void testCalculadoraPorcentagemValida() {
            CalculadoraPorcentagem calculo = new CalculadoraPorcentagem();
            String resultado = calculo.calcular(50, 1000.0);
            String resultadoEsperado = "50% de 1000,0 = 500,0";

            if (resultado.equals(resultadoEsperado)) {
                System.out.println("Teste deu bom!");
            }else {
                System.out.println("Teste deu ruim!");
                System.out.println(resultado);
            }
        }


    public static void testCalculadoraPorcentagemInvalida(){
        CalculadoraPorcentagem calc = new CalculadoraPorcentagem();
        String resultado = calc.calcular(-40,1000.0);

        if (resultado ==null){
            System.out.println("Teste deu bom!");
        }else{
            System.out.println("Teste deu ruim!");
            System.out.println(resultado);
        }
    }

    @Test
    public void testCalculadoraValida(){
        CalculadoraPorcentagem calc = new CalculadoraPorcentagem();
        String resultado = calc.calcular(50,1000.0);
        String resultadoEsperado = "50% de 1000,0 = 500,0";
        assertEquals(resultado,resultadoEsperado);
    }

    @Test
    public void testCalculadoraInvalida(){
        CalculadoraPorcentagem calc = new CalculadoraPorcentagem();
        String resultado = calc.calcular(-40,1000.0);
       assertEquals(resultado,null);
    }

}
//
//Vamos passar 2 parametros:
//
//1 - percentual - 0 a 100;
//
//2 - total = double