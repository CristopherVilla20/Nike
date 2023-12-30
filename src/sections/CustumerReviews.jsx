import { reviews } from "../constant";
import { ReviewCard } from "../components/ReviewCard";
const CustumerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        ¿Que dicen nuestros
        <span className="text-coral-red">Clientes</span>?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Escuche historias genuinas de nuestros clientes satisfechos sobre sus
        experiencias excepcionales con nosotros.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustumerReviews;
