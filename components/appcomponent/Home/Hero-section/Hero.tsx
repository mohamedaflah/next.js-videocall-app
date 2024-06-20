export const Hero = () => {
  return (
    <div className="w-full h-80 bg-cover bg-center  rounded-2xl bg-[url('/images/hero-background.png')] px-10 py-10 text-white flex flex-col justify-between">
      <span className="h-10 px-4 flex items-center  font-normal bg-white/10 justify-center w-64 rounded-md">
        Upcoming meeting at: 2:30 PM
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-2 ">
          <div>
            <h1 className="text-7xl font-bold">12:05</h1>
          </div>
          <span className="mb-2 font-medium">PM</span>
        </div>
        <div className="px-2">
          <span className="text-fontHighlite text-[18px] tracking-wider">
            Friday, 29 March 2024
          </span>
        </div>
      </div>
    </div>
  );
};
