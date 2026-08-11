"use client";

import { Section } from "@/app/components";
import { useUserListsViewModel } from "./hooks/useUserListsViewModel";
import UserListsHeader from "./components/UserListsHeader";
import UserListsInput from "./components/UserListsInput";
import UserListsTable from "./components/UserListsTable";

const UserLists = () => {
  const vm = useUserListsViewModel();

  return (
    <Section>
      <UserListsHeader />
      <UserListsInput
        value={vm.newUsername}
        onInputChange={vm.onInputChange}
        onAddUser={vm.onAddUser}
      />
      <UserListsTable
        users={vm.users}
        onDeleteUser={vm.onDeleteUser}
      />
    </Section>
  );
};

export default UserLists;
