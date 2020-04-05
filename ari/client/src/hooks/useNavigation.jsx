import { useState } from 'react';

const useNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return {
    isNavOpen,
    handleNavigation,
  };
};

export default useNavigation;
