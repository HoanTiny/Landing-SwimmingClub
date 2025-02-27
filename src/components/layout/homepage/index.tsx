import About from '@/components/about';
import Banner from '@/components/banner';
import BenefitsOfSwimming from '@/components/benefitsOfSwimming';
import ClassesCarousel from '@/components/ourClasses';
import ProfessionalTrainers from '@/components/ourTrainner';
import WhyChooseUs from '@/components/whyChooseUs';
import { Box } from '@mui/material';
import Footer from '../footer';

function HomePage() {
  return (
    <Box>
      <Banner />

      <Box>
        {/* Container  */}
        <About />
        <ClassesCarousel />
        <WhyChooseUs />
        <BenefitsOfSwimming />
        <ProfessionalTrainers />
      </Box>

      <Footer />
    </Box>
  );
}

export default HomePage;
