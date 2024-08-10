const CTA = () => {
  return (
    <section>
      <div className="w-full relative">
        <div className="absolute inset-0 bg-[url('assets/images/cta.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-transparent" />

        <div className="relative text-white max-w-7xl mx-auto w-full py-20 px-6 lg:px-8">
          <h1 className="text-5xl leading-none tracking-tight font-medium mb-10">
            Create excepional <br /> experience
          </h1>

          <p className="max-w-sm text-xl font-light">
            The customer platform built to acquire, service and grow lifelong
            customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
