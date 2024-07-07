import { ZodSchema } from "zod";

export class ZodLocalStorage {
   public getParsedItem<T>(key: string, schema: ZodSchema<T>) {
      const item = localStorage.getItem(key);
      if (!item) return null;

      const result = schema.safeParse(JSON.parse(item));
      return result.success ? result.data : null;
   }

   public setItem<T>(key: string, item: T) {
      localStorage.setItem(key, JSON.stringify(item));
   }

   public removeItem(key: string) {
      localStorage.removeItem(key);
   }
}

export const LocalStorage = new ZodLocalStorage();
