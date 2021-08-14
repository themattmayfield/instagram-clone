import { HiPlus } from "react-icons/hi";
import { IGData } from "@/utils/index";

const Stories = () => {
  return (
    <ScrollableContainer>
      <Container>
        <NewStory />
        {IGData.map((data, i) => (
          <Story key={data.id} data={data} />
        ))}
      </Container>
    </ScrollableContainer>
  );
};
export default Stories;

const ScrollableContainer = ({ children }) => (
  <div className="overflow-x-scroll no-scrollbar w-full pt-2 px-4 border-b-[.01px] border-[#222423] pb-2 mb-1">
    {children}
  </div>
);

const Container = ({ children }) => (
  <div className="flex w-full space-x-3  min-w-max">{children}</div>
);

const Story = ({ data }) => (
  <div className="flex flex-col items-center space-y-1.5">
    <img
      src={`/Headshots/${data.storyUrl}.jpg`}
      className="rounded-full w-[70px] h-[70px] object-cover ring-2 ring-red-800"
    />
    <p className="text-white text-[10px]">{data.name}</p>
  </div>
);

const NewStory = () => (
  <div className="flex flex-col items-center space-y-1.5">
    <div
      style={{
        backgroundImage: "url(" + "/Headshots/me.png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-[70px] h-[70px] rounded-full bg-white relative mr-1"
    >
      <HiPlus className=" text-white bg-blue-600 absolute bottom-0 right-0 rounded-full" />
    </div>
    <p className="text-gray-300 text-[10px]">Your Story</p>
  </div>
);
