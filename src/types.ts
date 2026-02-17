export type RoastLevel = 'Light' | 'Medium' | 'Dark';

export interface FlavorProfile {
    acidity: number; // 1-5
    bitterness: number; // 1-5
    body: number; // 1-5
}

export interface Bean {
    id: string;
    name: string;
    description: string;
    roastLevel: RoastLevel;
    price?: number; // Approximate price per 100g or 200g
    weight?: string; // e.g., "250g"
    tags: string[];
    imageUrl?: string;
    flavor: FlavorProfile;
    url?: string; // Official product page URL
}

export interface Chain {
    id: string;
    name: string;
    logoColor: string; // Hex color for branding
    logoUrl?: string;
    beans: Bean[];
}
