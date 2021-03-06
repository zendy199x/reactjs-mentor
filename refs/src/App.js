import React, {Component} from 'react';
import './App.css';
import Product from './component/Product'

class App extends Component {

    constructor(props) {
        super(props);
        // this.onAddProduct = this.onAddProduct.bind(this);
    }

    onClick() {
        console.log('Đây là App Component');
    }

    onAddProduct = () => {
        console.log(this.refs.name.value);
    }

  render() {
    var products = [
        {
            id: 1,
            name: 'Apple iPhone XS Max',
            price: 29000000,
            image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
            status: true
        },
        {
            id: 2,
            name: 'Apple iPhone X',
            price: 19000000,
            image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
            status: true
        },
        {
            id: 3,
            name: 'Apple iPhone 8 Plus',
            price: 15000000,
            image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/20/636808956101668511_iphone8-plus-64-vang-1.png',
            status: true
        }
    ];

    let elements = products.map((product, index) => {
        let result = '';
        if (product.status) {
        return <Product
                    key={ product.id } 
                    price={ product.price }
                    image={ product.image}
                >
                    { product.name }
                </Product>
        }
        return result
    });

    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand">Event - Ref</a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title">Thêm sản phẩm</h3>
                        </div>
                        <div className="panel-body">
                        </div>
                    </div>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input type="text" className="form-control" ref="name" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={ this.onAddProduct }>
                            Lưu
                        </button>
                </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        { elements }
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-warning" onClick={ this.onClick }>
                            Click Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}
export default App;
