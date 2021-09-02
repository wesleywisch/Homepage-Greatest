import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5rem calc((100vw - 81.25rem) / 2); // 1300px
  background: #150f0f;
  color: var(--white);
`;

export const ProductsHeading = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 18.75rem; // 300px
`;

export const ProductImg = styled.img`
  height: 18.75rem; // 300px
  min-width: 18.75rem;
  max-width: 100%;
  box-shadow: 8px 8px var(--yellow);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: var(--red);
  color: var(--white);
  transition: 0.2s ease-out;

  &:hover{
    background: var(--yellow);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: var(--black);
  }
`;
