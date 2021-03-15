interface HomePageItemProps {
    user: {
        login: string;
    }
  }
  
  export function HomePageItem(props : HomePageItemProps){
      return (
            <div>
                <h1> {props.user.login} </h1>
            </div>
      )
  }