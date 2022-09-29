import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify';
import Questions from "./Components/Questions";



function App() {
  return (
    <div>
      <div className="flex md:hidden  items-center text-primary">
        <img className="w-[100px] h-[100px]" src="https://i.ibb.co/9GTBzgH/gym-logo-1-removebg-preview.png" alt="" />
        <h2 className="text-2xl font-bold">FeetYourself</h2>
      </div>
      <Home></Home>
      <Questions></Questions>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
