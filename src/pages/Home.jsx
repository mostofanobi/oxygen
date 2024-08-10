import herobg from "assets/images/hero.jpg";
import herobg2 from "assets/images/hero2.jpg";
import herobg3 from "assets/images/hero3.jpg";
import { HiMiniChevronRight } from "react-icons/hi2";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex-1 py-6 h-full w-full lg:py-8 flex flex-col justify-center relative">
        <div className="absolute inset-0">
          <img
            src={herobg}
            alt=""
            className="object-cover absolute h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="relative text-white max-w-7xl mx-auto w-full px-6 lg:px-8">
          <h1 className="text-[7rem] leading-none tracking-tight font-medium mb-10">
            Know them, <br /> Grow them.
          </h1>

          <p className="max-w-sm mb-12 text-xl font-light">
            The customer platform built to acquire, service and grow lifelong
            customers.
          </p>

          <div className="flex gap-3 items-center">
            <button className="px-12 border border-white/20 py-3 rounded-full backdrop-blur-lg bg-white/10 text-white">
              How it works
            </button>
            <button className="flex items-center gap-1 hover:underline hover:gap-2 transition-all">
              Discover more about Oxygen{" "}
              <HiMiniChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
          <div className="flex gap-5 mb-20">
            <div className="flex-1 flex flex-col gap-5">
              <img
                src={herobg}
                alt=""
                className="w-full aspect-[16/12] object-cover rounded-xl shadow-lg"
              />
              <img
                src={herobg2}
                alt=""
                className="w-full aspect-[9/11] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <img
                src={herobg3}
                alt=""
                className="w-1/2 aspect-square object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://www.thegardensociety.co.uk/wp-content/uploads/2020/09/the-garden-society-garden-tools-banner-1536x538.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-xl shadow-lg"
              />
              <h1 className="text-4xl font-semibold">
                Unlock the full potential of your customers.
              </h1>
            </div>
          </div>

          <h1 className="text-9xl text-black/80 font-medium mb-10">Shop</h1>
          <div className="w-full h-96 rounded-3xl group relative bg-cover overflow-hidden">
            <div className="absolute group-hover:scale-105 transition-all w-full h-full bg-center bg-[url('https://www.thegardensociety.co.uk/wp-content/uploads/2020/09/the-garden-society-garden-tools-banner-1536x538.jpg')]" />
            <div className="absolute bg-gradient-to-tr inset-0 from-black group-hover:scale-125 origin-bottom-left transition-all via-transparent to-transparent"></div>
            <div className="p-8 flex items-end h-full relative">
              <h1 className="text-white text-5xl font-medium mt-auto">
                Tools & <br />
                accessories
              </h1>
            </div>
            {/* <img
            src="https://www.thegardensociety.co.uk/wp-content/uploads/2020/09/the-garden-society-garden-tools-banner-1536x538.jpg"
            alt=""
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          /> */}
          </div>

          {/* <h2 className="text-8xl font-semibold mb-6 text-center">
            One customer platform.
            <br />
            Everyone's business.
          </h2> */}
        </div>
      </section>
    </>
  );
};

export default Home;
