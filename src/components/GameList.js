function GameList({ list, deleteGame }) {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h3>목록</h3>
      {list.map((game) => (
        <div key={game.id}>
          {game.id} // {game.name} // {game.publisher} // {game.share}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => deleteGame(game.id)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default GameList;
