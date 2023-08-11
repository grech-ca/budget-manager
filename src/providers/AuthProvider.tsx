import { FC, PropsWithChildren, createContext } from 'react';

export interface AuthContextValue {}

export const AuthContext = createContext<AuthContextValue>({});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
