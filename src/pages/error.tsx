import { ErrorHandler } from "@/components/error-handler"
import { Suspense } from "react"

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Suspense fallback={<ErrorSkeleton />}>
          <ErrorHandler />
        </Suspense>
      </div>
    </div>
  )
}

function ErrorSkeleton() {
  return (
    <div className="text-center space-y-4">
      <div className="mx-auto w-12 h-12 bg-muted rounded-full animate-pulse" />
      <div className="space-y-2">
        <div className="h-6 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded animate-pulse" />
      </div>
    </div>
  )
}
