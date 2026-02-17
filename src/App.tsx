import { useState, useMemo } from 'react';
import { useBeanTracker } from './hooks/useBeanTracker';
import { chains } from './data/beans';
import { Header } from './components/Header';
import { ChainSection } from './components/ChainSection';
import { Search } from 'lucide-react';

function App() {
  const { purchasedBeans, toggleBean, totalPurchased } = useBeanTracker();
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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header totalPurchased={totalPurchased} totalBeans={totalBeans} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-stone-800 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-white border-0 rounded-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-900 sm:text-sm sm:leading-6 transition-shadow"
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
                onToggle={toggleBean}
              />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
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
      </main>
    </div>
  );
}

export default App;
