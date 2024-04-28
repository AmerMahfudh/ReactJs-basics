import { ChangeEvent, useState } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { formInputList } from "../../data";

interface IProps{
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData,
  setUserData:(user:IUserData)=>void
}
const LoginForm = ({ setIsLoggedIn,userData,setUserData }: IProps) => {
  const [inputArr,setInputArr] = useState(formInputList);
    // console.log(userData);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setUserData({
      ...userData,
      [name]:value,
    });
  }


  const renderFormInputList = inputArr.map((input,idx) => {
    return (
      <div style={{display:'flex',alignItems:'center', width:'100%'}} key={idx}>
        <div className="input-wrapper"  style={{flex:1}}>
          <label htmlFor={input.id} style={{ marginRight: 20 }}>{input.label }: </label>
          <input type={ input.type} name={ input.name} id={ input.id} value={userData[input.name]} onChange={onChangeHandler} />
        </div>
        <button
          onClick={() => { 
            const filtered = inputArr.filter(input => input.name !== formInputList[idx]['name']);
            setInputArr(filtered);
            console.log(filtered);
          }} >
          ❌{idx}
        </button>
      </div>
    )
  }
  );

  return (
    
    <form className="login-form" style={{ margin: 30 }} onSubmit={(event) => {
      event.preventDefault();
    }}>
      { renderFormInputList}
      {/* <br />
      <div className="input-wrapper">
        <label htmlFor="email" style={{ marginRight: 20 }}>Email: </label>
        <input type="email" name="email" id="email" value={userData.email} onChange={onChangeHandler} />
      </div>
      <br />
      <div className="input-wrapper">
        <label htmlFor="address" style={{ marginRight: 20 }}>Address: </label>
        <input type="text" name="address" id="address" value={userData.address} onChange={onChangeHandler} />
        </div>
      <br />
      <div className="input-wrapper">
        <label htmlFor="password" style={{ marginRight: 20 }}>Password:</label>
        <input type="password" name="password" id="password" value={userData.password} onChange={onChangeHandler}/>
      </div>
      <br />
      <div className="input-wrapper">
        <label htmlFor="phone" style={{ marginRight: 20 }}>Phone:</label>
        <input type="phone" name="phone" id="phone" value={userData.phone} onChange={onChangeHandler}/>
      </div>
      <br /> */}
      <button onClick={() => {setIsLoggedIn(true) }}>Login</button>
    </form>
  );
};

export default LoginForm;