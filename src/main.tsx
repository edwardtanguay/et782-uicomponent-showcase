import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageHeadlessUi } from "./pages/PageHeadlessUi.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PagePrimeReact } from "./pages/PagePrimeReact.tsx";
import { PrimeReactProvider } from "primereact/api";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "primereact",
				element: (
					<PrimeReactProvider>
						<PagePrimeReact />
					</PrimeReactProvider>
				),
			},
			{
				path: "headlessui",
				element: <PageHeadlessUi />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
