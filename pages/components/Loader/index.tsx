import { FunctionComponent } from 'react';
// import { StyledLoading } from './styles';

const Loader: FunctionComponent = () => {
  return (
    <>
      {/* inline below, styled not working */}
      {/* <StyledLoading> */}
      <div style={{ fontSize: 15, padding: 5, fontWeight: 'bold' }}>
        Loading...
      </div>
      {/* </StyledLoading> */}
    </>
  );
};

export default Loader;
