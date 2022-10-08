public class EstruturaCondicao{
    public static void main(String[] args) {

        //CONDIÇÃO IF

        boolean condicao = false; //sempre inicia como false

        if(!condicao){
            System.out.println("A condição está verdadeira");
        }else{
            System.out.println("A condição está falsa");
        }

        int nota = 80; //média para aprovação é 60
        int falta = 4; //o número máximo de faltas = 5

        if(nota >= 60 && falta<=5){
            System.out.println("Aluno aprovado");
        }else if(nota >=40){
            System.out.println("Aluno em recuperação");
        }else{
            System.out.println("Aluno reprovado");
        }

        String resultado = "";
        resultado = (nota>=60)? "Aprovado" : "Reprovado";
        System.out.println(resultado);

        int posicao = 1;

        switch(posicao){
            case 1:
                System.out.println("Você chegou em primeiro lugar");
                break;
            case 2:
                System.out.println("Você chegou em segundo lugar");
                break;
            case 3:
                System.out.println("Você chegou em terceiro lugar");
                break;
            case 4: case 5: case 6:
                System.out.println("Você ganhou um prêmio de participação");
                break;
            default:
                System.out.println("Você não teve colocação");
        }


}}