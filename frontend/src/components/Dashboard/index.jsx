import {
  DropdownMenu,
  DropdownTrigger,
  Input,
  User,
  DropdownItem,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import useUserInfo from "../../hooks/useSignuser";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const { get_current_user, information } = useUserInfo();
  useEffect(() => {
    get_current_user()
  }, []);

  const [cookies, setCookies, removeCookie ] = useCookies(['auth_token']);
  return (
    <section>
      <aside className="w-[12dvw] border-e-2 h-[95dvh] fixed bottom-0 left-0 top-0">
        <div className="flex gap-1 my-5 px-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={32}
              height={32}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="text-2xl mt-1">
            BasketBrain
          </div>
        </div>
        <ul className="dash-list">
          <li className="flex gap-2 py-2 px-3 bg-[#ffcfee] border-s-5 border-[#ffcfee] ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#000000"
                fill="none"
              >
                <path
                  d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div>Dashboard</div>
          </li>


        </ul>
      </aside>

      <div className="navbar fixed top-0 right-0 left-0 ms-[12dvw] ps-2 pe-[1dvw]">
        <div className="bg-gray-200 p-3 my-2 rounded-md flex justify-between">
          <div className="w-[15dvw] ">
            <Input type="search" placeholder="search..." />
          </div>
          <div>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725452902~exp=1725456502~hmac=f92e0b9404877c62e6ab01098297803d6f8ffbfbbcb4a3e438167ae709ba3a7f&w=826",
                  }}
                  className="transition-transform"
                  description={information[0]?.email}
                  name={information[0]?.username}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">{information[0]?.email}</p>
                </DropdownItem>
            
                <DropdownItem key="logout" className="text-center">
                  <Button className="px-[5rem] bg-[#ffafcc] shadowed-btn text-white" onClick={() => {
                    removeCookie('auth_token', {path : '/'});
                  }}> Sign out </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="ms-[13dvw] mt-[10dvh] me-5">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
