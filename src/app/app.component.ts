import { style } from '@angular/animations';
import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = 100;
  color = "green";
  bgColor = 'magenta';
  datas = 10; // this is used for giving value from child to component  
  // this property use for toggle form
  display = false
  updateColor() {
    this.color = "red"
    this.bgColor = "blue"
  }
  name = "Sachin"
  disable = true
  show = "yes"; // we set show for if property . here we set value of show true then is show our code on crome.
  colors = "red"; // we set property for else if statement,
  colour = "green"
  users = ['Sachin', 'Rohit', 'Ashish', 'Chirag'];
  userDetails = [
    { name: 'Sachin', email: 'sachin@gmail.com', phone: '1234' },
    { name: 'Chirag', email: 'chirag@gmail.com', phone: '2234' },
    { name: 'Rohit', email: 'rohit@gmail.com', phone: '2314' },
    { name: 'Ashish', email: 'ashish@gmail.com', phone: '3244' },

  ];

  clients = [
    { name: 'Sam', phone: '1122', socialAccounts: ['youtube', 'instagram', 'facebook'] },
    { name: 'Peter', phone: '1313', socialAccounts: ['twiter', 'tagram', 'book'] },
    { name: 'Ishu', phone: '3322', socialAccounts: ['yahoo', 'insta', 'face'] },
    { name: 'Joseph', phone: '4422', socialAccounts: ['tube', 'stagr', 'cebook'] },

  ]

  getName(name: string) {
    alert(name);
  }
  getStatus() {
    alert("Status")
  }
  getData(value: string) {
    console.log(value);
  }
  getValue(val: String) {
    console.warn(val)
  }
  count = 0
  counter(type: string) {
    type === 'add' ?
      this.count++ : this.count--
  }
  //  This function is for FORM.
  getFunction(data: any) {
    console.warn(data);

  }
  //this is the function of toggle
  toggle() {
    this.display = !this.display;
  }

}