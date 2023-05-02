import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ContextUser from './ContextUser';

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

const Header = ({ children }) => {
  const Profile = () => {
    const [user, setUser] = useContext(ContextUser);

    return user?.name ? (
      <>
        <Link href={'/myPage'}>
          <a>{user.name}님</a>
        </Link>

        <Link href={'/service/addService'}>서비스 등록</Link>

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
        <link rel="icon" href="/16x16.png" sizes="16x16" />
        <link rel="icon" href="/32x32.png" sizes="32x32" />
        <link rel="icon" href="/152x152.png" sizes="152x152" />
        <link rel="icon" href="/256x256.png" sizes="256x256" />
      </Head>
      <header className={'header'}>
        {/*TODO: Header refactor 한곳으로 빼야함*/}
        {/*TODO: 쿠키 생성까진 됐으니까 로그인 한 사용자는 로그아웃이 뜨도록 변경*/}
        <nav>
          <span className="title">
            <Link href={'/'}>UPBitTrading</Link>
          </span>
          <span className={'right'}>
            <Profile />
            {/* <Link href={'/service'}>
              <a>내지갑</a>
            </Link>
            <Link href={'/login'}>
              <a>로그인</a>
            </Link>
            <Link href={'/join'}>
              <a>회원가입</a>
            </Link> */}
            <children />
          </span>
        </nav>
      </header>
    </Root>
  );
};

export default Header;
