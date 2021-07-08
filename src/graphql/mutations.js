import {gql} from "@apollo/client";

const UPDATE_TODO_STATUS_BY_ID = gql`
query updateTodoStatusById($id: ID $isDone: Boolean){
    updateTodoStatusById(id:$id isDone:$isDone) {
    id
    title
    type
    createdAt
    isDone
    text
  }
}
`;