import Image from "next/image";
import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
export const Navbar = () => {
  return (
    <nav
      style={{ height: "10vh" }}
      className="flex items-center justify-between px-4 max-w-7xl mx-auto  "
    >
      <Link className="font-medium" href="/">
        <Image width={35} height={35} src="/logo.png"></Image>
      </Link>

      <div className="links">
        <Link className="font-medium" href="/">
          Home
        </Link>
        <Link className="ml-9 font-medium" href="/recipes">
          Recipes
        </Link>
        <Link className="ml-9 font-medium" href="/features">
          Features
        </Link>
      </div>
      <form className="flex items-center ">
        <input
          type="search"
          placeholder="Search any meal"
          className="bg-transparent px-4 py-2  outline-none w-100 border-black border placeholder:text-black/45"
        />
      </form>
    </nav>
  );
};
