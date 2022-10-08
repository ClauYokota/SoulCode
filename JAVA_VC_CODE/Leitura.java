import java.util.Scanner;

public class Leitura{
    public static void main(String [] args){

        Scanner leitor = new Scanner(System.in);

        System.out.println("Digite um número: ");

        int numero = 0;
        numero = leitor.nextInt();

        System.out.println("O núnmero digitado foi: "+numero);

        //leitor.close();

    }
}