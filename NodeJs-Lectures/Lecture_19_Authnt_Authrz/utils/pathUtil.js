import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Export the project root directory (goes up one level from utils folder)
export const rootDir = path.dirname(__dirname);

// Helper function to get __dirname for any module
export const getDirname = (importMetaUrl) => {
  return path.dirname(fileURLToPath(importMetaUrl));
};
