import { useState } from "react";
import Modal from "./Modal";
import ProductThumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "../assets/image-product-4-thumbnail.jpg";

function ImageModals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState([]);

  const thumbnailFunc = () => {
    openModal()
    setThumbnail(ProductThumbnail4);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='hidden lg:flex justify-between  '>
      <img
        src={ProductThumbnail1}
        alt=''
        width='100px'
        className='rounded-md cursor-pointer'
        onClick={openModal}
      />
      <img
        src={ProductThumbnail2}
        alt=''
        width='100px'
        className='rounded-md cursor-pointer'
        onClick={openModal}
      />
      <img
        src={ProductThumbnail3}
        alt=''
        width='100px'
        className='rounded-md cursor-pointer'
        onClick={openModal}
      />
      <img
        src={ProductThumbnail4}
        alt=''
        width='100px'
        className='rounded-md cursor-pointer'
        onClick={thumbnail}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {thumbnail}
      </Modal>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}  /> */}
    </div>
  );
}

export default ImageModals;
