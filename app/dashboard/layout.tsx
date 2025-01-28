import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="h-full flex ">
        <div className="sticky left-0 overflow-y-hidden border-r">
          <Sidebar />
        </div>
        <div className="w-full  p-6 overflow-auto  "> {children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
