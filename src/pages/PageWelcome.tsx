import { SmartImage } from "../components/SmartImage";

export const PageWelcome = () => {
	return (
		<>
			<p className="mb-3">This is the welcome page.</p>

			<section className="flex flex-col md:flex-row md:gap-3 md:flex-wrap">
				<SmartImage id={1} attending={true} name="Alice Wonderworld" />
				<SmartImage id={2} attending={true} name="Jenny Ashwald" />
				<SmartImage id={3} attending={true} name="Molly Anderson" />
				<SmartImage id={4} attending={true} name="Jolie Rangers" />
				<SmartImage id={5} attending={true} name="Horace Ankers" />
				<SmartImage id={6} attending={true} name="Jack Dangar" />
				<SmartImage id={7} attending={true} name="Ben Quander" />
				<SmartImage id={8} attending={true} name="Ashley Nonteen" />
				<SmartImage id={9} attending={true} name="Grace Gendar" />
			</section>
		</>
	);
};
