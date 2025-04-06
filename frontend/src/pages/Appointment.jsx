import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedEvents';
import axios from 'axios';
import { toast } from 'react-toastify';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);

    const [docInfo, setDocInfo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocInfo = async () => {
            const docInfo = doctors.find((doc) => doc._id === docId);
            setDocInfo(docInfo);
        };

        if (doctors.length > 0) {
            fetchDocInfo();
        }
    }, [doctors, docId]);

    const bookAppointment = async () => {
        if (!token) {
            toast.warning('Login to book appointments');
            return navigate('/login');
        }
    
        // Set slotDate to a fixed value (e.g., "anytime")
        const slotDate = "anytime"; 
        const slotTime = "anytime"; // Dummy value to bypass slot validation
    
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/book-appointment`,
                { docId, slotDate, slotTime },
                { headers: { token } }
            );
    
            if (data.success) {
                toast.success(data.message);
                getDoctosData();
                navigate('/my-bookings');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to book appointment');
        }
    };
    
    

    return docInfo ? (
        <div>
            <div className='flex flex-col sm:flex-row gap-4 pt-20'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='' />
                </div>

                <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>
                        {docInfo.name} <img className='w-5' src={assets.verified_icon} alt='' />
                    </p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'></div>

                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>
                            About <img className='w-3' src={assets.info_icon} alt='' />
                        </p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>
                    
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>
                            Address <img className='w-3' src={assets.location_icon} alt='' />
                        </p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.address.line1}</p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.address.line2}</p>

                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>
                            Date and Time
                        </p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.slotDate}</p>
                    </div>
                    
                    
                    
                    <p className='text-gray-600 font-medium mt-4'>
                        Ticket fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
                <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>
                    Book Tickets NOW!!!
                </button>
            </div>

            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
        </div>
    ) : null;
};

export default Appointment;
