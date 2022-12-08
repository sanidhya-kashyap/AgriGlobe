import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import logo from "../img/agriGlobe.png";

const Container =styled.div`
    display: flex;
`
const Left =styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo =styled.img`
height:65px;
width: 200px;
`
const Desc =styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
    cursor: pointer;
`
const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`

const Center =styled.div`
    flex: 1;
    padding: 20px;
`;

const Title=styled.h3`
    margin-bottom: 30px;

`
const List=styled.ul`
margin: 0px;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right =styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment =styled.img`
    width: 50%;
    cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo src={logo}></Logo>
        <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum animi ipsam fugit, odio blanditiis itaque. Perferendis nemo magni molestias architecto.</Desc>
        <SocialContainer>
            <SocialIcon color="#3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="#E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="#55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="#E60023">
                <Pinterest/>
            </SocialIcon>
            
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Pesticides</ListItem>
                <ListItem>Fertilizers</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms </ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight: "10px"}} />  Alpha-II, Greater Noida, U.P.</ContactItem>
            <ContactItem> <Phone style={{marginRight: "10px"}} /> +1 234 56 78</ContactItem>
            <ContactItem> <MailOutline style={{marginRight: "10px"}} /> sanidhya@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer