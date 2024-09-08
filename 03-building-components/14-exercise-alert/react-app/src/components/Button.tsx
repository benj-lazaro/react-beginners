interface Props {
  children: string;
  //   color?: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
