import { useEffect } from "react";
import "./App.css";
import { fetchAllUsers } from "./components/redux/user/operations";
import { useDispatch, useSelector } from "react-redux";
import { Container, GlobalStyle } from "./GlobalStyle";
import UserList from "./components/UserList";
import { selectIsLoading } from "./components/redux/user/user-selectors";
import { Topic } from "./components/UserList/UserList.styled";

import { AppDispatch } from "./components/redux/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <Container>
      <Topic>Users List</Topic>

      {isLoading ? <div>Loading data....</div> : <UserList />}
      <GlobalStyle />
    </Container>
  );
};

export default App;
