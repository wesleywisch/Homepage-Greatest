import { 
  ProductsContainer, 
  ProductsHeading, 
  ProductsWrapper, 
  ProductCard, 
  ProductImg, 
  ProductInfo, 
  ProductTitle, 
  ProductDesc, 
  ProductPrice, 
  ProductButton,
} from './styles';

export function Products({ heading, data }){
  return(
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>

      <ProductsWrapper>
        {data.map((product, key) => (
          <ProductCard key={key}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
}
