import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-color_blue h-14 items-center justify-center rounded-xl"
      {...rest}
    >
      <Text className="text-white font-inter_bold">{title}</Text>
    </TouchableOpacity>
  );
};
