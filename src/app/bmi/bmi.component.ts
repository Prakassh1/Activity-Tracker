import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  height: number;
  weight: number;
  bmi: number;
  measure: String;
  constructor() { }

  ngOnInit() {
  }
  calcBMI(){
    this.bmi = this.weight/((this.height/100)*(this.height/100));
    this.bmi = parseInt(this.bmi.toFixed(1));
    // this.bmi = Math.round(this.bmi*10^1)/10^1;
    if (this.bmi <= 18.4) {
      this.measure = "Your BMI is " + this.bmi + " which means " + "you are Underweight";
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      this.measure = "Your BMI is " + this.bmi + " which means " + "You are Normal";
    } else if (this.bmi >= 25 && this.bmi <= 29.9) {
      this.measure = "Your BMI is " + this.bmi + " which means " + "You are Overweight";
    } else if (this.bmi >= 30) {
      this.measure = "Your BMI is " + this.bmi + " which means " + "You are Obese";
    } else{
      console.log("No Output");
    }
    console.log(this.bmi);
  }
}

    