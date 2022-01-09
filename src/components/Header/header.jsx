import React from 'react';
import styles from './header.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { IoAppsOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';

const Header = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
        <h1 className={styles.logoTitle}>Premium</h1>
        <span className={styles.kr}>KR</span>
      </div>

      <form onSubmit={handleSubmit} className={styles.search}>
        <input className={styles.searchInput} type="text" placeholder="동영상 검색" />
        <button className={styles.searchBtn}>
          <div className={styles.searchIcon}>
            <IoSearchSharp />
          </div>
        </button>
      </form>

      <nav className={styles.userNav}>
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <IoAppsOutline />
          </div>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <IoNotificationsOutline />
          </div>
        </div>
        <div className={styles.user}>
          <img className={styles.userImage} src="/images/user.png" alt="user" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
