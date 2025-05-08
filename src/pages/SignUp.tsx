import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../components/Input";

export function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (user.trim() === "") return toast.error("Please enter a username");
      localStorage.setItem("user", user);

      navigate("/home");
      toast.success("Username registered successfully");
    } catch (error) {
      return toast.error("Username not registered");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen mx-5 sm:m-0">
      <div className="bg-white rounded-2xl p-6 border border-terciary w-[500px]">
        <h1 className="font-bold text-title mb-6">
          Welcome to CodeLeap network!
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input
            label="Please enter your username"
            onChange={({ target }) => setUser(target.value)}
            type="text"
            id="username"
            placeholder="John doe"
            value={user}
            className="mb-4"
          />
          <Button
            className="w-[111px] self-end"
            disabled={user.trim() === ""}
            type="submit"
          >
            ENTER
          </Button>
        </form>
      </div>
    </div>
  );
}
