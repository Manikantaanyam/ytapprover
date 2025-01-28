import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="h-full flex">
        <div>
          <Sidebar />
        </div>
        <div className="h-[80px] p-6"> {children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
