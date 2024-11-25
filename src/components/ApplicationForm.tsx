"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Paperclip } from "lucide-react"; // Example icon from
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
import { MultipleSelector } from "./multiselector";
import { Checkbox } from "./ui/checkbox";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { formatDateToDDMMYYYY } from "@/helpers/formatDateToDDMMYYYY";

// Infer the schema type
type FormData = z.infer<typeof applicationFormSchema>;
interface ApplicationFormProps {
  designation: string;
}

export default function ApplicationForm({ designation }: ApplicationFormProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // State to track the selected month and year
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [fileName, setFileName] = useState<string>("");

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
      schoolname: "",
      sscyear: "",
      sscmarks: "",
      hscdiplomaname: "",
      hscdiplomadepartment: "",
      hscdiplomayear: "",
      hscdiplomamarks: "",
      graduationname: undefined,
      graduationdepartment: undefined,
      graduationyear: undefined,
      graduationmarks: undefined,
      pgraduationname: undefined,
      pgraduationdepartment: undefined,
      pgraduationyear: undefined,
      pgraduationmarks: undefined,
      experience: "",
      courses: "",
      languages: [],
      vehicle: undefined,
      resume: undefined,
      confirm: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("dob", data.dob ? formatDateToDDMMYYYY(data.dob) : "");
    formData.append("gender", data.gender);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("caste", data.caste);
    formData.append("maritalStatus", data.maritalStatus);
    formData.append("schoolname", data.schoolname);
    formData.append("sscyear", data.sscyear);
    formData.append("sscmarks", data.sscmarks);
    formData.append("hscdiplomaname", data.hscdiplomaname);
    formData.append("hscdiplomadepartment", data.hscdiplomadepartment);
    formData.append("hscdiplomayear", data.hscdiplomayear);
    formData.append("hscdiplomamarks", data.hscdiplomamarks);
    formData.append("graduationname", data.graduationname || "");
    formData.append("graduationdepartment", data.graduationdepartment || "");
    formData.append("graduationyear", data.graduationyear || "");
    formData.append("graduationmarks", data.graduationmarks || "");
    formData.append("pgraduationname", data.pgraduationname || "");
    formData.append("pgraduationdepartment", data.pgraduationdepartment || "");
    formData.append("pgraduationyear", data.pgraduationyear || "");
    formData.append("pgraduationmarks", data.pgraduationmarks || "");
    formData.append("experience", data.experience);
    formData.append("courses", data.courses);
    formData.append("vehicle", data.vehicle);
    formData.append("designation", designation);

    if (data.languages && data.languages.length > 0) {
      formData.append("languages", data.languages.join(","));
    } else {
      formData.append("languages", "");
    }

    if (data.resume) {
      formData.append("resume", data.resume);
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application sent successfully!", {
          duration:5000
        });
        form.reset()
      } else {
        const errorText = await response.text();
        toast.error(`Failed to send application: ${errorText}`, {
          duration:5000
        });
      }
    } catch (error) {
      toast.error("An error occurred while sending the application.", {
        duration:5000
      } );
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 mt-14 flex flex-col"
      >
        <div className="grid grid-cols-2 md:gap-12 gap-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className=" md:col-span-1 col-span-2">
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
              <FormItem  className=" md:col-span-1 col-span-2">
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
              <FormItem  className=" md:col-span-1 col-span-2">
                <FormLabel>D.O.B.*</FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          onClick={() => setOpen(!open)}
                          className={cn(
                            "w-full inputstyle hover:bg-[#D9D9D9] hover:ring-[0.4px] focus:ring-[0.4px] ring-black",
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
                      <div className="flex flex-row items-center justify-between gap-5">
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
                      <Calendar
                        mode="single"
                        selected={field.value as Date | undefined}
                        onSelect={(date) => {
                          field.onChange(date?.toISOString());
                          setOpen(false); // Close the popover when a date is selected
                        }}
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
              <FormItem  className=" md:col-span-1 col-span-2">
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
                  <SelectContent className=" w-full">
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
              <FormItem  className=" md:col-span-1 col-span-2">
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
              <FormItem  className=" md:col-span-1 col-span-2">
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
          {/* Educational Qualifications */}
          <FormLabel className=" col-span-2 mt-5">
            Educational Qualification*
          </FormLabel>
          <div className="col-span-2 grid grid-cols-4 gap-12">
            {/* SSC */}
            <div className="col-span-4 grid grid-cols-4 md:gap-12 gap-6">
              <FormField
                control={form.control}
                name="schoolname"
                render={({ field }) => (
                  <FormItem className="md:col-span-2 col-span-4">
                    <FormLabel className=" text-gray-500">1. SSC*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter School Name"
                        {...field}
                        className="inputstyle"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sscyear"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className="text-gray-500">
                      Passing Year*
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="inputstyle">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(
                            { length: 60 },
                            (_, i) => new Date().getFullYear() - i
                          ).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sscmarks"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Percentage / CGPA*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 90% | CGPA 9.50"
                        {...field}
                        className="inputstyle"
                      />
                    </FormControl>
                    <FormMessage />
                    {!form.formState.errors.address && (
                      <div className="mt-1 text-right text-xs text-gray-500">
                        Enter your Percentage or CGPA
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* HSC */}
            <div className="-mt-4 col-span-4 grid grid-cols-4 md:gap-12 gap-6">
              <FormField
                control={form.control}
                name="hscdiplomaname"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      2. HSC / Diploma*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter College Name"
                        {...field}
                        className="inputstyle"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hscdiplomadepartment"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Department*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Department"
                        {...field}
                        className="inputstyle"
                      />
                    </FormControl>
                    <FormMessage />
                    {!form.formState.errors.address && (
                      <div className="mt-1 text-right text-xs text-gray-500">
                        HSC passed out kindly enter N/A
                      </div>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hscdiplomayear"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className="text-gray-500">
                      Passing Year*
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="inputstyle">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(
                            { length: 60 },
                            (_, i) => new Date().getFullYear() - i
                          ).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hscdiplomamarks"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Percentage / CGPA*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 90% | CGPA 9.50"
                        {...field}
                        className="inputstyle"
                      />
                    </FormControl>
                    <FormMessage />
                    {!form.formState.errors.address && (
                      <div className="mt-1 text-right text-xs text-gray-500">
                        Enter your Percentage or CGPA
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* Gradution */}

            <div className="-mt-4 col-span-4 grid grid-cols-4 md:gap-12 gap-6">
              <FormField
                control={form.control}
                name="graduationname"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      3. Graduation
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter College Name"
                        {...field}
                        className="inputstyle"
                        value={field.value ?? undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="graduationdepartment"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Department / Specialization
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Department"
                        {...field}
                        className="inputstyle"
                        value={field.value ?? undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="graduationyear"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className="text-gray-500">
                      Passing Year
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value || undefined)
                        } // Set undefined when no value is selected
                        defaultValue={field.value ?? ""} // Default to empty string if undefined
                      >
                        <SelectTrigger className="inputstyle">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(
                            { length: 60 },
                            (_, i) => new Date().getFullYear() - i
                          ).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="graduationmarks"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Percentage / CGPA
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 90% | CGPA 9.50"
                        {...field}
                        className="inputstyle"
                        value={field.value ?? undefined}
                      />
                    </FormControl>
                    <FormMessage />
                    {!form.formState.errors.address && (
                      <div className="mt-1 text-right text-xs text-gray-500">
                        Enter your Percentage or CGPA
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* Post Graduation */}

            <div className="-mt-4 col-span-4 grid grid-cols-4 md:gap-12 gap-6">
              <FormField
                control={form.control}
                name="pgraduationname"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      4. Post Graduation
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter College Name"
                        {...field}
                        className="inputstyle"
                        value={field.value ?? undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pgraduationdepartment"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Department / Specialization
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Department"
                        {...field}
                        className="inputstyle"
                        value={field.value ?? undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pgraduationyear"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className="text-gray-500">
                      Passing Year
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value || undefined)
                        } // Set undefined when no value is selected
                        defaultValue={field.value ?? ""} // Default to empty string if undefined
                      >
                        <SelectTrigger className="inputstyle">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(
                            { length: 60 },
                            (_, i) => new Date().getFullYear() - i
                          ).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pgraduationmarks"
                render={({ field }) => (
                  <FormItem className=" md:col-span-1 col-span-2">
                    <FormLabel className=" text-gray-500">
                      Percentage / CGPA
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 90% | CGPA 9.50"
                        {...field}
                        className="inputstyle"
                        value={field.value ?? undefined}
                      />
                    </FormControl>
                    <FormMessage />
                    {!form.formState.errors.address && (
                      <div className="mt-1 text-right md:text-xs text-[10px] text-gray-500">
                        Enter your Percentage or CGPA
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Experience */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className=" col-span-2">
                <FormLabel>Experience*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter Your Prior Experience"
                    {...field}
                    className="inputstyle resize-none"
                    maxLength={200}
                  />
                </FormControl>
                <FormMessage />
                {!form.formState.errors.address && (
                  <div className="mt-1 text-right text-xs text-gray-500">
                   Fresher kindly enter N/A | Max 200 characters
                  </div>
                )}
              </FormItem>
            )}
          />
          {/* Courses */}
          <FormField
            control={form.control}
            name="courses"
            render={({ field }) => (
              <FormItem className=" col-span-2">
                <FormLabel>Courses Done</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter Courses Done"
                    {...field}
                    className="inputstyle resize-none"
                    maxLength={200}
                  />
                </FormControl>
                <FormMessage />
                {!form.formState.errors.address && (
                  <div className="mt-1 text-right text-xs text-gray-500">
                    Enter courses separated with commas e.g. MS-CIT, Java  |  Enter N/A if no courses have been completed.
                  </div>
                )}
              </FormItem>
            )}
          />
          {/* Vehicle */}
          <FormField
            control={form.control}
            name="vehicle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Own a Vehicle*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="inputstyle">
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Languages */}
          <FormField
            control={form.control}
            name="languages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Languages Known*</FormLabel>
                <FormControl>
                  <MultipleSelector
                    selectedValues={field.value || []}
                    onChange={field.onChange}
                    options={[
                      { value: "English", label: "English" },
                      { value: "Hindi", label: "Hindi" },
                      { value: "Marathi", label: "Marathi" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Resume */}

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => {
              

              const handleFileChange = (
                e: React.ChangeEvent<HTMLInputElement>
              ) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFileName(file.name); // Display the selected file name
                  field.onChange(file); // Pass the file object to the form
                }
              };

              return (
                <FormItem className="col-span-2">
                  <FormLabel>Resume*</FormLabel>
                  <FormControl>
                    <div className="flex w-[48.5%] items-center text-sm gap-2 border p-2 rounded-md">
                      <Paperclip className="h-5 w-5 text-gray-600" />{" "}
                      {/* Icon */}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden" // Hide the default file input
                        id="resume-upload" // ID for triggering click event
                      />
                      <label
                        htmlFor="resume-upload"
                        className="text-gray-600 cursor-pointer"
                      >
                        {fileName ? fileName : "Click to attach your resume"}
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Checkbox for Confirmation */}
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem className=" col-span-2">
                <FormControl>
                  <Checkbox
                    id="confirm"
                    checked={field.value || false} // Control the checked state
                    onCheckedChange={(checked) => field.onChange(checked)} // Update on change
                  />
                </FormControl>
                <FormLabel htmlFor="confirm" className=" ml-2">
                  By checking this box, I confirm that the information provided
                  is accurate and true to the best of my knowledge.
                </FormLabel>
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
            disabled={isLoading}
            className="rounded bg-blue-500 text-white w-36 flex items-center gap-2 justify-center py-2 hover:bg-blue-800 duration-500"
          >
            {isLoading ? (
              <>
                <LuLoader2 className=" animate-spin" /> Applying
              </>
            ) : (
              "Apply"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
