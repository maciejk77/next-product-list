import { FunctionComponent, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <div style={{ backgroundColor: 'antiquewhite' }}>{main}</div>
    </div>
  );
};

export default Layout;
