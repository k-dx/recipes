interface IProps {
  favorite: boolean;
  id: number;
  toggleFavorite: (id: number) => void;
}

export default function FavoriteToggle({
  favorite,
  id,
  toggleFavorite,
}: IProps) {
  return (
    <>
      {!favorite && (
        <input type="checkbox" onChange={() => toggleFavorite(id)} />
      )}
      {favorite && (
        <button
          onClick={() => toggleFavorite(id)}
          className="inline select-none"
        >
          ⭐
        </button>
      )}
    </>
  );
}
