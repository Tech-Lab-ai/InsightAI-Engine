'use client';

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header"
import { DateRange } from "react-day-picker"

export function WorkflowHistoryHeader() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 6, 20),
    to: new Date(),
  })

  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Histórico de Workflows</PageHeaderTitle>
        <PageHeaderDescription>
          Consulte o histórico de todas as execuções, status e resultados.
        </PageHeaderDescription>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por ID..."
            className="pl-8 sm:w-[200px] lg:w-[300px]"
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Selecione um período</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </PageHeader>
  )
}
