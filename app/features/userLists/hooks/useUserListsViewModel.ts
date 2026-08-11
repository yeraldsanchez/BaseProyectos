import { useState } from "react";
import { UserListsViewModel } from "../models/UserListsViewModel.interface";

export const useUserListsViewModel = (): UserListsViewModel => {
  const [users, setUsers] = useState<string[]>([]);
  const [newUsername, setNewUsername] = useState("");

  const onInputChange = (value: string) => {
    setNewUsername(value);
  };

  const onAddUser = () => {
    const trimmedUsername = newUsername.trim();
    if (trimmedUsername.length === 0) {
      return;
    }
    setUsers([...users, trimmedUsername]);
    setNewUsername("");
  };

  const onDeleteUser = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return {
    users,
    newUsername,
    onInputChange,
    onAddUser,
    onDeleteUser,
  };
};
