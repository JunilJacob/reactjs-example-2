import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function HookFormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard/home");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="email" className="form-content" placeholder="Email" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
        {errors.email && errors.email.type === "required" && <span>This field is required</span>}
        <input type="password" className="form-content" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
        {errors.password && errors.password.type === "required" && <span>Minimum 6 characters needed</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}