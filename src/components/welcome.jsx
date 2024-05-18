import Aos from "aos";
import "aos/dist/aos.css";
import image from "../assets/profile.png";
import { Button } from "@mui/material";

const Welcome = () => {
  Aos.init({ duration: 1000 });

  return (
    <div
      data-aos="fade-in"
      className="container flex flex-col justify-center max-md:pt-32 items-center m-auto pt-52"
    >
      <div className="w-48 h-48 rounded-full bg-slate-300 mb-12">
        <img
          className="w-full h-full rounded-full border border-red-400 border-2"
          src={image}
          alt=""
        />
      </div>
      <h1
        data-aos="fade-up"
        className="inter-bold text-center text-5xl max-md:text-3xl text-zinc-700 dark:text-gray-100"
      >
        A passionate <br /> <span className="text-pink-600">web designer</span>{" "}
        and <span className="text-cya-500">developer</span>
      </h1>
      <p
        data-aos="fade-up"
        className="poppins-regular px-5 max-w-4xl mt-9 text-center text-zinc-500 dark:text-gray-400"
      >
        <span className="text-3xl text-pink-600">I</span>'m thrilled to share my
        creative journey with you! Here, you'll discover a curated selection of
        my finest works, each one a testament to my ability to craft innovative
        solutions and bring ideas to life.
      </p>
      <div className="my-7">
        <Button data-aos="fade-up" color="error" variant="contained">
          Download Cv
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
