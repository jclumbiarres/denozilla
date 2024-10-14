import { JSX } from "hono/jsx";
import { html } from "hono/html";
import { Header } from "./Header.tsx";
import { Home } from "./Home.tsx";

/**
 * Renders the layout component.
 * 
 * @param children - The content to be rendered inside the layout.
 * @returns The HTML markup for the layout.
 */
export const Layout = ({ children }: { children: JSX.HTMLAttributes }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@2.0.3" integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq" crossorigin="anonymous"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Ejemplo de SSR</title>
    </head>
    <body>
      ${Header()}
      <main id="root">${children}</main>
    </body>
  </html>
`;

/**
 * Renders the content component within the layout.
 * @returns The JSX element representing the content component within the layout.
 */
export const Content = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};



