import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey flex items-center bg-white">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* left nav */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Link 1
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 3
              </Link>
            </li>
          </ul>
        </nav>
        {/* mid nav */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="lowercase text-4xl font-bold text-red">
                Alucard.
              </Link>
            </li>
          </ul>
        </nav>
        {/* right nav */}
        <nav>
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link href="/" className="link-item">
                Link 4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href="/user/sign-in"
                className={buttonVariants({ variant: "rose" })}
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
