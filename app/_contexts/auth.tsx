"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

import { useLogin, useSignup } from "../_api/hooks/user";
import { UserService } from "../_api/services/user";
import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
} from "../_constants/local-storage";
import type {
  SignupInput,
  LoginInput,
  UserResponse,
} from "../_api/services/user";

interface AuthContextType {
  user: UserResponse | null;
  isInitializing: boolean;
  login: (data: LoginInput) => Promise<void>;
  signup: (data: SignupInput) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as UserResponse,
  isInitializing: true,
  login: async () => {},
  signup: async () => {},
  signOut: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const setTokens = (tokens: { accessToken: string; refreshToken: string }) => {
  localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, tokens.accessToken);
  localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, tokens.refreshToken);
};

const removeTokens = () => {
  localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
  localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const signupMutation = useSignup();
  const loginMutation = useLogin();

  useEffect(() => {
    const init = async () => {
      try {
        setIsInitializing(true);
        const accessToken = localStorage.getItem(
          LOCAL_STORAGE_ACCESS_TOKEN_KEY,
        );
        const refreshToken = localStorage.getItem(
          LOCAL_STORAGE_REFRESH_TOKEN_KEY,
        );
        if (!accessToken && !refreshToken) {
          setIsInitializing(false);
          return;
        }
        const response = await UserService.me();
        setUser(response);
      } catch (error) {
        setUser(null);
        console.error(error);
      } finally {
        setIsInitializing(false);
      }
    };

    init();
  }, []);

  const signup = async (data: SignupInput): Promise<void> => {
    try {
      const createdUser = await signupMutation.mutateAsync(data);
      if (!createdUser.tokens) {
        throw new Error("Tokens não retornados pelo servidor");
      }
      setUser(createdUser);
      setTokens(createdUser.tokens);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar a conta. Por favor, tente novamente");
      console.error(error);
    }
  };

  const login = async (data: LoginInput): Promise<void> => {
    try {
      const loggedUser = await loginMutation.mutateAsync(data);
      if (!loggedUser.tokens) {
        throw new Error("Tokens não retornados pelo servidor");
      }
      setTokens(loggedUser.tokens);
      setUser(loggedUser);
      toast.success("Login realizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao realizar o login. Por favor, tente novamente");
      console.error(error);
    }
  };

  const signOut = () => {
    setUser(null);
    removeTokens();
    toast.success("Você foi deslogado com sucesso!");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        isInitializing,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
