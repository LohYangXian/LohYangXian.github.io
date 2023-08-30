import React from "react";

function Experience({role, logo, url, companyName, description, techStack, startDate, endDate}) {
    return (
        <a
  href={url}
  target="_blank"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 w-96 h-[300px] bg-white"
  rel="noreferrer"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {role}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">{companyName}</p>
    </div>

    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gray-100 shadow-sm">
      <img
        alt="Company Logo"
        src={logo}
        className="h-14 w-14 object-contain"
        />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500 whitespace-pre-line">
      {description}
    </p>
    <br></br>
    <p className="max-w-[40ch] text-sm text-gray-500 whitespace-pre-line">
      {techStack}
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dd className="text-xs text-gray-500">{startDate}</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dd className="text-xs text-gray-500">{endDate}</dd>
    </div>
  </dl>
</a>
    );
}

export default Experience;