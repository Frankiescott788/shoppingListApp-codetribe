import {
  DropdownMenu,
  DropdownTrigger,
  Input,
  User,
  DropdownItem,
  Dropdown,
  Button,
  Image,
} from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserInfo from "../../hooks/useSignuser";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import termsimg from "../../assets/Pictures/terms.svg";

const Dashboard = () => {
  const { get_current_user, information } = useUserInfo();
  useEffect(() => {
    get_current_user();
  }, []);
  const navigate = useNavigate();

  const [cookies, setCookies, removeCookie] = useCookies(["auth_token"]);

  const termscontainer = useRef();

  const showTerms = () => {
    termscontainer.current.classList.toggle("show-terms")
  }

  return (
    <section>
      <aside className="w-[15rem] border-e-2  fixed bottom-0 left-0 top-0 hidden lg:block">
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

          <div className="text-2xl mt-1">BasketBrain</div>
        </div>
        <ul className="dash-list">
          <li className="flex gap-2 py-2 px-3 bg-[#ffcfee] border-s-5 border-[#ffcfee] mx-2 rounded-md">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
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
            <div className="text-white">Dashboard</div>
          </li>
        </ul>
        <div className="absolute bottom-0 left-4 mb-3">
          <Image src={termsimg} className="mb-2" />
          <Button className="bg-[#ffafcc] text-white shadowed-btn" onClick={showTerms}>
            Terms and conditions
          </Button>
        </div>
      </aside>

      <div className="navbar fixed top-0 right-0 left-0 lg:ms-[15dvw] ps-2 pe-[1dvw]">
        <div className=" p-3 my-2 flex justify-between border-b">
          <div className="w-[15dvw] ">
            <p className="mt-2 text-default-400">Dashboard</p>
            <Button
              className="bg-[#ffafcc] text-white px-3 mt-1 lg:hidden block"
              onClick={() => navigate("/dashboard/create")}
              size="sm"
            >
              New
            </Button>
          </div>
          <div className=" lg:hidden">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725452902~exp=1725456502~hmac=f92e0b9404877c62e6ab01098297803d6f8ffbfbbcb4a3e438167ae709ba3a7f&w=826",
                  }}
                  className="transition-transform"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">{information[0]?.email}</p>
                </DropdownItem>

                <DropdownItem key="logout" className="text-center">
                  <Button
                    className="px-[5rem] bg-[#ffafcc] shadowed-btn text-white"
                    onClick={() => {
                      removeCookie("auth_token", { path: "/" });
                    }}
                  >
                    {" "}
                    Sign out{" "}
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="hidden lg:block">
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
                  <Button
                    className="px-[5rem] bg-[#ffafcc] shadowed-btn text-white"
                    onClick={() => {
                      removeCookie("auth_token", { path: "/" });
                    }}
                  >
                    {" "}
                    Sign out{" "}
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 mb-[20rem] z-50   h-[5rem] left-0 right-0 p-3 terms" ref={termscontainer}>
        <div className="bg-white p-4 ms-[15rem] me-10 border rounded-md">
          <div className="flex justify-between">
          <p className="text-2xl">
            Terms and Conditions for{" "}
            <span className="text-[#ffafcc]">BasketBrain</span>
          </p>
          <Button className="bg-[#ffafcc] text-white px-[5rem]" onClick={showTerms}>Close</Button>
          </div>
          
          <p>1 . Account Creation</p>
          <p className="text-default-400 text-sm mb-3">
            When you sign up, you agree to provide accurate, current, and
            complete information about yourself. You are responsible for
            maintaining the confidentiality of your account information,
            including your password, and for all activities that occur under
            your account.
          </p>
          <p>2 . Use of the App</p>
          <p className="text-default-400 text-sm mb-3">
            The app is provided solely for personal, non-commercial use. You may
            use the app to create and manage shopping lists, but you are
            prohibited from using it for illegal or unauthorized activities.
          </p>
          <p>3 . Privacy and Data</p>
          <p className="text-default-400 text-sm mb-3">
            Your privacy is important to us. By using the app, you agree to our
            Privacy Policy, which outlines how your personal data is collected,
            stored, and used. The app may collect information such as your
            shopping preferences and account details to improve the service.
          </p>
          <p>5 . Governing Law</p>
          <p className="text-default-400 text-sm mb-3">
            These terms are governed by the laws of the jurisdiction in which
            the app is operated. Any disputes arising from these terms will be
            subject to the exclusive jurisdiction of the courts in that region.
          </p>
        </div>
      </div>
      <div className="lg:ms-[13dvw] mt-[10dvh] me-5">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
