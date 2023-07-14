import { ReactNode } from "react";
import { SiMicrosoftacademic } from "react-icons/si";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";
import { HiDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";

interface NavCon {
  title: string;
  icon: ReactNode; // Specify the prop type as ReactNode
  to: string;
  gap?: boolean;
}

export const SideBarItem: NavCon[] = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    to: "/admin-dashboard",
  },
  {
    title: "Product list",
    icon: <SiMicrosoftacademic />,
    to: "/admin-dashboard/createteacher",
    gap: true,
  },
  {
    title: "Product Edit",
    icon: <FaMoneyBillAlt />,
    to: "/admin-dashboard/createstudent",
  },
  {
    title: "New Product",
    icon: <CgCommunity />,
    to: "/admin-dashboard/expenses",
  },
  {
    title: "Order list",
    icon: <HiDocumentReport />,
    to: "/admin-dashboard/report",
    gap: true,
  },
  {
    title: "Order Details",
    icon: <IoIosNotifications />,
    to: "/admin-dashboard/notifications",
  },
];
