import Copy from "./Copy";

export default function Works() {
  return (
    <div className="wrapper py-24">
      <Copy>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8">Works</h2>
      </Copy>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project cards will go here */}
        <div className="rounded-xl overflow-hidden bg-neutral-50">
          <div className="aspect-video bg-neutral-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-gray-600">
              A brief description of the project and its impact.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden bg-neutral-50">
          <div className="aspect-video bg-neutral-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-gray-600">
              A brief description of the project and its impact.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden bg-neutral-50">
          <div className="aspect-video bg-neutral-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-gray-600">
              A brief description of the project and its impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
