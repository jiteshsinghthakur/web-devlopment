// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const jsxElement = <h1>This is First react App</h1>
// // const rootElement = document.getElementById('root')

// // ReactDOM.render(jsxElement, rootElement)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   jsxElement
// );

import React from 'react';
import ReactDOM from 'react-dom/client';

const header (
    <header>
        <h1>SUBSCRIBE</h1>
    </header>
);
const main (
    <main>
        <p>sign up with your email address to recieve news and updates</p>
        <button>First Name</button>
    </main>
);





const app (
    <div>
      {header}
      {main}
    </div>
);










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
app

);

