import ChatContextMenu from "../components/ChatContextMenu";
import UserContextMenu from "../components/UserContextMenu";

const App = () => {
  return (
    <>
      <ChatContextMenu></ChatContextMenu>
      <div>Hello World!</div>
      <UserContextMenu style={{ marginTop: "300px" }}></UserContextMenu>
    </>
  );
};

export default App;
