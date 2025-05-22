import About from '@/components/about';
import Banner from '@/components/banner';
import BenefitsOfSwimming from '@/components/benefitsOfSwimming';
import ClassesCarousel from '@/components/ourClasses';
import ProfessionalTrainers from '@/components/ourTrainner';
import WhyChooseUs from '@/components/whyChooseUs';
import { Box } from '@mui/material';
import RegisterForm from '@/components/registerForm/RegisterForm';
import TryRegister from '@/components/tryRegister';
import VideoPreview from '@/components/VideoPreview';

function HomePage() {
  return (
    <Box>
      <Box id="home">
        <Banner />
      </Box>

      {/* Container  */}
      <Box id="about">
        <About />
      </Box>
      <Box id="video">
        <VideoPreview />
      </Box>
      <Box id="classes">
        <ClassesCarousel />
      </Box>
      <Box id="why">
        <WhyChooseUs />
      </Box>
      <Box id="benefits">
        <BenefitsOfSwimming />
      </Box>
      <Box id="try">
        <TryRegister />
      </Box>
      <Box id="trainers">
        <ProfessionalTrainers />
      </Box>
      <Box id="register">
        <RegisterForm />
      </Box>
    </Box>
  );
}

export default HomePage;
