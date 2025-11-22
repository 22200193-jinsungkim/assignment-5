const boxStyle = {
  width: "350px",
  margin: "20px auto",
  padding: "15px",
  border: "1px solid black",
  borderRadius: "6px",
  textAlign: "center"
};

function EditBox({ editForm, setEditForm, updateGame, close }) {
  return (
    <div style={boxStyle}>
      <h3>데이터 수정</h3>

      ID:
      <input
        value={editForm.id}
        onChange={(e) => setEditForm({ ...editForm, id: e.target.value })}
      /><br/><br/>

      NAME:
      <input
        value={editForm.name}
        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
      /><br/><br/>

      유통사:
      <input
        value={editForm.publisher}
        onChange={(e) => setEditForm({ ...editForm, publisher: e.target.value })}
      /><br/><br/>

      점유율:
      <input
        value={editForm.share}
        onChange={(e) => setEditForm({ ...editForm, share: e.target.value })}
      /><br/><br/>

      <button onClick={updateGame}>수정하기</button>
      <button onClick={close}>닫기</button>
    </div>
  );
}

export default EditBox;
