import { useState } from 'react'

import ProductImage1 from '../assets/image-product-1.jpg'
import IconCart from '../assets/icon-cart.svg'
import ImageModals from './ImageModals'
export default function Showcase () {
  // FF7D1A one shade of orange
  //
  const [count, setCount] = useState(0)
  // const [orderedQuantity, setOrderedQuantity] = useState([])

  const takeQuantity = () => {}
  // setOrderedQuantity(count)
  // setCount(0)
  return (
    <div className='max-width grid grid-rows-2 lg:grid-cols-2 gap-5 items-start mt-20'>
      <div className='flex flex-col space-y-6'>
        <img src={ProductImage1} alt='Product' className='rounded-md' />
        <ImageModals />
      </div>

      <div className='flex flex-col space-y-8 items-start px-3 py-10'>
        <p className='text-[#FF7D1A]'>Sneaker Company</p>
        <h1 className='text-[#1D2025] text-2xl font-bold'>
          Fall Limited Edition Sneakers
        </h1>
        <p className='text-base text-left'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className='grid grid-rows-2 lg:grid-cols-2 gap-4 items-center'>
          <div className='grid grid-cols-2 gap-5 lg:space-x-0'>
            <p className='font-bold text-[#1D2025] text-2xl'>$125.00</p>
            <p className='bg-[#FFEDE0]  text-[#FF7D1A] w-fit px-3 py-1 rounded-md'>
              50%
            </p>
          </div>
          <p className='line-through  text-left  '> $250.00</p>
        </div>
        <div className='grid grid-rows-2 lg:grid-cols-2 gap-5 w-full lg:w-fit'>
          <div className='flex justify-center items-center space-x-3 bg-slate-400 rounded-md w-full'>
            <button
              className='py-2 px-3 text-[#FF7D1A] text-xl font-bold'
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <p className='py-2 px-3'>{count}</p>
            <button
              className='py-2 px-3 text-[#FF7D1A] text-xl font-bold'
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <button
            className='w-full flex space-x-5 items-center justify-center bg-orange-600 px-3 rounded-md'
            onClick={e => takeQuantity()}
          >
            <img src={IconCart} alt='' />
            <span> Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
