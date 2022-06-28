//import { useState } from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import AboutPage  from './components/pages/AboutPage';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
//import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPageLink from './components/AboutPageLink';
import { FeedbackProvider } from './components/context/FeedbackContext';

function App() {

    return (

        <FeedbackProvider>
          <Router>
            <Header />
           
              <div className="container"> 
                <Routes>
                   <Route  exact  path='/' element={
                     <>
                      <FeedbackForm  />
                      <FeedbackStats />
                      <FeedbackList  />  
                     </>
                    }/> 
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
                <AboutPageLink />
              </div>
            
          </Router>
        </FeedbackProvider>
    ) ;
}



export default App;