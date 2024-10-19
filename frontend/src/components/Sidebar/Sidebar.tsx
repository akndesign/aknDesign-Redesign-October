import { Burger } from '../Burger/Burger';
import { Pacman } from '../Pacman/Pacman';
import './Sidebar.scss';
const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <nav className="navbar">
                <Burger />
                <Pacman />
            </nav>
        </aside>
    );
}

export default Sidebar;