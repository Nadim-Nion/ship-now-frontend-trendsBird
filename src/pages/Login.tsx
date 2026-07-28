import LoginForm from "../components/form/LoginForm";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Left Column - Ship Now Introduction */}
      <div className="w-full h-full bg-[#856DF3]">
        {/* Image and Text Container */}
        <div className="flex items-center justify-center mt-24 mb-20">
          <img
            src="./src/assets/Ship_Now_Logo.png"
            alt="Ship Now Logo"
            className="h-8 w-7"
          />
          <p className="text-center mt-4 italic font-black text-3xl text-white uppercase">
            ShipNow
          </p>
        </div>

        {/* Double Images Container */}
        <div className="relative flex items-center justify-center">
          <img
            src="./src/assets/images/Ship_Now_Image_1.jpg"
            alt="Ship Now Image 1"
            className="w-102.5 h-96.5 mt-4 rounded-lg"
          />

          {/* Child Image Container */}
          <div>
            <img
              src="./src/assets/images/Ship_Now_Image_2.jpg"
              alt="Ship Now Image 2"
              className="w-[178.46px] h-57 mt-4 -top-15 left-110 absolute rounded-lg"
            />
          </div>
        </div>

        {/* Welcome To Ship Now */}
        <div className="text-center my-20">
          <h2 className="text-4xl text-white font-extrabold">
            Welcome To ShipNow
          </h2>
          <p className="text-white mt-2">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-3/4 h-1/12 mx-auto my-20">
        {/* Text Container */}
        <div className="m-10">
          <img
            src="./src/assets/Ship_Now_Logo_2.png"
            alt="Ship Now 2nd Logo"
            className="mx-auto mt-20 w-10 h-10"
          />
          <h2 className="text-center mt-8 text-3xl font-bold">Welcome Back</h2>
          <p className="text-center mt-4 text-[#757575] text-sm mb-8">
            Log in to continue managing your logistics with ShipNow
          </p>
        </div>
        {/* Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
