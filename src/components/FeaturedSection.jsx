import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import FeaturedCardSection from "./FeaturedCardSection";

const FeaturedSection = () => {
    const navigate = useNavigate();
    // This component displays a featured section with a title, a button to view all movies, and a grid of featured movie cards.
    // It also includes a button to show more movies, which navigates to the '/movies' route.
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden ">

            <div className="relative flex items-center justify-between pb-10 pt-20   ">
                <BlurCircle top="0" right="-80px" />
                <p className="text-gray-300 font-medium text-lg justify-between  ">Now Showing</p>
                <button className="group flex items-center cursor-pointer gap-2 text-gray-300"
                    onClick={() => navigate('/movies')}>View All
                    <ArrowRight className="group-hover:translate-0.5 transition w-4.5 h-4.5 " />
                </button>
            </div>

            {/* card section */}
            <div className="grid md:grid-cols-3  gap-8 max-sm:justify-center mt-8 ">
                {
                    dummyShowsData.slice(0, 3).map((show) => (
                        <FeaturedCardSection key={show._id} movie={show} />
                    ))
                }
            </div>

            <div className="flex justify-center mt-20 ">
                <button onClick={() => navigate('/movies')} className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer">
                    Show More
                </button>
            </div>

        </div>
    )
}

export default FeaturedSection