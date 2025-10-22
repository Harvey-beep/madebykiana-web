import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  // Column 1
  { id: 1, src: 'https://placehold.co/400x600/F6BE00/black?text=Image+1', alt: 'Gallery Image 1', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 2, src: 'https://placehold.co/400x400/F6BE00/black?text=Image+2', alt: 'Gallery Image 2', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  // Column 2
  { id: 3, src: 'https://placehold.co/400x300/F6BE00/black?text=Image+3', alt: 'Gallery Image 3', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, src: 'https://placehold.co/400x200/F6BE00/black?text=Image+4', alt: 'Gallery Image 4', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 5, src: 'https://placehold.co/400x200/F6BE00/black?text=Image+5', alt: 'Gallery Image 5', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 6, src: 'https://placehold.co/400x200/F6BE00/black?text=Image+6', alt: 'Gallery Image 6', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  // Column 3
  { id: 7, src: 'https://placehold.co/400x600/F6BE00/black?text=Image+7', alt: 'Gallery Image 7', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 8, src: 'https://placehold.co/200x200/F6BE00/black?text=Image+8', alt: 'Gallery Image 8', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 9, src: 'https://placehold.co/200x200/F6BE00/black?text=Image+9', alt: 'Gallery Image 9', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 10, src: 'https://placehold.co/200x200/F6BE00/black?text=Image+10', alt: 'Gallery Image 10', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const GalleryGridSection: React.FC = () => {
    return (
        <section className="py-16 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row-dense"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.05 }}
                >

                    {galleryImages.map((image) => (
                        <motion.div
                            key={image.id}
                            className={`bg-gray-100 p-2 rounded-lg shadow-md ${image.colSpan} ${image.rowSpan}`}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                            }}
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
    );
}

export default GalleryGridSection;