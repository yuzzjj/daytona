/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { HttpException, HttpStatus } from '@nestjs/common'

export class ResourceNotFoundError extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND)
  }
}
