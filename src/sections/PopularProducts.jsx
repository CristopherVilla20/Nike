import { products } from "../constant";
import { PopularProductCard } from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Nuestros Productos <span className="text-coral-red">Populares</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray,">
          Experimenta la mejor calidad y estilo con estas selecciones. Descubre
          un mundo de confort, diseño y valor
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => {
          return <PopularProductCard key={product.name} {...product} />;
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
