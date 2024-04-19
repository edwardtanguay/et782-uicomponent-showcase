interface IProps {
	id: number;
}

export const SmartImage = (props: IProps) => {
	return <img src={`images/employee_${props.id}.jpg`} className="rounded w-[20rem]" />;
};
