import About from '@/components/about';
import Banner from '@/components/banner';
import BenefitsOfSwimming from '@/components/benefitsOfSwimming';
import ClassesCarousel from '@/components/ourClasses';
import ProfessionalTrainers from '@/components/ourTrainner';
import WhyChooseUs from '@/components/whyChooseUs';
import { Box } from '@mui/material';
import Footer from '../footer';
import RegisterForm from '@/components/registerForm/RegisterForm';

function HomePage() {
  return (
    <Box id="home">
      <Banner />

      <Box>
        {/* Container  */}
        <About />
        <ClassesCarousel />
        <WhyChooseUs />
        <BenefitsOfSwimming />
        <ProfessionalTrainers />
        <RegisterForm />
      </Box>

      <Footer />
    </Box>
  );
}

export default HomePage;
