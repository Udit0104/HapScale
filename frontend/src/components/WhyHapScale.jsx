import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import './styles.css'; // Import a CSS file for custom animation

const WhyHapScale = () => {
    return (
        <div id='why-hapscale' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Why HAPSCALE?</h1>
            <p className='sm:w-1/2 text-center text-base md:text-lg lg:text-xl'>
                At HapScale, we measure and track Happiness Levels of employees within an organisation with our easy to use product <b>HapScale</b>.
                <br />
                Further more, we guide and enhance employees' well being through our different services, which include expert led sessions, workshops, and insightful books.
                <br /><br/>
                <b>Start Measuring and Elevating Happiness Today!</b>
            </p>
        </div>
    );
};

export default WhyHapScale;
