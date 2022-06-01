import {Component} from 'react';

const options = [
    {
        value: '',
        label: '-- Select Country --',
    },
    {
        value: 'INDIA',
        label: 'India',
    },
    {
        value: 'Nepal',
        label: 'Nepal-',
    },
    {
        value: 'Srilanka',
        label: 'Srilanka',
    },
    {
        value: 'USA',
        label: 'USA',
    },

]

const selectOptions = options.map(({value, label}) => (
    <option value = {value}>{label}</option>
))

class App extends Component{
    state= {
        firstName: '',
        lastName:'',
        email: '',
        country: '',
        file: '',
        bio: '',
        skills: {
            html:false,
            css: false,
            javascript: false,
        }
    }
    // handleChange
    handleChange = (e) => {
        const { name, value, type } = e.target
        if (type === 'file'){
            console.log(type, 'Check Here');
            this.setState({
                [name]: e.target.files[0]
            })
        } else{
            this.setState({
                [name]: value
            })
        }
    }

    //validate

    validate = () => {
        const errors = {
            firstName: ''
        }
        if ( (this.state.firstName.length < 3) || (this.state.firstName.length >12) ){
            errors.firstName = 'first name should be between 3 and 12'

        }
        return errors
    }

    // handleSubmit
    handleSubmit = (e) => {
        e.preventDefault()
        const {
            firstName,
            lastName,
            email,
            country,
            bio,
            file,
            skills
        } = this.state

        const data = {
            firstName,
            lastName,
            email,
            country,
            bio,
            file,
            skills
        }

    console.log(data);
    }

   
    render() {
        const {
                firstName,
                lastName,
                email,
                country,
                bio,
        } = this.state

        const {firstValidate} = this.validate()
        //                      {fisrtName: ''}

        return (
            <div>
              
               <div>
                   <h3>Form</h3>

                   <form onSubmit={this.handleSubmit}>

                       <div>
                          <input
                                type= 'text'
                                name = 'firstName'
                                placeholder='First Name'
                                value={firstName}
                                onChange={this.handleChange}
                           />
                           <br />
                           <small>{firstValidate}</small>
                       </div>
                       <div>
                          <input
                                type= 'text'
                                name = 'lastName'
                                placeholder='last Name'
                                value={lastName}
                                onChange={this.handleChange}
                          />
                       </div>

                       <div>
                            <input
                                type= 'email'
                                name = 'email'
                                placeholder='Email'
                                value={email}
                                onChange={this.handleChange}

                            />
                       </div>

                       <div>
                           <label htmlFor='bio' ></label><br />
                            <textarea
                                id='bio'
                                name = 'bio'
                                placeholder='BIo'
                                value={bio}
                                onChange={this.handleChange}
                                cols='120'
                                rows='10'

                            />
                       </div>

                       <div>
                            <label htmlFor='bio' ></label><br />
                            <select name = 'country' id='country' onChange={this.handleChange}>
                                {selectOptions}
                            </select>

                       </div>

                       <div>
                            <input
                                type= 'file'
                                name='title'
                                onChange={this.handleChange}

                            />
                       </div>
                       {/* <Button variant="contained" onClick={this.handleSubmit}>Submit</Button> */}

                       <button className='btn btn-success'>Submit</button>
                   </form>
               </div>
            </div>
        )
    }
}
export default App