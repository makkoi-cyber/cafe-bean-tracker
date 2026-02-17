import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cafe-bean-tracker-v3'; // Bump version for format change
const V2_KEY = 'cafe-bean-tracker-v2';
const OLD_STORAGE_KEY = 'cafe-bean-tracker-v1';

export function useBeanTracker() {
    // 1. Purchases State
    const [purchases, setPurchases] = useState<Record<string, string[]>>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved).purchases || {};

        const v2Saved = localStorage.getItem(V2_KEY);
        if (v2Saved) return JSON.parse(v2Saved);

        const v1Saved = localStorage.getItem(OLD_STORAGE_KEY);
        if (v1Saved) {
            const oldIds = JSON.parse(v1Saved) as string[];
            const migrated: Record<string, string[]> = {};
            const today = new Date().toISOString().split('T')[0];
            oldIds.forEach(id => { migrated[id] = [today]; });
            return migrated;
        }
        return {};
    });

    // 2. Reviews State
    const [reviews, setReviews] = useState<Record<string, { rating: number; note: string }>>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved).reviews || {};
        return {};
    });

    // 3. Theme State
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved).darkMode || false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ purchases, reviews, darkMode }));
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [purchases, reviews, darkMode]);

    const addPurchaseDate = (beanId: string, date: string) => {
        setPurchases(prev => {
            const currentDates = prev[beanId] || [];
            if (currentDates.includes(date)) return prev;
            return { ...prev, [beanId]: [...currentDates, date].sort() };
        });
    };

    const removePurchaseDate = (beanId: string, date: string) => {
        setPurchases(prev => {
            const currentDates = prev[beanId] || [];
            if (!currentDates.includes(date)) return prev;
            const updated = currentDates.filter(d => d !== date);
            if (updated.length === 0) {
                const { [beanId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [beanId]: updated };
        });
    };

    const setReview = (beanId: string, rating: number, note: string) => {
        setReviews(prev => ({
            ...prev,
            [beanId]: { rating, note }
        }));
    };

    const toggleBean = (beanId: string) => {
        setPurchases(prev => {
            const currentDates = prev[beanId] || [];
            if (currentDates.length > 0) {
                const { [beanId]: _, ...rest } = prev;
                return rest;
            } else {
                return { ...prev, [beanId]: [new Date().toISOString().split('T')[0]] };
            }
        });
    };

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return {
        purchasedBeans: new Set(Object.keys(purchases)),
        purchases,
        reviews,
        darkMode,
        addPurchaseDate,
        removePurchaseDate,
        setReview,
        toggleBean,
        toggleDarkMode,
        totalPurchased: Object.keys(purchases).length
    };
}
