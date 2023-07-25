import { FunctionComponent, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { StyledHeader } from './styles';

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return (
    <div>
      {/* inline below, styled not working */}
      {/* <StyledHeader> */}
      <div style={{ backgroundColor: 'black', padding: '20px 20px 20px 50px' }}>
        <Link href="/">
          <Image
            src={'/lush_logo_black.webp'}
            height={50}
            width={50 * 3.45}
            alt="Lush Logo"
          />{' '}
        </Link>
      </div>
      {/* </StyledHeader> */}
      {main}
    </div>
  );
};

export default Layout;
