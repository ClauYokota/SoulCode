public class ConversorTemperatura {
    public double celsiusToFahrenheit(double tempC){
        return (tempC*(9.0/5.0)+32.0);
    }

    public double fahrenheitToCelsius(double tempF){
        return (tempF-32.0)*(5.0/9.0);
    }
}
