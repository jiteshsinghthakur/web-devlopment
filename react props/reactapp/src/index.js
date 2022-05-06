import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
    console.log(props);

    return (
      <header>
        <div className='header-wrapper'>
            <h1>{props.welcome}</h1>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>
                {props.firstname} {props.lastname}
            </p>
            <small>{props.date}</small>
        </div>
      </header>
    )
}


const User = (props) => {
    return (
        <div>
            <h1>
               {props.firstname} {' '}
               {props.lastname}
            </h1>
            <small>{props.country}</small>
        </div>
    )
}

const Age = (props) => {
    return (
        <div>
            This person is {props.age} years old.
        </div>
    )
}

const Weight = (props) => {
    return(
        <div>
            his weight is {props.weight} Kilograms.
        </div>
    )
}

const Status = (props) => {
 return (
     <p>
         {props.status}
     </p>
    )
} 

const Skills = (props) => {
    const skillList = props.skills.map( (s) => <li>{s}</li> )
    return (
        <ul>
            {skillList}
        </ul>
    )
}

const Head = (props) => {
    return(
        <div>
            <h1>{props.data.welcome}</h1>
            <h2>{props.data.title}</h2>
            <p>{props.data.subtitle}</p>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const welcome = "Welcome to Props"
const title= "First Session"
const subtitle="JavaScript Module"
const firstname="Jitesh"
const lastname="Thakur"
const date="May 5, 2022"


const App = () => {
    let year = 2022
    let birthYear = 1997
    const age = year - birthYear
    const weight = 62
    const status = age > 100 ? "true" : "false"

    const data = {
        welcome: "this is object component",
        title: "js component",
        subtitle:"data from object"
    }

    const helloIndore = () => {
        alert("Hi");
    }

    return (
        <div>
            <Header 
                welcome = {welcome}
                title= {title}
                subtitle={subtitle}
                firstname={firstname}
                lastname={lastname}
                date={date}
            />
            <User firstname= "Jitesh" lastname= "Thakur" country="India"/>
            <Age age={age}/>
            <Weight weight = {weight * 2}/>
            <Status  status={status}/>
            <Skills skills = {['HTML', 'CSS', 'JavaScript']} />
            <Head data={data} />
            <Head data={{
                welcome: "Hello",
                title: "Bye",
                subtitle:"Go Home"
            }} />

            <Button text="Hello from button" onClick={helloIndore} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>

);

