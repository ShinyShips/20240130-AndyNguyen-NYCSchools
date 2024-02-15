import { useState } from "react";
import useGetSchoolData from "@/hooks/useGetSchoolData";

import SchoolCard from "./SchoolCard";


export default function SchoolList() {
    const { schoolList, currentSchoolList, setCurrentSchoolList } = useGetSchoolData();
    const [count, setCount] = useState(10);




    return (
        <>
            <div className="grid grid-cols-1 m-8 gap-4 md:grid-cols-2">
                {currentSchoolList.map((school: any) => (
                    <SchoolCard key={school.dbn} school={school} setCurrentSchoolList={setCurrentSchoolList}/>
                ))}
            </div>
            <button
                type="button"
                onClick={() => {
                    const newSchools = schoolList.slice(count, count + 10);
                    setCurrentSchoolList((prevSchoolList: any) => [...prevSchoolList, ...newSchools]);
                    setCount(count + 10);
                }}
                className="bg-blue-900 mb-8 font-semibold text-white grid p-2 rounded w-full hover:bg-blue-900/90 transition-colors duration-300 ease-in-out max-w-96"
            >
                Load More
            </button>
        </>
    );
}