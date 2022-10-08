public class AloMundo{
    public static void main (String[] args){
        System.out.println("Bem vindos ao mundo Java");

        int idade;
        idade = 15;
        System.out.println("a idade é: " + idade); //quebra linha 
        System.out.printf("%s","Exemplo de print com printf"); //não quebra linha 
        System.out.printf("%s%n","Exemplo de print com printf"); //quebra linha

        //OPERADORES ARITMÉTICOS
        // soma -> +
        // subtração -> -
        // multiplicação -> *
        // divisão -> /
        // resto da divisão -> %
        
        int num1 = 5;
        int num2 = 2;
        int resto = 5%2;

        int x = 10;
        long y; 

        y = x; //não da erro pois um conteudo long, por ser maior, comporta a variável int dentro dela 

        // x = y; // uma variável long é maior que uma variável int então daria erro

        //x = (int)y  -> não daria erro, mas não é aconselhável fazer por poder perder valores, informação

        char letra = 'k'; //sempre tem que ser colocada com '' aspas simples

        float numero = 3;

        System.out.printf("%n%.2f%n",numero); //duas casas decimais depois da virgula


        //%d	representa números inteiros
        //%f	representa números floats
        //%2f	representa números doubles
        //%b	representa valores booleanos
        //%c	representa valores char

        //Mais sobre atribuições

        int a = 1;
        int b = 2;

        a = a + b; // =   a +=b;

        a *=b;
  

        //incremento
        a = a + 1;  // = a++

        int i = 5;
        int z;
        z = i +1;
        System.out.println(z);
        z = ++i; //incrementa e depois atribui => z= i+1  i=i+1
        System.out.println("valor de z = "+z);
        System.out.println("valor de i = "+i);

        z = i++; //primeiro atribiu e depois incrementa =: z=i  i=i+1
        System.out.println("valor de z = "+z);
        System.out.println("valor de i = "+i);

        /* int meuNumero;
        Integer 

        double => Double

        float => Float (variável por referência) */

        String palavra = "macaco";






    }
}