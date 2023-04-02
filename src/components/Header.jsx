import { FiChevronsDown } from "react-icons/fi";

export default function Header() {
  return (
    <div className="relative text-white pt-12 h-screen">
      <center>
        <img src="/me.jpg" alt="me" className="rounded-full border-2 border-gray-400 w-1/3 md:w-1/6 min-w-48 mt-12 max-w-sm" />
        <br />
        <h2 className="text-4xl font-bold">Cxsmic Guy</h2>
        <span className="text-white text-xs px-4 py-1 bg-gradient-to-r from-sky-500 to-indigo-500 inline-block mt-4 rounded-full">FEATURED WORKS</span>
        <div className="bottom-8 p-8 block w-full absolute">
          <center>
            <FiChevronsDown size={30}  />
          </center>
        </div>
      </center>
    </div>
  );
}
