import { z } from "zod";

const formRegisterSchema = z
  .object({
    name: z.string().min(1, "Este campo é obrigatório"),
    email: z
      .string()
      .email("Email inválido")
      .min(1, "Este campo é obrigatório"),
    password: z
      .string()
      .min(8, "São necessário pelo menos oito caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .regex(
        /[-/~!#*$@_%+=.,^&(){}[|;:”<>?]/,
        "É necessário pelo menos um caractere especial"
      ),
    confirmPassword: z.string().min(8, "É necessário confirmar a senha"),
    bio: z.string().min(1, "Este campo é obrigatório"),
    contact: z.string().min(9, "Este campo é obrigatório"),
    course_module: z.string().min(1, "Selecione uma das opçoes"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });

export default formRegisterSchema;
