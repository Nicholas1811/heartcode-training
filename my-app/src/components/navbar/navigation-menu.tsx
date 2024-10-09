import { NavigationMenu} from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { NavigationItem, NavItem } from "./navigation-item"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const navItem: NavItem[] = [
    { navigationLink: "/", navigationDescription: "Project Heartcode" },
    { navigationLink: "/quiz", navigationDescription: "Quiz" },
    { navigationLink: "/about-me", navigationDescription: "About Me" },

]

export function NavigationBar() {
    return (
            <NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[60px] bg-muted px-5">
                <div className="flex flex-row justify-start gap-4">
                    {navItem.map((navItem, index) => <NavigationItem key={index} navigationLink={navItem.navigationLink} navigationDescription={navItem.navigationDescription} />)}
                </div>
                <div className="flex flex-row justify-end">
                    <div className = "flex gap-4">
                    <ModeToggle />
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    </div>
                </div>
            </NavigationMenu>
    )
}