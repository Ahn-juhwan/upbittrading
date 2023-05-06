import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ContextUser from '../ContextUser';

const Root = styled.div`
  > header.header {
    background-color: #fff;
    color: #000;
    padding: 20px;
    nav {
      max-width: 1140px;
      margin: 0 auto;
      .title {
        font-size: 28px;
      }
      .right {
        float: right;
        font-size: 16px;
        margin-top: 10px;
      }
      a {
        display: inline-block;
        margin: 0 10px;
        color: #000;
        text-decoration: none;
        &:first-of-type {
          margin-left: 0;
        }
        &:hover,
        &:active {
          color: #3486d3;
        }

        img {
          width: 224px;
          height: 32px;
        }
      }
    }
  }
  > .body {
    color: #000;
  }
  > footer.footer {
    padding: 20px;
  }
`;

const LayoutHome = ({ children }) => {
  const Profile = () => {
    const [user, setUser] = useContext(ContextUser);

    return user?.name ? (
      <>
        <Link href={'/myPage'}>
          <a>{user.name}님</a>
        </Link>

        <Link href={'/service/statistics'}>통계</Link>

        <Link href={'/logout'}>
          <a>로그아웃</a>
        </Link>
      </>
    ) : (
      <>
        <Link href={'/login'}>
          <a>로그인</a>
        </Link>
        <Link href={'/join'}>
          <a>회원가입</a>
        </Link>
      </>
    );
  };

  return (
    <Root>
      <Head>
        <title>UpbitTrading</title>
      </Head>
      <header className={'header'}>
        <nav>
          <span className="title">
            <Link href={'/'}>UPBitTrading</Link>
          </span>
          <span className={'right'}>
            <Profile />
          </span>
        </nav>
      </header>

      {children}
    </Root>
  );
};

export default LayoutHome;
