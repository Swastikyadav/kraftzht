import { ReactNode } from "react";

function ServiceOverview({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="px-8 md:px-28 xl:px-96 pt-28 text-start bg-[#f1f1f1]">
      {title && <h2 className="mb-8 text-4xl md:text-6xl">{title}</h2>}
      {children}
    </section>
  );
}

export default ServiceOverview;
