import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';


//syntax of functional components
// const jsx = <tag>Content</tag>

// const ComponentName = () => {
//   return jsx
// }

const getUser = (firstname, lastname, title, skills) => {
  return `${firstname} ${lastname}, ${title} developer. He Knows ${skills}`
}
const skills = [`HTML`, `CSS`, `JavaScript`]
console.log(getUser("Jitesh", "Thakur", 'FRontend', Skills));
// output --->   Jitesh Thakur, a frontend developer. He knows HTML CSS JavaScript

class Parent {
  constructor (firstname, lastname, country, title){
      this.firstname = firstname       // leftside firstname--> class object , right side---> local variable
      this.lastname = lastname
      this.country = country
      this.title = title
  }
  getInfo() {
      return `${this.firstname} ${this.lastname}, a ${this.title} developer. He is from ${this.country}`
  }
}
const p1 = new Parent('Jitesh', 'Thakur', 'India', 'PubG Player');    //generate unique id

class Child extends Parent {
  constructor(firstname, lastname, country, title, skills) {
      super(firstname, lastname, country, title)
      this.skills = skills
  }
  getChildInfo() {
      return `${this.firstname} ${this.lastname}, a ${this.title} developer. He is from ${this.country}. He knows ${this.skills}`
  }
}

const c1 = new Child ('Jitesh', 'Thakur', 'India', 'Backend', 'ReactJs');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
app

);