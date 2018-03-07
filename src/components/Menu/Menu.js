import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    },
];
const MenuLink = ({ label, to, exact }) => (
    <Route path={to} exact={exact} children={({match}) => (
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )} />
);
class Menu extends Component {
    showMenus = (menus) => {
        let result = null;
        if(menus.length>0){
            result = menus.map((menu,index) => (
                <MenuLink key={index} label={menu.name} to={menu.to} exact={menu.exact} />
            ))
        }
        return result;
    }
    render() {
        return (
            // {/* Menu */}
            <div className="navbar navbar-default">
                <Link to="/" className="navbar-brand" >Call API</Link>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>

        );
    }
}

export default Menu;
