import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { actDeleteProductRequest, actFetchProductsRequest} from './../../actions/index';
class ProductListPage extends Component {

    componentDidMount() {//Được gọi sau khi component render lần đầu tiên
        this.props.fetchAllProducts();
    }

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
                );
            })
        }
        return result;
    }
    onDelete = (id) => {
        this.props.deleteProduct(id);
    }

   

    render() {
        // const {products} = this.props;
        const { products } = this.props;
        return (
            <div className="container">
                {/* Nút thêm sản phẩm */}
                <Link to="/product/add" className="btn btn-info mb-10">
                    Thêm sản phẩm
				</Link>
                {/* Quản Lý Sản Phẩm */}
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
