import { useState } from 'react';
import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';
import '../styles/App.css';



function App() {
  const [page, setPage] = useState('home');

  return (
    <div className='app'>
      <Header setPage={setPage}/>
      <MainArea page={page} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default App;
