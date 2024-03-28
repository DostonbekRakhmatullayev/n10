import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
@Injectable()
export class FileServic {
  async upload(file: any) {
    const files = Date.now() + file.originalname.replace(/\s+/g, '');
    const newFile = path.join(process.cwd(), 'upload', files);
    fs.writeFileSync(newFile, file.buffer);
    return files;
  }
}
