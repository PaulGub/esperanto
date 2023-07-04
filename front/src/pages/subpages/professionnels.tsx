import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { globalUserProps } from "../../utils/types";

export default function Professionnels({
  users,
}: {
  users: globalUserProps[];
}) {
  return (
    <>
      {users.length !== 0 ? (
        users.map((user) => <Card user={user} key={user.id} />)
      ) : (
        <Loader />
      )}
    </>
  );
}
