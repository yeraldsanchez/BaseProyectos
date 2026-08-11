import { Button, FormField } from "@/app/components";

interface UserListsInputProps {
  value: string;
  onInputChange: (value: string) => void;
  onAddUser: () => void;
}

const UserListsInput = ({
  value,
  onInputChange,
  onAddUser,
}: UserListsInputProps) => (
  <div className="flex gap-3 mb-6">
    <FormField
      id="username-input"
      label="Nombre de usuario"
      name="username"
      type="text"
      value={value}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Ingresa un nombre de usuario"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onAddUser();
        }
      }}
    />
    <Button
      onClick={onAddUser}
      className="self-end"
    >
      Agregar
    </Button>
  </div>
);

export default UserListsInput;
