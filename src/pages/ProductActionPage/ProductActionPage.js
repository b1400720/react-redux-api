import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            const product = {
                id: nextProps.itemEditting.id,
                txtName: nextProps.itemEditting.name,
                txtPrice: nextProps.itemEditting.price,
                chkbStatus: nextProps.itemEditting.status
            }
            this.setState(product);
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const product = {
            id: this.state.id,
            name: this.state.txtName,
            price: this.state.txtPrice,
            status: this.state.chkbStatus
        }
        if (product.id) { //update
            this.props.updateProduct(product);
        } else {
            this.props.addProduct(product);
        }
        history.goBack();

    }
    render() {
        const { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên Sản Phẩm:</label>
                            <input type="text" className="form-control" name="txtName"
                                value={txtName} onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá:</label>
                            <input type="number" className="form-control" name="txtPrice"
                                value={txtPrice} onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng Thái:</label>&nbsp;
                            <input type="checkbox" className="mr-10" name="chkbStatus"
                                checked={chkbStatus} onChange={this.onChange}
                            />&nbsp;Còn Hàng
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu Lại</button>&nbsp;
                        <Link to="/product-list" className="btn btn-danger mr-10">Trở Lại</Link>
                    </form>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditting: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        updateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
