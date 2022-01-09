import { AuthContext } from "./../providers/AuthProvider";
import React, { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
