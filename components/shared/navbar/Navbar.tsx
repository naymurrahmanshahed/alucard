import Link from 'next/link';
import { buttonVariants } from '../../ui/Button';

const Navbar = async () => {
  return (
    <header className='fixed  left-0 right-0 top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-white/80 backdrop-blur-lg'>
      <div className='wrapper grid grid-cols-3 items-center gap-20'>
        {/* left nav */}
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/#packages' className='link-item'>
                Packages
              </Link>
            </li>
            <li>
              <Link href='/#products' className='link-item'>
                Products
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 3
              </Link>
            </li>
          </ul>
        </nav>
        {/* mid nav */}
        <nav>
          <ul className='flex justify-center'>
            <li>
              <Link href='/' className='text-4xl font-bold lowercase text-red'>
                Alucard.
              </Link>
            </li>
          </ul>
        </nav>
        {/* right nav */}
        <nav>
          <ul className='flex items-center justify-end gap-5'>
            <li>
              <Link href='/' className='link-item'>
                Link 4
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href='/sign-in'
                className={buttonVariants({ variant: 'rose' })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
