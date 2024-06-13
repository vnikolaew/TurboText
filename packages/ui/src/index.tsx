import { ReactNode } from "react"
import { ExternalToast } from "sonner"
import { toast as sonnerToast } from "sonner";

export * from "./components/ui/button"
export * from "./components/ui/switch"
export * from "./components/ui/separator"
export * from "./components/ui/avatar"
export * from "./components/ui/card"
export * from "./components/ui/tooltip"
export * from "./components/ui/dropdown-menu"
export * from "./components/ui/sonner"
export * from "./components/ui/UserAvatar"

// eslint-disable-next-line no-undef
export const toast = ({ message, ...config }: ExternalToast & { message: ReactNode }) => sonnerToast(message, config);
