import Image from "next/image";

const Separator = () => {
  return (
    <div className="hidden sm:flex w-[400px] items-center gap-2">
      <div className="border-b-[1px] border-solid w-full border-gray-600"></div>
      <Image
        src="/assets/hero/coffee-beans.svg"
        alt="coffee beans"
        width={40}
        height={40}
      />
      <div className="border-b-[1px] w-full border-gray-600"></div>
    </div>
  );
};

export default Separator;
