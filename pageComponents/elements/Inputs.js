import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 300px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ddd;
  font-size: 16px;
  padding: 8px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

export const InputNormal = ({ labelText, onChange }) => {
  return (
    <InputWrapper>
      <Label>{labelText}</Label>
      <Input type="text" onChange={onChange} />
    </InputWrapper>
  );
};
