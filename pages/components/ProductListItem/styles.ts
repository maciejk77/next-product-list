import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  margin: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  top: 70px;
  justify-content: center;
  z-index: 5;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: coral;
  padding: 15px;
  border-radius: 15px;
  min-height: 240px;
  filter: drop-shadow(3px 3px 3px gray);
  &:hover {
    background-color: #ffa280;
  }
`;

export const NameWrapper = styled.div`
  font-size: 20px;
  font-weight: bolder;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

export const DescriptionWrapper = styled.div`
  display: inline-block;
  line-height: 1.5;
`;

export const CurrencyWrapper = styled.div<{ productPage: boolean }>`
  font-weight: bold;
  display: flex;
  padding: 10px 15px;
  align-self: end;
  margin-top: 10px;
  justify-content: ${(p) => (p.productPage ? 'center' : 'flex-end')};
  border-radius: ${(p) => (p.productPage ? '0' : '50px')};
  background-color: ${(p) => (p.productPage ? 'black' : 'antiquewhite')};
  color: ${(p) => (p.productPage ? 'white' : 'black')};
`;

export const SpacerTop = styled.div`
  padding: 20px 0;
`;
