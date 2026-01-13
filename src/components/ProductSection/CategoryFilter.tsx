interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
    return (
        <div className="category-filter-container">
            {categories.map(category => (
                <button
                    key={category}
                    className={`category-filter-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
