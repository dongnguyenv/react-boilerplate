import { Link, Outlet } from 'react-router-dom';
import globalRoutes from '../../configurations/routesConfig';
import './PageLayout.scss';

const PageLayout = () => {
    return (
        <div className="layout-wrapper">
            <header className="page-header">
                <div>
                    <ul>
                        <li>Research React</li>
                    </ul>
                </div>
            </header>
            <div className="layout-container">
                <div className="side-menu">
                    <nav>
                        <ul>
                            {globalRoutes.map((route: any, i: number) => (
                                <li key={i}>
                                    <Link to={route.path}>{route.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="page-container">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PageLayout;
