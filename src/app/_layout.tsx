import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { FontProvider } from "../providers/FontProvider";
import "../styles/global.css";

const client = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={client}>
      <FontProvider>
        <Slot />
      </FontProvider>
    </QueryClientProvider>
  );
}
