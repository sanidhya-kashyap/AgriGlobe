import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from "@mui/icons-material"
import logo from "../img/agriGlobe.png"
import { Badge } from '@mui/material';
import {mobile} from "../responsive"

const Container = styled.div`
    height : 60px;
    margin-bottom: 25px;
    ${mobile({height:"50px"})}
`;
const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding:"10px 0px"})}
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
${mobile({

        marginRight:"-40px"})}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        fontSize:"10px",
        marginLeft:"2px" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({
        marginLeft:"10px",
        borderRadius:"23px" })}
`;

const Input =styled.input`
    border: none;
    ${mobile({
        width:"30px"})}
`;
 
const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
${mobile({
        marginLeft:"50px" })}
`;

const Logo =styled.img`
    height:65px;
    width: 200px;
    ${mobile({
        height:"36px",
        width: "122px"})}
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({
        flex:2,
        justifyContent:"center" })}
`;

const MenuItem = styled.div`
    font: 14px;
    margin-left: 25px;
    cursor: pointer;
    ${mobile({
        fontSize:"10px",
        marginLeft:"10px" })}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"grey", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center> <Logo src={logo}></Logo> </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN-IN</MenuItem>
                <MenuItem> 
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                </Badge>    
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar