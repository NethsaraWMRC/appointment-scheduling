import React from "react";
import { useAuth } from "./useAuth";

function AuthProvider({ children }) {
  useAuth();

  return <>{children}</>;
}

export default AuthProvider;
