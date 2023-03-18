import { createContext, useState } from 'react';
import { merge } from 'lodash';
import { MatxLayoutSettings } from 'app/components/MatxLayout/settings';

const SettingsContext = createContext({
  settings: MatxLayoutSettings,
  updateSettings: () => {}
});

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(settings || MatxLayoutSettings);

  const handleUpdateSettings = (update = {}) => {
    const marged = merge({}, currentSettings, update);
    setCurrentSettings(marged);
  };

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, updateSettings: handleUpdateSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
