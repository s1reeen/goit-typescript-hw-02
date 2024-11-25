import css from "./SearchBar.module.css";

type Props = {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch }: Props) {
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = (form.elements.namedItem("topic") as HTMLInputElement).value;
    if (topic.trim() === "") {
      return alert("Please enter search term!");
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input
        type="text"
        name="topic"
        placeholder="Search photos..."
        className={css.inputSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
