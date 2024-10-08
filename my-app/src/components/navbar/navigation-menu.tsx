import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";

export function NavigationBar() {
    return (
        <NavigationMenu className="list-none h-16">
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-me" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <ModeToggle>
            </ModeToggle>
            </NavigationMenu>
    )
}