export type RoastLevel = 'Light' | 'Medium' | 'Dark';

export interface Bean {
    id: string;
    name: string;
    description: string;
    roastLevel: RoastLevel;
    price?: number; // Approximate price per 100g or 200g
    weight?: string; // e.g., "250g"
    tags: string[];
    imageUrl?: string;
}

export interface Chain {
    id: string;
    name: string;
    logoColor: string; // Hex color for branding
    beans: Bean[];
}
