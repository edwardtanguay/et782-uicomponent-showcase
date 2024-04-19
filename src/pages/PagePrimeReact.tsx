import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

export const PagePrimeReact = () => {
	return (
		<>
			<p>
				<a className="underline" href="https://primereact.org">
					Prime React
				</a>
			</p>
			<h2>Buttons</h2>
			<Button label="Check" icon="pi pi-check" />
		</>
	);
};
