'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import IconButton from './icon-button/IconButton';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center mr-5">
      <IconButton
        onClick={handleThemeChange}
        variant="outline"
        icon={resolvedTheme === 'dark' ? 'SunIcon' : 'MoonIcon'}
        size="sm"
      />
    </div>
  );
};

export default ThemeSwitch;
