const car = {
  Brand: 'Nissan',

  Model: 'QASHQAI',

  ProductionYear: 2023,

  MiddleSpeed: '98 km/h',

  fuelVolume: '55 litres',

  fuelUsage: '5.3 per km',

  Drivers: ['Valentyn'],
  
  nameCheck(arg) {
    if (!arg || typeof arg !== 'string' || arg.length < 3) {
      throw new Error(`Введено не ім'я!!!!!!!!`);
    }
  },

  numCheck(n) {
    if (typeof n !== 'number' || isNaN(n) || n < 0) {
      throw new Error(`помилка вводу. Введіть додатнє число`);
    }
  },

  showInfo() {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    });
  },
  AddDrivers(driver) {
    this.nameCheck(driver);
    this.Drivers.push(driver);
  },
  checkDrivers(driver) {
    this.nameCheck(driver);
    return this.Drivers.includes(driver);
  },

  calcTravel(distance) {
    this.numCheck(distance);
    const Fuel = +(distance / parseFloat(this.fuelUsage)).toFixed(2);
    const roadHours = Math.floor(distance / parseInt(this.MiddleSpeed));
    const roadMinutes = Math.round(
      (distance / parseInt(this.MiddleSpeed) - roadHours) * 60
    );
    if (roadHours / 4 >= 1) {
      const travelHours = roadHours + Math.trunc(roadHours / 4);
    }
    const travelHours = roadHours;
    console.log(
      `Витрачено пального: ${Fuel} літра. Потрібно дозаправок: ${Math.trunc(
        Fuel / parseInt(this.fuelVolume)
      )}`
    );
    console.log(
      `Витрачено на дорогу ${travelHours} годин ${roadMinutes} хвилин`
    );
  },
};

export default car;
