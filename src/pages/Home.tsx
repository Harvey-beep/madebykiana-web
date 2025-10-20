import HeroSection from '../components/HeroSection';
import HighlightsSection from '../components/HighlightsSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';

function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <HighlightsSection />
            <ReviewsSection />
            <div className="bg-black">
                <ContactSection />
            </div>
        </div>
    );
}

export default Home