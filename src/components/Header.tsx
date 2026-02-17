import { Coffee, Moon, Sun, BarChart3 } from 'lucide-react';

interface HeaderProps {
    totalPurchased: number;
    totalBeans: number;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export function Header({ totalPurchased, totalBeans, darkMode, toggleDarkMode }: HeaderProps) {
    const percentage = Math.round((totalPurchased / totalBeans) * 100);

    return (
        <header className="bg-coffee-cream/70 dark:bg-espresso-back/70 border-b border-stone-200/50 dark:border-stone-800/50 sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-coffee-dark dark:bg-espresso-accent rounded-lg text-white shadow-lg shadow-coffee-dark/20 dark:shadow-espresso-accent/20">
                            <Coffee size={24} />
                        </div>
                        <h1 className="text-xl font-bold text-coffee-dark dark:text-espresso-text tracking-tight hidden xs:block">Cafe Bean Tracker</h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-4">
                        <a
                            href="#insights"
                            className="flex items-center gap-1.5 text-xs font-bold text-stone-500 dark:text-stone-400 hover:text-coffee-accent dark:hover:text-espresso-accent transition-colors"
                        >
                            <BarChart3 size={14} />
                            Insights
                        </a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl transition-colors text-coffee-dark dark:text-espresso-text"
                        title={darkMode ? "Switch to Light Mode" : "Switch to Night Mode"}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold tracking-widest leading-none mb-1">Collection Progress</p>
                        <p className="text-sm font-black text-coffee-dark dark:text-espresso-text">{totalPurchased} / {totalBeans}</p>
                    </div>

                    <div className="w-12 h-12 relative flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                fill="transparent"
                                className="text-stone-200/50 dark:text-stone-800/50"
                            />
                            <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 20}
                                strokeDashoffset={2 * Math.PI * 20 * (1 - percentage / 100)}
                                className="text-coffee-accent dark:text-espresso-accent transition-all duration-1000 ease-out"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-[10px] font-black text-coffee-dark dark:text-espresso-text">{percentage}%</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
