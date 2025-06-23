"use client";
import { ComponentType } from "react";

import { useRouter } from "next/navigation";

const withAuth = <P extends object>(Component: React.ComponentType) => {
  const AuthWrapper = (props: P) => {
    const router = useRouter();
    return <Component {...props} />;
  };
};
