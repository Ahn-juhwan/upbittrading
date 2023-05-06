import styled from 'styled-components';
import { ButtonNormal } from '../../pageComponents/elements/Buttons';
import Link from 'next/link';

const Root = styled.div``;

export default function index() {
  return (
    <Root>
      <ButtonNormal>
        <Link href={'/myPage/upbitLink'}>Upbit api 연동</Link>
      </ButtonNormal>
    </Root>
  );
}
