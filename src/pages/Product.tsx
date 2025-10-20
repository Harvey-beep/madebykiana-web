import ProductGridSection from "../components/ProductGridSection";
import ProductHero from "../components/ProductHero";
import SocialBanner from "../components/SocialBanner";

const Product: React.FC = () => {
    return (
        <>
            <ProductHero />
            <ProductGridSection />
            <SocialBanner />
        </>
    )
}

export default Product;