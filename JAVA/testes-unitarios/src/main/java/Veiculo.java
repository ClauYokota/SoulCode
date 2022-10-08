import java.time.LocalDate;

public class Veiculo {
    private int rodas;
    private double tanque; //capacidade todal de combustível
    private int ano;
    private double consumoCombustível; //km/L
    private boolean ligado = false;

    public Veiculo(int rodas, double tanque, int ano, double consumoCombustível) {
        this.rodas = rodas;
        this.tanque = tanque;
        this.ano = ano;
        this.consumoCombustível = consumoCombustível;
    }

    public boolean viajar (double dist){
        if(ligado && dist>=0){
            double litrosGastos = dist/consumoCombustível;
            if(tanque - litrosGastos > 0){
                tanque-= litrosGastos;
                return true;
            }else {
                return false;
            }
        }else{
            return false;
        }
    }

    public void ligar(){
        if(LocalDate.now().getYear() - ano <= 50){
        ligado = true;
        }
    }
    public void desligar(){
        ligado = false;
    }

    public int getRodas() {
        return rodas;
    }

    public void setRodas(int rodas) {
        this.rodas = rodas;
    }

    public double getTanque() {
        return tanque;
    }

    public void setTanque(double tanque) {
        this.tanque = tanque;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public double getConsumoCombustível() {
        return consumoCombustível;
    }

    public void setConsumoCombustível(double consumoCombustível) {
        this.consumoCombustível = consumoCombustível;
    }
    public boolean getLigado() {
        return ligado;
    }

    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

}
