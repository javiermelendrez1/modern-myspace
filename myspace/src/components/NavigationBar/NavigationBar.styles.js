import styled from 'styled-components';
//create a wrapper for the content
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: blue;
    height: 40px;
`;
//create a style for the content
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;
    a {
        color: white;
        text-decoration: none;
        margin: 0px 10px;

    }
`;
export const Container = styled.div`
    a {
        color: white;
        text-decoration: none;
        margin: 0px 10px;

    }
`;
export const Links = styled.a`
    color: white;
    text-decoration: none;
`;
