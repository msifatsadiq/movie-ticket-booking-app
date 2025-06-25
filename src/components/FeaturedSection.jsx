import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {
    const navigate = useNavigate();
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">

            <div className="relative flex items-center justify-between mb-6">
                <p className="text-gray-300 font-medium text-lg justify-between pt-20 pb-10 ">Now Showing</p>
                <button className="group flex items-center  gap-2 text-gray-300" onClick={() => navigate('/movies')}>View All
                    <ArrowRight className="group-hover:translate-0.5 transition w-4.5 h-4.5 " /></button>
            </div>
        </div>
    )
}

export default FeaturedSection