import { AcademicCapIcon } from "@heroicons/react/24/outline";

interface Course {
  institution: string;
  period: string;
  name: string;
  description?: string;
  finished?: boolean;
}

const courses: Course[] = [
  {
    institution: "ABC",
    period: `2016 - 2018`,
    name: "Bachelor's Degree of Computer Science",
    description: "Bachelor's Degree of Computer Science",
  },
  {
    institution: "ABC",
    period: `2016 - 2018`,
    name: "ABC",
    description: "ABC",
    finished: true,
  },
];

function Education() {
  return (
    <div>
      <div>
        <div className="px-4 md:px-0 py-6">
          <h2 className="flex items-center text-lg font-display-safe font-semibold mb-6 dark:text-gray-200 dark:contrast-more:text-gray-100 motion-safe:transition -translate-x-3">
            <AcademicCapIcon
              aria-hidden="true"
              className="h-6 w-6 text-gray-400 dark:text-gray-500 dark:contrast-more:text-gray-400 motion-safe:transition"
            />
            <span className="ml-5">Education</span>
          </h2>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-y-1.5 w-px border-r-2 border-dotted dark:border-gray-700 dark:contrast-more:border-gray-600 motion-safe:transition"
            />

            {courses.map((course) => (
              <div key={course.name} className="mb-12">
                <div className="flex items-center relative">
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute left-0 translate-x-[-3px] w-2 h-2 rounded block ring-4 ring-white dark:ring-gray-900 motion-safe:transition",
                      course.finished
                        ? "bg-green-500"
                        : "bg-blue-500 motion-safe:animate-pulse",
                    ].join(" ")}
                  />

                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:contrast-more:text-gray-300 dark:contrast-more:font-medium motion-safe:transition pl-8">
                    {course.period}, {course.institution}
                  </p>
                </div>

                <h3 className="pl-8 mt-3 font-semibold text-gray-800 dark:text-gray-300 dark:contrast-more:text-gray-100 motion-safe:transition">
                  {course.name}
                </h3>

                {course.description && (
                  <p className="pl-8 mt-3 text-sm text-gray-600 dark:text-gray-300 dark:contrast-more:text-gray-200 motion-safe:transition">
                    {course.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
