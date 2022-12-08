import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
    linear-gradient(
        rgba(117, 114, 114, 0.5),
        rgba(117, 114, 114, 0.5)
    ) ,
    url("https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color:white;
    border-radius: 10px;
` 
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #379237;
    color: white;
    cursor:pointer;
    font-weight: 500;
    font-size:15px;
    border-radius: 10px;

    &:hover{
        background-color: white;
        color: #379237;
        border: 2px solid #379237
    }
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="UserName"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register