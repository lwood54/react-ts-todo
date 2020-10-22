import React from 'react';
import styled from "styled-components";

//styled components
const StyledItem = styled.div`
  color: blue;
  font-family: Spartan;
  border: 1px solid red;
`;

interface Props {
  item: string,
  remove: () => void
}

const ToDoItem: React.FC<Props> = (props: Props) => {

  return (
  <div onClick={props.remove} >
    <StyledItem>
      {props.item}
    </StyledItem>
  </div>
  )
}

export default ToDoItem
