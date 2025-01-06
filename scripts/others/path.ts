import path from "path";

export function getPath(fPath: string) {
  return path.posix.resolve(fPath);
}
