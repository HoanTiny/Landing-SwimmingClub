import About from '@/components/about';
import Banner from '@/components/banner';
import BenefitsOfSwimming from '@/components/benefitsOfSwimming';
import ClassesCarousel from '@/components/ourClasses';
import ProfessionalTrainers from '@/components/ourTrainner';
import WhyChooseUs from '@/components/whyChooseUs';
import { Box } from '@mui/material';
import Footer from '../footer';
import RegisterForm from '@/components/registerForm/RegisterForm';
import TryRegister from '@/components/tryRegister';
import VideoPreview from '@/components/VideoPreview';

function HomePage() {
  return (
    <Box id="home">
      <Banner />

      <Box>
        {/* Container  */}
        <About />
        <VideoPreview />

        <ClassesCarousel />
        <WhyChooseUs />
        <BenefitsOfSwimming />
        <TryRegister />
        <ProfessionalTrainers />
        <RegisterForm />
      </Box>

      <Footer />
    </Box>
  );
}

export default HomePage;
