import Main from "./Main";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  )
}
