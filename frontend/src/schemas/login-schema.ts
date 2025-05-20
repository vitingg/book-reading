import { z } from "zod";

// Arquivo de validação indo pra pasta scr/components/form.tsx
export const loginSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});
