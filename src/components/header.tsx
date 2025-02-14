import nlwUniteIcon from "../assents/nlw-unite-icon.svg"
import { NavLink } from "./nav-link"

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUniteIcon} />

            <nav className="flex items-center gap-5 py-2">
                <NavLink title="eventos">Eventos</NavLink>
                <NavLink>Participantes</NavLink>
            </nav>
        </div>
    )
}