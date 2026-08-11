export interface UserListsViewModel {
  users: string[];
  newUsername: string;
  onInputChange: (value: string) => void;
  onAddUser: () => void;
  onDeleteUser: (index: number) => void;
}
