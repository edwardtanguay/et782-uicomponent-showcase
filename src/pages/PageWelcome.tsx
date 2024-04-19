import { SmartImage } from "../components/SmartImage";

export const PageWelcome = () => {
	return (
		<>
			<p className="mb-3">This is the welcome page.</p>

			<SmartImage id={1} name="Alice Wonderworld" />
			<SmartImage id={2} name="Jenny Ashwald" />
			<SmartImage id={3} />

		</>
	);
};
