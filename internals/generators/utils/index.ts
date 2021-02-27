import fs from 'fs';
import path from 'path';
export function pathExists(path: string) {
  return fs.existsSync(path);
}

export function containerExists(container: string) {
  const containers = fs.readdirSync(
    path.join(__dirname, '../../../src/app/containers'),
  );
  return containers.indexOf(container) >= 0;
}
