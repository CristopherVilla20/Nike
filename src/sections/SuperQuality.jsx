import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Te damos la <span className="text-coral-red">Mejor</span> <span className="text-coral-red">Calidad</span> de zapatos
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Asegurando el mejor confort y estilo, nuestros calzados son creados y diseñados para elevar la experiencia, dandote calidad inigualable, innovacion y un toque de elegancia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Nuestra dedicación para otorgar excelencia asegura tu satisfacción.</p>
        <div className="mt-11">
        <Button label="Ver detalles" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={579} height={522} className="object-contain"/>

      </div>
    </section>
  )
}

export default SuperQuality
