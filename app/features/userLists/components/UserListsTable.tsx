import { Text } from "@/app/components";
import DeleteIcon from "@/app/components/icons/delete/DeleteIcon";

interface UserListsTableProps {
  users: string[];
  onDeleteUser: (index: number) => void;
}

const UserListsTable = ({ users, onDeleteUser }: UserListsTableProps) => {
  if (users.length === 0) {
    return (
      <div className="py-8 text-center">
        <Text>No hay usuarios agregados aún. ¡Agrega uno para comenzar!</Text>
      </div>
    );
  }

  return (
    <div>
      <Text>Total de usuarios: {users.length}</Text>
      <ul className="space-y-2 mt-4">
        {users.map((username, index) => (
          <li
            key={`${username}-${index}`}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
          >
            <Text>{username}</Text>
            <button
              onClick={() => onDeleteUser(index)}
              className="p-2 text-red-500 hover:bg-red-100 rounded transition"
              title="Eliminar usuario"
              aria-label={`Eliminar usuario ${username}`}
            >
              <DeleteIcon
                className="w-6 h-6"
                color="currentColor"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListsTable;
