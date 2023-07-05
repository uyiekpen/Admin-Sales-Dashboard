import { IconBaseProps, IconType } from "react-icons";
import { SiMicrosoftacademic } from "react-icons/si";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";
import { HiDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";

interface NavCon {
  name: string;
  icon: IconType;
  to: string;
}

export const SideBarItem: NavCon[] = [
  {
    name: "Dashboard",
    icon: (prop: IconBaseProps) => <MdDashboard />,
    to: "/admin-dashboard",
  },
  {
    name: "Product list",
    icon: (prop: IconBaseProps) => <SiMicrosoftacademic />,
    to: "/admin-dashboard/createteacher",
  },
  {
    name: "Product Edit",
    icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
    to: "/admin-dashboard/createstudent",
  },
  {
    name: "New Product",
    icon: (prop: IconBaseProps) => <CgCommunity />,
    to: "/admin-dashboard/expenses",
  },
  {
    name: "Order list",
    icon: (prop: IconBaseProps) => <HiDocumentReport />,
    to: "/admin-dashboard/report",
  },

  {
    name: "Order Details",
    icon: (prop: IconBaseProps) => <IoIosNotifications />,
    to: "/admin-dashboard/notifications",
  },
];
