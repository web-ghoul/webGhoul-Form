import { supabase } from "@/Authentications/Supabase/config";
import React, { useState } from "react";

const Email = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options:{
        data:{
            gender:"male"
        }
      }
    });
    console.log(data, error);
  };
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    console.log(data, error);
  };
  return (
    <div>
      <input
        type="email"
        onChange={(e) =>
          setFormData({ email: e.target.value, password: formData.password })
        }
        value={formData.email}
      />
      <input
        type="password"
        onChange={(e) =>
          setFormData({ email: formData.email, password: e.target.value })
        }
        value={formData.password}
      />
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
};

export default Email;
