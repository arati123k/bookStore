import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"; // Import useForm

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-75 px-2 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-75 px-2 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter the Password"
                className="w-75 px-2 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <div className="text-xl">
                Have an Account?{" "}
                <button
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                {/* Render the Login component with <dialog> outside of <p> */}
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
