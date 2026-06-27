import Ionicons from "@expo/vector-icons/Ionicons";
import { ReactElement, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

export type InputProps = TextInputProps & {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
};

export const Input = ({
  iconLeft,
  iconRight,
  secureTextEntry,
  ...rest
}: InputProps) => {
  const isPassword = !!secureTextEntry;
  const [isHidden, setIsHidden] = useState(true);
  const toggle = () => setIsHidden((prev) => !prev);

  return (
    <View className="bg-[#F3F4F5] rounded-xl h-14 px-4 flex-row items-center gap-3">
      {iconLeft}
      <TextInput
        className="text-color_black flex-1"
        secureTextEntry={isPassword && isHidden}
        {...rest}
      />
      {isPassword ? (
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center"
          onPress={toggle}
        >
          {isHidden ? (
            <Ionicons name="eye-off-outline" size={24} color="#737687" />
          ) : (
            <Ionicons name="eye-outline" size={24} color="#737687" />
          )}
        </TouchableOpacity>
      ) : (
        iconRight
      )}
    </View>
  );
};
