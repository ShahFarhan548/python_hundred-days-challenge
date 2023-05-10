class Train{
    constructor(color,lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);// get prototype is the built in function in the js
        console.log(proto);
    }
}
class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color , lightsOn){
        // inheriting both the properties from the parent class
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed (){
       this.highSpeedOn = !this.highSpeedOn;
    }
    highSpeedStatus(){
        console.log("high speed status : ", this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("the lights are 100 % operational ");
    }


}
// let Train1 = new Train("red", false); 
// console.log (Train1);
// Train1.toggleLights();
// Train1.lightsStatus();
// Train1.getPrototype();
let Train2 = new HighSpeedTrain(50,false,'blue',false);
Train2.toggleHighSpeed();
Train2.highSpeedStatus();
Train2.getPrototype();
Train2.toggleLights();
Train2.toggleLights();





