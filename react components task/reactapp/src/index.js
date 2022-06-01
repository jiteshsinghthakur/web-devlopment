import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Avatar from 'react-avatar';

 

const Header = () => {
  return (
    <header>
      <div>
        <h1>Components</h1>
      </div>
    </header>
  )
}

const Main = () => {
    return(
        <main>
            <div>
                <div>
                    <h2>Buttons</h2>
                    <Button variant="contained">Button</Button>{' '} 
                    <Button variant="contained">Button</Button>{' '}
                    <Button variant="contained">Button</Button><br/><br/>
                    <Button variant="contained">Button</Button>{' '}
                    <Button variant="contained">Button</Button><br/><br/>
                    <Button variant="contained">Button</Button>{' '}
                    <Button variant="contained">Button</Button><br/><br/>
                    <Button variant="contained">Button</Button>{' '}
                    <Button variant="contained">Button</Button><br/><br/>
                    <Button variant="contained">Button</Button>{' '}
                    <Button variant="contained">Button</Button>

                    
                </div>
                <div>
                    <h2>Inputs</h2>
                    <input placeholder="placeholder"></input><br/><br/>
                    <input placeholder="search" id="i1" /> <br/> <br/>
                    <input type = "text" id="i1" /> <br/> <br/>
                    <input type = "text" id="i1" /> <br/> <br/>
                    
                </div>
                <div>
                    <h2>Check Boxes</h2>
                    
                    <input type="checkbox" id="c1" />
                    
                    <input type="checkbox" id="c2" />
                    
                    <input type="checkbox" id="c3" />

                    <input type="checkbox" id="c4" />

                    
                </div>
                <div>
                    <h2>Radio Buttons</h2>
                    <input type="radio" id="r1" />
                    
                    <input type="radio" id="r2" />
                    
                    <input type="radio" id="r3" />

                    <input type="radio" id="r4" />
                    
                </div>
                <div>
                    <h2>Icons</h2>
                    <button class="btn"><i class="fa fa-home"></i></button>{' '}
                    <button class="btn"><i class="fa fa-bars"></i></button>{' '}
                    <button class="btn"><i class="fa fa-trash"></i></button>{' '}
                    <button class="btn"><i class="fa fa-close"></i></button>{' '}
                    <button class="btn"><i class="fa fa-folder"></i></button>
                    
                </div>
                <div>
                    <h2>Socials</h2>
                    
                </div>
                <div>
                    <h2>Pictures</h2>
                </div>
               
            </div>
        </main>
    )
}

// const Avatar = () => {
//     return(
//         <div>
//             <h2>Avatars</h2>
//             <Avatar googleId="118096717852922241760" size="100" round={true} />
//             <Avatar facebookId="100008343750912" size="150" />
//             {/* <Avatar
//             alt="Remy Sharp"
//             src="/static/images"
//             sx={{ width: 24, height: 24 }}
//             />
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//             <Avatar
//             alt="Remy Sharp"
//             src="/static/images/avatar/1.jpg"
//             sx={{ width: 56, height: 56 }}
//             /> */}
//         </div>
//     )
// }

const App = () => {
    return(
        <div>
            <Header />
            <Main />
            <Avatar />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<App />

);