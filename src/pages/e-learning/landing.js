import { Helmet } from 'react-helmet-async';

import ElearningLandingView from 'src/sections/_elearning/view/elearning-landing-view';

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
