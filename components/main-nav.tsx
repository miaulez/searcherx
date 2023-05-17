import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">SearcherX</span>
      </Link>
      <Link
        href="/panel"
        className="flex text-sm items-center text-muted-foreground hover:text-black"
      >
        Panel
      </Link>
    </div>
  )
}
