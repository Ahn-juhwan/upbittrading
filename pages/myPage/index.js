import styled from 'styled-components';
import { ButtonNormal } from '../../pageComponents/elements/Buttons';
import { HeaderNormal } from '../../pageComponents/elements/Header';
import { TableObject } from '../../pageComponents/components/TableComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
`;

export default function index() {
  const [myPageInfo, setMyPageInfo] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get('/api/auth');

      setMyPageInfo(response?.data.user);
    } catch (e) {
      alert(e);

      return;
    }
  }, [0]);

  return (
    <Root>
      <Content>
        <HeaderNormal>내 정보</HeaderNormal>
        <TableObject value={myPageInfo} />
        <ButtonNormal>
          <Link href={'/myPage/upbitLink'}>Upbit api 연동</Link>
        </ButtonNormal>
      </Content>
    </Root>
  );
}
