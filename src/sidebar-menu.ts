import { BiSolidBusiness, BiPurchaseTagAlt, BiSearchAlt,BiLogoProductHunt } from "react-icons/bi";
import {FaHandsHelping} from "react-icons/fa";
import {AiTwotonePieChart} from "react-icons/ai";
import {RxDashboard, RxUpdate} from "react-icons/rx";
import {SiMarketo} from "react-icons/si";
import {FiTruck,FiUsers} from "react-icons/fi";
import {TbAdjustmentsX} from "react-icons/tb";
import { type IconType } from "react-icons/lib";
import { BsList } from "react-icons/bs";

export type NavigationMenuType = {
    name: string;
    href: string;
    icon: IconType;
    current: boolean;
    role: string;
    active: boolean;
    subMenu:
      | {
          name: string;
          href: string;
          role: string;
          icon: IconType;
          current: boolean;
        }[];
  }[];
export const mySideBarMenu: NavigationMenuType = [
    {
      name: "Dashboard",
      href: "/",
      role: "Admin",
      icon: RxDashboard,
      current: false,
      active: false,
      subMenu: [],
    },
    {
      name: "Search",
      href: "/search/quick-search",
      role: "Admin",
      icon: BiSearchAlt,
      current: false,
      active: false,
      subMenu: [],
    },
  
  
  
  
  
  
    {
      name: "Products",
      href: "#",
      role: "SuperAdmin",
      icon: BiLogoProductHunt,
      current: false,
      active: false,
      subMenu: [
        {
          name: "Add New",
          href: "/product/new-product",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Product List",
          href: "/product/product-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Category List",
          href: "/product/category-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
    {
      name: "Orders",
      href: "#",
      role: "SuperAdmin",
      icon: BsList,
      current: false,
      active: false,
      subMenu: [
        {
          name: "New Order",
          href: "/orders/new-order",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Order List",
          href: "/orders/order-status-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
    {
      name: "Order Update",
      href: "#",
      role: "SuperAdmin",
      icon: RxUpdate,
      current: false,
      active: false,
      subMenu: [
        {
          name: "Bulk Confirm",
          href: "/order-update/bulk-confirm",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
  
      ],
    },
    {
      name: "Purchase",
      href: "#",
      role: "SuperAdmin",
      icon: BiPurchaseTagAlt,
      current: false,
      active: false,
      subMenu: [
        {
          name: "New Purchase",
          href: "/purchase/new-purchase",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Purchase List",
          href: "/purchase/purchase-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
  
      ],
    },
    {
      name: "Delivery Methods",
      href: "#",
      role: "SuperAdmin",
      icon: FiTruck,
      current: false,
      active: false,
      subMenu: [
        {
          name: "Delivery Method List",
          href: "/delivery-method/dm-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Add Delivery Method",
          href: "/delivery-method/add-new-dm",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
    {
      name: "Business",
      href: "#",
      role: "SuperAdmin",
      icon: BiSolidBusiness,
      current: false,
      active: false,
      subMenu: [
        {
          name: "Business List",
          href: "/business/business-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Add New Business",
          href: "/business/add-business",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
  
    {
      name: "Markerplace",
      href: "#",
      role: "All",
      icon: SiMarketo,
      current: false,
      active: false,
      subMenu: [
        {
          name: "New Mkt Order",
          href: "/marketplace/new-mkt-order",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Mkt Order List",
          href: "/marketplace/mkt-order-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "New Mkt Shop",
          href: "/marketplace/new-shop",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
  
    {
      name: "Adjsut Stock",
      href: "#",
      role: "SuperAdmin",
      icon: TbAdjustmentsX,
      current: false,
      active: false,
      subMenu: [
        {
          name: "New Adjust Stock",
          href: "/adjust-stock/new-adjust-stock",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Adjust Stock List",
          href: "/adjust-stock/adjust-stock-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
    {
      name: "Users",
      href: "#",
      role: "SuperAdmin",
      icon: FiUsers,
      current: false,
      active: false,
      subMenu: [
        {
          name: "User List",
          href: "/user/user-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Add New User",
          href: "/user/add-user",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
    {
      name: "Reseller",
      href: "#",
      role: "SuperAdmin",
      icon: FaHandsHelping,
      current: false,
      active: false,
      subMenu: [
        {
          name: "New Reseller Order",
          href: "/resellers/new-reseller-order",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Reseller Order List",
          href: "/resellers/reseller-order-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "Reseller List",
          href: "/resellers/reseller-list",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
        {
          name: "New Reseller",
          href: "/resellers/new-reseller",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
      ],
    },
    {
      name: "Reports",
      href: "#",
      role: "SuperAdmin",
      icon: AiTwotonePieChart,
      current: false,
      active: false,
      subMenu: [
        {
          name: "Report Home",
          href: "/reports/report-home",
          role: "DropShipper",
          icon: BsList,
          current: false,
        },
       
      ],
    },
  ];