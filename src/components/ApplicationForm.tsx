"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { applicationFormSchema } from "@/schemas/applicationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

// Infer the schema type
type FormData = z.infer<typeof applicationFormSchema>;

export default function ApplicationForm() {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      dob: undefined,
      gender: undefined,
      phone: "",
      email: "",
      address: "",
      caste: "",
      maritalStatus: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  // State to track the selected month and year
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 mt-14 flex flex-col"
      >
        <div className="grid grid-cols-2 gap-12">
          {/* First Name */}

          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter First Name"
                    {...field}
                    className="inputstyle"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Last Name"
                    {...field}
                    className="inputstyle"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* D.O.B. */}

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>D.O.B.*</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full inputstyle hover:bg-[#D9D9D9]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Enter Birth Date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-4" align="start">
                      <div className=" flex flex-row items-center justify-between gap-5">
                        {/* Month Selector */}
                        <Select
                          defaultValue={selectedMonth.toString()}
                          onValueChange={(month) =>
                            setSelectedMonth(parseInt(month))
                          }
                        >
                          <SelectTrigger className="w-full mb-2 text-xs">
                            <SelectValue placeholder="Select Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => (
                              <SelectItem key={i} value={i.toString()}>
                                {format(new Date(2021, i), "MMMM")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {/* Year Selector */}
                        <Select
                          defaultValue={selectedYear.toString()}
                          onValueChange={(year) =>
                            setSelectedYear(parseInt(year))
                          }
                        >
                          <SelectTrigger className="w-full mb-2 text-xs">
                            <SelectValue placeholder="Select Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from(
                              { length: 100 },
                              (_, i) => new Date().getFullYear() - i
                            ).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {/* Calendar Component */}
                      <Calendar
                        mode="single"
                        selected={field.value as Date | undefined}
                        onSelect={(date) => field.onChange(date?.toISOString())}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        defaultMonth={new Date(selectedYear, selectedMonth)}
                        month={new Date(selectedYear, selectedMonth)}
                        onMonthChange={(date) => {
                          setSelectedYear(date.getFullYear());
                          setSelectedMonth(date.getMonth());
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="inputstyle">
                      <SelectValue placeholder="Select Your Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Phone Number"
                    {...field}
                    maxLength={10}
                    className="inputstyle"
                    type="text" // Keep type="text" for maxLength support
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
                      if (input.value.length > 10) {
                        input.value = input.value.slice(0, 10); // Enforce 10 digits max
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Email"
                    {...field}
                    className="inputstyle"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className=" col-span-2">
                <FormLabel>Address*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter Your Full Address"
                    {...field}
                    className="inputstyle resize-none"
                    maxLength={200}
                  />
                </FormControl>
                <FormMessage />
                {!form.formState.errors.address && (
                  <div className="mt-1 text-right text-xs text-gray-500">
                    Max 200 characters
                  </div>
                )}
              </FormItem>
            )}
          />

          {/* Caste */}

          <FormField
            control={form.control}
            name="caste"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Caste*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Caste"
                    {...field}
                    className="inputstyle"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}

          <FormField
            control={form.control}
            name="maritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marital Status*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="inputstyle">
                      <SelectValue placeholder="Select Your Marital Status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Married">Married</SelectItem>
                    <SelectItem value="Widowed">Widowed</SelectItem>
                    <SelectItem value="Divorced">Divorced</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-10">
          <Button
            type="button"
            className="rounded bg-red-500 text-white w-36 flex items-center gap-2 justify-center py-2 hover:bg-red-800 duration-500"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded bg-blue-500 text-white w-36 flex items-center gap-2 justify-center py-2 hover:bg-blue-800 duration-500"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
