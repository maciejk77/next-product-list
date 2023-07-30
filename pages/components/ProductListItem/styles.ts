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
  background-color: antiquewhite;
  padding: 15px;
  border-radius: 15px;
  min-height: 240px;
  filter: drop-shadow(3px 3px 3px gray);
  &:hover {
    background-color: white;
  }
`;

export const NameWrapper = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const DescriptionWrapper = styled.div`
  display: inline-block;
  line-height: 1.5;
`;

export const CurrencyWrapper = styled.div<{ productpage?: boolean }>`
  font-weight: bold;
  display: flex;
  padding: 10px 15px;
  align-self: end;
  margin-top: 10px;
  justify-content: ${(p) => (p.productpage ? 'center' : 'flex-end')};
  border-radius: ${(p) => (p.productpage ? '0' : '50px')};
  background-color: ${(p) => (p.productpage ? 'black' : 'coral')};
  color: ${(p) => (p.productpage ? 'white' : 'antiquewhite')};
  width: ${(p) => p.productpage && '30%'};
`;

export const SpacerTop = styled.div`
  padding: 20px 0;
`;
