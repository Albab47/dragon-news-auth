import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
import Navbar from "../../components/shared/Navbar/Navbar";
import { HiMiniArrowLeft } from "react-icons/hi2";

const News = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const news = newsData.find((data) => data._id === id);
  const { title, details, image_url } = news;

  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4">
        {/* news details area */}
        <div className="col-span-3">
          <div className="flex flex-col p-7 space-y-6 overflow-hidden rounded-lg border text-gray-800">
            <div>
              <img
                src={image_url}
                alt=""
                className="object-cover w-full rounded-md mb-4 h-60 sm:h-96 bg-gray-500"
              />
              <h2 className="mb-4 text-2xl font-bold">{title}</h2>
              {<p className="text-sm md:text-base text-gray-600">{details}</p>}
            </div>

            <div>
              <button className="btn bg-[#D72050] text-white"><HiMiniArrowLeft size={20} />All news in this category</button>
            </div>
          </div>
        </div>

        {/* right navbar */}
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
