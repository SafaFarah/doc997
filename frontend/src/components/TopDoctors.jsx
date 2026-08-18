import React from 'react'
import { doctors } from '../assets/assets'
import { Link } from 'react-router-dom'

const TopDoctors = () => {
  return (
    <section className="py-18 sm:py-22 border-t-2  border-gray-200 "  id="top-doctors">
      {/* Section heading */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-700">Top Doctors</h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">Explore our trusted doctors and find the right specialist for your healthcare needs.</p>
      </div>

      {/* Doctors */}
      <div className='mt-8 sm:mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 sm:gap-6 px-4 sm:px-6 lg:px-8'>
        {doctors.slice(0, 8).map((doctor) => (
          <Link
            key={doctor._id}
            to={`/doctors/${doctor._id}`}
            className='group overflow-hidden rounded-xl border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
          >
            {/* Doctor image */}
            <div className='overflow-hidden'>
              <img src={doctor.image} alt={doctor.name}
              className='w-full aspect-[4/5] object-cover'/>
            </div>

            {/* Doctor information */}
            <div className="p-4">
              <div className='flex items-center gap-2'>

                <span className={`w-3 h-3 rounded-full ${doctor.available?"bg-green-500":"bg-gray-500"}`}/>

                <span className={`text-sm font-medium ${doctor.available?"text-green-500":"text-gray-500"}`}>
                  {doctor.available ? "Available" : "Unavailable"}
                </span>

              </div>
              <h3 className='mt-2 text-base sm:text-lg font-semibold text-primary-700 group-hover:text-primary-800 transition-colors duration-300'>
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {doctor.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div className="flex justify-center mt-8">
        <Link
          to="/doctors"
          className=" px-7 py-3 rounded-full text-white text-sm sm:text-base font-semibold bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
        >
          View All Doctors
        </Link>
      </div>
    </section>
  )
}

export default TopDoctors