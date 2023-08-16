import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollLink } from 'react-scroll';

import Stack from '@mui/material/Stack';

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
      }}
    >
      
      {data.map((link) => (
        <NavList key={link.title} item={link} />
      ))}
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
