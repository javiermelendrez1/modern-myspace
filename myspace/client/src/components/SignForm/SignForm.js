import React, { useState } from 'react';
//import material components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import axios from axios 
import axios from 'axios';
//import styled components
import { Content, ButtonContainer, TextSpan } from './SignForm.styles';
const SignForm = () => {
    //create a state for user 
    //bydefault it is a blank object
    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('')
    //create functions to handle text field change
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value)
    }
    //create a function to handle when the user submits
    const handleSubmit = (e) => {
        console.log(userEmail);
        console.log(userPassword);
        e.preventDefault();
        //when the user clicks submit send object to the server
        const user = {
            email: userEmail,
            password: userPassword,
        };
        axios.post('http://localhost:3000/record/add', user)
        .then((res) => console.log(res.data));
        //then we need to clear the state 
        setUserPassword('')
        setUserEmail('');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Content>
                    <TextSpan>Member Login/ Sign Up</TextSpan>
                    <TextField id="outlined-basic" label="email" variant="outlined" margin='normal'
                    onChange={handleEmailChange}
                    name='email'
                    value={userEmail}
                    />
                    <TextField id="outlined-basic" label="password" variant="outlined" margin='normal'
                    onChange={handlePasswordChange}
                    name='password'
                    value={userPassword}
                    />
                    <ButtonContainer>
                        <Button variant="contained">Log In</Button>
                        <Button variant="contained" type='submit' value='submit'>Sign Up</Button>
                    </ButtonContainer>

                </Content>


            
            </form>
        </div>
    );
}

export default SignForm;