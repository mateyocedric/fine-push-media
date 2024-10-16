import { m, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import dynamic from "next/dynamic";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useResponsive } from 'src/hooks/use-responsive';

import { HEADER } from 'src/layouts/config-layout';
import { bgBlur, bgGradient, textGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';
import ComingSoonForm from 'src/fpm/coming-soon-v2/components/ComingSoonForm';
import Blob from 'src/lottie/blob.json';
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { ArticleCard, FeaturedCard, SuggestionCard } from './home-view/components/ArticleCard';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '170vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  // ...textGradient(
  //   `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  // ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: 24,
  letterSpacing: 4,
  textAlign: 'start',
  backgroundSize: '400%',
  fontSize: `${80 / 16}rem`,
  fontFamily: theme.typography.fontSecondaryFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${80 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const lightMode = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const transition = {
    repeatType: 'loop',
    ease: 'linear',
    duration: 60 * 4,
    repeat: Infinity,
  };

  const opacity = 1 - (percent / 300); // Updated opacity calculation
  const hide = percent > 180; // Updated hide condition

  const renderLatest = (
    <Box
      sx={{
        height: 500,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
      spacing={1}
    >
      <m.div variants={varFade().in}>
        <FeaturedCard />
      </m.div>
    </Box>
  );

  const renderTop = (
    <Stack
      alignItems="start"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
      spacing={1}
    >
      <m.div variants={varFade().in}>
        <ArticleCard />
      </m.div>
      <m.div variants={varFade().in}>
        <ArticleCard />
      </m.div>
    </Stack>
  );

  const renderSuggested = (
    <Stack
      alignItems="start"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
      spacing={1}
    >
      <m.div variants={varFade().in}>
        <SuggestionCard />
      </m.div>
    </Stack>
  );

  const renderSlides = (
    <Box
      sx={{
        // height: 'auto',
        // position: 'absolute',
        opacity: opacity > 0 ? opacity : 0,
        // transform: `skew(${-16 - percent / 24}deg, ${4 - percent / 16}deg)`,
        // ...(theme.direction === 'rtl' && {
        //   transform: `skew(${16 + percent / 24}deg, ${4 + percent / 16}deg)`,
        // }),
      }}
    >

      <Lottie
        loop
        autoplay
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        animationData={Blob}
        isClickToPauseDisabled
        height="100%"
        width="100%"
      />
    </Box>
  );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1, mt: 10 }}>
            <Grid
              container
              columnSpacing={{ xs: 2, md: 3 }}
              rowSpacing={4}
              sx={{ height: 1 }}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid xs={12} md={4} display="flex" justifyContent="center">
                {renderTop}
              </Grid>

              <Grid xs={12} md={5} display="flex" justifyContent="center">
                {renderLatest}
              </Grid>

              <Grid xs={12} md={3} display="flex" justifyContent="center">
                {renderSuggested}
              </Grid>

              {/* Optional: Uncomment to show Lottie animation for mdUp */}
              {/* {mdUp && <Grid md={7}>{renderSlides}</Grid>} */}
            </Grid>
          </Container>

          {/* {renderEllipses} */}
        </StyledWrapper>
      </StyledRoot>

      {/* {mdUp && renderPolygons} */}

      <Box sx={{ height: { md: '300vh' } }} />
    </>
  );
}
