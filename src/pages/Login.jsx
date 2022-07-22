import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await supabase.auth.signIn({
        email,
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(supabase.auth.user()) {
      navigate("/")
    }
  }, [navigate])
  

  return (
    <div className="row pt-4">
     <div className="col-md-4 offset-md-4">
     <form onSubmit={handleSubmit} className="card card-body">
        <input
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
        />
        <button className="btn btn-primary">Send</button>
      </form>
     </div>
    </div>
  );
};

export default Login;
