import { dummyShowsData } from "../assets/assets"
import BlurCircle from "../components/BlurCircle"
import FeaturedCardSection from "../components/FeaturedCardSection"
const Favorite = () => {
    return dummyShowsData.length > 0 ? (
        <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
            <BlurCircle top="150px" right="0px" />
            <BlurCircle bottom="0" left="-80px" />
            <h1 className="text-lg font-medium my-4">Your Favorite Movies </h1>
            <div className="grid md:grid-cols-3 gap-8 max-sm:justify-center mt-8">
                {dummyShowsData.map((movie) => (
                    <FeaturedCardSection movie={movie} key={movie._id} />
                ))}
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">No Favorite Available</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Please check back later.</p>
        </div>
    )
}

export default Favorite