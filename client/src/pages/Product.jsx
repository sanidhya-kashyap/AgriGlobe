import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container =styled.div`
    
`
const Wrapper= styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1 ;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer= styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title= styled.h1`
    font-weight: 200;
`
const Desc= styled.p`
    margin: 20px 0px;
`

const Price= styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    display:flex;
    justify-content: space-between;
    margin: 30px 0;
`
const Filter = styled.div`
display:flex;
align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
 `
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50%;
display:flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #379237;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid #379237;
    background-color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;

    &:hover{
        background-color: #379237;
        color: white;
    }
`

const Product = () => {
  return (
    <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/y/u/yutori_-_bottle-removebg-preview_1_.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Crop Fertilizer</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque 
                distinctio assumenda, accusamus, numquam incidunt vel nobis doloribus 
                magnam quisquam, quis ipsa aliquid consequatur corrupti? Placeat tenetur 
                enim dolore quae soluta.</Desc>
                <Price>₹2000</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>Quantity</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>200g</FilterSizeOption>
                        <FilterSizeOption>500g</FilterSizeOption>
                        <FilterSizeOption>1kg</FilterSizeOption>
                        <FilterSizeOption>5kg</FilterSizeOption>
                        </FilterSize>
                        
                    </Filter>
                    
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product