"use client"

import { useId } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type MediaLoginModalProps = {
  open: boolean
  onClose: () => void
}

export function MediaLoginModal({ open, onClose }: MediaLoginModalProps) {
  const titleId = useId()

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900/40 p-4 pt-[62px] lg:pt-[72px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 id={titleId} className="text-lg font-semibold text-gray-900">
            Media login
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
            aria-label="Close media login"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
            Account
          </p>

          <form
            className="flex flex-col gap-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="media-login-email" className="text-sm font-semibold text-gray-900">
                Email
              </label>
              <Input
                id="media-login-email"
                type="email"
                autoComplete="email"
                autoFocus
                required
                placeholder="you@email.com"
                className="h-11 border-gray-300 bg-white text-gray-900"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="media-login-password" className="text-sm font-semibold text-gray-900">
                Password
              </label>
              <Input
                id="media-login-password"
                type="password"
                autoComplete="current-password"
                required
                className="h-11 border-gray-300 bg-white text-gray-900"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="h-11 w-full">
              Login
            </Button>
          </form>

          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="#sign-up" className="font-semibold text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 bg-gray-50 p-6">
          <p className="text-sm leading-[1.5] text-gray-700">
            Get exclusive investigations delivered to your inbox
          </p>
          <Button
            variant="default"
            size="lg"
            className="h-11 w-full bg-[#00143d] hover:bg-[#00143d]/90"
            asChild
          >
            <Link href="#contact" onClick={onClose}>
              Subscribe to Dispatch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M18.8806 3.2806C19.3882 2.77292 20.2114 2.77292 20.719 3.2806C21.2267 3.78828 21.2267 4.6114 20.719 5.11908L13.8384 11.9998L20.7196 18.881C21.2273 19.3887 21.2273 20.2118 20.7196 20.7194C20.2119 21.2271 19.3888 21.2271 18.8811 20.7194L11.9999 13.8382L5.11865 20.7194C4.61097 21.2271 3.78786 21.2271 3.28017 20.7194C2.77249 20.2118 2.77249 19.3887 3.28017 18.881L10.1614 11.9998L3.28072 5.11908C2.77304 4.6114 2.77304 3.78828 3.28072 3.2806C3.7884 2.77292 4.61152 2.77292 5.1192 3.2806L11.9999 10.1613L18.8806 3.2806Z" />
    </svg>
  )
}
