import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import FAQSection from '../../components/FAQSection';
import HowItWorks from '../../components/HowItWorks';
import RecentQueries from '../../components/RecentQueries';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <RecentQueries></RecentQueries>
            <HowItWorks></HowItWorks>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;