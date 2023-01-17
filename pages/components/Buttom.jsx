import Link from "next/link";

const Buttom = ({ title, bgcolor }) => {
  return (
    <div className="w-[300px] my-5 py-3 m-auto bg-green text-white rounded-full">
      <Link href="/">{title}</Link>
    </div>
  );
};

export default Buttom;
