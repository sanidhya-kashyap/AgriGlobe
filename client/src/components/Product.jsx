import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

import styled from 'styled-components'

const Info=styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(182, 227, 136,0.25);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container=styled.div`
    flex:1;
    margin: 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;

    &:hover ${Info}{
        opacity: 99;
    }
`
const Image=styled.img`
    height: 75%;
    z-index: 2;
`

    
const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #B6E388;
        transform: scale(1.1);
    }
`;

// const Bottom =styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
    
// `

// const Title =styled.p`
 
// `
// const Price =styled.p`
// `


const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon> 
        </Info>
        {/* <Bottom>
        <Title>{item.title}</Title>
        <Price>{item.price}</Price>
        </Bottom>
         */}
    </Container>
  )
}

export default Product