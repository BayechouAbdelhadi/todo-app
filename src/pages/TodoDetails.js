import React,{useEffect,useState} from 'react'
import { useLocation } from "react-router-dom";
import {GET_TODO_BY_ID} from "../graphql/queries"
import {useQuery} from "@apollo/client";
import styled from '@emotion/styled'
import { formatDate } from '../utils';


const Container = styled.div`
  width: 350px;
  font-size: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border: solid 3px brown;
  border-radius: 20px;
  padding:10px;
  text-align: center;
  color: black;
  margin:0 auto;
  font-weight: bold;
`
export default function ToDoDetails() {

    const location =useLocation();
    const id = location.state.id;
    const [todo,setTodo]=useState();
    const { loading, error, data } = useQuery(GET_TODO_BY_ID, {
        variables: { id },
    });

    useEffect(() => {
       data && setTodo(data.getTodoById);
    }, [data])
    return (
        <Container>
            {todo && 
                <>
                <p>{todo.title}</p>
                <p>{todo.type }</p>
                <p>{todo.text }</p>
                <p>{formatDate (todo.createdAt)}</p>
                </>
            }
            
        </Container>
    )
}