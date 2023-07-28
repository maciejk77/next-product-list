import styled from 'styled-components';

export const ContentItemWrapper = styled.div`
  margin: 10px 0;
  background-color: white;
  padding: 20px;
  position: relative;
  z-index: 5;
  line-height: 1.5;
  filter: drop-shadow(3px 3px 3px gray);
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  position: relative;
  background-color: white;
  z-index: 3;
  filter: drop-shadow(3px 3px 3px gray);
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: coral;
  z-index: 2;
  padding: 25px 0;
  filter: drop-shadow(3px 3px 3px gray);
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  margin: 20px auto;
`;

export const TopImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

export const StyledBackIcon = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 3;
  background-color: black;
  color: white;
  font-size: 20px;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;
