import Image from "next/image";

const Badge = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles} relative`}>
      <Image
        className="object-contain rounded-full"
        fill
        src="/assets/shared/UCC-logo.png"
        alt="logo"
      />
    </div>
  );
};

export default Badge;
