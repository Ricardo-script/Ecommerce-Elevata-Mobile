import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView className="flex-1 bg-color_container p-5 gap-5">
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  );
};
