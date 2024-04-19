interface IProps {
	id: number;
	name?: string;
	attending?: boolean;
}

export const SmartImage = ({ id, name = "unknown", attending = false }: IProps) => {
	return (
		<div>
			<div className={`mb-4 ${!attending && 'opacity-50'}`}>
				<img
					src={`images/employee_${id}.jpg`}
					className={`w-full md:w-[10rem] ${name==='unknown' ? 'rounded' : 'rounded-t-lg'}`}
				/>
				{name !== "unknown" && (
					<p className="bg-slate-600 text-white p-1 w-full md:w-[10rem] rounded-b-lg">
						{name}
					</p>
				)}
			</div>
		</div>
	);
};
