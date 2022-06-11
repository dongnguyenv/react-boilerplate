import ResetPassword from '../../features/auth/changePassword/ResetPassword';
import ForgotPassword from '../../features/auth/forgotPassword/ForgotPassword';
import Login from '../../features/auth/login/Login';
import Register from '../../features/auth/register/Register';
import Counter from '../../features/counter/Counter';
import Posts from '../../features/posts/Posts';
import Todos from '../../features/todos/Todos';

const globalRoutes = [
    {
        path: 'todos',
        element: Todos,
        label: 'Todo list',
    },
    {
        path: 'posts',
        element: Posts,
        label: 'Posts',
    },
    {
        path: 'counter',
        element: Counter,
        label: 'Todo list',
    },
    {
        path: 'login',
        element: Login,
        label: 'Login',
    },
    {
        path: 'signup',
        element: Register,
        label: 'Signup',
    },
    {
        path: 'forgot-password',
        element: ForgotPassword,
        label: 'Forgot Password',
    },
    {
        path: 'reset-password',
        element: ResetPassword,
        label: 'Reset Password',
    },
];

export default globalRoutes;
