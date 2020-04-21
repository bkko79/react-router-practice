import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <NavLink exact className="item" to="/" activeClassName="active">Home</NavLink>
      <NavLink className="item" to="/about/bkko" activeClassName="active">About</NavLink>
      <NavLink className="item" to="/posts" activeClassName="active">Posts</NavLink>
      <NavLink className="item" to="/login" activeClassName="active">Login</NavLink>
      <NavLink className="item" to="/mypage" activeClassName="active">MyPage</NavLink>
      <NavLink className="item" to="/search" activeClassName="active">Search</NavLink>
    </div>
  );
};

export default Header;