export default function HomeHero() {
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: `https://github.com/arunavabasu-03`,
      icon: "/assets/github.svg",
    },
  ];
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-10 py-16">
      <div className="md:grow mt-8 md:mt-0 md:col-span-3 md:flex md:flex-col md:justify-center">
        <h1 className="text-2xl md:text-3xl font-display-safe font-semibold dark:text-gray-100 dark:contrast-more:text-white motion-safe:transition">
          <span className="underline underline-offset-4 decoration-primary-500/80 dark:decoration-primary-400/80 decoration-4">
            Home Header
          </span>
          <img
            className="w-8 h-8 ml-3 inline-block"
            src="👋"
            alt="👋🏻"
            aria-label="👋🏻"
          />
        </h1>

        <p className="text-gray-700 dark:text-gray-300 dark:contrast-more:text-gray-200 mt-6 md:text-lg motion-safe:transition">
          <span className="highlight">Alessandro</span>
          <span className="highlight highlight-secondary">
            Computer Science Bachelors
          </span>
          <span className="highlight highlight-secondary">Open Source</span>
        </p>

        <div className="mt-6 flex gap-6">
          {socialMediaLinks.map((socialMediaLink) => (
            <a
              key={socialMediaLink.url}
              className="group p-1 -m-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black rounded motion-safe:transition"
              href={socialMediaLink.url}
              title={`Follow me on ${socialMediaLink.name}`}
              target="_blank"
              rel="me"
            >
              <img
                aria-hidden="true"
                src={`${socialMediaLink.icon}`}
                className="h-5 w-5 fill-gray-500 motion-safe:transition group-hover:fill-gray-600 group-focus-visible:fill-gray-600 dark:fill-gray-400 dark:contrast-more:fill-gray-300 dark:group-hover:fill-gray-300 dark:group-focus-visible:fill-gray-300 dark:contrast-more:group-hover:fill-gray-200 dark:contrast-more:group-focus-visible:fill-gray-200"
              />
              <span className="sr-only">
                Follow me on {socialMediaLink.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="shrink-0 flex justify-center md:col-span-2">
        <img
          className="w-52 h-52 md:w-64 md:h-64 shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/5 rounded-3xl rotate-12 dark:opacity-90 dark:hover:opacity-100 motion-safe:transition"
          src="/img/avatar-okabe-medium.webp"
          alt="Avatar Alt"
        />
      </div>
    </div>
  );
}
