import styled from 'styled-components';
import ProductDataForm from './components/ProductDataForm/ProductDataForm';
import ProductList from './components/ProductList/ProductList';


const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem;

  @media all and (max-width: 768px) {
    max-width: auto;
    width: 100%;
    padding: 0 2rem;
  }
`


function App() {
  return (
    <>
      <Container>
        <ProductList />
        <ProductDataForm />
      </Container>
    </>
  )
}

export default App
