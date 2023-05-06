import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import ContextUser from '../pageComponents/ContextUser';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  background-color: #0070f3;
  width: 300px;
  margin-bottom: 7px;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export default function Login() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(ContextUser);

  return (
    <>
      <Container>
        <Title>Login</Title>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={(e) => {
            (async () => {
              // TODO: 계정 인증, UPBit api 에서 access key, secret key 발급 받고 사용할 수 있도록 변경
              try {
                const response = await axios.post('/api/auth/login', {
                  id,
                  password,
                });

                setUser(response?.data?.user);

                await router.push('/');
              } catch (e) {
                alert(e);
                // TODO: catch
              }
            })();

            e.preventDefault();
            return false;
          }}
        >
          Login
        </Button>
        <Button>
          <Link href={'/join'}>Join</Link>
        </Button>
      </Container>
    </>
  );
}
