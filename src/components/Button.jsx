import { Link } from "react-router";

const Button = ({ children, to, variant = "primary", className, ref }) => {
  const styleBase =
    " px-6 py-[18px] text-[15px] uppercase font-medium transition-colors hover:text-white duration-500 rounded-[8px] tracking-[1px] ";

  const variants = {
    primary: "bg-white text-dark-grey hover:bg-peach-light  ",
    secondary: "bg-peach hover:bg-peach-light ",
  };

  return (
    <Link
      to={`/${to}`}
      ref={ref}
      replace
      className={`${styleBase} ${className} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
};

export default Button;
