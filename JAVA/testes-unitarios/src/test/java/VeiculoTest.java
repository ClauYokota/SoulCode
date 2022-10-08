import org.junit.jupiter.api.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static org.junit.jupiter.api.Assertions.*;

public class VeiculoTest {


    static int totalTests ;
    static DateTimeFormatter timeFormatter;

    @BeforeAll //executa antes de todos os testes
    public static void beforeAll(){
        totalTests = 0;
        timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    }

    @AfterAll //ao final de todos os testes
    public static void afterAll(){
        System.out.println("Total de testes: "+totalTests);
    }
    @BeforeEach //executa antes de CADA teste
    public void beforeEach(){
        totalTests++;
        LocalDateTime agora = LocalDateTime.now();
        System.out.println("[START] Teste #" + totalTests + " | " + agora.format(timeFormatter));
    }

    @AfterEach //executa após CADA teste
    public void afterEach(){
        LocalDateTime agora = LocalDateTime.now();
        System.out.println("[END] Teste #" + totalTests + " | " + agora.format(timeFormatter));
    }
    @Test
    public void testCarroNaoViajaDesligado(){
        Veiculo v = new Veiculo(4,20,2000,10);
        boolean viajou = v.viajar(1);
        assertFalse(viajou);
    }

    @Test
    public  void testVeiculoContaCorrentamenteCombustivel(){
        Veiculo v = new Veiculo(4,30,2000,30);
        v.ligar();
        v.viajar(60);
        assertEquals(28.0, v.getTanque(),0.0);
    }

    @Test
    public void testVeiculoViajaApenasOPossovel(){
        Veiculo v = new Veiculo(4,30,2000,30);
        v.ligar();
        boolean viajou = v.viajar(100_000_000);
        assertFalse(viajou);
    }

    @Test
    public void testVeiculoNaoGastaCombustivel(){
        Veiculo v = new Veiculo(4,30,2000,30);
        double tanqueAtual = v.getTanque();
        v.ligar();
        v.viajar(100_000_000);
        assertEquals(tanqueAtual,v.getTanque(),0.0);
    }
    //Pratica: Ajsutar o método viajar() para não aceitar valores negativos e criar um @Test para essa situação
    @Test
    public void testViajarDistanciaPositiva(){
        Veiculo v = new Veiculo(4,20,2000,10);
        v.ligar();
        boolean viagem = v.viajar(10);
        assertTrue(viagem);
    }

    @Test
    public void testViajarDistanciaNegativa(){
        Veiculo v = new Veiculo(4,20,2000,10);
        v.ligar();
        boolean viagem = v.viajar(-10);
        assertFalse(viagem);
    }

    //Pratica II: Fazer teste unitário da classe CalculadoraPorcentagem (aplicarJUNIT)

    @Test
    public void testVeiculoAntigoNaoLiga(){
        Veiculo v1 = new Veiculo(4, 20, 1900, 10);
        v1.ligar();
        assertFalse(v1.getLigado());
    }

    @Test
    public void testVeiculoRecenteLiga(){
        Veiculo v2 = new Veiculo( 4,20,2000,10);
        v2.ligar();
        assertTrue(v2.getLigado());
    }
}
