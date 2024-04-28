import { IUserData } from "../../interfaces";


interface IProps{
  user:IUserData,
}

function UserDetails({user }:IProps) {
  return (
    <div style={{margin:30}}>
      <h3>UserNamw : {user.username}</h3>
      <h3>Email : {user.email}</h3>
      <h3>Password : {user.password}</h3>
      <h3>Address : {user.address}</h3>
    </div>
  )
}

export default UserDetails;







