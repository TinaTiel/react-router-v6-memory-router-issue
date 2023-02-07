import { screen, render } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";

test('when rendered, the redirect page is shown instead of the ignored page', async () => {

    // When rendered at the default route (/)
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />)

    // We expect the root to always be rendered
    const rootHeading = await screen.findByRole('heading', {name: 'Root Page'});
    // THE TEST FAILS HERE UNEXPECTEDLY, BUT WORKS FINE IN THE WILD. IT'S RENDERING THE EMPTY ROOT DIV.
    expect(rootHeading).toBeInTheDocument(); 

    // We expect the redirect page to be rendered at the outlet
    const redirectedPage = screen.getByRole('heading', {name: 'Redirected Page'});
    expect(redirectedPage).toBeInTheDocument();

    // We don't expect the ignored page to be rendered at the outlet
    const ignoredPage = screen.queryByRole('heading', {name: 'Ignored Page'});
    expect(ignoredPage).not.toBeInTheDocument();

})