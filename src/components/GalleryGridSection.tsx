import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Modal from './Modal';

interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  colSpan?: string;
  rowSpan?: string;
}

interface GalleryGridSectionProps {
  images: GalleryImage[];
}

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const GalleryGridSection: React.FC<GalleryGridSectionProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const isModalOpen = selectedImage !== null;

  const openModal = (image: GalleryImage) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row-dense"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {images.map((image) => (
              <motion.div
                key={image.id}
                className={`bg-gray-100 p-2 rounded-lg shadow-md cursor-pointer 
                                ${image.colSpan || 'col-span-1'} 
                                ${image.rowSpan || 'row-span-1'}`}
                variants={imageVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                onClick={() => openModal(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedImage && (
          <div className="p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default GalleryGridSection;