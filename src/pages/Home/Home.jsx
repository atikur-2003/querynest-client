import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import FAQSection from '../../components/FAQSection';
import HowItWorks from '../../components/HowItWorks';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <HowItWorks></HowItWorks>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;