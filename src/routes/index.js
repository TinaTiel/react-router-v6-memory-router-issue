import { redirect } from "react-router";
import Root from "./Root";
import IgnoredPage from './IgnoredPage';
import RedirectedPage from './RedirectedPage';

const someCondition = () => true; // could be anything, this is a contrived example

const protectedRouteLoader = () => {
    if(someCondition()) {
        console.log('redirecting');
        return redirect('/redirected');
    } else {
        console.log('should not be logged');
        return null;
    }
}

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <IgnoredPage />,
                loader: protectedRouteLoader
            },
            {
                path: 'redirected',
                element: <RedirectedPage />
            }
        ]
    }
]

export default routes;