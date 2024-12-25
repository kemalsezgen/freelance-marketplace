import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store, persistor, RootState } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const ThemedApp: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);