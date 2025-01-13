// import { InputProps } from "../../../core/declarations/atoms";
// import { getInputClassNames } from "../../../core/functions/tailwind";

// export function Input({ scale, ...props }: InputProps) {
//   const inputClasses = getInputClassNames(scale);
//   props.className = `${props.className || ""} ${inputClasses}`.trim();
//   return (
//     <span className="text-gray-800 border-gray-800">
//       <input {...props} />
//     </span>
//   );
// }

// export function ThemedInput({ scale, ...props }: InputProps) {
//   const themeClasses =
//     "text-gray-800 mugi:hocus:border-hat-100 mugi:hocus:outline-hat-100 mugi:border-mugi-100 dark:hocus:border-gray-500 dark:hocus:outline-gray-500 dark:border-gray-200";
//   const inputClasses = getInputClassNames(scale);
//   props.className = `${
//     props.className || ""
//   } ${inputClasses} ${themeClasses}`.trim();
//   return (
//     <span className="text-gray-800">
//       <input {...props} />
//     </span>
//   );
// }

export {}
