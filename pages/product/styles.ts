import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin-bottom: 10;
  pxz-index: 5;
`;

export const ContentItemWrapper = styled.div`
  background-color: white;
  line-height: 1.5;
  padding: 20px;
  position: relative;
  z-index: 5;
`;

export const TextWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  position: relative;
  width: 100%;
  z-index: 3;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: coral;
  display: flex;
  justify-content: center;
  padding: 25px 0;
  position: relative;
  z-index: 2;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
  margin-bottom: 50px;
  width: 75%;
`;

export const TopImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

export const StyledBackIcon = styled.div`
  background-color: black;
  color: white;
  font-size: 20px;
  margin-top: 40px;
  padding: 10px;
  position: fixed;
  z-index: 3;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
