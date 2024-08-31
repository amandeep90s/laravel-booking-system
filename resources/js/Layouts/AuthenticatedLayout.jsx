import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import '../../css/layout.css';
import '../../css/theme.css';

import { PrimeReactProvider } from 'primereact/api';
import PropTypes from 'prop-types';
import { LayoutProvider } from './layout/context/layoutcontext';
import Layout from './layout/layout';

const Authenticated = ({ children }) => {
  return (
    <PrimeReactProvider>
      <LayoutProvider>
        <Layout>{children}</Layout>
      </LayoutProvider>
    </PrimeReactProvider>
  );
};

Authenticated.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticated;
