import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaBars } from "react-icons/fa";


export default function Header() {
  return (
    <div className='w-screen pbg fixed border-b-2 border-green-800'>
      <div className='container'>
        <div className='text-gray-50 py-3 flex items-center justify-between'>
          <div className="flex items-center gap-2">
            <div className="sbg text-gray-900 rounded-sm">
              <h1 className="logo">R</h1>
            </div>
            <h1 className="text-3xl font-bold">Residuos</h1>
          </div>
          <nav>
            <FaBars className="cursor-pointer text-3xl md:hidden" />
            <ul className="hidden font-semibold text-xl  md:flex md:gap-6 md:items-center">
              <li>
                <Link href={"/"} className="">Hogar</Link>
              </li>
              <li>
                <Link href={"/"} className="">Acerca de</Link>
              </li>
              <li>
                <Link href={"/"} className="">Negocio</Link>
              </li>
              <li>
                <Link href={"/"} className="">Servicios</Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Industrias</Link>
              </li>
              <li>
                <button className="text-sm text-gray-800 rounded-lg px-3  sbg flex items-center gap-2">
                  <BiPhoneCall className="text-2xl" />
                  <div className="text-left">
                    <h4>Llámanos</h4> <span>+1 809 5496022 </span>
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
