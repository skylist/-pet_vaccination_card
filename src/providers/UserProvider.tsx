import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { User } from "firebase/auth";

export type AuthenticatedUser = User | null;

type UserContextParams = {
  user: AuthenticatedUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthenticatedUser>>;
} | null;

const UserContext = createContext<UserContextParams>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthenticatedUser>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw "useUser must be used within the provider";
  }
  return context;
};
