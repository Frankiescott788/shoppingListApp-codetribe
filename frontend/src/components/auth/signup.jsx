import { Button, Input, Spinner } from "@nextui-org/react";
import useUserInfo from "../../hooks/useSignuser";
import { Toaster } from "react-hot-toast";

const Signup = () => {

  const { sign_up, setEmail, setPassword, setUsername, isLoading } = useUserInfo();
  
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Create free account
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            You can create a free Celebration account in 2 minutes
          </p>
        </div>
        <Toaster />
        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md border-2">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form action="#" method="POST">
                <div className="space-y-5">
                  <div>
                    <label
                     
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Username
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <Input type="text" placeholder="e.g frankie" onChange={e => setUsername(e.target.value)}/>
                    </div>
                  </div>

                  <div>
                    <label
                      
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>

                      <Input type="text" placeholder="e.g frankie@gmail.com" onChange={e => setEmail(e.target.value)}/>
                    </div>
                  </div>

                  <div>
                    <label
                     
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <Input type="password" placeholder="password here..." onChange={e => setPassword(e.target.value)}/>
                  </div>

                 

                  <div className="text-center ">
                    { !isLoading && <Button className="px-[10rem] bg-[#ffafcc] text-white shadowed-btn" onClick={sign_up}>Sign up</Button> }
                    { isLoading && <Button className="px-[10rem] bg-[#ffafcc] text-white shadowed-btn" onClick={sign_up}><Spinner size="sm" /></Button> }
                    
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Already have an account?{" "}
                      <a
                        href="#"
                        title=""
                        className="font-medium text-[#ffafee]"
                      >
                        Login here
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
