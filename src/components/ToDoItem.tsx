import React from 'react';
import styled from "styled-components";

//styled components
const StyledItem = styled.div`
  color: blue;
  font-family: Spartan;
  border: 1px solid red;
`;

interface Props {
  item: string
}

const ToDoItem: React.FC<Props> = (props: Props) => {

  return (
    <StyledItem>
      {props.item}
    </StyledItem>
  )
}

export default ToDoItem
