public class PrincipalFinanciamento {
    public static void main(String[] args) {
        try {
            Financiamento f1 = new Financiamento(10000, 1000, 4);
            System.out.printf("%s%.2f", "O seu financiamento foi de: ", f1.getValorTotal());
        }catch(FinanciamentoException e){
            System.out.println("Erro na proposta do financiamento: " +e.getMessage());
        }finally {
            System.out.println("Agradecemos a sua confiança!");
        }
    }
}
