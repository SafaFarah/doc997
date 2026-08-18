import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialtiesMenu = () => {
  return (
    <section id='specialties' className="py-10 sm:py-14">
      <div className='text-center  max-w-2xl px-4 mx-auto'>
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-900">Find a Doctor by Specialty</h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">Choose a medical specialty to quickly find the right doctor for your
          healthcare needs
        </p>
      </div>

      <div className="mt-8 sm:mt-10 grid grid-cols-3  sm:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8  px-4 sm:px-6 lg:px-8">
        {specialityData.map((specialty) => (
          <Link
            key={specialty.name}
            to={`/doctors/${specialty.slug}`}
            className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-primary-50 transition-transform duration-300 group-hover:scale-105">
              <img src={specialty.image} alt={specialty.name} className="w-full h-full object-contain p-3" />
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-700 text-center group-hover:text-primary-600 transition-colors duration-300">{specialty.name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SpecialtiesMenu