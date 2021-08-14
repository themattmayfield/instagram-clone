import { IGData } from "@/utils/index";
import { IoEllipsisHorizontal, IoPaperPlaneOutline } from "react-icons/io5";
import { AiOutlineHeart, AiFillFire } from "react-icons/ai";
import { BiMessageRounded, BiBookmark } from "react-icons/bi";
import { ImHeart } from "react-icons/im";
import { BsPlusCircle } from "react-icons/bs";
const Feed = () => {
  return (
    <div className="flex-1">
      {[...IGData].map((data, index) => (
        <>
          <div key={data.id} className="pb-3">
            <Story key={data.id} data={data} />

            <img
              className="max-h-[500px] w-full object-cover "
              src={`/Posts/${data.postUrl}.jpg`}
            />
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center space-x-3 ">
                <AiOutlineHeart className="text-white text-xl" />
                <BiMessageRounded className="text-white text-xl" />
                <IoPaperPlaneOutline className="text-white text-lg" />
              </div>
              <BiBookmark className="text-white text-lg" />
            </div>

            <Likes id={data.id} />
            <Caption name={data.name} caption={data.caption} />
            <Comments comment={data.comment} />
            <AddComment />
            <Posted />
          </div>
        </>
      ))}
    </div>
  );
};

export default Feed;

const Story = ({ data }) => (
  <div className="flex items-center justify-between pt-2 pb-2 px-2 ">
    <div className="flex items-center space-x-1.5">
      <img
        src={`/Headshots/${data.storyUrl}.jpg`}
        className="rounded-full w-8 h-8 object-cover ring-2 ring-red-800"
      />
      <div className="text-white text-[10px]">
        <p className="font-bold">{data.name}</p>
        <p>{data.location}</p>
      </div>
    </div>
    <IoEllipsisHorizontal className="text-white" />
  </div>
);

const Likes = ({ id }) => (
  <div className="flex items-center space-x-9 pb-1">
    <div className="flex items-center px-3 relative">
      {IGData.map(
        (data, i) =>
          data.id != id &&
          i < 4 && (
            <img
              src={`/Headshots/${data.storyUrl}.jpg`}
              className={`rounded-full w-4 h-4 object-cover absolute z-20 ${
                i == 2 && "left-6 z-10"
              } ${i == 3 && "left-9 z-0"}`}
            />
          )
      )}
    </div>
    <p className="text-white text-xs">
      Liked by <span className="font-bold">papacodes</span> and{" "}
      <span className="font-bold">
        {Math.floor(Math.random() * (100 - 1) + 1)} others
      </span>
    </p>
  </div>
);

const Caption = ({ name, caption }) => (
  <div className="flex items-centered text-white px-3 text-xs pb-1">
    <p>
      <span className="font-bold">{name} </span>
      {caption}
    </p>
  </div>
);

const Comments = ({ comment }) => (
  <div className="flex flex-col space-y-0.5 px-3 pb-3">
    <p className="text-gray-600 text-[10px]">
      View all {Math.floor(Math.random() * (10 - 1) + 1)} comments
    </p>
    <div className="flex items-center justify-between">
      <p className="text-xs text-white">
        <span className="font-bold">papacodes </span> {comment}
      </p>
      <AiOutlineHeart className="text-xs text-white" />
    </div>
  </div>
);

const AddComment = () => (
  <div className="px-3 flex items-center justify-between pb-1.5">
    <div className="flex items-center space-x-3">
      <img
        src={`/Headshots/me.png`}
        className="rounded-full w-6 h-6 object-cover "
      />
      <p className="text-gray-600 text-[10px]">Add comment...</p>
    </div>
    <div className="flex items-center space-x-3">
      <ImHeart className="text-red-600 text-xs" />
      <AiFillFire className="text-[#db8340] text-xs" />
      <BsPlusCircle className="text-gray-500 text-xs" />
    </div>
  </div>
);

const Posted = () => (
  <p className="text-[10px] text-gray-600 px-3">
    {Math.floor(Math.random() * (5 - 1) + 1)} hours ago
  </p>
);
