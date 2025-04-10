import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetter'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>
            Ecodev enterprise was born out of a passion for innovation and a desire to revolutionize the way
            people shop online. Our journey began with a simple idea to provide a platform where customers
            can easily discover, explore and purchase a wide range of products from the comfort of their homes.
           </p>
           <p>
            Since our inception, we've workedd tirelesly to create a diverse selection of high-quality 
            produtcs that cater to every taswe and preference. 
            From fashion and beauty to electronics and home essentials.We offer extensive collections offered
            from trusted  board and suppliers.
           </p>
           <b className='text-gray-800'>
            Our Mission
           </b>
           <p>
            Our mission at Ecodev enterprise is to empower customers with choice, and confidence.
            We're dedicated to providing a seamless shopping experince that exceeds expectations, from 
            browsing and ordering to delivery and beyond
           </p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Quality Assurance:
          </b>
          <p className='text-gray-600'>
            We meticulously select and vet each product to ensure it meets our stringent quality standard.
          </p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Convinience:
          </b>
          <p className='text-gray-600'>
            With our user-friendly interface and hassle-free ordering process, shopping has been easier.
          </p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Exceptional customer service:
          </b>
          <p className='text-gray-600'>
            Our team of dedicated proffessionals is here to assist you, ensuring your satisfaction is our top priority.
          </p>
        </div>

      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
