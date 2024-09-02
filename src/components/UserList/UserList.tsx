import { useSelector } from "react-redux";
import { selectUsers } from "../redux/user/user-selectors";
import { UserListItem, UserListStyled } from "./UserList.styled";

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div>
      <UserListStyled>
        {users && users.length !== 0 ? (
          users.map(({ id, name, userName, phone, email }) => (
            <UserListItem key={id}>
              <p>{name}</p>
              <p>{userName}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </UserListItem>
          ))
        ) : (
          <p>Not found</p>
        )}
      </UserListStyled>
    </div>
  );
};

export default UserList;
