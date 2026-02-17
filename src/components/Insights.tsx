import { BarChart3, PieChart, TrendingUp, Award } from 'lucide-react';
import type { Chain } from '../types';

interface InsightsProps {
    chains: Chain[];
    purchases: Record<string, string[]>;
}

export function Insights({ chains, purchases }: InsightsProps) {
    const purchasedIds = Object.keys(purchases);
    if (purchasedIds.length === 0) return null;

    // Calculate stats
    const allBeans = chains.flatMap(c => c.beans.map(b => ({ ...b, chainName: c.name })));
    const purchasedBeans = allBeans.filter(b => purchasedIds.includes(b.id));

    // 1. Roast Preference
    const roastStats = purchasedBeans.reduce((acc, bean) => {
        acc[bean.roastLevel] = (acc[bean.roastLevel] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // 2. Favorite Chains
    const chainStats = purchasedBeans.reduce((acc, bean) => {
        acc[bean.chainName] = (acc[bean.chainName] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const topChains = Object.entries(chainStats).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const mostFrequentRoast = Object.entries(roastStats).sort((a, b) => b[1] - a[1])[0][0];

    return (
        <section className="bg-white/50 dark:bg-espresso-card/50 backdrop-blur-xl rounded-3xl p-8 border border-stone-200/50 dark:border-stone-800/50 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="text-coffee-accent dark:text-espresso-accent" size={24} />
                <h2 className="text-2xl font-black text-coffee-dark dark:text-espresso-text tracking-tight">Your Coffee Insights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Roasts */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                        <PieChart size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Favorite Roast</span>
                    </div>
                    <div className="p-4 bg-white dark:bg-stone-900/50 rounded-2xl border border-stone-100 dark:border-stone-800 transition-colors">
                        <p className="text-2xl font-black text-coffee-dark dark:text-espresso-text">{mostFrequentRoast}</p>
                        <div className="mt-4 space-y-2">
                            {['Light', 'Medium', 'Dark'].map(roast => {
                                const count = roastStats[roast] || 0;
                                const percentage = Math.round((count / purchasedBeans.length) * 100);
                                return (
                                    <div key={roast} className="space-y-1">
                                        <div className="flex justify-between text-[10px] font-bold text-stone-400 uppercase">
                                            <span>{roast}</span>
                                            <span>{percentage}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-coffee-accent dark:bg-espresso-accent transition-all duration-1000"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Top Chains */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                        <TrendingUp size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Top Destinations</span>
                    </div>
                    <div className="space-y-3">
                        {topChains.map(([name, count], i) => (
                            <div key={name} className="flex items-center gap-4 p-3 bg-white dark:bg-stone-900/50 rounded-2xl border border-stone-100 dark:border-stone-800 transition-colors">
                                <span className="w-8 h-8 flex items-center justify-center bg-stone-100 dark:bg-stone-800 rounded-xl text-xs font-black text-stone-400">#{i + 1}</span>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-coffee-dark dark:text-espresso-text">{name}</p>
                                    <p className="text-[10px] text-stone-400">{count} types enjoyed</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accomplishments */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                        <Award size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Milestones</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">Total Loved</p>
                            <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">{purchasedBeans.length}</p>
                        </div>
                        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                            <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">Total Cups</p>
                            <p className="text-2xl font-black text-amber-700 dark:text-amber-300">
                                {Object.values(purchases).reduce((acc, dates) => acc + dates.length, 0)}
                            </p>
                        </div>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-relaxed italic pr-4">
                        "Coffee is a language in itself." <br /> Keep exploring new flavors.
                    </p>
                </div>
            </div>
        </section>
    );
}
