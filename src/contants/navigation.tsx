import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { NavigationItem } from "../types/types";

export const navigation: NavigationItem[] = [
    {
        label: "TV Shows",
        href: "tv",
        icon: <PiTelevisionFill />
    },
    {
        label: "Movies",
        href: "movie",
        icon: <BiSolidMoviePlay />
    }
];

export const mobileNavigation: NavigationItem[] = [
    {
        label: "Home",
        href: "/",
        icon: <MdHomeFilled />
    },
    ...navigation,
    {
        label: "Search",
        href: "/search",
        icon: <IoSearchOutline />
    }
];
