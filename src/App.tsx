import './App.css';
import { ThemeProvider } from './components/theme-provider';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DockNav from './components/DockNav';
import Test from './Test';
import { routeConfigs, notFoundRoute } from './config/routes';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
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
      </ThemeProvider>
  );
}

export default App;
