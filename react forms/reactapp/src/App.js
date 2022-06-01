import {Component} from 'react';
import Button from '@mui/material/Button';

class App extends Component{

    state = {
        firstName: '',
        lastName: '',
        country: '',
        title: '',
    }

    handleChange = (e) => {
        // const value = e.target.value

        // this.setState({
        //     firstName: value
        // })
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const {firstName, lastName, country , title} = this.state.firstName
        return (
            <div>
               {/* <label htmlFor='firstName'>First Name:</label>
               <input
                   type= 'text'
                   id = 'firstName'
                   name = 'firstName'
                   placeholder='First Name'
                   value={firstName}
                   onChange={this.handleChange}

               />

               <h1>{this.state.firstName}</h1> */}

               <div>
                   <h3>This is a Form</h3>

                   <form onSubmit={this.handleSubmit}>

                       <div>
                          <input
                                type= 'text'
                                id = 'firstName'
                                name = 'firstName'
                                placeholder='First Name'
                                value={firstName}
                                onChange={this.handleChange}
                           />
                       </div>
                       <div>
                          <input
                                type= 'text'
                                id = 'lastName'
                                name = 'lastName'
                                placeholder='last Name'
                                value={lastName}
                                onChange={this.handleChange}
                          />
                       </div>

                       <div>
                            <input
                                type= 'text'
                                id = 'country'
                                name = 'country'
                                placeholder='Country Name'
                                value={country}
                                onChange={this.handleChange}

                            />
                       </div>

                       <div>
                            <input
                                type= 'text'
                                id = 'title'
                                name = 'title'
                                placeholder='Title Name'
                                value={title}
                                onChange={this.handleChange}

                            />
                       </div>
                       <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>

                       {/* <button className='btn btn-success'>Submit</button> */}
                   </form>
               </div>
            </div>
        )
    }
}
export default App