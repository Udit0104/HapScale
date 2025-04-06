import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import './styles.css'; // Import a CSS file for custom animation

const BannerComp = () => {
    return (
        <div id='speciality' className='flex flex-col items-center justify-center text-center gap-6 py-16 text-[#fff] w-full'>
            <h5 className='text-2xl font-medium'>Take a look at our HapScale Product and HapScale Services now !!!</h5>
            <div className='flex flex-wrap justify-center items-center gap-11 pt-5 w-full'>
                {specialityData.map((item, index) => {
                    const linkTo = index === 0 ? "/hapscale-tool" : "/what-we-do";

                    return (
                        <Link
                            to={linkTo} 
                            onClick={() => window.scrollTo(0, 0)}
                            className={`flex flex-col items-center justify-center text-base cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 mb-4 sm:mb-0 ${index === 0 ? 'animate-light-pop' : ''}`}
                            key={index}
                        >
                            <img className='w-20 sm:w-32 mb-2' src={item.image} alt={item.speciality} />
                            <p className="text-lg">{item.speciality}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default BannerComp;
