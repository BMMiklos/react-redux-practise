import React, { useState } from 'react';

import { connect } from 'react-redux';

//import { showProducts } from './actions';

const Products = ({ products }) => {
    return (
        <div className="products">

            <input></input>

        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products
});

/*
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});
*/

export default connect(mapStateToProps, null)(Products);
