import { VerificationHandler } from "@/components/verification-handler"
import { Suspense } from "react"

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Suspense fallback={<VerificationSkeleton />}>
          <VerificationHandler />
        </Suspense>
      </div>
    </div>
  )
}

function VerificationSkeleton() {
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
