export interface HomePageItemProps {
  user: {
    login: string;
    avatar_url: string;
    followers: number;
    bio: string;
  };
}

export interface UserData {
  login: string;
  avatar_url: string;
  followers: number;
  bio: string;
}

export interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export interface Params {
  [key: string]: string
}


export interface RepositoryItemProps {
  repository: {
      name: string;
      description: string;
      html_url: string;
  }
}
