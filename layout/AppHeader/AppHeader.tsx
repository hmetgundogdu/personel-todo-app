import React from 'react';
import logo from '@/assets/image/logo.png';

import styles from './app-header.module.scss';
import Head from 'next/head';

export default function AppHeader() {
  return (
    <>
      <Head>
        <title>Personal Task Tracking App</title>
      </Head>
      <div className={styles['app-header']}>
        <div className="logo">
          <img src={logo.src} />
        </div>
      </div>
    </>
  );
}
