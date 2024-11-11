export function formatDateToDDMMYYYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }


//   <FormField
//   control={form.control}
//   name="sscmarks"
//   render={({ field }) => (
//     <FormItem className=" col-span-1">
//       <FormLabel className=" text-gray-500">
//         Percentage / CGPA*
//       </FormLabel>
//       <FormControl>
//         <Input
//           placeholder="e.g. 90% | 9.50"
//           {...field}
//           className="inputstyle"
//           onChange={(e) => {
//             const input = e.target.value;
//             // Only allow numbers, decimals, and percentage symbol
//             if (/^[0-9.%]*$/.test(input)) {
//               field.onChange(input);
//               form.clearErrors("sscmarks"); // Clear error if input is valid
//             }
//           }}
//           onBlur={(e) => {
//             const input = e.target.value;
//             const pattern =
//               /^(100(\.0{1,2})?|\d{1,2}(\.\d{1,2})?%)$|^(10|\d)(\.\d{1,2})?$/;
//             if (!pattern.test(input)) {
//               form.setError("sscmarks", {
//                 type: "manual",
//                 message:
//                   "Please enter a valid Percentage or CGPA",
//               });
//               field.onChange(""); // Clear the field if invalid
//             }
//           }}
//           maxLength={6}
//         />
//       </FormControl>
//       <FormMessage />
//       {!form.formState.errors.address && (
//         <div className="mt-1 text-right text-xs text-gray-500">
//           Enter your Percentage or CGPA
//         </div>
//       )}
//     </FormItem>
//   )}
// />