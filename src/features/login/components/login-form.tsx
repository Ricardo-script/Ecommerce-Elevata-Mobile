import { Button, Input } from "@/src/shared/components/forms";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { View } from "react-native";
import { ForgotPassword } from "./forgot-password";

export const LoginForm = () => {
  return (
    <View className="flex-1 gap-6">
      <Input
        placeholder="E-mail ou usuário"
        placeholderTextColor="#737687"
        iconLeft={<FontAwesome name="envelope-o" size={24} color="#737687" />}
      />
      <Input
        secureTextEntry
        placeholder="Sua senha"
        placeholderTextColor="#737687"
        iconLeft={<Octicons name="shield-lock" size={24} color="#737687" />}
      />
      <ForgotPassword />
      <Button title="Entrar" />
    </View>
  );
};
