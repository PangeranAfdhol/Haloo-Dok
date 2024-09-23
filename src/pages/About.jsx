import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Wellcom to our About Page. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque voluptatem neque accusamus, vero esse eaque obcaecati, ratione porro, ipsa sed veritatis! Consectetur dolorum molestiae culpa voluptatem! Nostrum, iusto rem.</p>
            <p>About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas repellat a exercitationem libero tenetur, voluptate dignissimos eligendi. Id itaque accusamus laudantium velit iure sint vitae, nostrum exercitationem hic autem.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias incidunt cum excepturi aut. Culpa, reiciendis incidunt quia nulla at modi iste dolor explicabo illo labore ea esse ducimus sint!</p>
          </div>
        </div>
        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
    </div>
  )
}

export default About