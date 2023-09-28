import { useEffect, useState } from 'react'
import getProducts from '../../apis/getProducts';
import StyledProduct from './StyledProduct'


const ProductList = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])

    const fetchData = () => {
        getProducts().then((newData) => {
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
            <div>
                {data.map((product) => (
                    <div key={product.id}>
                        <StyledProduct product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList