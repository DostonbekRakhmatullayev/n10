import { Module } from '@nestjs/common';
import { FileServic } from './file.service';

@Module({
  providers: [FileServic],
  exports: [FileServic],
})
export class FileModule {}
