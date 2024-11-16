"use client";
import React from "react";
import Image from "next/image";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import SignedIn from "../components/SignedIn";
import SignedOut from "../components/SignedOut";

export default function Home() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();
  const disableLogin = !ready || (ready && authenticated);

  const { login } = useLogin({
    onComplete: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleExploreClick = () => {
    router.push("/search");
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen text-light-1 px-1">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center h-3/4">
        {/* Logo */}
        <Image
          src="/images/buzz.svg"
          alt="Buzzify Logo"
          className="animate-bounce"
          height={250}
          width={250}
          priority
        />

        {/* Subtitle */}
        <p className="mt-4 text-base text-light-3 leading-7 text-center">
          Turn your predictions on creators into rewards. Bet on your favorites
          and profit from their growth.
        </p>

        {/* Explore Button */}
        <SignedIn>
          <button
            className="mt-10 px-10 py-4 text-lg font-semibold bg-primary-500 rounded-full shadow-lg hover:bg-primary-600 focus:ring-4 focus:ring-primary-500 focus:outline-none transition duration-300"
            onClick={handleExploreClick}
          >
            Explore Now
          </button>
        </SignedIn>
        <SignedOut>
          <button
            className="mt-10 px-10 py-4 text-lg font-semibold bg-primary-500 rounded-full shadow-lg hover:bg-primary-600 focus:ring-4 focus:ring-primary-500 focus:outline-none transition duration-300"
            onClick={login}
            disabled={disableLogin}
          >
            Login now
          </button>
        </SignedOut>
      </div>
    </div>
  );
}
