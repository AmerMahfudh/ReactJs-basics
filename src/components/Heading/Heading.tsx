import {ReactNode } from 'react';

const Heading = ({title,children }: {title:string,children:ReactNode}) => {
  
  return (
    <h1 style={{ fontSize: "15px", textAlign: "center" }}>
      Heading 🍕
      {title}
      {children}
    </h1>
  );

}

export default Heading;