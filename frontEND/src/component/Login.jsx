import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button with onClick to close the dialog */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter the Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4 ">
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>{" "}
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
