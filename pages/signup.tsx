import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { signUp } from "./api/auth/auth.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [name, setFullName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name == "name") {
      setFullName(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { name, phone, email, password };
    signUp({ ...data, phone: `+91${data.phone}` })
      .then((res) => {
        console.log(res);
        setFullName("");
        setPhone("");
        setEmail("");
        setPassword("");
        toast.success("You Have Created Account Successfully ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => router.push("/login"), 2000);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <>
      <Head>
        <title>SharmaStore - India's Largest Fashion Store </title>
        <meta
          name="description"
          content="India's Largest Fashion Store Sign Up Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className=" min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "15%",
              }}
            >
              <Image
                className="mx-auto h-12 w-auto"
                layout="fill"
                src="/logo.svg"
                alt="Logo"
                priority
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign Up to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an Account?
              <Link href={"/login"}>
                <a
                  href="#"
                  className="font-medium ml-2 text-indigo-600 hover:text-indigo-500"
                >
                  Sign In
                </a>
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  className="my-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={handleChange}
                  id="phone"
                  type="phone"
                  name="phone"
                  autoComplete="phone"
                  required
                  className="my-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Active Number"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="my-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
