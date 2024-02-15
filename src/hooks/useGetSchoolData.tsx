import { useState, useEffect } from "react";

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

function addSeenProperty(schoolList: any[]) {
    const schoolsAddASeenProperty = schoolList.map((school: any) => {
        return { ...school, seen: false };
    });
    return schoolsAddASeenProperty;
}

export default function useGetSchoolData() {
    const [schoolList, setSchoolList] = useState<any[]>([]);
    const [currentSchoolList, setCurrentSchoolList] = useState<any[]>([]);

    
    useEffect(() => {
        combineData().then(data => { 
            setSchoolList(data); // Update the school list using the fetched data
            // add a seen property to each school
            const schoolsWithSeenProperty = addSeenProperty(data);
            setCurrentSchoolList(schoolsWithSeenProperty.slice(0, 10)) // Set the current school list to the first 10 schools in the list
        });
    }, []);

    return { schoolList, setSchoolList, currentSchoolList, setCurrentSchoolList };
}