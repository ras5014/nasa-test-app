import { z } from "zod";

export const launchSchema = z.object({
  flightNumber: z.number().int().positive(),
  mission: z.string().nonempty(),
  rocket: z.string().nonempty(),
  launchDate: z.string().or(z.date()).pipe(z.coerce.date()),
  target: z.string().nonempty(),
  customers: z.array(z.string()).default([]),
  upcoming: z.boolean(),
  success: z.boolean().default(false),
});

export const newLaunchSchema = launchSchema.omit({
  flightNumber: true,
  upcoming: true,
  success: true,
  customers: true,
});

export type Launch = z.infer<typeof launchSchema>;

export type NewLaunch = z.infer<typeof newLaunchSchema>;
