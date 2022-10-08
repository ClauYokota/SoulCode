public class CalculadoraPorcentagem {
    public String calcular(int percentual, double valor) {
        if (percentual >= 0 && percentual <= 100) {
            double resultado = (percentual / 100.0) * valor;
            return String.format("%d%% de %.1f = %.1f", percentual, valor, resultado);
        }
        return null;
    }
}
