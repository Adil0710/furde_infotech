"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Option {
  value: string;
  label: string;
}

interface MultipleSelectorProps {
  selectedValues: string[];
  onChange: (values: string[]) => void;
  options: Option[];
}

export function MultipleSelector({
  selectedValues,
  onChange,
  options,
}: MultipleSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const handleSetValue = (val: string) => {
    if (selectedValues.includes(val)) {
      onChange(selectedValues.filter((item) => item !== val));
    } else {
      onChange([...selectedValues, val]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full inputstyle hover:ring-[0.4px] focus:ring-[0.4px] ring-black hover:bg-[#D9D9D9] justify-between"
        >
          <div className={`${selectedValues.length > 0 ? "overflow-x-scroll" : " overflow-x-hidden"} flex gap-2 justify-start `}>
            {selectedValues.length > 0
              ? selectedValues.map((val, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 rounded-xl border bg-gray-500 text-slate-50 text-xs font-medium "
                  >
                    {options.find((option) => option.value === val)?.label}
                  </div>
                ))
              : "Select Languages Known"}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search languages..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSetValue(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValues.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
