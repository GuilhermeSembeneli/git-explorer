import { RepositoryItem } from "./RepositoryItem";
import "../../styles/repositores.scss";
import React from "react";

import { NotFound } from "../NotFound";
import { useParams } from "react-router";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

interface Params {
  [key: string]: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = React.useState<Repository[]>([]);
  const [error, setError] = React.useState(false);

  async function Fetch(text: string) {
    let response;
    let json;
    try {
      setError(false);
      response = await fetch(text);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch {
      setError(true);
    } finally {
      return setRepositories(json);
    }
  }

  const params : Params = useParams()


  React.useEffect(() => {
    if (params) Fetch(`https://api.github.com/users/${params.id}/repos`);
  }, [params]);

  return (
    <>
      {repositories.length > 0 && (
        <ul>
          {repositories.map((repo) => (
            <RepositoryItem repository={repo} key={repo.name} />
          ))}
        </ul>
      )}

      {error && <NotFound />}
    </>
  );
}
