import { useEffect, useState } from 'react';

const STORAGE_KEY = 'searchHistory';

export const useSearchHistory = () => {
	const [history, setHistory] = useState<string[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		const parsed = stored ? JSON.parse(stored) : [];
		if (Array.isArray(parsed)) {
			setHistory(parsed.slice(0, 6));
		} else {
			localStorage.removeItem(STORAGE_KEY);
		}
	}, []);

	const addHistory = (query: string) => {
		const updatedHistory = [
			query,
			...history.filter(item => item !== query),
		].slice(0, 15);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
		setHistory(updatedHistory);
	};

	const deleteHistory = (query: string) => {
		const updatedHistory = history.filter(item => item !== query);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
		setHistory(updatedHistory);
	};

	return { history, addHistory, deleteHistory };
};
