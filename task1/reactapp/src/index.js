import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const header =(
  <header>
    <h1>SUBSCRIBE</h1>
  </header>
);

const main =(
  <main>
    <p>sign up with your email address to recieve news and updates.</p><br></br>
    <input style={{height:'30px',width:'200px',borderRadius:'5px'}} type="text" placeholder="First name" required=""></input> {' '}
    <input style={{height:'30px',width:'200px',borderRadius:'5px'}} type="text" placeholder="Last name" required=""></input> {' '}
    <input style={{height:'30px',width:'200px',borderRadius:'5px'}} type="text" placeholder="Email" required=""></input>
  </main>
);

const footer =(
  <footer>
    <button style={{backgroundColor: "#F27475", height:'40px', width:'300px',borderRadius:'5px'}}>Subscribe</button>
  </footer>
);

const app =(
  <div style= {{backgroundColor:'#C2E6F4'}}>
    {header}
    {main}<br></br>
    {footer}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);

