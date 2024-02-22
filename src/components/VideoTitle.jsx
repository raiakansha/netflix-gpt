/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 w-screen aspect-video absolute text-white">
      <h1 className="text-6xl font-bold py-2">{title}</h1>
      <p className="text-xl py-4 w-1/4 font-medium">{overview}</p>
      <div className="flex flex-row gap-4">
        <button className="px-8 py-3 flex items-center gap-4 bg-white rounded-md text-black font-bold hover:bg-opacity-60">
          <FaPlay size={20} />
          Play
        </button>
        <button className="px-10 py-3 flex items-center gap-3 bg-gray-400 bg-opacity-45 text-white font-bold rounded-md hover:bg-opacity-60">
          <IoInformationCircleOutline size={28} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
