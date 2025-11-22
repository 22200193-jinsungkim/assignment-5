const boxStyle = {
  width: "350px",
  margin: "20px auto",
  padding: "15px",
  border: "1px solid black",
  borderRadius: "6px",
  textAlign: "center"
};

function AddBox({ addForm, setAddForm, addGame, close }) {
  return (
    <div style={boxStyle}>
      <h3>데이터 추가</h3>

      ID:
      <input
        value={addForm.id}
        onChange={(e) => setAddForm({ ...addForm, id: e.target.value })}
      /><br/><br/>

      NAME:
      <input
        value={addForm.name}
        onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
      /><br/><br/>

      유통사:
      <input
        value={addForm.publisher}
        onChange={(e) => setAddForm({ ...addForm, publisher: e.target.value })}
      /><br/><br/>

      점유율:
      <input
        value={addForm.share}
        onChange={(e) => setAddForm({ ...addForm, share: e.target.value })}
      /><br/><br/>

      <button onClick={addGame}>추가하기</button>
      <button onClick={close}>닫기</button>
    </div>
  );
}

export default AddBox;
