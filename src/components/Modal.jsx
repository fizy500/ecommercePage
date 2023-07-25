import Next from '../assets/icon-next.svg'
import Previous from '../assets/icon-previous.svg'
import ProductThumbnail4 from '../assets/image-product-4-thumbnail.jpg'

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
      <div className=' rounded-lg p-6 z-10 w-[40%] relative'>
        {/* {children} */}
        <div className='w-8 h-8 flex justify-center items-center bg-white rounded-[50%] cursor-pointer  absolute right-[91%] top-1/2 left-[91%]'>
          <svg
            width='13'
            height='18'
            xmlns='http://www.w3.org/2000/svg'
            className=''
          >
            <path
              d='m2 1 8 8-8 8'
              stroke='#1D2026'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </div>

        <div className='w-8 h-8 flex justify-center items-center bg-white rounded-[50%] cursor-pointer  absolute top-1/2 right-[91%]'>
          <svg
            width='12'
            height='18'
            xmlns='http://www.w3.org/2000/svg'
            className='hover:fill-orange-500'
          >
            <path
              d='M11 1 3 9l8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </div>

        <img
          src={ProductThumbnail4}
          alt=''
          width='100%'
          className='rounded-lg'
        />
        <button
          className='  text-white font-bold py-2 px-4 rounded absolute bottom-[97%] left-[90%]'
          onClick={onClose}
        >
          <svg
            width='14'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
            className='hover:fill-blue-500'
          >
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#69707D'
              fill-rule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Modal
