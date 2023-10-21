

export default function AboutPage() {
//   const { data: page } = useFetch("/api/about");
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: `https://github.com/arunavabasu-03`,
      icon: "/assets/github.svg",
    },
  ];
  return (
    <div>
      <div className="py-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2 5 lg:max-w-none">
            <img
              src="/img/avatar-okabe-medium.webp"
              alt="Your Avatar Alt Text"
              className="aspect-square rotate-3 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/5 dark:opacity-90 dark:hover:opacity-100 motion-safe:transition"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2 pl-6">
          <h1 className="text-4xl font-bold">
            {" "}
            Nice to meet you, <br/>my name is HI
          </h1>
          <br />
          <div className="text-l text-gray-700">

            I am playing with computer-related stuff since my childhood by
            incentives from family and friends. I realized computers are really
            fascinating and can do a lot of cool stuff since I had my first PC
            with Windows 98. Since that time, I've never stopped.
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list" className="space-y-4">
            {socialMediaLinks.map((socialMedia) => (
              <li key={socialMedia.name} className="flex">
                <a
                  className="group flex items-center lg:text-sm font-medium text-gray-800 motion-safe:transition hover:text-primary-600 focus-visible:text-primary-600 dark:text-gray-200 dark:hover:text-primary-500 dark:focus-visible:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black rounded"
                  href={socialMedia.url}
                  target="_blank"
                  rel="me"
                >
                  <img
                    aria-hidden="true"
                    src={`${socialMedia.icon}`}
                    className="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-primary-600 group-focus-visible:fill-primary-600 dark:group-hover:fill-primary-500 dark:group-focus-visible:fill-primary-500 motion-safe:transition"
                  />
                  <span className="ml-4">
                    {`Follow me on ${socialMedia.name}`}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
