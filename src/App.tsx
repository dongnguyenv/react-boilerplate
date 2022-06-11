import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import globalRoutes from './common/configurations/routesConfig';
import PageLayout from './common/components/pageLayout/PageLayout';
import Login from './features/auth/login/Login';
import Register from './features/auth/register/Register';
import ForgotPassword from './features/auth/forgotPassword/ForgotPassword';
import ResetPassword from './features/auth/changePassword/ResetPassword';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        {globalRoutes.map((route, i) => (
                            <Route key={i} path={route.path} element={<route.element />} />
                        ))}
                    </Route>
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
