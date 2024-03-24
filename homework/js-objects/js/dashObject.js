
const showDash=(numerator,banner)=> {
  console.log(`${numerator}\n---\n${banner}`);
}


const dashFirst = {

  numerator: 1,

  banner: 6,

  
};

const dashSecound = {

  numerator: 6,

  banner: 7,

  
};

const dashCalc = {
  numeratorResult:0,
  bannerResult:0,

  bannerEqualizer(b1, b2) {
    return b1 * b2;
  },

  numeratorEqualizer(n, b2) {
    return n * b2;
  },

  dashAddition(n1, b1, n2, b2) {
    this.numeratorResult =
      this.numeratorEqualizer(n1, b2) + this.numeratorEqualizer(n2, b1);

    this.bannerResult = this.bannerEqualizer(b1, b2);

    showDash(this.numeratorResult,this.bannerResult);
  },

  dashSubstraction(n1, b1, n2, b2) {
    this.numeratorResult =

      this.numeratorEqualizer(n1, b2) - this.numeratorEqualizer(n2, b1);

    this.bannerResult = this.bannerEqualizer(b1, b2);

    showDash(this.numeratorResult,this.bannerResult);
  },

  dashMultiply(n1, b1, n2, b2) {
    this.numeratorResult = n1 * n2;

    this.bannerResult = this.bannerEqualizer(b1, b2);

    showDash(this.numeratorResult,this.bannerResult);
  },

  dashSimplify() {

    for (let i = this.bannerResult; i != 0; i--) {

      if (this.bannerResult % i === 0 && this.numeratorResult % i === 0) {

        this.numeratorResult = this.numeratorResult / i;

        this.bannerResult = this.bannerResult / i;

        break;

      }
    }

    showDash(this.numeratorResult,this.bannerResult);
  },
};
export { dashFirst };
export { dashSecound };
export{showDash};
export default dashCalc;
