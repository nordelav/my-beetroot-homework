const time = {
  hours: 17,
  minutes: 17,
  secounds: 40,
  numCheck(n) {
    if ((!n)||typeof n !== 'number' || isNaN(n)  ){
      throw new Error(`помилка вводу. Введіть число`);
    }
  },
  showTime() {
    const time = [];
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== 'function') {
        time.push(this[key]);
      }
    });
    console.log(time.join(':'));
  },

  timeCorrector() {
    if (this.secounds >= 60);

    this.minutes = this.minutes + Math.floor(this.secounds / 60);
    this.secounds = this.secounds % 60;

    if (this.minutes >= 60);

    this.hours = this.hours + Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;

    if (this.hours >= 24) {
      this.hours = this.hours%24;
    }
  },

  addSecounds(s) {
    this.numCheck(s);
    this.secounds += s;
    this.timeCorrector();
  },

  addMinutes(m) {
    this.numCheck(m);
    this.minutes += m;
    this.timeCorrector();
  },

  addHours(h) {
    this.numCheck(h);
    this.hours += h;
    this.timeCorrector();
  },
};

export default time;
