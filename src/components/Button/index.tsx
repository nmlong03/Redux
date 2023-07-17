
type Props = {
  type?: "primary" | "danger";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button =( {type, icon, children, onClick}: Props) => {
  return (
    <button onClick={onClick} className={`p-2 border border-gray-400 rounded
                       ${type == "primary" && "bg-blue-500 text-while"}
                       ${type == "danger" && "bg-red-500 text-white"} 
    `}>
      {icon && icon}
      {children}</button>
  )
}

export default Button