import { z } from 'zod';

export const SignalSeveritySchema = z.enum(['info', 'warn', 'error']);

export const SignalTypeSchema = z.enum([
  'test_passed',
  'test_failed',
  'deploy_started',
  'deploy_failed',
  'note',
]);

export const CreateSignalSchema = z.object({
  type: SignalTypeSchema,
  source: z.string().min(2),
  title: z.string().min(2),
  severity: SignalSeveritySchema,
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type CreateSignalInput = z.infer<typeof CreateSignalSchema>;
