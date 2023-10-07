import Image from "next/image";
import container1 from "../../public/container-1-1.png";
import container2 from "../../public/container-1-2.png";
import container3 from "../../public/container-1-3.png";


export default function Priceing() {
    return (
        <div className="py-8">
            <div className="container">
                <h1 className="text-3xl text-center font-bold text-gray-800 underline underline-offset-4 decoration-green-900">Nuestros planes de precios</h1>
                <div className="pt-8 pb-5">
                    <div className="w-full border my-5 md:flex md:item-center md:justify-between md:gap-3">
                        <div className="w-1/4 bg-yellow-50">
                            <Image height={800} width={800} src={container1} alt="container" />
                        </div>
                        <div className="w-2/4 flex items-center">
                            <div className="pl-8">
                                <h1 className="text-2xl font-medium mb-4">Contenedor de basura de 32 galones</h1>
                                <div>
                                    <h4 className="pb-1 font-medium text-lg"><b>Sostiene:</b><span> 2 bolsas de basura</span></h4>
                                    <h4 className="pb-1 font-medium text-lg"><b>Sirve:</b><span> 1-2 personas</span></h4>
                                    <h4 className="font-medium text-lg"><b>Peso máximo:</b><span> Aproximadamente 18 kg</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 text-center flex justify-center items-center">
                            <div>
                                <h1 className="font-bold text-3xl">RD$ 1100</h1>
                                <button className="text-gray-900 sbg mt-5 font-semibold text-lg rounded-lg py-2 px-8 cursor-pointer">Ordenar ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border my-5 md:flex md:item-center md:justify-between md:gap-3">
                        <div className="w-1/4 bg-yellow-50">
                            <Image height={800} width={800} src={container2} alt="container" />
                        </div>
                        <div className="w-2/4 flex items-center">
                            <div className="pl-8">
                                <h1 className="text-2xl font-medium mb-4">Contenedor de basura de 64 galones</h1>
                                <div>
                                    <h4 className="pb-1 font-medium text-lg"><b>Sostiene:</b><span> 3 bolsas de basura</span></h4>
                                    <h4 className="pb-1 font-medium text-lg"><b>Sirve:</b><span> 4-6 personas</span></h4>
                                    <h4 className="font-medium text-lg"><b>Peso máximo:</b><span> Aproximadamente 30 kg</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 text-center flex justify-center items-center">
                            <div>
                                <h1 className="font-bold text-3xl">RD$ 1980</h1>
                                <button className="text-gray-900 sbg mt-5 font-semibold text-lg rounded-lg py-2 px-8 cursor-pointer">Ordenar ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border my-5 md:flex md:item-center md:justify-between md:gap-3">
                        <div className="w-1/4 bg-yellow-50">
                            <Image height={800} width={800} src={container3} alt="container" />
                        </div>
                        <div className="w-2/4 flex items-center">
                            <div className="pl-8">
                                <h1 className="text-2xl font-medium mb-4">Contenedor de basura de 76 galones</h1>
                                <div>
                                    <h4 className="pb-1 font-medium text-lg"><b>Sostiene:</b><span> 7 bolsas de basura</span></h4>
                                    <h4 className="pb-1 font-medium text-lg"><b>Sirve:</b><span> 5-7 personas</span></h4>
                                    <h4 className="font-medium text-lg"><b>Peso máximot:</b><span> Aproximadamente 60 kg</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 text-center flex justify-center items-center">
                            <div>
                                <h1 className="font-bold text-3xl">RD$ 2800</h1>
                                <button className="text-gray-900 sbg mt-5 font-semibold text-lg rounded-lg py-2 px-8 cursor-pointer">Ordenar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
