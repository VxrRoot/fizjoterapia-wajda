import React, { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 h-full w-full mx-auto md:px-8 lg:px-16 max-w-[1440px]">
      {children}
    </div>
  );
};

export default ContainerLayout;
