import { useState } from 'react';
import type { Bean } from '../types';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BeanCardProps {
    bean: Bean;
    isPurchased: boolean;
    onToggle: (id: string) => void;
}

export function BeanCard({ bean, isPurchased, onToggle }: BeanCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={twMerge(
            "relative group rounded-xl overflow-hidden transition-all duration-300",
            "bg-white border border-gray-100 shadow-sm hover:shadow-md",
            isPurchased ? "ring-2 ring-emerald-500/50" : ""
        )}>
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                {!imageError && bean.imageUrl ? (
                    <img
                        src={bean.imageUrl}
                        alt={bean.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <img
                        src={`/assets/beans/default-${bean.roastLevel.toLowerCase()}.svg`}
                        alt="Default"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}

                <button
                    onClick={() => onToggle(bean.id)}
                    className={clsx(
                        "absolute top-3 right-3 p-2 rounded-full shadow-sm transition-all duration-200 backdrop-blur-sm",
                        isPurchased
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "bg-white/90 text-gray-400 hover:text-emerald-500 hover:bg-white"
                    )}
                    aria-label={isPurchased ? "Mark as not purchased" : "Mark as purchased"}
                >
                    <Check size={18} strokeWidth={3} className={clsx("transition-transform", isPurchased ? "scale-100" : "scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-50")} />
                    <div className={clsx("absolute inset-0 flex items-center justify-center transition-all", isPurchased ? "opacity-0 scale-50" : "opacity-100 scale-100")}>
                        <div className="w-3 h-3 rounded-full border-2 border-current" />
                    </div>
                </button>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 leading-tight">{bean.name}</h3>
                </div>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {bean.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                    {bean.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-gray-100 text-gray-600">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between text-xs font-medium text-gray-400 mt-auto pt-3 border-t border-gray-50">
                    <span className={clsx(
                        "px-2 py-0.5 rounded-md",
                        bean.roastLevel === 'Light' ? "bg-amber-100 text-amber-700" :
                            bean.roastLevel === 'Medium' ? "bg-orange-100 text-orange-800" :
                                "bg-stone-800 text-stone-200"
                    )}>
                        {bean.roastLevel} Roast
                    </span>
                    <span>{bean.weight}</span>
                </div>
            </div>
        </div>
    );
}
