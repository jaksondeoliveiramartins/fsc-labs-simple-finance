import z from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "O email é inválido",
    })
    .trim()
    .min(1, {
      message: "O email é obrigatório",
    }),
  password: z.string().trim().min(6, {
    message: "A senha deve ter no minímo 6 caracteres",
  }),
  terms: z.boolean().optional(),
});

export const signupFormSchema = z
  .object({
    firstName: z.string().trim().min(1, {
      message: "O nome é obrigatório",
    }),
    lastName: z.string().trim().min(1, {
      message: "O sobrenome é obrigatório",
    }),
    email: z
      .string()
      .email({
        message: "O email é inválido",
      })
      .trim()
      .min(1, {
        message: "O email é obrigatório",
      }),
    password: z.string().trim().min(6, {
      message: "A senha deve ter no minímo 6 caracteres",
    }),
    passwordConfirmation: z.string().trim().min(6, {
      message: "A confirmação da senha é obrigatória",
    }),
    terms: z.boolean().refine((value) => value === true, {
      message: "Você precisa aceitar os termos",
    }),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirmation;
    },
    {
      message: "As senhas não coincidem.",
      path: ["passwordConfirmation"],
    },
  );
