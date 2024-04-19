import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

type City = {
	name: string;
	code: string;
}

export const PagePrimeReact = () => {
	const [selectedCity, setSelectedCity] = useState<City>({} as City);
	const cities = [
		{ name: "New York", code: "NY" },
		{ name: "Rome", code: "RM" },
		{ name: "London", code: "LDN" },
		{ name: "Istanbul", code: "IST" },
		{ name: "Paris", code: "PRS" },
		{ name: "Berlin", code: "BE" },
	];

	const handleSelectedCity = (e: DropdownChangeEvent) => {
		const value = e.value;
		setSelectedCity(value);
	};
	return (
		<>
			<p>
				<a className="underline" href="https://primereact.org">
					Prime React
				</a>
			</p>
			<h2>Buttons</h2>
			<Button label="Check" icon="pi pi-check" />
			<h2>Dropdowns</h2>
			<div className="card flex justify-content-center">
				<Dropdown
					value={selectedCity}
					onChange={(e) => handleSelectedCity(e)}
					options={cities}
					optionLabel="name"
					placeholder="Select a City"
					className="mt-6 w-[20rem] md:w-14rem text-xs"
				/>
			</div>
			{selectedCity.name && <p className="mt-3">You selected: {selectedCity.name} ({selectedCity.code})</p>}
		</>
	);
};
