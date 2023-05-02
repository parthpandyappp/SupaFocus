import { Link } from "react-router-dom";
import { userState } from "../states";
import { useRecoilValue } from "recoil";

const LandingPage = () => {
  const { isLoggedIn } = useRecoilValue(userState);
  return (
    <main className="flex flex-col gap-3 mx-auto w-5/6 md:w-2/6 grow items-center justify-center h-full">
      <img src="/landing.svg" className="w-2/3 h-1/2" alt="" />
      <p className="text-sm font-semibold text-white h-full">
        From chaos to clarity - Supafocus helps you stay on top of it all.
      </p>
      <p className="text-xs text-white h-full -mt-3">
        Take control of your day with Supafocus - the effortless task manager.
      </p>
      <section className="mt-3">
        <Link to="/focus">
          <button className="px-4 py-2 bg-white text-main font-bold rounded hover:shadow-xl">
            {isLoggedIn ? "Your focus" : "Try it yourself"}
          </button>
        </Link>
      </section>
    </main>
  );
};

export { LandingPage };
