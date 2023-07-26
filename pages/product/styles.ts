import styled from 'styled-components';

export const ContentItemWrapper = styled.div`
  margin: 10px 0;
  background-color: white;
  padding: 20px;
  position: relative;
  z-index: 5;
  line-height: 1.5;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  position: relative;
  background-color: white;
  z-index: 3;
`;

export const ImageWrapper = styled.div`
  position: relative;
  background-color: coral;
  z-index: 2;
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
  margin-top: 20px;
  font-size: 20px;
`;
