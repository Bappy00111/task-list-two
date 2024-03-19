import TaskBord from "./TaskBord/TaskBord";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>
        <TaskBord></TaskBord>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
