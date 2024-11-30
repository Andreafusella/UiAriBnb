import { useState } from "react";
import Button from "../common/Button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";

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
        <div className="border-[1px] border-gray-200 p-4 rounded-xl ml-2">
            <form>
                <h1 className="text-xl font-medium">120 € <span className="text-base font-normal">notte</span></h1>
                <div className="flex gap-2 mt-5 text-center">
                    <div className="relative">
                        <h1 className="font-medium">Check-in</h1>
                        <Button type="button" onClick={handleCalendar1}>{formDate(date1)}</Button>
                        {isCalendar1Open && (
                            <div className="absolute z-50 top-full left-0 mt-2">
                                <Calendar mode="single" selected={date1} onSelect={setDate1} className="bg-white border rounded-lg shadow-lg"></Calendar>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <h1 className="font-medium">Check-out</h1>
                        <Button type="button" onClick={handleCalendar2}>{formDate(date2)}</Button>
                        {isCalendar2Open && (
                            <div className="absolute z-50 top-full left-0 mt-2">
                                <Calendar mode="single" selected={date2} onSelect={setDate2} disabled={(date) => date < (date1 || new Date())} className="bg-white border rounded-lg shadow-lg"></Calendar>
                            </div>
                        )}
                    </div>
                </div>
                <Input 
                    className="mt-2 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" 
                    placeholder="Numero ospiti"
                />
                <Button type="button" className="mt-4 w-full bg-pink-500 text-white text-lg hover:bg-pink-700 ">Prenota</Button>
                <h1 className="mt-2 text-xs text-center">Non riceverai alcun addebito in questa fase</h1>
                <div className="flex justify-between mt-7 p-1">
                    <div className="space-y-3">
                        <h1 className="underline font-light">20 € x 5 notti</h1>
                        <h1 className="underline font-light">Costi del servizio Roptin</h1>
                    </div>
                    <div className="space-y-3 text-right">
                        <h1>400 €</h1>
                        <h1>70 €</h1>
                    </div>
                </div>
                <hr className="w-full h-[1px] my-4"/>
                <div className="flex justify-between">
                    <h1 className="font-medium">Totale</h1>
                    <h1 className="font-medium text-right">480 €</h1>
                </div>
            </form>
        </div>
    )
}

export default CardPrenotationHotel