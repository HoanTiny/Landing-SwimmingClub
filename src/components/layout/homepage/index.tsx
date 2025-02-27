import About from '@/components/about';
import Banner from '@/components/banner';
import ClassesCarousel from '@/components/ourClasses';
import WhyChooseUs from '@/components/whyChooseUs';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box>
      <Banner />

      <Box>
        {/* Container  */}
        <About />
        <ClassesCarousel />
        <WhyChooseUs />
      </Box>
    </Box>
  );
}

export default HomePage;
