import React from 'react';
import CollectionsOverview from '../../shared/CollectionsOverview/CollectionsOverview';

import './Shoppage.scss';


const Shoppage = ({ collections }) => (
  <div className='shop-page'>
    <CollectionsOverview/>
  </div>
);


export default Shoppage;
