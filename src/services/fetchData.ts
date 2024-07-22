import { EmployeeType } from '../types';

const fetchData = async (url: string): Promise<EmployeeType[]> => {
  const response = await fetch(url);
  const responseJson: EmployeeType[] = await response.json();
  return responseJson;
};

export default fetchData;
