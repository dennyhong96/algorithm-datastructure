class Student {
  constructor(fName, lName, year) {
    // "this" always refers to the instance objects
    this.fName = fName;
    this.lName = lName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  // instance methods - refers to individual instance
  fullName() {
    return `Your full name is ${this.fName} ${this.lName}.`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `You are expelled!!!`;
    }
    return `${this.fName} has been late for ${this.tardies} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvg() {
    return this.scores.reduce((acc, cur) => acc + cur, 0) / this.scores.length;
  }

  // class methods: utility functions
  static enrollStudents() {
    return "Enrolling Students...";
  }
}

const denny = new Student("Denny", "Hong", 4);
const sharon = new Student("Sharon", "Zhang", 4);
console.log(denny.addScore(50));
console.log(denny.addScore(60));
console.log(denny.addScore(70));
console.log(denny.calculateAvg());
console.log(Student.enrollStudents());
