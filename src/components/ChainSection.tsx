import type { Chain } from '../types';
import { BeanCard } from './BeanCard';

interface ChainSectionProps {
    chain: Chain;
    purchasedSet: Set<string>;
    onToggle: (id: string) => void;
}

export function ChainSection({ chain, purchasedSet, onToggle }: ChainSectionProps) {
    const chainPurchasedCount = chain.beans.filter(b => purchasedSet.has(b.id)).length;
    const progress = Math.round((chainPurchasedCount / chain.beans.length) * 100);

    return (
        <section className="mb-12">
            <div className="flex items-end justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm"
                        style={{ backgroundColor: chain.logoColor }}
                    >
                        {chain.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{chain.name}</h2>
                        <p className="text-sm text-gray-500">
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
                        onToggle={onToggle}
                    />
                ))}
            </div>
        </section>
    );
}
