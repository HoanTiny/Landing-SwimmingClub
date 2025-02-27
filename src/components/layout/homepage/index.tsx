import About from '@/components/about';
import Banner from '@/components/banner';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box>
      <Banner />

      <Box>
        {/* Container  */}
        <About />
      </Box>
    </Box>
  );
}

export default HomePage;
