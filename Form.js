import { UseForm, useForm } from "react-hook-form";
export default function FormV() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <br />
        <div>
          <label>Username</label> &nbsp;
          <input
            type="name"
            name="name"
            placeholder="Username"
            {...register("name", {
              required: true,
              minLength: 4,
              maxLength: 10,
            })}
          />
          {errors.name?.type === "required" && "Name is required"}
          {errors.name?.type === "minLength" && "Extra Length"}
          {errors.name?.type === "maxLength" && "length exceeds"}
        </div>
        <br />

        <div>
          <label>Email</label>&nbsp;
          <input
            type="email"
            name="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "Email is required"}
        </div>
        <br />
        <div>
          <label>Password</label>&nbsp;
          <input
            type="password"
            name="name"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <br />

        <button type="submit"> Submit</button>
      </div>
    </form>
  );
}
