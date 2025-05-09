import { LightbulbIcon, CodeIcon, CubeIcon, ChartBarIcon } from "@heroicons/react/outline"

const features = [
  {
    name: "Server Components",
    description:
      "Leverage React Server Components to reduce client-side JavaScript and improve performance by rendering components on the server.",
    icon: LightbulbIcon,
  },
  {
    name: "App Router",
    description:
      "Use Next.js App Router for file-based routing with nested layouts, loading states, and error handling built in.",
    icon: CodeIcon,
  },
  {
    name: "API Routes",
    description:
      "Create API endpoints easily with Next.js API routes, allowing you to build full-stack applications with a single framework.",
    icon: CubeIcon,
  },
  {
    name: "Data Fetching",
    description:
      "Fetch data efficiently with built-in data fetching methods optimized for both server and client components.",
    icon: ChartBarIcon,
  },
]

export function FeatureSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build web applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Next.js provides a comprehensive solution for building modern web applications with React.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
