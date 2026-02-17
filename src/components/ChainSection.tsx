import { useState } from 'react';
import type { Chain } from '../types';
import { BeanCard } from './BeanCard';

interface ChainSectionProps {
    chain: Chain;
    purchasedSet: Set<string>;
    purchases: Record<string, string[]>;
    reviews: Record<string, { rating: number; note: string }>;
    onToggle: (id: string) => void;
    onAddDate: (id: string, date: string) => void;
    onRemoveDate: (id: string, date: string) => void;
    onSetReview: (id: string, rating: number, note: string) => void;
}

export function ChainSection({
    chain,
    purchasedSet,
    purchases,
    reviews,
    onToggle,
    onAddDate,
    onRemoveDate,
    onSetReview
}: ChainSectionProps) {
    const [logoError, setLogoError] = useState(false);
    const chainPurchasedCount = chain.beans.filter(b => purchasedSet.has(b.id)).length;
    const progress = Math.round((chainPurchasedCount / chain.beans.length) * 100);

    return (
        <section className="mb-12">
            <div className="flex items-end justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg overflow-hidden group/logo transition-transform hover:scale-110"
                        style={{ backgroundColor: chain.logoColor }}
                    >
                        {chain.logoUrl && !logoError ? (
                            <img
                                src={chain.logoUrl}
                                alt={chain.name}
                                className="w-full h-full object-cover"
                                onError={() => setLogoError(true)}
                            />
                        ) : (
                            <div className="flex flex-col items-center">
                                <span className="transform group-hover/logo:scale-125 transition-transform">{chain.name.charAt(0)}</span>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-coffee-dark dark:text-espresso-text">{chain.name}</h2>
                        <p className="text-sm text-stone-500">
                            {chainPurchasedCount} / {chain.beans.length} collected
                        </p>
                    </div>
                </div>

                {/* Simple Progress Bar */}
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full transition-all duration-500"
                        style={{
                            width: `${progress}%`,
                            backgroundColor: chain.logoColor
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {chain.beans.map(bean => (
                    <BeanCard
                        key={bean.id}
                        bean={bean}
                        isPurchased={purchasedSet.has(bean.id)}
                        purchaseDates={purchases[bean.id] || []}
                        review={reviews[bean.id]}
                        onToggle={onToggle}
                        onAddDate={onAddDate}
                        onRemoveDate={onRemoveDate}
                        onSetReview={onSetReview}
                    />
                ))}
            </div>
        </section>
    );
}
