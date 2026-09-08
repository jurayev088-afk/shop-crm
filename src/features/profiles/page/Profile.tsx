import ProfileChangePassword from "../components/layout/ProfileChangePassword";
import ProfileDesign from "../components/layout/ProfileDesign";
import ProfileUpdate from "../components/layout/ProfileUpdate";

export default function Profile() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr] gap-5">
        <div className="flex flex-col gap-5">
          <ProfileDesign />
          <ProfileChangePassword />
        </div>
        <ProfileUpdate />
      </div>
    </div>
  );
}
