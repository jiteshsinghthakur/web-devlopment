import React from 'react';
import ReactDOM from 'react-dom/client';

//  Mapping array of numbers
// const Numbers =(props) => {
//   const list = props.numbers.map( (num) => <li>{num}</li> )
//   return list
// }


//destructuring
// const Numbers =({numbers}) => {
//   const list = numbers.map( (num) => <li>{num}</li> )
//   return list
// }

// const App = () => {
//   const numbers = [1,2,3,4,5]
//   return (
//     <div className='container'>
//       <div>
//         <h1>Numbers</h1>
//         <ul>
//           <Numbers numbers = {numbers} />
//         </ul>
//       </div>
//     </div>
//   )
// }

//Mapping array of array
// const skills = [
//   ["HTML", 10],
//   ["CSS", 7],
//   ["JavaScript",9],
//   ["React",10],
// ]

// const Skill = ({skill: [tech, level]}) => {
//   return (
//    <li>
//      {tech} {"-->"} {level}
//    </li>
//   )
// }

// const Skills = ({skills}) => {
//   const skillList = skills.map( (s) => <Skill skill ={s} /> )
//   console.log(skillList);
//   return skillList
// } 
// const App = () => {
//   return(
//     <div className='container'>
//      <div>
//        <h1>Skills Level</h1>
//          <ul>
//            <Skills skills = {skills} />
//          </ul>
//        </div>
//     </div>

//   )
// }


//list keys

// const Numbers =({numbers}) => {
//   const list = numbers.map( (num) => <li key={num}>{num}</li> )
//   return list
// }

// const App = () => {
//   const numbers = [1,2,3,4,5]
//   return (
//     <div className='container'>
//       <div>
//         <h1>Numbers</h1>
//         <ul>
//           <Numbers numbers = {numbers} />
//         </ul>
//       </div>
//     </div>
//   )
// }


//mapping array of objects

const countries = [
  {name: 'India', city: 'Indore'},
  {name: 'Bhutan', city: 'Goa'},
  {name: 'Nepal', city: 'Bhopal'},
  {name: 'US', city: 'Indore'},
  {name: 'Srilanka', city: 'Indore'}

]

// { country: {name, city} } = {con}
const Country = ({country: {name, city}}) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({countries}) => {
  const countryList = countries.map( (con) => (
    <Country key={con.name} country={con} />
  ))
  return (
    <div>
      {countryList}
    </div>
  )

}

const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>countries List</h1>
        <Countries countries = {countries} />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>

);