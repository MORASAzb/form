import { useEffect, useState, } from 'react'
import { categories } from './constants'
import { FormControl, Input, InputLabel, Option, Select, SubmitButton, TextArea } from '../StyledComponents.jsx'
// eslint-disable-next-line no-unused-vars
import getProducts from '../../apis/getProducts'
import createProduct from '../../apis/createProduct'
// eslint-disable-next-line no-unused-vars
import ProductList from '../ProductList/ProductList'

const ProductDataForm = (props) => {
  const [canSendData, setCanSendData] = useState(false)

  const [formData, setFormData] = useState({
    productName: '',
    productSKU: '',
    productCount: 0,
    productBrand: '',
    productPrice: 1000,
    productCategory: '',
    productDescription: ''
  })

  const handleInputChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }


  const validateFormData = () => {
    if (formData.productBrand.length === 0) {
      return false
    }
    if (formData.productName.length === 0) {
      return false
    }

    if (formData.productCount == 0) {
      return false
    }

    if (formData.productCategory.length === 0) {
      return false
    }

    return true;
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    if (validateFormData()) {
      createProduct(formData)
      setFormData()
      props.setList(<ProductList  key={categories.id}/>)
      return
    }

    alert('data validation failed.')
  }

  useEffect(() => {
    if (validateFormData()) {
      setCanSendData(true);
    }
    else {
      setCanSendData(false);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData])


  return (
    <form onSubmit={handleFormSubmit}>
      
      <FormControl>
        <InputLabel>Product Name</InputLabel>
        <Input name='productName' value={formData.productName} onChange={handleInputChange} />
      </FormControl>

      <FormControl>
        <InputLabel >Product SKU</InputLabel>
        <Input name='productSKU' value={formData.productSKU} onChange={handleInputChange} />
      </FormControl>

      <FormControl>
        <InputLabel >Inventory Count</InputLabel>
        <Input type="number" name='productCount' value={formData.productCount} onChange={handleInputChange} />
      </FormControl>

      <FormControl>
        <InputLabel >Categories</InputLabel>
        <Select name="productCategory" value={formData.productCategory} onChange={handleInputChange}>
          <Option value=''>--- Select one item ---</Option>
          {
            categories.map(
              (item) => <Option key={item.id} value={item.name}> {item.label} </Option>
            )
          }
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Brands</InputLabel>
        <input name="productBrand" type="radio" value="apple" onChange={handleInputChange} /> Apple
        <input name="productBrand" type="radio" value="samsung" onChange={handleInputChange} /> Samsung
        <input name="productBrand" type="radio" value="google" onChange={handleInputChange} /> Google
      </FormControl>

      <FormControl>
        <InputLabel>Price Range</InputLabel>
        <input type="range" name="productPrice" min="1000" max="50000000"
          value={formData.productPrice} onChange={handleInputChange}
        />
      </FormControl>

      <FormControl noBorder>
        <InputLabel>Description</InputLabel>
        <TextArea name="productDescription" rows="5"
          onChange={handleInputChange}>{formData.productDescription}</TextArea>
      </FormControl>

      <FormControl noBorder>
        <SubmitButton disabled={!canSendData} bgColor='#b56215' bgHoverColor="#d07725" type='submit'>Submit</SubmitButton>
      </FormControl>
    </form>
  )
}

export default ProductDataForm



/* 
http://localhost:5173/?productName=iPhone+15&productSKU=DDD-iphone-15&productCount=10000&productCategory=mobiles&productBrand=apple&productPrice=50000000&productDescription=dsf+sdf+sdf+sdf+sd+sdf

*/