import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import ContextUser from '../pageComponents/ContextUser';
import styled from 'styled-components';
import { ButtonNormal } from '../pageComponents/elements/Buttons';
import { HeaderNormal } from '../pageComponents/elements/Header';
import { InputNormal } from '../pageComponents/elements/Inputs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export default function Join() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCon, setPasswordCon] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useContext(ContextUser);

  return (
    <>
      <Container>
        <HeaderNormal>Join</HeaderNormal>
        <InputNormal
          type="text"
          labelText="Username"
          onChange={(e) => setId(e.target.value)}
        />
        <InputNormal
          type="password"
          labelText="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputNormal
          type="text"
          labelText="passwordConfirm"
          onChange={(e) => setPasswordCon(e.target.value)}
        />
        <InputNormal
          type="text"
          labelText="name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputNormal
          type="text"
          labelText="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <ButtonNormal
          onClick={async (e) => {
            try {
              const o = {
                id,
                password,
                name,
                email,
              };

              const response = await axios.post('/api/auth/join', o);

              await router.push('/');
            } catch (err) {
              alert(err);
              return;
            }
          }}
        >
          Join
        </ButtonNormal>
      </Container>
    </>
  );
}
