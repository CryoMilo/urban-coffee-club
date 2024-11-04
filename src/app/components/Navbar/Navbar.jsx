const Navbar = () => {
  return (
    <div className="bg-transparent absolute my-3 top-0 left-0 z-40 w-full">
      <div className="container mx-auto flex justify-between w-full items-center">
        <div className="select-none invisible md:visible text-white font-primary uppercase font-bold text-accent text-3xl">
          Urban.
        </div>
        <div className="text-white">Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
