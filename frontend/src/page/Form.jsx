import React, { useState } from 'react';
function  Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async(event) => {
    try {
      event.preventDefault();
       // Perform actions with name, email, and password (e.g., send to server)
  let one={name, email, password };

    const response=await fetch('http://localhost:9000/api/auth/Sigin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(one),
    })

    if(response.ok){
      console.log("success")
      console.log(response)
    }else{
      console.log("erro")
    }
   
    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}  
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}  
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}  
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;


