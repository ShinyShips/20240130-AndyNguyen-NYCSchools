/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

import SchoolCard from "./SchoolCard";



// fetch school list from City of New York Open Data API - https://data.cityofnewyork.us/resource/s3k6-pzi2.json
function fetchSchoolList() {
    return fetch('https://data.cityofnewyork.us/resource/s3k6-pzi2.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => `Error fetching data ${error}`)
}

// fetch 2012 SAT Results from City of New York Open Data API - https://data.cityofnewyork.us/resource/f9bf-2cp4.json
function fetchSATResults() {
    return fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => `Error fetching data ${error}`)
}

// combine school list and SAT results
function combineData() {
    return fetchSchoolList().then(schoolList => {
        return fetchSATResults().then(satResults => {
            return schoolList.map((school: any) => {
                const satResult = satResults.find((result: any) => result.dbn === school.dbn);
                return { ...school, ...satResult };
            });
        });
    });
}

export default function SchoolList() {
    const [schoolList, setSchoolList] = useState<any[]>([]);
    const [currentSchoolList, setCurrentSchoolList] = useState<any[]>([]);
    const [count, setCount] = useState(10);

    useEffect(() => {
        combineData().then(data => { 
            setSchoolList(data); // Update the school list using the fetched data
            setCurrentSchoolList(data.slice(0, 10)) // Set the current school list to the first 10 schools in the list
        });
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 m-8 gap-4 md:grid-cols-2">
                {currentSchoolList.map((school: any) => (
                    <SchoolCard key={school.dbn} {...school} />
                ))}
            </div>
            <button
                type="button"
                onClick={() => {
                    const newSchools = schoolList.slice(count, count + 10);
                    setCurrentSchoolList(prevSchoolList => [...prevSchoolList, ...newSchools]);
                    setCount(count + 10);
                }}
                className="bg-blue-900 mb-8 font-semibold text-white grid p-2 rounded w-full hover:bg-blue-900/90 transition-colors duration-300 ease-in-out max-w-96"
            >
                Load More
            </button>
        </>
    );
}