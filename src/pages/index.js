export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img src="/img/logo.svg" className="h-7 sm:h-8" />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
                <ul className="list-disc space-y-2">
                  <li className="flex items-start">
                    <p className="ml-2">
                      Customizing your
                      <code className="text-sm font-bold text-gray-900">tailwind.config.js</code> file
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-2">
                      Extracting classes with
                      <code className="text-sm font-bold text-gray-900">@apply</code>
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-2">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Want to dig deeper into Tailwind?</p>
                <p>
                  <a href="https://tailwindcss.com/docs" className="text-cyan-600 hover:text-cyan-700">
                    {' '}
                    Read the docs &rarr;{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
