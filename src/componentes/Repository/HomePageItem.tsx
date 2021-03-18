import { Link } from "react-router-dom";
import "../../styles/HomePageItem.scss";
import { HomePageItemProps } from "../interface";


export function HomePageItem(props: HomePageItemProps) {
  return (
    <div className="HomePageItem">
        <Link to={`/user/${props.user.login}`}>
            <img src={props.user.avatar_url} alt="" />
        </Link>

        <div>
          <h2> {props.user.login} </h2>
          <p> Followers: {props.user.followers}</p>
          <p>  {props.user.bio ? props.user.bio : 'Doesnt have a biography'}</p>
        </div>
    </div>
  );
}
 