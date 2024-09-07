import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#e74c3c',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.2rem',
      color: 'text.secondary',
      marginBottom: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});


function MainPage() {
  return (
    
    <ThemeProvider theme={theme}>
    <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
      </ThemeProvider>
    
  );
}


function App() {
  return (
    <Router >
       <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
    </Router>
  );
}
export default App;


