import React from 'react';
//import styled components
import { Wrapper, Content , Links, Container} from './NavigationBar.styles';
//import material components
import GroupIcon from '@mui/icons-material/Group';
const NavigationBar = () => {
    return (
        <Wrapper>
            <Content>
                <Links href=''><GroupIcon/></Links>
                <Container>
                    <Links href=''>Log In</Links>
                    <Links href=''>Sign Up</Links>
                </Container>
            </Content>
        </Wrapper>
    );
}

export default NavigationBar;