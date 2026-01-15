import { useState, useEffect } from 'react';

interface SearchBarProps {
    initialSearchQuery: string;
    onSearch: (query: string) => void;
}

const SearchBar = ({ initialSearchQuery, onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(initialSearchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(inputValue);
        }, 300); // 300ms de retardo

        return () => {
            clearTimeout(timer);
        };
    }, [inputValue, onSearch]);

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Buscar productos por nombre..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="search-bar-input"
            />
        </div>
    );
};

export default SearchBar;
