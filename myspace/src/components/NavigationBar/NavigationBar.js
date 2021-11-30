import React from 'react';
//import styled components
import { Wrapper, Content , Links, Container} from './NavigationBar.styles';
//import material components
import GroupIcon from '@mui/icons-material/Group';
//import react router link
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'><GroupIcon/></Link>

                <Container>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                </Container>
            </Content>
        </Wrapper>
    );
}

export default NavigationBar;