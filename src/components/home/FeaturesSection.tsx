import FeaturesSteps from "./features/Steps";

export default function FeaturesSection() {
  return (
    <section className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Comece a conversar em minutos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estudar nunca foi tão facil quanto com Lumin.
          </p>
        </div>
      </div>
      <FeaturesSteps />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            placeholder img w1354 h866 qual100 cl='rounded-md bg-white p-2
            sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
          </div>
        </div>
      </div>
    </section>
  );
}
