import React from 'react';
//import material components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//import styled components
import { Content, ButtonContainer, TextSpan } from './SignForm.styles';
const SignForm = () => {
    return(
        <div>
            <form>
                <Content>
                    <TextSpan>Member Login/ Sign Up</TextSpan>
                    <TextField id="outlined-basic" label="email" variant="outlined" margin='normal'/>
                    <TextField id="outlined-basic" label="password" variant="outlined" margin='normal'/>
                    <ButtonContainer>
                        <Button variant="contained">Log In</Button>
                        <Button variant="contained">Sign Up</Button>
                    </ButtonContainer>

                </Content>


            
            </form>
        </div>
    );
}

export default SignForm;