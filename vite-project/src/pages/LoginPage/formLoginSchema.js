import { z } from "zod";

const formLoginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Este campo é obrigatório"),
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
});

export default formLoginSchema;
