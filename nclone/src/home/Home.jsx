
import Featured from "../../components/navbar/featured/Featured"
import List from "../../components/navbar/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
          <Featured /> 
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>

         
    </div>
  );
};
 
export default Home;
