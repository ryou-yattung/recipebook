import Buttom from "../../Buttom";

const LoginButtom = ({ title1, link1, title2, link2, height }) => {
  return (
    <div className={`${height}`}>
      <Buttom
        title={title1}
        link={link1}
        bgcolor="bg-green"
        fontcolor="text-white"
      />
      <Buttom
        title={title2}
        link={link2}
        bgcolor="bg-white"
        fontcolor="text-fontcolor"
      />
    </div>
  );
};

export default LoginButtom;
