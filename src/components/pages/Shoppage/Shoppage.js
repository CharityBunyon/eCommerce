import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../shared/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';

import './Shoppage.scss';


const Shoppage = ({ match }) => {
  console.log(match);
  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route path={`${match.path}/:collectionId`} component={ CollectionPage}/>
  </div>
  );
};


export default Shoppage;
