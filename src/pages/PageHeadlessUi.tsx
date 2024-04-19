import { Switch } from "@headlessui/react";
import { useState } from "react";

export const PageHeadlessUi = () => {
	const [sendNewsletter, setSendNewsletter] = useState(false);

	return (
		<>
			<p>
				<a className="underline" href="https://headlessui.com">
					Headleass UI site
				</a>
			</p>
			<h2>Toggle Switches</h2>
			<Switch
				checked={sendNewsletter}
				onChange={setSendNewsletter}
				className={`${
					sendNewsletter ? "bg-green-800" : "bg-gray-700"
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						sendNewsletter ? "translate-x-6" : "translate-x-1"
					} inline-block h-4 w-4 transform rounded-full bg-white transition`}
				/>
			</Switch>
			<div className="mt-3">
				{sendNewsletter ? (
					<p>We will send you the newsletter.</p>
				) : (
					<p>You will not receive the newsletter.</p>
				)}
			</div>
		</>
	);
};
