import Image from "next/image";
import service1 from "../../public/services-2-icon-1.png";
import service2 from "../../public/services-2-icon-2.png";
import service3 from "../../public/services-2-icon-3.png";
import service4 from "../../public/services-2-icon-4.png";



export default function Servises() {
    return (
        <div className="py-8 bg-yellow-50">
            <div className="container">
                <div>
                    <h1 className="text-3xl text-center font-bold text-gray-800 underline underline-offset-4 decoration-green-900">Los servicios que brindamos</h1>
                    <div className="pt-12 pb-8 md:flex md:justify-between md:items-center md:gap-8">
                        <div className="bg-gray-200 w-full rounded-lg mb-5 md:mb-0">
                            <div className="p-5">
                                <Image className="w-fit m-auto" src={service1} alt="services-one" />
                                <h2 className="text-2xl font-bold capitalize text-center pt-5 text-gray-700">Cero desperdicio</h2>
                                <p className="text-center pt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est fugiat soluta illo deleniti in.</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="bg-gray-200 w-full rounded-lg mb-5 md:mb-0">
                            <div className="p-5">
                                <Image className="w-fit m-auto" src={service2} alt="services-one" />
                                <h2 className="text-2xl font-bold capitalize text-center pt-5 text-gray-700">
                                    de contenedores</h2>
                                <p className="text-center pt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est fugiat soluta illo deleniti in.</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="bg-gray-200 w-full rounded-lg mb-5 md:mb-0">
                            <div className="p-5">
                                <Image className="w-fit m-auto" src={service3} alt="services-one" />
                                <h2 className="text-2xl font-bold capitalize text-center pt-5 text-gray-700">Baño portátil</h2>
                                <p className="text-center pt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est fugiat soluta illo deleniti in.</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="bg-gray-200 w-full rounded-lg">
                            <div className="p-5">
                                <Image className="w-fit m-auto" src={service4} alt="services-one" />
                                <h2 className="text-2xl font-bold capitalize text-center pt-5 text-gray-700">de reciclaje</h2>
                                <p className="text-center pt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est fugiat soluta illo deleniti in.</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
