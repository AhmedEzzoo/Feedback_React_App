import React from 'react';
import spinner from './assets/spinner.gif';
function Spinner() {
  return (
    <div className="feedback-list" style={{margin : '0 auto' , display: "flex" , justifyContent: "center"}}>
        <img src={spinner} alt='Loading...' style={{width: '100px',   margin :'0 auto'} } display='block' />
        </div>
  )
}

export default Spinner;
