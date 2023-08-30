import React from "react";

function Project({url, image, projectName, description, techStack}) {
    return (
        <a href={url} target="_blank" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 w-96 h-[400px] overflow-hidden" rel="noreferrer">
  <img
    alt="Project"
    src={image}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      

      <div>
        <dt className="sr-only">Project Title</dt>

        <dd className="font-medium">{projectName}</dd>
      </div>

      <div>
        <dt className="sr-only">Description</dt>

        <dd className="text-sm text-gray-500">{description}</dd>
      </div>

    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/> <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Tech Stack</p>

          <p className="font-medium">{techStack}</p>
        </div>
      </div>
    </div>
  </div>
</a>
    );
}

export default Project