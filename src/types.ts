// src/types.ts
export interface Furniture {
      
      id: string;
      name: string;
      description: string;
      price: number;
      imageUrl: string;
      category: FurnitureCategory;
    }

    export type FurnitureCategory = 'living' | 'comedor' | 'cocina' | 'relax';
