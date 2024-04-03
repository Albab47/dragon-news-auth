import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-2 rounded-md">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to='/'>I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
