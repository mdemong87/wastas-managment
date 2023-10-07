import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="pbg py-8">
      <div className="container">
        <div>
          <div className="md:flex md:justify-between md:gap-4">
            <div className="w-full">
              <div className="flex items-center gap-2 pb-8 md:pb-0">
                <div className="sbg text-gray-800 rounded-sm">
                  <h1 className="footerlogo">R</h1>
                </div>
                <h1 className="text-5xl font-bold text-gray-200">Residuos</h1>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-gray-200 font-semibold text-xl capitalize">Enlace importante</h2>
              <ul className="pt-4 pb-8">
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Sobre nosotras</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Contacta con nosotras</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Avisos</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Blogs</p>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-gray-200 font-semibold text-xl capitalize">Tranvías y política</h2>
              <ul className="pt-4 pb-8">
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Política de privacidad</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Tranvías y condiciones</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <TiTick className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Politica de reembolso</p>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-gray-200 font-semibold text-xl capitalize">Información del contacto</h2>
              <ul className="pt-4 pb-8">
                <li className="flex items-center gap-1 py-1">
                  <AiOutlinePhone className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">+1 809 5496022</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <AiOutlineMail className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">example@gmail.com</p>
                </li>
                <li className="flex items-center gap-1 py-1">
                  <BiLocationPlus className="text-yellow-300 text-lg" />
                  <p className="text-gray-400 text-lg hover:text-yellow-300 hover:underline underline-offset-2">Sento Domingo,Dominican Republic</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center border-t-2 pt-4 border-gray-500 font-semibold text-lg text-gray-400">
            © Residuos-2023 || Reservados todos los derechos || Desarrollado por <Link href={"https://www.linkedin.com/in/mdemong87/"} className="text-yellow-200">Md Emon Hossen</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
