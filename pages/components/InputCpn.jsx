import Letter from "./InputLetter";
import Password from "./InputPassword";

const InputCpn = ({ placeholder, logo }) => {
  return (
    <div className="w-full h-[47px] flex items-center mb-5 px-5 bg-white rounded-xl shadow-md">
      {logo ? <Letter className="mr-3" /> : <Password className="mr-3" />}

      <input className="outline-none" type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputCpn;
