import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

export const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState('');

  const value = useMemo(
    () => ({
      activeMenu,
      setActiveMenu,
    }),
    [activeMenu, setActiveMenu],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
