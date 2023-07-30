import React from 'react';
import { FunctionComponent, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutWrapper, MainWrapper } from './styles';
// import { StyledHeader } from './styles';

interface IProps {
  main: ReactNode;
}

const LOGO_URL = '/lush_logo_black.webp';

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return (
    <div style={{ minWidth: 320 }}>
      {/* inline below, styled not working */}
      {/* <StyledHeader> */}
      <div style={{ backgroundColor: 'black', padding: '20px 20px 20px 50px' }}>
        <Link href="/">
          <Image src={LOGO_URL} height={50} width={50 * 3.45} alt="Lush Logo" />
        </Link>
      </div>
      {/* </StyledHeader> */}
      <LayoutWrapper>
        <MainWrapper>
          <Image
            src={'/lush-background.jpeg'}
            alt={'Lush background'}
            width={400}
            height={400}
            style={{
              width: '100vw',
              height: 'auto',
              marginTop: '-20px',
              position: 'absolute',
            }}
          />

          <div>{main}</div>
        </MainWrapper>
      </LayoutWrapper>
    </div>
  );
};

export default Layout;
