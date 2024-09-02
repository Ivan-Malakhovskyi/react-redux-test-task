import { IUser, UserState } from "../../../types";

export const selectUsers = (state: IUser) => state.users.users;

export const selectIsError = (state: UserState) => state.isError;

export const selectIsLoading = (state: UserState) => state.isLoading;
