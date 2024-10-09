import React from "react";

const WithComponentHeader = ({
  children,
  header,
  id,
}: {
  children: React.ReactNode;
  header: string;
  id?: string;
}) => {
  return (
    <div id={id} className="min-h-screen  p-7 flex flex-col">
      <h1 className="text-4xl font-semibold text-primaryText-light dark:text-primaryText-dark text-center mb-8">
        {header}
        <span className="block w-8 rounded-full h-1 bg-primary-light dark:bg-primary-dark  mx-auto mt-8"></span>
      </h1>
      <div className="flex-1 w-full lg:px-12">{children}</div>
    </div>
  );
};

export default WithComponentHeader;
