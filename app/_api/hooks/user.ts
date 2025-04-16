import { useMutation } from "@tanstack/react-query";
import { UserService } from "../services/user";
import type { SignupInput, LoginInput, UserResponse } from "../services/user";

export const signupMutationKey = ["signup"];

export const useSignup = () => {
  return useMutation<UserResponse, unknown, SignupInput>({
    mutationKey: signupMutationKey,
    mutationFn: async (variables) => {
      const response = await UserService.signup(variables);
      return response;
    },
  });
};

export const loginMutationKey = ["login"];

export const useLogin = () => {
  return useMutation<UserResponse, unknown, LoginInput>({
    mutationKey: loginMutationKey,
    mutationFn: async (variables) => {
      const response = await UserService.login(variables);
      return response;
    },
  });
};
