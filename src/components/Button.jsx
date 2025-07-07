import { Link } from "react-router";

const Button = ({ children, variant = "primary" }) => {
  const styleBase =
    " px-6 py-[18px] text-[15px] uppercase font-medium transition-colors hover:text-white duration-500 rounded-[8px] tracking-[1px] ";

  const variants = {
    primary: "bg-white hover:bg-peach-light  ",
    secondary: "bg-peach hover:bg-peach-light ",
  };

  return (
    <Link className={`${styleBase} ${variants[variant]}`}>{children}</Link>
  );
};

export default Button;
