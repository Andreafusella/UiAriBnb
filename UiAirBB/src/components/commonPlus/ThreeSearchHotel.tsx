import { useState } from "react"
import Input from "../common/Input"
import { Calendar } from "../ui/calendar"
import Button from "../common/Button"

function ThreeSearchHotel(){
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
        <div className="flex justify-center items-center p-4">
            <div className="flex flex-col md:flex-row justify-between items-center 
                           w-full max-w-[400px] md:max-w-[95%] lg:max-w-4xl
                           p-2 md:p-3 gap-4 md:gap-2
                           border-2 border-gray-200 rounded-3xl md:rounded-full
                           bg-white shadow-lg">
                
                <div className="w-full md:w-auto mt-5 md:mt-0">
                    <h1 className="text-sm font-medium mb-1 text-center">Dove</h1>
                    <Input 
                        className="text-gray-800 md:text-center focus:outline-none text-center w-[180px] ml-3 border-none" 
                        placeholder="Cerca destinazioni"
                    /> 
                </div>
                <div className="w-[50%] h-[1px] md:w-[1px] md:h-14 bg-gray-300 my-3"></div>

                <div className="flex flex-col justify-center text-center md:flex-row gap-4 md:gap-6 w-full md:w-auto ">
                    <div className="relative">
                        <h1 className="text-sm font-medium mb-1 md:text-center">Check-in</h1>
                        <Button onClick={handleCalendar1}>{formDate(date1)}</Button>
                        {isCalendar1Open && (
                            <div className="absolute z-50 top-full left-0 mt-2">
                                <Calendar mode="single" selected={date1} onSelect={setDate1} className="bg-white border rounded-lg shadow-lg"/>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <h1 className="text-sm font-medium mb-1 md:text-center">Check-out</h1>
                        <Button onClick={handleCalendar2}>{formDate(date2)}</Button>
                        {isCalendar2Open && (
                            <div className="absolute z-50 top-full left-0 mt-2">
                                <Calendar mode="single" selected={date2} onSelect={setDate2} disabled={(date) => date < (date1 || new Date())} className="bg-white border rounded-lg shadow-lg"/>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-[50%] h-[1px] md:w-[1px] md:h-14 bg-gray-300 my-3"></div>

                <div className="w-full md:w-auto">
                    <h1 className="text-sm font-medium mb-1 text-center">Numero Ospiti</h1>
                    <Input 
                        placeholder="Numero ospiti" 
                        type="text" 
                        className="focus:outline-none text-center w-[180px] md:w-auto border-none"
                    />
                </div>
                  
                <Button className="flex items-center justify-center mb-5 md:mb-0 
                                bg-pink-500 hover:bg-pink-600 transition-colors
                                rounded-full text-white text-lg">
                    Cerca 🔍
                </Button>
                
                
                
            </div>
        </div>
    )
}

export default ThreeSearchHotel