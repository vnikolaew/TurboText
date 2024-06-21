import { ReactNode } from "react";
import { ExternalToast, toast as sonnerToast } from "sonner";

export * from "./components/ui/button"
export * from "./components/ui/badge"
export * from "./components/ui/sheet"
export * from "./components/ui/scroll-area"
export * from "./components/ui/table"
export * from "./components/ui/accordion"
export * from "./components/ui/select"
export * from "./components/ui/alert"
export * from "./components/ui/toggle-group"
export * from "./components/ui/switch"
export * from "./components/ui/dialog"
export * from "./components/ui/separator"
export * from "./components/ui/textarea"
export * from "./components/ui/avatar"
export * from "./components/ui/card"
export * from "./components/ui/input"
export * from "./components/ui/skeleton"
export * from "./components/ui/progress"
export * from "./components/ui/tooltip"
export * from "./components/ui/dropdown-menu"
export * from "./components/ui/sonner"
export * from "./components/ui/UserAvatar"

// eslint-disable-next-line no-undef
export const toast = ({ message, ...config }: ExternalToast & { message: ReactNode }) => sonnerToast(message, config);
