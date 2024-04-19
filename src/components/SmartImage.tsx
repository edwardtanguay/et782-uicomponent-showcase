interface IProps {
	id: number;
	name?: string;
}

export const SmartImage = ({ id, name = "unknown" }: IProps) => {
	return (
		<>
			<div className="mb-4">
				<img
					src={`images/employee_${id}.jpg`}
					className={`${name==='unknown' ? 'rounded' : 'rounded-t-lg'} w-[10rem]`}
				/>
				{name !== "unknown" && (
					<p className="bg-slate-600 text-white p-1 w-[10rem] rounded-b-lg">
						{name}
					</p>
				)}
			</div>
		</>
	);
};
