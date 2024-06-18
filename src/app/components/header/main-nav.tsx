import * as React from "react"
import Link from "next/link"
import {  SocialIcon, ThemeToggle } from "@/components"
import { cn } from "@/util/utils"
import { NavItem } from "../../../types/nav"
import { siteMetadata } from "@/config/site"


interface MainNavProps {
  items?: NavItem[]
  titlePre?: string
}

export function MainNav({ items, titlePre }: MainNavProps) {
  return (
      <nav className="flex items-center space-x-2">
        {items?.length ? (
          <div className="flex gap-6">
            {items?.map(
              (item) =>
                item.href && (
                  <Link key={item.title} href={item.href}>
                    <span
                      className={cn(
                        "flex  text-sm font-medium hover:opacity-80 ",
                        item.disabled && "cursor-not-allowed opacity-80",
                        titlePre === item.title && "uppercase"
                      )}
                      aria-label={item.title}
                    >
                      {item.title}
                    </span>
                  </Link>
                )
            )}
          </div>
        ) : (
          <></>
        )}
  
        <SocialIcon kind="github" href={siteMetadata.links.github} size={5} />
        <ThemeToggle />
      </nav>
    
  )
}
