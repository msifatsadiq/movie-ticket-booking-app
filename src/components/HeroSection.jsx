import { Calendar, Clock, MoveRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 
        bg-[url('https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg')] bg-cover bg-center  h-screen ">

            <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />

            <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-96">Guardian <br /> of the Galaxy</h1>

            <div className="flex items-center gap-4 text-gray-300">
                <span>Action | Adventure | Sci-fi</span>
                <div className="flex items-center gap-1 text-sm  px-2 py-1 ">
                    <Calendar className="w-4 h-4.5" />2018
                    <Clock className="w-4 h-4.5 ml-2" />2h 16m
                </div>

            </div>
            <div>
                <p className=" text-gray-300">In a post-apocalyptic world where cities ride on wheels and <br /> consume each other to survive, two people meet in London and <br /> try to stop a conspiracy.</p>
            </div>
            <div>
                <button onClick={() => navigate('/movies')} className="bg-red-600 text-white px-8 py-0.5 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer">Explore  Now <MoveRightIcon className="w-6 " /></button>
            </div>

        </div>
    )
}

export default HeroSection