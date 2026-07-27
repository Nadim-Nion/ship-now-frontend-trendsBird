const Login = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Left Column - Ship Now Introduction */}
      <div className="w-full h-full border-2 border-orange-500 bg-[#8c8b94]">
        {/* Image and Text Container */}
        <div className="flex items-center justify-center">
          <img src="./src/assets/Ship_Now_Logo.png" alt="Ship Now Logo" className="h-6 w-5" />
          <p className="text-white text-center mt-4">Ship Now</p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full h-full border-2 border-red-500">Login Form</div>
    </div>
  );
};

export default Login;
