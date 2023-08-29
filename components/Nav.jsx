import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-8">
        <Link href="/" className="flex items-center no-underline text-black">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            AlfredWebDev
          </span>
        </Link>
        <div className="flex md:order-2">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 rounded-full px-6 py-2 text-sm font-semibold">
            My CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
