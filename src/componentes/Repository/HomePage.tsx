import React from "react";
import { HomePageItem } from "./HomePageItem";

const Poeples = ["Sembenevi", "maykbrito", "diego3g"];

interface UserData {
  login: string;
}

export function HomePage() {
  const [users, setUsers] = React.useState<UserData[]>([]);
  async function Fetch(text: string) {
    const response = await fetch(text);
    const json = await response.json();
    return setUsers((user) => [...user, json]);
  }

  React.useEffect(() => {
    setUsers([]);
    Poeples.map((people) => Fetch(`http://api.github.com/users/${people}`));
  }, []);

  return (
    <>
      {users &&
        users.map((user) => <HomePageItem user={user} key={user.login} />)}
    </>
  );
}
