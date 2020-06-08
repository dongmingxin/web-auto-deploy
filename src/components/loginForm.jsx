import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        console.log("Submitted")
    }

    // handleChange = (e) => {
    //     const data = {...this.state.data};
    //     data[e.currentTarget.name] = e.currentTarget.value;
    //     this.setState({ data });
    // }


    render() {
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* <Input 
                        name="username" 
                        value={data.username} 
                        label="Username" 
                        onChange={this.handleChange} 
                        error={errors.username}
                    />
                     <Input 
                        name="password" 
                        value={data.password} 
                        label="Password" 
                        onChange={this.handleChange}
                        error={errors.password} 
                    /> */}
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
         );
    }
}
 
export default LoginForm;