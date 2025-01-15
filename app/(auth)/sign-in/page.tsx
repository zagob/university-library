"use client"

import AuthForm from "@/components/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.actions";
import { signInSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default Page;
