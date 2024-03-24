import React from 'react'
import style from './Partners.module.css'
const Partners = () => {
    return (
        <div className="bg-white py-4 sm:py-16 lg:py-16 md:py-16 xl:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className={`text-center mt-10 text-4xl font-semibold leading-8 text-gray-900 ${style.heading}`}>
              Our Network
            </h1>
            <h2 className={`text-center mt-4 text-lg font-semibold leading-8 text-gray-900 ${style.heading}`}>
              We have plenty of collaborators and investers to work with
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="/Assets/partners/1.png"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="/Assets/partners/2.png"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="/Assets/partners/3.jpeg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="/Assets/partners/4.png"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="/Assets/partners/5.png"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      )
}

export default Partners