import React,{useEffect,useState} from 'react'
import { useLocation,useHistory } from "react-router-dom";
import {GET_TODO_BY_ID} from "../graphql/queries"
import {useQuery} from "@apollo/client";
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button';

const Span = styled.span`
  font-weight: bold;
`
const Container = styled.div`
  width: 350px;
  font-size: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border: solid 3px brown;
  border-radius: 20px;
  padding:10px;
  text-align: left;
  color: black;
  margin:0 auto;
  margin-top:20px;
`
export default function ToDoDetails() {
    const history=useHistory();
    const location =useLocation();
    const id = location.state.id;
    const [todo,setTodo]=useState();
    const { loading, error, data } = useQuery(GET_TODO_BY_ID, {
        variables: { id },
    });

    useEffect(() => {
       data && setTodo(data.getTodoById);
    }, [data])
    const redirect =()=>history.push("/")
    return (
        <div> 
            <Button 
                variant="contained" 
                color="secondary"
                onClick={redirect}
            > 
                revenir en errière
            </Button>
            <Container>
                
                {todo && 
                    <>
                        <p><Span>Titre: </Span>{todo.title}</p>
                        <p><Span>type: </Span>{todo.type }</p>
                        <p><Span>Description: </Span>{todo.text }</p>
                        <p><Span>Date: </Span>{new Date(todo.createdAt).toLocaleDateString()}</p>
                        <p><Span>Heure: </Span>{new Date(todo.createdAt).toLocaleTimeString()}</p>
                    </>
                } 
            </Container>
        </div>
    )
}
