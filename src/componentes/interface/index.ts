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
