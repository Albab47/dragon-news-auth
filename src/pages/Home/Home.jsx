import Header from "../../components/shared/Header/Header";
import LeftSideNav from "../../components/shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
import Navbar from "../../components/shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6 border">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="border md:col-span-2">
          <h2 className="text-5xl">News coming soon</h2>
        </div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
