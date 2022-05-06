import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/sunshade2.jpg';

// import './index.css';

// const jsxElement = <h1>This is First react App</h1>

const welcome =`welcome to react sessions`;
const title =`First session of react`;
const subtitle = `JavaScript Class`;
const student = {
    firstname : `Jitesh`,
    lastname : `Thakur`
};
const date = `May 3, 2022`;

// hexa decimal color generator
// start with --> #000000 - black
const hexaColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * str.length)
        color += str[index]  // color = color + str[index]
    }
    return '#' + color
}
const HexaColor = () => (
    <div style = {{backgroundColor : `${hexaColor()}`}}>
        {hexaColor()}
    </div>
)


const headerstyle = {
    // backgroundImage : `url(${userImage})`,
    backgroundColor: 'cyan',
    fontFamily: 'Helvetic Neue',
    padding:25,
    lineHeight: 1.5,
}


// const header = (
//     <header style={headerstyle}>
//         <h1>Welcome to react js</h1>
//         <h2>Second react session</h2>
//         <p>First session for react</p>
//         <small>April 28,2022</small>
//     </header>
// );

// React Component
const Header = () => {
    return (
        <header style={headerstyle}>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>Member: {student.firstname} {student.lastname}</p>
        <small>{date}</small>
    </header>
    );
}

const UserCard = () => (
    <div>
        <img src ={userImage} alt='Sorry'/>
        <h2>
            {student.firstname} {student.lastname}
        </h2>
    </div> 
)

const tech = ['HTML', 'CSS', 'JavaScript'];
const techFormatted = tech.map((tall) => <li>{tall}</li>)

const Main = () => (
    <main>
        <p>This is the first para for the development of react app</p>
        <ul>
           {techFormatted}
        </ul>
        <UserCard />
        <HexaColor/>
    </main>
);

// const footer = (
//     <footer>
//         <p>Copyright 2022</p>
//     </footer>
// );

const Footer = () => (
    <footer>
         <p>Copyright 2022</p>
    </footer>
)
// const user = (
//     <div>
//         <img src ={userImage} alt='Sorry'/>
//         <img src ={MyImage} alt='Sorry'/>
//         <img src ={MyImage1} alt='Sorry'/>
//         <img src ={MyImage2} alt='Sorry'/>
//         <img src ={MyImage3} alt='Sorry'/>
//     </div> 
// );

const User = () => (
    <div style = {{backgroundRepeat: 'no-repeat'}}>
        <img src ={userImage} alt='Sorry'/>
    </div> 
)

// const app = (
// <div>
//     {header}
//     {main}
//     {user}
//     {footer}
// </div>
// );

const App = () => (
 <div style = {{
    backgroundImage : `url(${userImage})`}}  >

    <Header/>
    <Main/>
    <User/>
    <Footer/>
 </div> 
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>

);

