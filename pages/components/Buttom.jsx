import Link from "next/link";

const Buttom = ({ title, link, bgcolor, fontcolor }) => {
  return (
    <Link href={link ?? "/"}>
      <div
        className={`w-[300px] my-5 py-3 m-auto ${bgcolor} ${fontcolor} text-center rounded-xl shadow-md`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Buttom;
