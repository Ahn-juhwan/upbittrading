import styled from 'styled-components';
import { InputNormal } from '../../pageComponents/elements/Inputs';
import { ButtonNormal } from '../../pageComponents/elements/Buttons';
import { useState } from 'react';
import axios from 'axios';

const Root = styled.div``;

export default function UpbitLink() {
  const [userAccessKey, setUserAccessKey] = useState(null);
  const [userSecretKey, setUserSecretKey] = useState(null);

  const onClick = async (e) => {
    try {
      const o = {
        userAccessKey,
        userSecretKey,
      };

      const response = await axios.post('/api/upbitApi/registerUpbit', o);
      console.log('response : ', response);
    } catch (e) {
      alert(e);

      return;
    }
  };

  return (
    <Root>
      <div>
        <h1>Upbit api 연동</h1>
        <InputNormal
          labelText={'AccessKey'}
          onChange={(e) => setUserAccessKey(e.target.value)}
        />
        <InputNormal
          labelText={'SecretKey'}
          onChange={(e) => setUserSecretKey(e.target.value)}
        />

        <ButtonNormal onClick={onClick}>등록</ButtonNormal>
      </div>
    </Root>
  );
}
