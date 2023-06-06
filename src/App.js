
import Hello from './components/jsx/Hello';
import Navbar from './components/jsx/navbar';
import Card from './components/jsx/card';

function App() {
  return (
    <>
        
        <Navbar/>
        <Card
        profileImage={"https://i.pinimg.com/236x/22/7b/36/227b365fb77c7d231ed7c47cc0a7852b.jpg?nii=t"}
        postimage={"https://th.bing.com/th/id/OIP.ZTITedEnP2qvlUs8Om0CxwHaEo?pid=ImgDet&rs=1"}
        location={"bhubaneswar"}
        username={"dikshya2002"}
        caption={"life is beautiful"}
        time={"2hr"}
        />

    </>
  );
}

export default App;
