import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Star, MessageSquare } from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
    beanName: string;
    dates: string[];
    review?: { rating: number; note: string };
    onAddDate: (date: string) => void;
    onRemoveDate: (date: string) => void;
    onSetReview: (rating: number, note: string) => void;
}

export function CalendarModal({
    isOpen,
    onClose,
    beanName,
    dates,
    review,
    onAddDate,
    onRemoveDate,
    onSetReview
}: CalendarModalProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [localRating, setLocalRating] = useState(review?.rating || 0);
    const [localNote, setLocalNote] = useState(review?.note || '');

    if (!isOpen) return null;

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);

    const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

    const formatDate = (day: number) => {
        const d = new Date(year, month, day);
        return d.toISOString().split('T')[0];
    };

    const isSelected = (day: number) => dates.includes(formatDate(day));

    const toggleDate = (day: number) => {
        const dateStr = formatDate(day);
        if (isSelected(day)) {
            onRemoveDate(dateStr);
        } else {
            onAddDate(dateStr);
        }
    };

    const handleReviewSave = () => {
        onSetReview(localRating, localNote);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all" onClick={onClose}>
            <div
                className="bg-coffee-cream dark:bg-espresso-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 transition-colors duration-300"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-4 bg-coffee-dark dark:bg-espresso-accent text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 opacity-70" />
                        <h2 className="font-bold text-lg truncate pr-4">{beanName}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="max-h-[80vh] overflow-y-auto">
                    {/* Calendar Section */}
                    <div className="p-4 border-b border-stone-200 dark:border-stone-800">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-coffee-dark dark:text-espresso-text">購入履歴</h3>
                            <div className="flex items-center gap-1">
                                <span className="text-xs font-bold text-stone-500 dark:text-stone-400 mr-2">{year}年 {month + 1}月</span>
                                <div className="flex gap-1">
                                    <button onClick={prevMonth} className="p-1 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg text-coffee-dark dark:text-espresso-text transition-colors">
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button onClick={nextMonth} className="p-1 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg text-coffee-dark dark:text-espresso-text transition-colors">
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                            {['日', '月', '火', '水', '木', '金', '土'].map(d => (
                                <div key={d} className="text-center text-[10px] font-bold text-stone-400 uppercase py-1">
                                    {d}
                                </div>
                            ))}
                            {Array.from({ length: startDay }).map((_, i) => (
                                <div key={`empty-${i}`} />
                            ))}
                            {Array.from({ length: totalDays }).map((_, i) => {
                                const day = i + 1;
                                const selected = isSelected(day);
                                const isToday = formatDate(day) === new Date().toISOString().split('T')[0];

                                return (
                                    <button
                                        key={day}
                                        onClick={() => toggleDate(day)}
                                        className={clsx(
                                            "aspect-square flex items-center justify-center rounded-xl text-sm transition-all relative font-medium group",
                                            selected
                                                ? "bg-coffee-accent dark:bg-espresso-accent text-white shadow-md scale-105"
                                                : "hover:bg-stone-200 dark:hover:bg-stone-800 text-coffee-dark dark:text-espresso-text",
                                            isToday && !selected && "ring-2 ring-coffee-accent/30 dark:ring-espresso-accent/30 ring-inset"
                                        )}
                                    >
                                        {day}
                                        {selected && (
                                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-coffee-accent dark:border-espresso-accent rounded-full" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Review Section */}
                    <div className="p-4 bg-stone-50 dark:bg-stone-900/30">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="w-4 h-4 text-coffee-accent dark:text-espresso-accent" />
                            <h3 className="font-bold text-coffee-dark dark:text-espresso-text">マイ・ジャーナル</h3>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setLocalRating(prev => prev === star ? 0 : star)}
                                    className="transition-transform active:scale-90"
                                >
                                    <Star
                                        className={clsx(
                                            "w-7 h-7 transition-colors",
                                            star <= localRating
                                                ? "fill-amber-400 text-amber-400"
                                                : "text-stone-300 dark:text-stone-700"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Note */}
                        <textarea
                            className="w-full h-24 p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-coffee-dark dark:text-espresso-text placeholder:text-stone-400 focus:ring-2 focus:ring-coffee-accent/20 transition-all outline-none resize-none mb-3"
                            placeholder="淹れ方のコツや、あわせるお菓子のメモなど..."
                            value={localNote}
                            onChange={(e) => setLocalNote(e.target.value)}
                            onBlur={handleReviewSave}
                        />

                        <div className="flex justify-end">
                            <button
                                onClick={handleReviewSave}
                                className="px-4 py-2 bg-coffee-dark dark:bg-espresso-accent text-white rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
                            >
                                保存する
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-stone-200 dark:border-stone-800 text-[10px] text-stone-500 flex justify-between items-center">
                    <span>記録された購入回数: <span className="font-bold text-coffee-accent dark:text-espresso-accent">{dates.length}回</span></span>
                    <span className="italic">情報はブラウザに保存されます</span>
                </div>
            </div>
        </div>
    );
}
