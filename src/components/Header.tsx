import { Coffee } from 'lucide-react';

interface HeaderProps {
    totalPurchased: number;
    totalBeans: number;
}

export function Header({ totalPurchased, totalBeans }: HeaderProps) {
    const percentage = Math.round((totalPurchased / totalBeans) * 100);

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-md bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-stone-900 rounded-lg text-white">
                        <Coffee size={24} />
                    </div>
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">Cafe Bean Tracker</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Total Progress</p>
                        <p className="text-sm font-bold text-gray-900">{totalPurchased} / {totalBeans} Beans</p>
                    </div>

                    <div className="w-12 h-12 relative flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                                className="text-gray-100"
                            />
                            <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 20}
                                strokeDashoffset={2 * Math.PI * 20 * (1 - percentage / 100)}
                                className="text-stone-900 transition-all duration-1000 ease-out"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-[10px] font-bold">{percentage}%</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
