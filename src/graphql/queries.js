import {gql} from "@apollo/client";

const   GET_TODOS= gql`
  query getTodoList($filters: TodoFiltersInput $orderBy: Ordering) {
      getTodoList(filters:$filters orderBy:$orderBy) {
      id
      title
      type
      createdAt
      isDone
      text
    }
  }
`;
const GET_TODO_BY_ID = gql`
  query getTodoById($id: ID!) {
    getTodoById(id:$id) {
      title
      type
      createdAt
      isDone
      text
    }
  }
`;


export {
    GET_TODO_BY_ID,
    GET_TODOS
}