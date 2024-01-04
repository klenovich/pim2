export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      items: {
        Row: {
          id: number;
          name: string;
          desc: string | null;
          quantity: number;
          area: string;
          container: string;
          dateAdded: string;
          lastUpdate: string;
          images: {
            images: string[];
            descriptions: string[];
            aiDescriptions: string[];
          };
          attributes: {
            color: string | null;
            type: string | null;
            size: string | null;
            material: string | null;
            dimensions: string | null;
            brand: string | null;
            weight: string | null;
            model: string | null;
            sku: string | null;
            pattern: string | null;
            condition: string | null;
          };
        };
        Insert: {
          id?: number;
          name: string;
          desc?: string | null;
          quantity: number;
          area: string;
          container: string;
          dateAdded: string;
          lastUpdate: string;
          images?: {
            images?: string[];
            descriptions?: string[];
            aiDescriptions?: string[];
          };
          attributes?: {
            color?: string | null;
            type?: string | null;
            size?: string | null;
            material?: string | null;
            dimensions?: string | null;
            brand?: string | null;
            weight?: string | null;
            model?: string | null;
            sku?: string | null;
            pattern?: string | null;
            condition?: string | null;
          };
        };
        Update: {
          id?: number;
          name?: string;
          desc?: string | null;
          quantity?: number;
          area?: string;
          container?: string;
          dateAdded?: string;
          lastUpdate?: string;
          images?: {
            images?: string[];
            descriptions?: string[];
            aiDescriptions?: string[];
          };
          attributes?: {
            color?: string | null;
            type?: string | null;
            size?: string | null;
            material?: string | null;
            dimensions?: string | null;
            brand?: string | null;
            weight?: string | null;
            model?: string | null;
            sku?: string | null;
            pattern?: string | null;
            condition?: string | null;
          };
        };
      };
    };
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}