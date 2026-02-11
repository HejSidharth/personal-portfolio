import './App.css';
import { ThemeProvider } from './components/theme-provider';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DockNav from './components/DockNav';
import Test from './Test';
import { routeConfigs, notFoundRoute } from './config/routes';
import { RobotModeProvider, useRobotMode } from './context/RobotModeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { TooltipProvider } from './components/ui/tooltip';
import RobotView from './components/RobotView';
import { useEffect } from 'react';

function AppContent() {
  const { isRobotMode } = useRobotMode();

  useEffect(() => {
    console.log(
      "%cHey, why are you looking at this? I hope I have no errors.",
      "color: #fbbf24; font-size: 16px; font-weight: bold; font-family: monospace;"
    );
  }, []);

  return (
    <BrowserRouter>
      {isRobotMode && <RobotView />}
      <Navbar />
      <Routes>
        {routeConfigs.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
        <Route path="/test" element={<Test />} />
        <Route
          path={notFoundRoute.path}
          element={<notFoundRoute.component />}
        />
      </Routes>
      <DockNav />
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AccessibilityProvider>
        <TooltipProvider>
          <RobotModeProvider>
            <AppContent />
          </RobotModeProvider>
        </TooltipProvider>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default App;
