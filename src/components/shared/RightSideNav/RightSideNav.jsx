import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          login with Github
        </button>
      </div>

      <div className="">
        <h2 className="text-2xl mb-3 font-semibold">Find us on</h2>
        <a href="#" className="p-4 flex items-center gap-3 border rounded-t-lg">
          <FaFacebook size={20} /> Facebook
        </a>
        <a href="#" className="p-4 flex items-center gap-3 border-x">
          <FaTwitter size={20} /> Twitter
        </a>
        <a href="#" className="p-4 flex items-center gap-3 border rounded-b-lg">
          <FaInstagram size={20} /> Instagram
        </a>
      </div>

      {/* q zone */}
      <div className="space-y-3 bg-[#F3F3F3] p-3 rounded-lg">
        <h2 className="text-2xl font-semibold">Q zone</h2>
        <div className="space-y-5">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
