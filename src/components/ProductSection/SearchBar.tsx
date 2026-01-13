interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Buscar productos por nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar-input"
            />
        </div>
    );
};

export default SearchBar;
