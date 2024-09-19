import { Link } from "react-router-dom"; import BG from "../assets/ticBG.webp";

const WelcomePage = () => {

return (

<div className="w-full h-screen">
    <div className="flex h-full">
        <div className="flex-none ">
            <img src={BG} alt="" />
        </div>
        <div className="flex m-auto flex-col justify-center items-center">
            <h1 className="font-bold text-5xl p-10">
                Welcome to TIC TAC TOE Game
            </h1>
            <Link to="/play" className="bg-gray-900 text-white text-center rounded-md font-bold w-32 px-6 py-3">
                Play
            </Link>
        </div>
    </div>
</div>

);
};

export default WelcomePage;