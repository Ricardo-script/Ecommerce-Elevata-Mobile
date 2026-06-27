import { useAuthStore } from "@/src/shared/stores/auth.store";
import { LoginForm } from "../../components/login-form";
import { LoginHeader } from "../../components/login-header";
import { Wrapper } from "../../components/wrapper";
import { useAuth } from "./useAuth.model";

export default function Login() {
  const { login } = useAuth();
  const user = useAuthStore((state) => state.user);

  const handleLogin = () => {
    login({ username: "emilys", password: "emilyspass" });
  };

  return (
    <Wrapper>
      <LoginHeader />
      <LoginForm />
    </Wrapper>
  );
}
