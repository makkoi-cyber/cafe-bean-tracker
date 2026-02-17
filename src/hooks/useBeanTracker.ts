import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cafe-bean-tracker-v1';

export function useBeanTracker() {
    const [purchasedBeans, setPurchasedBeans] = useState<Set<string>>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? new Set(JSON.parse(saved)) : new Set();
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(purchasedBeans)));
    }, [purchasedBeans]);

    const toggleBean = (beanId: string) => {
        setPurchasedBeans(prev => {
            const next = new Set(prev);
            if (next.has(beanId)) {
                next.delete(beanId);
            } else {
                next.add(beanId);
            }
            return next;
        });
    };

    const isPurchased = (beanId: string) => purchasedBeans.has(beanId);

    return {
        purchasedBeans, // Exposed as Set for efficient has() check
        toggleBean,
        isPurchased,
        totalPurchased: purchasedBeans.size
    };
}
