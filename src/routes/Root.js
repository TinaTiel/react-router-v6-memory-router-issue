import { Outlet } from "react-router";

const Root = () => {
    return (
        <main>
            <h1>Root Page</h1>
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default Root;