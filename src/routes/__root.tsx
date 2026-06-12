import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { ErrorState } from '../components/common/ErrorState';


function RootLayout() {
  return (
     <>        
          <Outlet />
          <Toaster richColors />

    </>
  )
}

function RootErrorComponent({
  error,
}:{
  error: Error;
}) {
  console.error(error);

  return (
    <>

        <ErrorState
          title="Something went wrong"
          description="Please refresh the page or try again later."
          action={
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-brand px-5 py-2.5 font-medium text-white transition hover:bg-brand/90"
            >
              Refresh Page
            </button>
          }
        />

    </>
  )
}

function NotFoundComponent() {
  return (
    <ErrorState
      title="Page Not Found"
      description="Sorry, we couldn't find the page you're looking for."
      action={
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 font-medium text-white transition hover:bg-brand/90"
        >
          Go Home
        </Link>
      }
    />
  );
}

export const Route = createRootRouteWithContext()({
  component: RootLayout,
  errorComponent: RootErrorComponent,
  notFoundComponent: NotFoundComponent
})