import { createContext, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

  async function signIn() { }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Vanessa',
        avatarUrl: 'https://github.com/VanessaSwerts.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}