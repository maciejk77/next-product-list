import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  margin: 10px;
  height: 350px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  top: 90px;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: lightcoral;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CurrencyWrapper = styled.div`
  font-weight: bold;
  padding: 5px 0;
`;
