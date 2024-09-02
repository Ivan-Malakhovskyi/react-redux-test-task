import styled from "styled-components";

export const Topic = styled.h1`
  margin-bottom: 40px;
`;

export const UserListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  flex-basis: calc((100% - 4 * 30) / 5);
`;

export const UserListItem = styled.li`
  width: 200px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0.5rem 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const NotFoundMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;
