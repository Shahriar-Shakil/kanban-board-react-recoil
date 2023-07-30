/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { usersState } from "../../recoil/atoms";

export default function AddUserForm({ setModalOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const setUsers = useSetRecoilState(usersState);

  const onSubmit = (data) => {
    const { name, email } = data;
    if (name.trim() === "" || email.trim() === "") return;
    const newUser = {
      id: uuidv4(), // Generate a random ID using uuid
      name: name.trim(),
      email: email.trim(),
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    reset();
    setModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-2">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add New User
          </h3>
        </div>
        <div className="">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                type="text"
                {...register("email", { required: true })}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="ml-auto block justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
}
