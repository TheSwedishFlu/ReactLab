import React from 'react';
import ReactDOM from 'react-dom/client';
import Email5 from './Email05'
import Email1 from './Email01'
import Email2 from './Email02'
import Email3 from './Email03'
import Email4 from './Email04'
import Email6 from './Email06'
import Email7 from './Email07'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    

    <Email1 /><Email1 />
    
    
    <Email2 />
    <Email2 />
    <Email3 />
    <Email3 />
    <Email4 />
    <Email4 />
    <Email5 />
    <Email5 />
    <Email6 />
    <Email6 />
    <Email7 />
    <Email7 success-message="Good work!" background="burlywood" border-thickness={20} />
    <Email7 success-message="Extra good work" background="yellow" border-thickness={40} />

    

    
  </React.StrictMode>
);


