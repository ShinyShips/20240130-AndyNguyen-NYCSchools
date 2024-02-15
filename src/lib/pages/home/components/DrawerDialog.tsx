import { UserRound } from 'lucide-react';
import { useState } from "react";

import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function DrawerDialog({school, setCurrentSchoolList}: any) {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    
    const totalStudents = school?.total_students || "Not Found";
    const activities = school?.extracurricular_activities?.split(", ") || [];
    const sports = school?.school_sports?.split(", ") || [];
    const languages = school?.language_classes?.split(", ") || [];
    const bus = school?.bus?.split(", ") || [];

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                <button
                    type="button"
                    className="bg-blue-900 text-white py-2 px-4 rounded"
                    onClick={() => {
                        const updatedSchool = { ...school, seen: true };
                        setCurrentSchoolList((prevSchoolList: any[]) => prevSchoolList.map((school: { dbn: any; }) => school.dbn === updatedSchool.dbn ? updatedSchool : school))
                    }}>
                        See School Profile
                </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>School Profile</DialogTitle>
                    <DialogDescription>
                        <div className="flex my-2">
                            <UserRound />
                            <p className="flex items-center ml-1">{totalStudents} total students</p>
                        </div>
                        <p className='font-semibold'>Extracurriculars: </p>
                        {activities.map((activity: any) => (
                            <Badge className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{activity}</Badge>
                        ))}
                        <p className="mt-2 font-semibold">Sports:</p>
                        {sports.map((sport: any) => (
                            <Badge className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{sport}</Badge>
                        ))}
                        <p className="mt-2 font-semibold">Languages:</p>
                        {languages.map((language: any) => (
                            <Badge className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{language}</Badge>
                        ))}
                        <p className="mt-2 font-semibold">Buses:</p>
                        {bus.map((busNumber: any) => (
                            <Badge className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{busNumber}</Badge>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen} >
            <DrawerTrigger asChild>
                <button
                    type="button"
                    className="bg-blue-900 text-white w-full rounded py-2"
                    onClick={() => {
                        const updatedSchool = { ...school, seen: true };
                        setCurrentSchoolList((prevSchoolList: any[]) => prevSchoolList.map((school: { dbn: any; }) => school.dbn === updatedSchool.dbn ? updatedSchool : school))
                    }}
                >
                    See School Profile
                </button>
            </DrawerTrigger>
            <DrawerContent className="max-h-screen">
                <DrawerHeader className="text-left overflow-y-scroll">
                <DrawerTitle>School profile</DrawerTitle>
                <DrawerDescription>
                    <div className="flex my-2">
                        <UserRound />
                        <p className="flex items-center ml-1">{totalStudents} total students</p>
                    </div>
                    <p className="font-semibold">Extracurriculars:</p>
                    {activities.map((activity: any) => (
                        <Badge key={`${school.school_name}-${activity}`} className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{activity}</Badge>
                    ))}
                    <p className="mt-2 font-semibold">Sports:</p>
                    {sports.map((sport: any) => (
                        <Badge key={`${school.school_name}-${sport}`} className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{sport}</Badge>
                    ))}
                    <p className="mt-2 font-semibold">Languages:</p>
                    {languages.map((language: any) => (
                        <Badge key={`${school.school_name}-${language}`} className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{language}</Badge>
                    ))}
                    <p className="mt-2 font-semibold">Buses:</p>
                    {bus.map((busNumber: any) => (
                        <Badge key={`${school.school_name}-${busNumber}`} className="w-fit bg-slate-100 p-2 mt-2 mr-2 mb-2">{busNumber}</Badge>
                    ))}
                </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                    <button type="button" className="text-blue-900 outline outline-1 rounded outline-blue-900 py-2">Exit</button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}