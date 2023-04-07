import React, { useState } from "react";
import "../components/style/Login.css";

function Loginform({ setCurrentuser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function onLogin(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentuser(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <>
      <section class="bg-primary dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 class="text-4xl font-bold mb-5 pb-2 mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            My-School App
          </h1>
          <h2 class="text-4xl font-bold mb-5 pb-2 mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Login
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-white">
            Please Enter your details to login
          </p>
          <form action="#" method="POST" class="space-y-8" onSubmit={onLogin}>
            {errors.length > 0 && (
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Username"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                onSubmit={onLogin}
                placeholder="Enter your Password"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              onSubmit={onLogin}
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Loginform;
