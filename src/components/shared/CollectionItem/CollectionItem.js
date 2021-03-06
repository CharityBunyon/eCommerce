
import React from 'react';
import { connect } from 'react-redux';
import addItem from '../../../redux/cart/add.action';
import CustomBtn from '../CustomBtn/CustomBtn';
import './CollectionItem.scss';

// eslint-disable-next-line no-shadow
const CollectionItem = ({ item, addItem }) => {
  const {
    name, price, imageUrl,
  } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomBtn inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
