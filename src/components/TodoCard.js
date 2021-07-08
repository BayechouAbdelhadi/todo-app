import React from 'react'
import styled from '@emotion/styled'
import { useHistory } from "react-router-dom";
import { formatDate } from '../utils';

const CardContainer = styled.div`
  width: 350px;
  font-size: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border: solid 3px brown;
  cursor: pointer;
  border-radius: 20px;
  padding:10px;
  margin-bottom:15px;
  text-align: center;
  color: black;
  font-weight: bold;
`

export default function TodoCard({todo}) {

    const history =useHistory();

    const redirectToDetails=()=>{
        history.push({
            pathname: '/todo-details',
            state: {  // location state
              id: todo.id, 
            },
          }); 
    }
    return (
        <CardContainer
            onClick={redirectToDetails}
        >
            <p>{todo.title}</p>
            <p>{todo.type }</p>
            <p>{formatDate (todo.createdAt)}</p>
        </CardContainer>
    )
}
