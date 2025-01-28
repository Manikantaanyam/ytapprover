import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full  w-56 p-6 font-medium border-r dark:border-r-white/50">
      <div className="flex flex-col gap-4 text-xm ">
        <Link href={"/dashboard/creator"}>
          <h1 className="cursor-pointer w-full hover:bg-gray-600 p-2">
            Creator
          </h1>
        </Link>
        <Link href={"/dashboard/editor"}>
          <h1 className="cursor-pointer w-full hover:bg-gray-600 p-2">
            Editor
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
