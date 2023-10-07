import Image from "next/image";
import aboutImg from "../../public/about.jpg";

export default function Aside() {
  return (
    <div className='py-8'>
      <div className="container">
        <h1 className="text-3xl text-center font-bold text-gray-800 underline underline-offset-4 decoration-green-900">llamanos</h1>
        <div className="py-4 md:flex md:items-center md:justify-between">
          <div className="w-full">
            <Image src={aboutImg} alt="about-image" height={500} width={500} />
          </div>
          <div className="w-full mt-5 text-gray-900">
            <p className="font-semibold text-lg text-gray-600 pb-1 md:mt-0">Bienvenido a la empresa de recogida de residuos...</p>
            <h1 className="text-3xl font-semibold text-gray-700">Trabajamos desde 1987 en este campo</h1>
            <p className="text-xl pt-4 pb-3 text-gray-600">Hay muchas variaciones de pasajes de psum disponibles, pero la mayoría ha sufrido alguna alteración, mediante humor inyectado o palabras aleatorias.</p>

            <button className="text-gray-100 pbg mt-5 font-semibold text-xl rounded-lg py-2 px-5 cursor-pointer">Leer más</button>

          </div>
        </div>
      </div>
    </div>
  )
}
