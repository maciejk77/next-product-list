import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: 15px;
  background-color: white;
  position: relative;
  border-radius: 25px;
  background-color: antiquewhite;
  filter: drop-shadow(3px 3px 3px gray);
  &:hover {
    background-color: white;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: -80px;
  left: 65px;
  justify-content: center;
  z-index: 5;
`;

export const NameWrapper = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  padding: ${(p) => (p.productpage ? '0px 30px 0 30px;' : '90px 30px 0 30px;')};
  display: flex;
  justify-content: center;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px 5px 15px;
  line-height: 1.5;
`;

export const CurrencyWrapper = styled.div<{ productpage?: boolean }>`
  font-weight: bold;
  display: flex;
  padding: 10px 15px;
  margin: 10px;
  justify-content: center;
  border-radius: ${(p) => (p.productpage ? '0' : '50px')};
  background-color: coral;
  color: ${(p) => (p.productpage ? 'white' : 'antiquewhite')};
  width: ${(p) => p.productpage && '30%'};
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: end;
`;
