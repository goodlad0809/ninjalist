import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/feedback.png" width={32} height={32} />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
