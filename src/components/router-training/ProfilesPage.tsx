import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      <div>
        <h1>Profiles Page</h1>
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "text-primary-700" : "";
            }}
          >
            Profile {profile}
          </NavLink>
        ))}
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilesPage;
