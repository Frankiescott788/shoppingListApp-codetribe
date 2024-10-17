import {
  DropdownMenu,
  DropdownTrigger,
  Input,
  User,
  DropdownItem,
  Dropdown,
  Button
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { authenticate } from "../reducers/reducers";
import { useSelector } from "react-redux";
import useUserInfo from "../hooks/useSignuser";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [path, setPath] = useState(false);

  const paths = ['/signup', '/signin', '/dashboard', '/dashboard/home', '/dashboard/create', '/*'];

  const { authenticated } = useSelector(state => state.authSlice);
  const { user } = useSelector(state => state.userInfoSlice);
  const { get_current_user, information } = useUserInfo();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        
      } catch (error) {
        console.log(error)
      }
    })();
  })


  useEffect(() => {
    const checkPath = () => {
      setPath(paths.includes(location.pathname));
    };
    
    checkPath(); 
    get_current_user(); 

    
  }, [location.pathname]); 

                console.log(user);
  console.log(information[0]?.username)

  const [cookies, setCookies, removeCookie ] = useCookies(['auth_token']);

  return path ? null : (
    <nav>
      <div className="flex justify-between mx-5 lg:mx-10 py-4">
        <div className="logo text-2xl">BasketBrain</div>
        <div className="flex gap-5 sm-">
          <ul className="list-none hidden lg:flex gap-5 mt-3">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li>About</li>
            <li>Services</li>
          </ul>
          {authenticated ? (
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
          ) : (
            <div className="lg:flex gap-3 hidden ">
              <Button className="rounded-full px-10" onClick={() => navigate('/signin')}>Sign in</Button>
              <Button className="px-10 rounded-full bg-[#ffafcc] shadowed-btn text-white" onClick={() => navigate('/signup')}>
                Sign Up
              </Button>
            </div>
          )} 
          </div>
       
        <div className="lg:hidden">
          <Button className="bg-[white]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"black"}
              fill={"none"}
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
