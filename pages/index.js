import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import ContextUser from '../pageComponents/ContextUser';

export default function Home() {
  return (
    <>
      <h1>Main Page.</h1>
      upbittrading 소개글 및 사용법
    </>
  );
}
