import Card from "../../components/Card";
import { globalUserProps } from "../../utils/types";

export default function Professionnels({
  users,
}: {
  users: globalUserProps[];
}) {
  return (
    <>
      {users.map((user) => (
        <Card user={user} key={user.id} />
      ))}
    </>
  );
}
