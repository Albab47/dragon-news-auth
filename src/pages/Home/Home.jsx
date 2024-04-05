import Header from "../../components/shared/Header/Header";
import LeftSideNav from "../../components/shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
import Navbar from "../../components/shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData()
  
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        {/* news container */}
        <div className="md:col-span-2 space-y-7">
          <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
          {news.map(n => <NewsCard key={n._id} news={n} />)}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
