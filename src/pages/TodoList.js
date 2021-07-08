import React,{useEffect,useState} from 'react'
import {useQuery} from "@apollo/client";
import {GET_TODOS} from "../graphql/queries"
import TodoCard from "../components/TodoCard"
import ParamsForm from "../components/ParamsForm"
import styled from '@emotion/styled'

const RootContainer = styled.div`
  margin:0 auto;
  width: 100%;
`
const ParamsContainer =styled.div`
    display :flex;
    justify-content: space-between;
    margin-bottom:20px;
    margin-top: 20px;
`
const TodosContainer = styled.div`
  margin:0 auto;
  width:30%;
`
export default function TodoList() {
    const [todos,setTodos]=useState([]);
    const [queryVariable,setQueryVariables]=useState({filters:[],orderBy:"DATE_ASC"});
    const { loading, error, data } = useQuery(GET_TODOS, {
        variables:queryVariable// { filters:{},orderBy:"DATE_DESC" },
    });
    useEffect(() => {
        data && setTodos(data.getTodoList);
    }, [data])

    return (
        <RootContainer>
            <ParamsForm queryVariable= {queryVariable} setQueryVariables={setQueryVariables}/>
            <TodosContainer>
                {
                    todos?.map(todo =><TodoCard todo={todo} key={todo.id}/>)
                }
            </TodosContainer>
        </RootContainer>
    )
}
