import React from 'react';
import ShopData from '../../../helpers/data/shopData';
import PreviewCollections from '../PreviewCollections/PreviewCollections';
import './Shoppage.scss';


class Shoppage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollections key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shoppage;
