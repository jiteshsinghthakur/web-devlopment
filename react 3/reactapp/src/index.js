import React from 'react';
import ReactDOM from 'react-dom/client';

// class commponents

// class Component {
//   constructor() {

//   }
// }

// class Child extends React.Component {
//   constructor(props){
//     super(props){

//     }
//   }
// } 

//functional component
// const Header = () => {
//   return (
//     <header>
//       <div>
//         <h1>React Component</h1>
//       </div>
//     </header>
//   )
// }

//class component
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     //code that need to be executed before render
//   }

//   render() {
//     console.log(this.props.data);
//     return (
//       <header>
//         <div>
//           <h1>{ this.props.data.welcome }</h1>
//           <h2>{ this.props.data.title }</h2>
//           <h3>
//             { this.props.data.student.firstname } {this.props.data.student.Lastname}
//           </h3>
//           <small>{this.props.data.date}</small>
//         </div>
//     </header>
//     )
//   }
// }



//destructuring
class Header extends React.Component {
  constructor(props) {
    super(props)
    //code that need to be executed before render
  }

  render() {
    console.log(this.props.data);

    const {
      welcome,
      title,
      subtitle,
      student: {firstname, lastname},
      date,
    } = this.props.data
    return (
      <header>
        <div>
          <h1>{ welcome }</h1>
          <h2>{ title }</h2>
          <h3>{ subtitle }</h3>
          <h3>
            { firstname } {lastname}
          </h3>
          <small>{date}</small>
        </div>
    </header>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <div>
          <h2>Learning React class</h2>
          <p>Class Component</p>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div>
          <p>Copyright 2022</p>
        </div>
      </footer>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
  }

 render() {
  const data = {
    welcome: "Hello welcome to components",
    title: "react Class",
    subtitle: "this is react session",
    student: {
      firstname: "Jitesh",
      lastname: "Thakur"
    },
    date: "May 11, 2022"
  }
 
   return(
     <div>
       <Header data={data} />
       <Main />
       <Footer />
     </div>
   )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>

);