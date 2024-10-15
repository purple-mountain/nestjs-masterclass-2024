import { HttpStatus } from '@nestjs/common';

export const ErrorMappings = {
  P2002: { status: HttpStatus.BAD_REQUEST, message: 'Record with this value already exists.' },
  P2025: { status: HttpStatus.BAD_REQUEST, message: 'Record not found' },
} as const;
