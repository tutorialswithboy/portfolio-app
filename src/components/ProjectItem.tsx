// // Create a file named YourComponent.js (or .jsx) inside the components directory

// import React from "react";
// import { LinkIcon } from "@heroicons/react/24/outline";



// export default function ProjectComponent({ project:  }) {
//   const domain = project.url ? new URL(project.url).host : null;

//   return (
//     <div className="group relative">
//       {project.url ? (
//         <a
//           href={project.url}
//           target="_blank"
//           className="peer font-semibold font-display-safe dark:text-gray-200 dark:group-hover:text-gray-100 dark:contrast-more:text-gray-100 motion-safe:transition focus:outline-none"
//         >
//           <span className="absolute -inset-4 md:-inset-6 z-20 md:rounded-2xl" />
//           <span className="relative z-10">{project.name}</span>
//         </a>
//       ) : (
//         <h3 className="peer font-semibold font-display-safe dark:text-gray-200 dark:group-hover:text-gray-100 dark:contrast-more:text-gray-100 motion-safe:transition focus:outline-none">
//           <span className="absolute -inset-4 md:-inset-6 z-20 md:rounded-2xl" />
//           <span className="relative z-10">{project.name}</span>
//         </h3>
//       )}
//       <div className="absolute -inset-4 md:-inset-6 scale-95 bg-gray-50 dark:bg-gray-800 md:rounded-2xl motion-safe:transition opacity-0 group-hover:scale-100 group-hover:opacity-100 peer-focus-visible:scale-100 peer-focus-visible:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary-600 dark:peer-focus-visible:ring-offset-gray-900 dark:contrast-more:peer-focus-visible:ring-offset-black" />
//       <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 dark:peer-focus-visible:text-gray-300 dark:contrast-more:text-gray-300 dark:contrast-more:font-medium motion-safe:transition">
//         {project.description[locale] || project.description.en}
//       </p>
//       {domain && (
//         <p className="relative z-10 mt-6 text-gray-400 dark:text-gray-200 group-hover:text-primary-600 peer-focus-visible:text-primary-600 dark:group-hover:text-primary-500 dark:peer-focus-visible:text-primary-500 flex items-center font-semibold text-sm motion-safe:transition">
//           <LinkIcon className="w-4 h-4" aria-hidden="true" />
//           <span className="ml-3">{domain}</span>
//         </p>
//       )}
//     </div>
//   );
// }
