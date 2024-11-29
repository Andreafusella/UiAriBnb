import { useState } from "react";
import Button from "../common/Button";
import { Calendar } from "../ui/calendar";
import Input from "../common/Input";

function CardPrenotationHotel() {

    const [isCalendar1Open, setIsCalendar1Open] = useState(false);
    const [isCalendar2Open, setIsCalendar2Open] = useState(false);
    const [date1, setDate1] = useState<Date>();
    const [date2, setDate2] = useState<Date>();

    function handleCalendar1() {
        setIsCalendar1Open(!isCalendar1Open);
        setIsCalendar2Open(false);
    }

    function handleCalendar2() {
        setIsCalendar2Open(!isCalendar2Open);
        setIsCalendar1Open(false);
    }

    const formDate = (date: Date | undefined) => {
        if (!date) {
            return "Seleziona data";
        }
        return date.toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    }

    return(
        <div className="border-[1px] border-gray-200 p-4 rounded-xl">
            <h1 className="text-xl font-medium">120 $ <span className="text-base font-normal">notte</span></h1>
            <div className="flex gap-2 mt-5 text-center">
                <div className="relative">
                    <h1>Check-in</h1>
                    <Button onClick={handleCalendar1}>{formDate(date1)}</Button>
                    {isCalendar1Open && (
                        <div className="absolute z-50 top-full left-0 mt-2">
                            <Calendar mode="single" selected={date1} onSelect={setDate1} className="bg-white border rounded-lg shadow-lg"></Calendar>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <h1>Check-out</h1>
                    <Button onClick={handleCalendar2}>{formDate(date2)}</Button>
                    {isCalendar2Open && (
                        <div className="absolute z-50 top-full left-0 mt-2">
                            <Calendar mode="single" selected={date2} onSelect={setDate2} disabled={(date) => date < (date1 || new Date())} className="bg-white border rounded-lg shadow-lg"></Calendar>
                        </div>
                    )}
                </div>
            </div>
            <Input placeholder="Numero Ospiti"></Input>
        </div>
    )
}

export default CardPrenotationHotel