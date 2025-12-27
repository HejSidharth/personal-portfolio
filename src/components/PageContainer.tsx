import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable page container component that provides consistent layout
 * across all pages with responsive design.
 */
export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 ${className}`}>
      {children}
    </div>
  );
}

