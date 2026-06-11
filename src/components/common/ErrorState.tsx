import type { ReactNode } from "react";

type ErrorStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode
};

export function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred.",
}: ErrorStateProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-brand-dark">{title}</h1>
      <p className="mt-3 max-w-md text-brand-dark/70">{description}</p>
    </div>
  );
}