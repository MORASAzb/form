import  { useEffect, useState } from 'react'
import getProducts from '../../apis/getProducts';
import StyledProduct from './StyledProduct'
import styled from 'styled-components';

const ProductList = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])

    const fetchData =()=>{
        getProducts().then((newData)=>{
            setData(newData);
            setIsLoaded(true)
        })
    }

    useEffect(() => {
     fetchData()
    }, [])

    if (isLoaded === false) {
        return <div>loading</div>
    }

    return (
        <>
            <div>{
                data.map((product,count) => (
               <div key={count}>
                    <StyledProduct product={product}/>
               </div>


                ))
            }</div>
        </>
    )
}

export default ProductList