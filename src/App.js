import { useState } from "react";
import GameList from "./components/GameList";
import AddBox from "./components/AddBox";
import EditBox from "./components/EditBox";

function App() {
  const [list, setList] = useState([]);
  const [showAddBox, setShowAddBox] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);

  const [addForm, setAddForm] = useState({
    id: "",
    name: "",
    publisher: "",
    share: ""
  });

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    publisher: "",
    share: ""
  });

  const getGame = () => {
    fetch("http://localhost:3000/GAME")
      .then((res) => res.json())
      .then((data) => setList(data));
  };

  const addGame = () => {
    fetch("http://localhost:3000/GAME", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addForm),
    })
      .then((res) => res.json())
      .then(() => {
        getGame();
        setShowAddBox(false);
      });
  };

  const updateGame = () => {
    fetch(`http://localhost:3000/GAME/${editForm.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    })
      .then((res) => res.json())
      .then(() => {
        getGame();
        setShowEditBox(false);
      });
  };

  const deleteGame = (id) => {
    fetch(`http://localhost:3000/GAME/${id}`, { method: "DELETE" })
      .then(() => getGame());
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button onClick={getGame}>데이터 목록보기</button>

        <button onClick={() => {
          setShowEditBox(false);
          setShowAddBox(true);
        }}>데이터 추가</button>

        <button onClick={() => {
          setShowAddBox(false);
          setShowEditBox(true);
        }}>데이터 수정</button>
      </div>

      <GameList list={list} deleteGame={deleteGame} />

      {showAddBox && (
        <AddBox
          addForm={addForm}
          setAddForm={setAddForm}
          addGame={addGame}
          close={() => setShowAddBox(false)}
        />
      )}

      {showEditBox && (
        <EditBox
          editForm={editForm}
          setEditForm={setEditForm}
          updateGame={updateGame}
          close={() => setShowEditBox(false)}
        />
      )}
    </div>
  );
}

export default App;
