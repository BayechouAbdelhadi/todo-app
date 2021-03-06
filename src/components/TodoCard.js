import React,{useState  } from 'react'
import styled from '@emotion/styled'
import { useHistory } from "react-router-dom";
import {useMutation} from "@apollo/client";
import {UPDATE_TODO_STATUS_BY_ID} from "../graphql/mutations"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


const CardContainer = styled.div`
  width: 350px;
  font-size: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border: solid 3px brown;
  border-radius: 20px;
  padding:10px;
  margin-bottom:15px;
  text-align: left;
  color: black;
`
const CardHeaderContainer = styled.div`
  width: 350px;
  display:flex;
  justify-content: space-around;
`
const Span = styled.span`
  font-weight: bold;
`

export default function TodoCard({todo}) {
    const [isDone, setisDone] = useState(todo.isDone)
    const history =useHistory();
    const [updateTodoStatusById, { updatedTodo }] = useMutation(UPDATE_TODO_STATUS_BY_ID);

    const handleChange = (event) => {
      setisDone( event.target.checked );
      updateTodoStatusById({variables:{id:todo.id,isDone:event.target.checked}})
    };

    const redirectToDetails=()=>{
        history.push({
            pathname: '/todo-details',
            state: {  // location state
              id: todo.id, 
            },
          }); 
    }
    return (
        <CardContainer>
          <CardHeaderContainer>
            <FormControlLabel
              control={
                <Switch
                  checked={isDone}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Status"
            />
            <Button 
              onClick={redirectToDetails}
              variant="contained"
              color="secondary"
            >
              Details
            </Button>
          </CardHeaderContainer>
            <p><Span>Titre: </Span>{todo.title}</p>
            <p><Span>type: </Span>{todo.type }</p>
            <p><Span>Date: </Span>{new Date(todo.createdAt).toLocaleDateString()}</p>
            <p><Span>Heure: </Span>{new Date(todo.createdAt).toLocaleTimeString()}</p>
        </CardContainer>
    )
}













