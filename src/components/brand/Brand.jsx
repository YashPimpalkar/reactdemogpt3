import React from 'react';
import './brand.css';
import { google,slack,shopify,atlassian,dropbox } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
   <div className=''>
    <img src={google} alt="google" srcset="" />
    </div>
    <div className=''>
    <img src={slack} alt="google" srcset="" />
    </div>
    <div className=''>
    <img src={atlassian} alt="google" srcset="" />
    </div>
    <div className=''>
    <img src={dropbox} alt="google" srcset="" />
    </div>
    <div className=''>
    <img src={shopify} alt="google" srcset="" />
    </div>
    </div>
  )
}

export default Brand