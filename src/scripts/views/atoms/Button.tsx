import React, {MouseEvent} from 'react';
import styled from 'styled-components';

interface Props {
  fontsize?: number;
  label: string;
  onPress: (event: MouseEvent) => void;
}

const Button = ({label, onPress, fontsize = 12}: Props) => {
  return (
    <StyledButton fontsize={fontsize} onClick={onPress}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{fontsize: number}>`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  font-size: ${props => `${props.fontsize}px`}
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;
  &:hover {
    background: #67c5ff;
    color: white;
  }
`;

export default Button;
