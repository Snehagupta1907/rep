"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import DataContextProvider from "@/context/DataContext";
import { wagmiConfig } from "./wallet-utils";
import {zircuitTestnet} from 'viem/chains';
const queryClient = new QueryClient();
export default function Providers({ children }) {
  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
            config={{
              defaultChain: zircuitTestnet,
              supportedChains: [zircuitTestnet],
              loginMethods: ["email", "wallet", "twitter", "telegram"],
              appearance: {
                theme: "dark",
                accentColor: "#080d27",
              },
            }}
            clientId="client-WY5dQwGXwr4wkDfz1CizvJK3c5r2FHEdqqs3g3z8szt3g"
          >
            <DataContextProvider>{children}</DataContextProvider>
          </PrivyProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
