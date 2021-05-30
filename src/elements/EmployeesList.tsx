import EmployeeContainer from './EmployeeContainer';


type EmployeesProp = {
	employeesProp: {
		id: number,
		firstName: string,
		lastName: string,
		dob: string
	}[];
};

const EmployeesList = ({ employeesProp }: EmployeesProp): JSX.Element => {

	const sublists: { letter: string; employees: any[] }[] = [];

	const binarySearch = (toFind: string) => {
		let start = 0;
		let end = sublists.length - 1;

		while (start <= end) {
			let middle = Math.floor((start + end) / 2);

			if (sublists[middle].letter === toFind) {
				return sublists[middle];
			} else if (sublists[middle].letter < toFind) {
				start = middle + 1;
			} else {
				end = middle - 1;
			}
		}
		return undefined;
	};

	for (let char of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
		sublists.push({ letter: char, employees: [] });
	}

	for (let employee of employeesProp) {
		const sublist = binarySearch(employee.firstName.charAt(0));
		if (sublist !== undefined) {
			sublist.employees.push(employee);
		}
	}

	for (let sublist of sublists) {
		sublist.employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
	}

	return (
		<div className="employeesSublists">
			{sublists.map((sublist) => (
				<div key={sublist.letter}>
					<h1>{sublist.letter}</h1>
					{sublist.employees.length === 0
						? "-".repeat(10)
						: sublist.employees.map((employee) => (
                            <EmployeeContainer employee={employee}/>
						  ))}
				</div>
			))}
		</div>
	);
};

export default EmployeesList;
