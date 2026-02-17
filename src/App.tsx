import { useState, useMemo } from 'react';
import { useBeanTracker } from './hooks/useBeanTracker';
import { chains } from './data/beans';
import { Header } from './components/Header';
import { ChainSection } from './components/ChainSection';
import { Insights } from './components/Insights';
import { Search } from 'lucide-react';

function App() {
  const {
    purchasedBeans,
    purchases,
    reviews,
    darkMode,
    toggleBean,
    addPurchaseDate,
    removePurchaseDate,
    setReview,
    toggleDarkMode,
    totalPurchased
  } = useBeanTracker();
  const [searchQuery, setSearchQuery] = useState('');

  const totalBeans = useMemo(() => chains.reduce((acc, chain) => acc + chain.beans.length, 0), []);

  const filteredChains = useMemo(() => {
    if (!searchQuery) return chains;

    const lowerQuery = searchQuery.toLowerCase();

    return chains.map(chain => ({
      ...chain,
      beans: chain.beans.filter(bean =>
        bean.name.toLowerCase().includes(lowerQuery) ||
        bean.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        chain.name.toLowerCase().includes(lowerQuery)
      )
    })).filter(chain => chain.beans.length > 0);
  }, [searchQuery]);

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300">
      {/* Background Layer */}
      <div className="bg-grain opacity-[0.03] dark:opacity-[0.05]" />

      {/* Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-coffee-accent/5 dark:bg-espresso-accent/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] -right-[10%] w-[35%] h-[35%] bg-coffee-accent/10 dark:bg-espresso-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[40%] left-[60%] w-[25%] h-[25%] bg-white/20 dark:bg-espresso-accent/5 rounded-full blur-[60px] animate-float" style={{ animationDelay: '-7s' }} />
      </div>

      <div className="relative z-10">
        <Header
          totalPurchased={totalPurchased}
          totalBeans={totalBeans}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative group bg-white/50 dark:bg-espresso-card/50 backdrop-blur-md rounded-2xl p-1 shadow-sm border border-stone-200/50 dark:border-stone-800/50">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-stone-400 group-focus-within:text-coffee-accent dark:group-focus-within:text-espresso-accent transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-transparent border-0 rounded-xl text-stone-900 dark:text-espresso-text placeholder:text-stone-400 focus:ring-0 sm:text-sm sm:leading-6 transition-all"
              placeholder="Search beans, flavors, or chains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            {filteredChains.length > 0 ? (
              filteredChains.map(chain => (
                <ChainSection
                  key={chain.id}
                  chain={chain}
                  purchasedSet={purchasedBeans}
                  purchases={purchases}
                  reviews={reviews}
                  onToggle={toggleBean}
                  onAddDate={addPurchaseDate}
                  onRemoveDate={removePurchaseDate}
                  onSetReview={setReview}
                />
              ))
            ) : (
              <div className="text-center py-20 text-stone-500">
                <p className="text-lg">No beans found matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-emerald-600 hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* Insights Section */}
          <div id="insights" className="mt-20 scroll-mt-24">
            <Insights chains={chains} purchases={purchases} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
