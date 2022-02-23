import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import DefaultPage from '../DefaultPage';
import Footer from '../Footer';
import Chessboard from '../Chessboard'

function Home() {
  return (
    <>
      <DefaultPage />
      <Chessboard/>
      <Footer />
    </>
  );
}

export default Home;