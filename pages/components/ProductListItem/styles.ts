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
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: coral;
  padding: 15px;
  border-radius: 15px;
  min-height: 240px;
`;

export const NameWrapper = styled.div`
  font-size: 20px;
  font-weight: bolder;
  padding: 10px 0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  padding: 5px 0;
`;

export const DescriptionWrapper = styled.div`
  display: inline-block;
  line-height: 1.5;
`;

export const CurrencyWrapper = styled.div`
  font-weight: bold;
  padding: 5px 0;
`;

export const SpacerTop = styled.div`
  padding: 20px 0;
`;
