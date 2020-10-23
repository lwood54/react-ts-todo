import React from 'react';
import styled from "styled-components";

//styled components
const StyledItem = styled.div`
  color: blue;
  font-family: Spartan;
  border: 1px solid red;
`;

interface Props {
  item: string;
  remove: (item: string) => void;
}

const ToDoItem: React.FC<Props> = (props: Props) => {

  return (
  <div onClick={(e) => props.remove(props.item)} >
    <StyledItem>
      {props.item}
    </StyledItem>
  </div>
  )
}

export default ToDoItem
