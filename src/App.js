import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import NotFound from './pages/NotFound';
import FlexLayout from './components/FlexLayout';
import UseDataComponent from './components/UseDataComponent';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pageA/*" element={<PageA />} />
        <Route path="/flexLayout" element={<FlexLayout />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
        <Route path="/UseDataComponent" element={<UseDataComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
