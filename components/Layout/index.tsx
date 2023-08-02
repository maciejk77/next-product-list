import React from 'react';
import { FunctionComponent, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutWrapper, HeaderWrapper } from './styles';

interface IProps {
  main: ReactNode;
}

const LOGO_URL = '/lush_logo_black.webp';
const BACKGROUND_URL = '/lush-background.jpeg';

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <Image src={LOGO_URL} height={50} width={50 * 3.45} alt="Lush Logo" />
        </Link>
      </HeaderWrapper>

      <LayoutWrapper>
        <Image
          src={BACKGROUND_URL}
          alt={'Lush background'}
          width={400}
          height={400}
          style={{
            width: '100vw',
            height: 'auto',
            position: 'absolute',
          }}
        />
        <>{main}</>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
