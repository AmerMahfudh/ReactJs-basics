import { Fragment} from "react";
import './index.scss';

const styles = {
  ListItem: {
    textDecoration: "none",
    fontSize:20,
  },
  List: {
              listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid red",
          backgroundColor: "purple",
          padding: "1.5rem",
          borderRadius:10
  },
};
interface IProps{
  company: string,
  About: string,
  IsLogged: boolean,
  setIsLoggedIn:(value:boolean)=>void,
}

const NavBar = ({ company, About, IsLogged, setIsLoggedIn }: IProps) => {
  
  // jsx
  // console.log(props);
  // const {company,About } = props;
  const API_MARGIN = 20;
  return (
    <Fragment>
      <nav>
          <ul className="nav-bar" style={{...styles.List,margin:API_MARGIN}}>
          <li><a href="/" style={styles.ListItem}>{company }</a></li>
            <li><a href="/"style={styles.ListItem}>Home</a></li>
            <li><a href="/" style={{
              textDecoration:"none",
              fontSize:20              
          }}>{ About}</a></li>
            <li><a href="/" style={{
              textDecoration:"none",
              fontSize:20              
            }}>Contact</a></li>
          <li><button onClick={() => {
            setIsLoggedIn(!IsLogged);
          } } >{IsLogged ? "Logout":"Login"}</button></li>
          </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
