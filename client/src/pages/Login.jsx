import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
    linear-gradient(
        rgba(95, 92, 92, 0.5),
        rgba(95, 92, 92, 0.5)
    ) ,
    url("https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color:white;
    border-radius: 10px;
` 
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    background-color: #379237;
    color: white;
    cursor:pointer;
    font-weight: 500;
    font-size:15px;
    margin-bottom: 10px;

    &:hover{
        background-color: white;
        color: #379237;
        border: 2px solid #379237
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="UserName"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>

  )
}

export default Login