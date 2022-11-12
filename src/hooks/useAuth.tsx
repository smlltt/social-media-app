import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import type { Dispatch, FC, SetStateAction } from "react";

type User = { email: string } | null;

export type UserState = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const AuthContext = createContext<UserState | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  //TODO update type when backend available
  const [user, setUser] = useState<User>({ email: "test@r.com" });
  const userState = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <AuthContext.Provider value={userState}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): UserState => {
  const value = useContext(AuthContext);
  if (value == null) {
    throw new Error(
      "Incorrect usage. This should only be used as a child of DeactivateAccountModalProvider"
    );
  }
  return value;
};
