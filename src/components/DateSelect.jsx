import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';

const DateSelect = ({ dateTime, id }) => {


    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    const onBookHandler = () => {
        if (!selected) {
            return toast('Please select a date first')
        }
        navigate(`/movies/${id}/${selected}`)
        scrollTo(0, 0)
    }
    return (
        <div id='dateSelect' className='pt-30'>
            {/* Main container with dark background */}
            <div className='relative bg-red-900/20 text-white p-8 rounded-lg'>
                <BlurCircle top="-100px" left="-100px" />
                <BlurCircle top="100px" right="0px" />

                {/* Header */}
                <div className='flex items-center justify-between mb-8'>
                    <h2 className='text-xl font-medium text-white'>Choose Date</h2>
                    <button onClick={onBookHandler} className='bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md font-medium transition-colors'>
                        Book Now
                    </button>
                </div>

                {/* Date navigation */}
                <div className='flex items-center justify-center gap-8'>
                    {/* Left arrow */}
                    <button className='text-white hover:text-red-300 transition-colors'>
                        <ChevronLeft size={24} />
                    </button>

                    {/* Date buttons */}
                    <div className='flex gap-6'>
                        {Object.keys(dateTime).map((date, index) => {
                            const dateObj = new Date(date);
                            const day = dateObj.getDate();
                            const month = dateObj.toLocaleDateString("en-US", { month: 'short' });

                            return (
                                <button
                                    onClick={() => setSelected(date)}
                                    key={date}
                                    className={`flex flex-col items-center justify-center min-w-[60px] py-3 px-2 
                                        rounded-md transition-colors hover:bg-white/10 ${selected === date ? 'bg-green-400/20' : '' // Highlight the selected date (26 Jul in your image)
                                        }`}
                                >
                                    <span className='text-lg font-medium'>{day}</span>
                                    <span className='text-sm opacity-90'>{month}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right arrow */}
                    <button className='text-white hover:text-red-300 transition-colors'>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DateSelect