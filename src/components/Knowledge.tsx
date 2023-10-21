import { CommandLineIcon } from "@heroicons/react/24/outline";

interface Knowledge {
  title: string;
  icon: any;
  level: string;
}

interface KnowledgeArea {
  title: string;
  items: Knowledge[];
}

const knowledges: KnowledgeArea[] = [
  {
    title: "Frameworks",
    items: [
      //   { title: "Vue.js", icon: IconVueJs, level: "advanced" },
      {
        title: "Tailwind CSS",
        icon: `/assets/tailwindCss.png`,
        level: "advanced",
      },
      //   { title: "React", icon: IconReact, level: "basic" },
    ],
  },
  //   {
  //     title: "home.languages",
  //     items: [
  //       { title: "JavaScript", icon: IconJavaScript, level: "advanced" },
  //       { title: "Kotlin", icon: IconKotlin, level: "advanced" },
  //       { title: "Java", icon: IconJava, level: "advanced" },
  //       { title: "TypeScript", icon: IconTypeScript, level: "intermediary" },
  //     ],
  //   },
  //   {
  //     title: "home.ecosystems",
  //     items: [
  //       { title: "Node.js", icon: IconNodeJs, level: "advanced" },
  //       { title: "Spring", icon: IconSpring, level: "intermediary" },
  //       { title: "WooCommerce", icon: IconWooCommerce, level: "intermediary" },
  //       { title: "WordPress", icon: IconWordPress, level: "intermediary" },
  //       { title: "Android", icon: IconAndroid, level: "basic" },
  //     ],
  //   },
];

function Knowledge() {
  return (
    <div>
      <div className="p-6 rounded-3xl border border-gray-200 dark:border-gray-700 dark:contrast-more:border-gray-600 motion-safe:transition">
        <h2 className="flex items-center text-lg font-display-safe font-semibold mb-4 dark:text-gray-200 dark:contrast-more:text-gray-100 motion-safe:transition">
          <CommandLineIcon
            aria-hidden="true"
            className="h-6 w-6 text-gray-400 dark:text-gray-500 dark:contrast-more:text-gray-400 motion-safe:transition"
          />
          {/* <span className="ml-3">{t("home.knowledges")}</span> */}
        </h2>

        {knowledges.map((area) => (
          <ul key={area.title} className="w-full">
            <li className="text-sm font-medium mt-6 mb-4 flex items-center gap-4">
              <span className="shrink-0 dark:text-gray-300 dark:contrast-more:text-gray-200 motion-safe:transition">
                {area.title}
              </span>
              <span className="grow h-px block bg-gray-200 dark:bg-gray-700 dark:contrast-more:bg-gray-600 motion-safe:transition"></span>
            </li>
            <li>
              <ul className="space-y-3">
                {area.items.map((knowledge) => (
                  <li
                    key={knowledge.title}
                    className="flex gap-4 items-center w-full"
                  >
                    <div
                      aria-hidden="true"
                      className="shrink-0 bg-white dark:bg-gray-800 dark:border-gray-800 shadow-md shadow-gray-800/5 ring-1 dark:ring-0 ring-gray-900/5 dark:border dark:border-gray-700/50 rounded-full flex h-8 w-8 items-center justify-center motion-safe:transition"
                    >
                      {typeof knowledge.icon === "string" ? (
                        <img
                          src={knowledge.icon}
                          alt={knowledge.title}
                          className="w-4 h-4 dark:opacity-90"
                        />
                      ) : (
                        <knowledge.icon className="w-4 h-4 dark:opacity-90" />
                      )}
                    </div>

                    <span
                      lang="en-US"
                      className="motion-safe:transition font-medium text-gray-800 dark:text-gray-200 text-sm grow"
                    >
                      {knowledge.title}
                    </span>
                    {/* <span className="sr-only">{t("home.withLevel")}</span> */}
                    <span className="motion-safe:transition text-xs text-gray-600 dark:text-gray-400 dark:contrast-more:text-gray-300 dark:contrast-more:font-medium shrink-0">
                      {knowledge.level}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Knowledge;
