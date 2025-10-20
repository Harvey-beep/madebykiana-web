import React from 'react';
import { motion } from 'framer-motion';

interface ReviewsCardProps {
    name: string;
    quote: string;
    className?: string
}

const StarIcon: React.FC = () => (
    <svg
        className="w-5 h-5 text-black"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const UserIcon: React.FC = () => (
    <svg
        className="w-8 h-8 text-black flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

const ReviewsCard: React.FC<ReviewsCardProps> = ({
    name,
    quote,
    className = "",
}) => (
    <motion.div
        className={`bg-gray-100 rounded-lg shadow-lg p-8 ${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
    >
        <div className="flex justify-between items-start mb-4">
            {/* Header: Icon + Name */}
            <div className="flex items-center gap-3">
                <UserIcon />
                <h3 className="font-fredoka font-bold text-xl">{name}</h3>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
        </div>

        {/* Quote */}
        <p className="font-fredoka text-gray-700 leading-relaxed">{quote}</p>
    </motion.div>
)

const ReviewsSection: React.FC = () => {
    return (
        <section className="my-24 px-4">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-center font-fredoka text-4xl font-black uppercase text-black">
                    What My Customers Say
                </h2>
                <p className="text-center font-fredoka text-lg text-gray-600 mt-4 max-w-xl mx-auto">
                    Don't just take our word for it - hear from the people who have
                    brought their ideas to life
                </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <ReviewsCard
                    name="Maria Santos"
                    quote="I got a custom portrait of me and my next friend, and it came out amazing! The details are spot-on, right down to the little things we thought no one would notice. It feels so personal and honestly brought such a big smile to our faces. The quality of the artwork is incredible and way better than I expected for something custom-made. I'm already planning my next order because this experience was perfect from start to finish!"
                />
                {/* Card 2 */}
                <ReviewsCard
                    name="Carlo Reyes"
                    quote="Ordered a collectible figure of my favorite game character and wow—better than I imagined! The craftsmanship is super high-quality, and the character looks like it stepped right out of the screen. I saw new bits of personality they managed to capture in the design. It feels sturdy and premium, not like something cheaply made. Friends who've seen it keep asking where I got it from. I'll 100% be back for more because this is a collector's dream come true!"
                />
                {/* Card 3 (Spans 2 columns and is centered) */}
                <ReviewsCard
                    name="Angela Dela Cruz"
                    quote="I surprised my partner with a custom keychain of us, and he loved it! The likeness was so accurate that we both couldn't stop laughing and smiling when we saw it. It's such a unique, thoughtful gift that feels one-of-a-kind. The keychain itself is durable and really well-made, so I know it'll last a long time. It turned out way more special than anything I could've found in a store."
                    className="md:col-span-2 max-w-xl mx-auto w-full"
                />
            </div>
        </section>
    )
}

export default ReviewsSection;
