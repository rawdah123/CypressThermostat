 class Thermostat{
    constructor(){
     this.temperature = 20;
     this.powerSaving = true;
    }
    up(number){
        if(number + this.temperature <= this.getMaximumTemperature()){
            return this.temperature += number
        }
        else{
            return 'Maximum temperature is ' +this.getMaximumTemperature()
        }
    }
    down(number){
        return this.temperature - number >= 10 ? this.temperature -= number
        : 'Minimum temperature is 10'; 
    }
    getMaximumTemperature(){
        return this.powerSaving ? 25: 32
    }
    turnPowerSavingOn(){
        this.powerSaving = true; 
    }
    turnPowerSavingOff(){
        this.powerSaving = false; 
    }
    reset(){
        this.temperature = 20; 
    }
    getUsage(){
        
            if (this.temperature < 18){
                return 'low-usage';
            }
            else if(this.temperature <= 25){
                return 'medium-usage'; 
            }
            else{
                return 'high-usage'; 
            }
    }

}