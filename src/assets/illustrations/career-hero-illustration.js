import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { memo, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useHoverParallax } from 'src/hooks/use-hover-parallax';

// ----------------------------------------------------------------------

const stylesIcon = {
  width: 40,
  height: 40,
  color: 'common.black',
};

// ----------------------------------------------------------------------

// Responsive ----------------------------------------------------------
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
// Responsive ----------------------------------------------------------

function CareerHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  const BLUE = theme.palette.info.main;

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const videoRef = useRef(null);

  return (
    <Box>
      <Carousel responsive={responsive}>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            width="100%"
            image="/assets/images/hero/construct.png"
            alt="Hero"
          />
        </Card>

        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            width="100%"
            image="/assets/images/hero/construct.png"
            alt="Hero"
          />
        </Card>
      </Carousel>
    </Box>
  );
}

CareerHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(CareerHeroIllustration);
