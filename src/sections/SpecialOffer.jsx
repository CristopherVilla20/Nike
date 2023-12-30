import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Oferta <span className="text-coral-red">Especial</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embárcate en un viaje de compras que redefine tu experiencia con
          ofertas inmejorables. Desde selecciones de primer nivel hasta ahorros
          increíbles, ofrecemos un valor incomparable que nos distingue.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navegue por un reino de posibilidades diseñado para satisfacer sus
          deseos únicos, superando las expectativas más elevadas. Su viaje con
          nosotros es nada menos que excepcional.
        </p>
        <div className="mt-11 flex  flex-wrap gap-4">
          <Button label="Compra ahora" iconURL={arrowRight} />
          <Button
            label="Saber más"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
