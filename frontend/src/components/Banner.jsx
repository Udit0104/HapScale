import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import BannerComp from './BannerComp'
const Banner = () => {


    return (
        <div className='flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            <BannerComp />
        </div>
    )
}

export default Banner