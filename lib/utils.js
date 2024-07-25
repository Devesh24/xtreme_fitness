import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const handleError = (error) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export const convertFileToUrl = (file) => URL.createObjectURL(file)

export const slugToTitle = (slug) => {
  return slug
    .split('-') // Split the slug into words using hyphens as the delimiter
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back together with spaces
}