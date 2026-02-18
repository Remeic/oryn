import { Body } from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import type { ZodType } from 'zod';

export function ZodBody<T extends ZodType>(schema: T) {
  return Body(new ZodValidationPipe(schema));
}
