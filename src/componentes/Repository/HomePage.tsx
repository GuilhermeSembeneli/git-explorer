import React from "react";
import { UserData } from "../interface";
import { HomePageItem } from "./HomePageItem";

const Poeples = ["Sembenevi", "maykbrito", "diego3g"];

const css = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

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
    <div style={css}>
      {users &&
        users.map((user) => <HomePageItem user={user} key={user.login} />)}
    </div>
  );
}
