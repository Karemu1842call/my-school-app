import React, { useState } from "react";

export default function UpdateForm({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [telno, setTelno] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const setValue = {
      sch_name: setName,
      sch_email: setEmail,
      sch_avatar: setAvatar,
      sch_telno: setTelno
    }[name];
  
    setValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: id,
      sch_name: name,
      sch_email: email,
      sch_avatar: avatar,
      sch_telno: telno,
    };

    const response = await fetch(`/schools/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setAvatar("");
      setTelno("");
      alert("Data updated successfully");
    } else {
      alert("Error updating data");
    }
  };

  return (
    <>
      <section className="bg-primary dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 className="text-4xl font-bold mb-5 pb-2 mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Update My School
          </h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="sch_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="sch_name"
                name="sch_name"
                value={name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="sch_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="sch_email"
                name="sch_email"
                value={email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label
                htmlFor="sch_avatar"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Avatar
              </label>
              <input
                type="url"
                id="sch_avatar"
                name="sch_avatar"
                value={avatar}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" // keep the className property unchanged
                placeholder="Enter your Image url"
              />
            </div>
            <div>
              <label
                htmlFor="sch_telno"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="sch_telno"
                name="sch_telno"
                value={telno}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" // keep the className property unchanged
                placeholder="Enter your phone number..."
              />
            </div>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              type="submit"
              onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
