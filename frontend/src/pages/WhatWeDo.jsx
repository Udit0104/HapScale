import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
const whatWeDo = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className="pt-20">
      <p className='text-gray-600'>Browse through our different services.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Sessions' ? navigate('/what-we-do') : navigate('/what-we-do/Sessions')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Sessions' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Sessions</p>
          {/* <p onClick={() => speciality === 'Seminars' ? navigate('/what-we-do') : navigate('/what-we-do/Seminars')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Seminars' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Seminars</p> */}
          <p onClick={() => speciality === 'Books' ? navigate('/what-we-do') : navigate('/what-we-do/Books')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Books' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Books</p>
          {/* <p onClick={() => speciality === 'Workshops' ? navigate('/what-we-do') : navigate('/what-we-do/Workshops')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Workshops' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Workshop</p> */}
          <p onClick={() => speciality === 'Hapscale' ? navigate('/hapscale-tool') : navigate('/hapscale-tool') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Hapscale' ? 'bg-[#E2E5FF] text-black ' : ''}` } >HAPSCALE</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/events/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Completed"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                {/* <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default whatWeDo