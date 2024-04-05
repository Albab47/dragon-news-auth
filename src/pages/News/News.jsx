import { useParams } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
import Navbar from "../../components/shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams()
    
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4 border">
        <div className="col-span-3">
          <h2 className="text-3xl">News details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
