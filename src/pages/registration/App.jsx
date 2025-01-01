import ChatContextMenu from "../../components/mainComponents/ChatContextMenu";
import UserContextMenu from "../../components/mainComponents/UserContextMenu";

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
