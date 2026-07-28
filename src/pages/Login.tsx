import LoginForm from "../components/form/LoginForm";

const Login = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left Section */}
      <section className="bg-[#856DF3] flex flex-col items-center justify-center px-6 py-12 md:px-10 lg:px-12 xl:px-16">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3  lg:mb-20 mb-14">
          <img
            src="./src/assets/Ship_Now_Logo.png"
            alt="Ship Now Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />

          <h2 className="text-white font-black italic uppercase text-3xl md:text-4xl">
            ShipNow
          </h2>
        </div>

        {/* Images */} {/* h-8 w-7 */}
        <div className="relative w-fit">
          <img
            src="./src/assets/images/Ship_Now_Image_1.jpg"
            alt="Ship Now"
            className="
            w-[243px]
            h-[229px]
            md:w-[410px]
            md:h-[386px]
            rounded-2xl
            "
          />

          <img
            src="./src/assets/images/Ship_Now_Image_2.jpg"
            alt="Ship Now"
            className="
            absolute
            -top-9
            -right-8
            w-[105px]
            h-[135px]
            md:w-[178px] 
            md:h-[218px]
            rounded-2xl
            shadow-2xl
            "
          />
        </div>

        {/* Text */}
        <div className="mt-12 text-center max-w-md">
          <h1 className="text-white font-bold text-3xl md:text-4xl xl:text-[42px]">
            Welcome To ShipNow
          </h1>

          <p className="text-white/80 mt-4 text-sm md:text-base lg:text-lg">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </section>

      {/* Right Section */}

      <section
        className="
        flex
        items-center
        justify-center
        bg-white
        px-6
        py-12
        md:px-10
        lg:px-8
        xl:px-16
        "
      >
        <div className="w-full max-w-[420px]">
          <img
            src="./src/assets/Ship_Now_Logo_2.png"
            alt="logo"
            className="mx-auto h-10 w-10"
          />

          <h2 className="text-center mt-8 text-3xl md:text-4xl font-semibold">
            Welcome Back
          </h2>

          <p className="text-center text-[#757575] mt-4 mb-10 text-sm md:text-base">
            Log in to continue managing your logistics with ShipNow
          </p>

          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;