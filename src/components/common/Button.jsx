import { Link } from "react-router-dom";
export default function Button({ to, labelName, isActive, onClick }) {
    return (
        <Link
            to={to}
            className={`font-base text-base
                ${isActive
                    ? "text-primary-base font-bold cursor-default"
                    : "font-base text-base bg-primary-base text-white rounded-lg px-4 py-2 hover:bg-primary-dark text-nowrap"
                }`}
            style={isActive ? { pointerEvents: "none" } : {}}
            onClick={onClick}
        >
            {labelName}
        </Link>
    );
}
