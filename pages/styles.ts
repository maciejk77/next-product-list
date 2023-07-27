import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-width: 320px;
`;

// generic styles

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ScrollContainer = styled.div`
  height: 90vh;
`;
