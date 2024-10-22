import { createContext, useState } from "react";
import merge from "lodash/merge";
// CUSTOM COMPONENT
import { MatxLayoutSettings } from "app/components/MatxLayout/settings";

export const SettingsContext = createContext({
  settings: MatxLayoutSettings,
  updateSettings: () => {}
});

export default function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(settings || MatxLayoutSettings);

  const handleUpdateSettings = (update = {}) => {
    const merged = merge({}, currentSettings, update);
    setCurrentSettings(merged);
  };

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, updateSettings: handleUpdateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
