import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <SafeAreaView className="flex-1 justify-center bg-color_container p-5 gap-5">
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  );
};
