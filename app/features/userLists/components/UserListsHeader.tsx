import { Title, Text } from "@/app/components";
import { TitleVariant } from "@/app/components/title/constants";

interface UserListsHeaderProps {
  /* Presentation only - no props needed for static header */
}

const UserListsHeader = ({}: UserListsHeaderProps) => (
  <div className="mb-6">
    <Title
      variant={TitleVariant.PRIMARY}
      text="Gestión de Usuarios"
    />
    <Text>Administra tu lista de nombres de usuarios</Text>
  </div>
);

export default UserListsHeader;
