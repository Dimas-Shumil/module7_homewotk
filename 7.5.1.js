// "Яркость лампы установлена на 80 %."
// "Настольная лампа включен(а) в розетку."
// "Компьютер включен(а) в розетку."
// "Компьютер Apple MacBook Pro запущен."
// "Суммарная потребляемая мощность: 540 Вт."
// "Яркость лампы установлена на 0 %."
// "Настольная лампа выключен(а) из розетки."
// "Компьютер выключен(а) из розетки."
// "Компьютер Apple MacBook Pro выключен."
// "Суммарная потребляемая мощность: 0 Вт."

class Devices {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    plugIn() {
      this.pluggedIn = true;
      Devices.totalPower += this.power;
      console.log(`${this.name} включен(а) в розетку.`);
    }
  
    unplug() {
      this.pluggedIn = false;
      Devices.totalPower -= this.power;
      console.log(`${this.name} выключен(а) из розетки.`);
    }
  }
  
  Devices.totalPower = 0;
  
  class DeskLamp extends Devices {
    constructor(brightness) {
      super("Настольная лампа", 40);
      this.brightness = brightness;
    }
  
    adjustBrightness(brightness) {
      this.brightness = brightness;
      console.log(`Яркость лампы установлена на ${brightness} %.`);
    }
  }
  
  class Computer extends Devices {
    constructor(brand, model, power) {
      super("Компьютер", 500);
      this.brand = brand || "Неизвестно";
      this.model = model || "Неизвестно";
    }
  
    turnOn() {
      super.plugIn();
      console.log(`Компьютер ${this.brand} ${this.model} запущен.`);
    }
    
     turnOff() {
      super.unplug();
      console.log(`Компьютер ${this.brand} ${this.model} выключен.`);
    }
  }
  
  const lamp = new DeskLamp();
  const computer = new Computer("Apple", "MacBook Pro");
  
  const brightness = new DeskLamp()
  brightness.adjustBrightness(80)
  
  lamp.plugIn();
  computer.turnOn();
  
  console.log(`Суммарная потребляемая мощность: ${Devices.totalPower} Вт.`);
  
  brightness.adjustBrightness(0)
  
  lamp.unplug();
  computer.turnOff();
  
  console.log(`Суммарная потребляемая мощность: ${Devices.totalPower} Вт.`);