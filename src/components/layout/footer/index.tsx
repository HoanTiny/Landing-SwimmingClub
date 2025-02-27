// 'use client'; // Nếu bạn dùng Next.js 13 (app router)

// import React from 'react';
// import { Box, Grid, Typography, Link } from '@mui/material';
// import { LocationOn, Phone, Email } from '@mui/icons-material';

// export default function Footer() {
//   return (
//     <Box className="bg-[#0A0A0A] text-white pt-10 pb-6">
//       {/* Phần nội dung chính của footer */}
//       <Box className="max-w-6xl mx-auto px-4">
//         <Grid container spacing={4}>
//           {/* Cột 1: Logo + mô tả */}
//           <Grid item xs={12} md={3}>
//             <Typography variant="h5" className="font-bold mb-3">
//               Poolax
//             </Typography>
//             <Typography
//               variant="body2"
//               className="text-gray-400 leading-relaxed"
//             >
//               We provide specialized winterization services to safeguard your
//               pool during the off-season. And when spring arrives, we handle the
//               thorough opening process.
//             </Typography>
//           </Grid>

//           {/* Cột 2: Quick Link */}
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" className="font-semibold mb-3">
//               Quick Link
//             </Typography>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors"
//                   underline="none"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors"
//                   underline="none"
//                 >
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors"
//                   underline="none"
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors"
//                   underline="none"
//                 >
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </Grid>

//           {/* Cột 3: Popular Services */}
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" className="font-semibold mb-3">
//               Popular Services
//             </Typography>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 duration-500
//                     ease-in-out hover:text-blue-400 hover:pl-2 transition-colors hover:before:translate-x-1"
//                   underline="none"
//                 >
//                   Maintenance
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors hover:before:translate-x-1"
//                   underline="none"
//                 >
//                   Equipment&apos;s
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors hover:before:translate-x-1"
//                   underline="none"
//                 >
//                   Pool Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-gray-300 hover:text-blue-400 transition-colors hover:before:translate-x-1"
//                   underline="none"
//                 >
//                   Drain &amp; Clean
//                 </Link>
//               </li>
//             </ul>
//           </Grid>

//           {/* Cột 4: Contact Us */}
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" className="font-semibold mb-3">
//               Contact Us
//             </Typography>
//             <Box className="flex items-start space-x-2 mb-2">
//               <LocationOn fontSize="small" className="text-blue-400 mt-1" />
//               <Typography variant="body2" className="text-gray-300">
//                 445 SE St. unit 2, Santa Rosa CA (95421), United States
//               </Typography>
//             </Box>
//             <Box className="flex items-center space-x-2 mb-2">
//               <Phone fontSize="small" className="text-blue-400" />
//               <Link
//                 href="tel:+965-2582-5654"
//                 className="text-gray-300 hover:text-blue-400 transition-colors"
//                 underline="none"
//               >
//                 +965-2582-5654
//               </Link>
//             </Box>
//             <Box className="flex items-center space-x-2 mb-2">
//               <Phone fontSize="small" className="text-blue-400" />
//               <Link
//                 href="tel:+965-2582-5654"
//                 className="text-gray-300 hover:text-blue-400 transition-colors"
//                 underline="none"
//               >
//                 +965-2582-5654
//               </Link>
//             </Box>
//             <Box className="flex items-center space-x-2">
//               <Email fontSize="small" className="text-blue-400" />
//               <Link
//                 href="mailto:hello@Poolax.com"
//                 className="text-gray-300 hover:text-blue-400 transition-colors"
//                 underline="none"
//               >
//                 hello@Poolax.com
//               </Link>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Dòng bản quyền */}
//       <Box className="max-w-6xl mx-auto mt-8 px-4 border-t border-gray-700 pt-4">
//         <Typography variant="body2" className="text-gray-400 text-center">
//           Copyright © 2014 <span className="text-blue-400">Poolax</span>. All
//           Rights Reserved
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

'use client'; // Nếu dùng Next.js 13 (app router)

import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box className="bg-[#0A0A0A] text-white pt-10 pb-6">
      {/* Phần nội dung chính của footer */}
      <Box className="max-w-6xl mx-auto px-4">
        <Grid container spacing={4}>
          {/* Cột 1: Logo + mô tả */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className="font-bold mb-3">
              Poolax
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-400 leading-relaxed"
            >
              We provide specialized winterization services to safeguard your
              pool during the off-season. And when spring arrives, we handle the
              thorough opening process.
            </Typography>
          </Grid>

          {/* Cột 2: Quick Link (có hiệu ứng hover) */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-3">
              Quick Link
            </Typography>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Cột 3: Popular Services (có hiệu ứng hover) */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-3">
              Popular Services
            </Typography>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Cleaner
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Equipment&apos;s
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover" underline="none">
                  Pool Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="
                    link-hover
                  "
                  underline="none"
                >
                  Drain &amp; Clean
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Cột 4: Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-3">
              Contact Us
            </Typography>
            <Box className="flex items-start space-x-2 mb-2">
              <LocationOn fontSize="small" className="text-blue-400 mt-1" />
              <Typography variant="body2" className="text-gray-300">
                445 SE St. unit 2, Santa Rosa CA (95421), United States
              </Typography>
            </Box>
            <Box className="flex items-center space-x-2 mb-2">
              <Phone fontSize="small" className="text-blue-400" />
              <Link
                href="tel:+965-2582-5654"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                underline="none"
              >
                +965-2582-5654
              </Link>
            </Box>
            <Box className="flex items-center space-x-2 mb-2">
              <Phone fontSize="small" className="text-blue-400" />
              <Link
                href="tel:+965-2582-5654"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                underline="none"
              >
                +965-2582-5654
              </Link>
            </Box>
            <Box className="flex items-center space-x-2">
              <Email fontSize="small" className="text-blue-400" />
              <Link
                href="mailto:hello@Poolax.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                underline="none"
              >
                hello@Poolax.com
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Dòng bản quyền */}
      <Box className="max-w-6xl mx-auto mt-8 px-4 border-t border-gray-700 pt-4">
        <Typography variant="body2" className="text-gray-400 text-center">
          Copyright © 2014 <span className="text-blue-400">Poolax</span>. All
          Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}
