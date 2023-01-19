import Buttom from "../../Buttom";

const LoginButtom = () => {
  return (
    <div className="absolute bottom-24 right-0 left-0 m-auto">
      <Buttom
        title="新規会員登録はこちら"
        link="/login"
        bgcolor="bg-green"
        fontcolor="text-white"
      />
      <Buttom
        title="ログインする"
        link="/account"
        bgcolor="bg-white"
        fontcolor="text-fontcolor"
      />
    </div>
  );
};

export default LoginButtom;
