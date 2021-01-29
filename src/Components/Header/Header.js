//import components
import Username from "../Username/Username";

//import styling
import "./Header.scss";

export default function Header() {

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__title">hvac.ai</div>
                <Username />
            </div>
        </header>
    )
}