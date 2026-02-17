import { useState } from 'react';
import type { Bean } from '../types';
import { Check, CalendarDays, Star } from 'lucide-react';
import { clsx } from 'clsx';
import { FlavorLinearGraph } from './FlavorLinearGraph';
import { CalendarModal } from './CalendarModal';

interface BeanCardProps {
    bean: Bean;
    isPurchased: boolean;
    purchaseDates: string[];
    review?: { rating: number; note: string };
    onToggle: (id: string) => void;
    onAddDate: (id: string, date: string) => void;
    onRemoveDate: (id: string, date: string) => void;
    onSetReview: (id: string, rating: number, note: string) => void;
}

export function BeanCard({
    bean,
    isPurchased,
    purchaseDates,
    review,
    onToggle,
    onAddDate,
    onRemoveDate,
    onSetReview
}: BeanCardProps) {
    const [imageError, setImageError] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
        <>
            <div className="group relative bg-white dark:bg-espresso-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-stone-800 overflow-hidden flex flex-col h-full">
                {/* Clickable Image Section */}
                <div
                    className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-stone-900 cursor-pointer"
                    onClick={() => setIsCalendarOpen(true)}
                >
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

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 dark:bg-espresso-card/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                            <CalendarDays className="w-5 h-5 text-coffee-accent dark:text-espresso-accent" />
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggle(bean.id);
                        }}
                        className={clsx(
                            "absolute top-3 right-3 p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 z-10",
                            isPurchased
                                ? "bg-emerald-500 text-white hover:bg-emerald-600 scale-110"
                                : "bg-white/90 dark:bg-stone-800/90 text-gray-400 hover:bg-white dark:hover:bg-stone-700 hover:text-emerald-500 hover:scale-105"
                        )}
                        title={isPurchased ? "Collected!" : "Mark as collected"}
                    >
                        <Check className={clsx("w-5 h-5 transition-transform", isPurchased ? "scale-100" : "scale-75")} />
                        <div className={clsx("absolute inset-0 flex items-center justify-center transition-all", isPurchased ? "opacity-0 scale-50" : "opacity-100 scale-100")}>
                            <div className="w-3 h-3 rounded-full border-2 border-current" />
                        </div>
                    </button>

                    {/* Purchase Count Badge */}
                    {purchaseDates.length > 0 && (
                        <div className="absolute top-3 left-3 bg-coffee-dark/80 dark:bg-espresso-accent/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                            {purchaseDates.length} purchases
                        </div>
                    )}

                    {/* Stars Badge */}
                    {review && review.rating > 0 && (
                        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-espresso-card/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span className="text-[10px] font-bold text-coffee-dark dark:text-espresso-text">{review.rating}</span>
                        </div>
                    )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                    <div
                        className="mb-3 cursor-pointer group/title"
                        onClick={() => setIsCalendarOpen(true)}
                    >
                        <h3 className="font-bold text-coffee-dark dark:text-espresso-text leading-tight text-lg group-hover/title:text-coffee-accent dark:group-hover/title:text-espresso-accent transition-colors">
                            {bean.name}
                        </h3>
                    </div>

                    <div className="mb-4">
                        <FlavorLinearGraph data={bean.flavor} />
                    </div>

                    <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                        {bean.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {bean.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-gray-100 dark:bg-stone-800 text-gray-600 dark:text-stone-400">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between text-xs font-medium text-gray-400 dark:text-stone-500 pt-3 border-t border-gray-50 dark:border-stone-800">
                            <span className={clsx(
                                "px-2 py-0.5 rounded-md",
                                bean.roastLevel === 'Light' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500" :
                                    bean.roastLevel === 'Medium' ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" :
                                        "bg-stone-800 text-stone-200 dark:bg-stone-700 dark:text-stone-300"
                            )}>
                                {bean.roastLevel} Roast
                            </span>
                            <span>{bean.weight}</span>
                        </div>
                    </div>
                </div>
            </div>

            <CalendarModal
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
                beanName={bean.name}
                dates={purchaseDates}
                review={review}
                onAddDate={(date) => onAddDate(bean.id, date)}
                onRemoveDate={(date) => onRemoveDate(bean.id, date)}
                onSetReview={(rating, note) => onSetReview(bean.id, rating, note)}
            />
        </>
    );
}
