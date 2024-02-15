import { MapPin, Phone, ExternalLink, Check } from 'lucide-react';

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import DrawerDialog from "./DrawerDialog"


export default function SchoolCard({ school, setCurrentSchoolList }: { school: any, setCurrentSchoolList: any }) {
    return (
        <Card>
            <CardHeader>
                <div className='flex w-full justify-between'>
                    <CardTitle className="text-left w-fit">{school?.school_name}</CardTitle>
                    {school.seen ? <Check className="flex w-6 h-6 ml-2 text-green-500"/> : null}
                </div>
                <div>
                    <div className="flex text-gray-500 pt-1">
                        <MapPin className="p-1"/>
                        <p className="text-sm mt-0.5 ml-1">{school?.primary_address_line_1}</p>
                    </div>
                    <div className="flex text-gray-500">
                        <Phone className="p-1"/>
                        <p className="text-sm mt-0.5 ml-1">{school?.phone_number}</p>
                    </div>
                    <div className="flex text-gray-500">
                        <ExternalLink className="p-1"/>
                        <a href={`https://${school?.website}`} className="text-sm mt-0.5 ml-1">{school?.website}</a>
                    </div>
                </div>
                <div className="flex w-fit gap-4 py-2">
                    <Badge className="w-fit bg-slate-100">{school?.sat_critical_reading_avg_score ? `SAT Reading: ${school?.sat_critical_reading_avg_score}` : "SAT Reading: Not Found"}</Badge>
                    <Badge className="w-fit bg-slate-100">{school?.sat_math_avg_score ? `SAT Math: ${school?.sat_math_avg_score}` : "SAT Math: Not Found"}</Badge>
                    <Badge className="w-fit bg-slate-100">{school?.sat_writing_avg_score ? `SAT Writing: ${school?.sat_writing_avg_score}` : "SAT Writing: Not Found"}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <h4 className="text-md text-left mb-2">Overview:</h4>
                <CardDescription className="text-left">{school?.overview_paragraph}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col text-left items-start">
                <DrawerDialog school={school} setCurrentSchoolList={setCurrentSchoolList}/>
            </CardFooter>
        </Card>
    );
}