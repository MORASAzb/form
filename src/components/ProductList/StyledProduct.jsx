import styled from 'styled-components'

const Div = styled.div`
    width: 50%;
    border: 2px solid red;
    padding: 1rem 2rem;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`


const Title = styled.h1`
    color: black;
    font-weight: bolder;
`
const Description = styled.p`
    color: #ababab;
    font: 14px;
    text-align: center;
`
const Brand = styled.h3`
   color: #ababab;
    font: 16px;
    text-align: center;
`
const Price = styled.div`
    border-bottom: 1px dashed #ff6666;
    padding-bottom: 5px;
    font-size: 15px;
    color: black;

`

const Category = styled.span`
    color: black;
    font-size: 16px;
    text-align: center;
    padding: 1rem;

`
const SKU = styled.span`
    width: 100%;
    border: 1px solid #4d0000;
    color: #494848;
`





const StyledProduct = (props) => {

const product=props.product;

    return (
        <Div>
            <Title>
                < product.productName />
            </Title>
            <Description>
                <product.productDescription />
            </Description>
            <Brand>
                <product.productBrand />
            </Brand>
            <Category>
                <product.productCategory />
                <product.productCount />

            </Category>

            <Price>
                <product.productPrice />

            </Price>

            <SKU>
                <product.productSKU />
            </SKU>


        </Div>
    )
}

export default StyledProduct