import { ButtonHTMLAttributes } from "react";

interface DormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const DormButton = ({ children, ...props }:  DormButtonProps ) => {
  return (
    <button style={{
        borderRadius: "20px",
        background: "linear-gradient(84deg, #0B2D96 13.31%, #4968C8 58.86%, #7E9BF2 89.83%, #E5ECFA 104.4%)",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.15)",
        padding: "1rem 2rem",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: "Poppins",
        outline: "none",
        border: "none",
        color: "white",
        cursor: "pointer",
        letterSpacing: "1px"
      }} {...props}>
      { children }
    </button>
  )
};

export default DormButton;