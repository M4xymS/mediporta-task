import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberWithSpaces(num: number | string) {

  if (typeof num === "string") {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}