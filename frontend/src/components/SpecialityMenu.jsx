import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import './styles.css'; // Import a CSS file for custom animation

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Why HAPSCALE?</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                At HapScale, we help enterprises to baseline their current happiness level through our powerful product <b>HapScale</b>.
                <br />
                After analysing , we recommend enterprises with appropriate <b>Services</b> to improve their happiness and well being
                <br />
            </p>
           
        </div>
    );
};

export default SpecialityMenu;
