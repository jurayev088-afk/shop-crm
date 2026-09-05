import { LayoutDashboardIcon, PlusCircle, Shapes, ShoppingCart, Users } from "lucide-react"
import type { ElementType } from "react"

interface NavSidebar {
    id: string,
    path: string,
    label: string,
    icon: ElementType
}

export const sidebarRoutes: NavSidebar[] = [
    { id: "dashboard", path: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
    { id: "order", path: "/order", label: "Order Management", icon: ShoppingCart },
    { id: "custom", path: "/customers", label: "Customers", icon: Users },
    { id: "category", path: "/categories", label: "Categories", icon: Shapes },
    { id: "add", path: "/addProduct", label: "Add Products", icon: PlusCircle }
]