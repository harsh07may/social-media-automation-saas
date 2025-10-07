import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Calendar,
  CommandIcon,
  FileTextIcon,
  Home,
  Inbox,
  InboxIcon,
  LayoutDashboard,
  PlusIcon,
  Search,
  Settings,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { NavUser } from "./NavUser";

// Menu items.
const items = [
  {
    title: "Browse Templates",
    url: "/templates",
    icon: InboxIcon,
  },
  {
    title: "Create Post",
    url: "/create",
    icon: PlusIcon,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
];

const user = {
  name: "Harsh",
  email: "harsh@gmail.com",
  avatar: "/avatars/shadcn.jpg",
};

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center gap-2 text-left text-sm">
                  <SparklesIcon className=" text-purple-500" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ContentAI
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton size="lg" asChild>
                <Link href={item.url}>
                  <item.icon className="w-6 h-6" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;
