import { protectedApi, publicApi } from "../../_lib/axios";

export interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

interface BalanceInput {
  from: string;
  to: string;
}

export interface UserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
}

export const UserService = {
  signup: async (input: SignupInput): Promise<UserResponse> => {
    const response = await publicApi.post("/users", {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      password: input.password,
    });

    console.log("Resposta da API no signup:", response.data);

    return {
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      tokens: response.data.tokens,
    };
  },
  login: async (input: LoginInput): Promise<UserResponse> => {
    const response = await publicApi.post("/users/login", {
      email: input.email,
      password: input.password,
    });
    return {
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      tokens: response.data.tokens,
    };
  },
  me: async (): Promise<Omit<UserResponse, "tokens">> => {
    const response = await protectedApi.get("/users/me");
    return {
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
    };
  },
  /**
   * Retorna o balanço do usuário autenticado.
   * @param {Object} input - Usuário a ser criado
   * @param {string} input.from - Data inicial (YYYY-MM-DD)
   * @param {string} input.to - Data final (YYYY-MM-DD)
   */
  getBalance: async (input: BalanceInput): Promise<{ balance: number }> => {
    const queryParams = new URLSearchParams();
    queryParams.set("from", input.from);
    queryParams.set("to", input.to);
    const response = await protectedApi.get(
      `/users/me/balance?${queryParams.toString()}`,
    );
    return response.data;
  },
};
