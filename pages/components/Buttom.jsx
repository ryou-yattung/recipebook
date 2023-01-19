import Link from "next/link";
import { title } from "process";

const Buttom = ({ title, link, bgcolor, fontcolor }) => {
  return (
    <div
      className={`w-[300px] my-5 py-3 m-auto ${bgcolor} ${fontcolor} text-center rounded-xl shadow-md`}
    >
      <Link href={link}>{title}</Link>
    </div>
  );
};

export default Buttom;
