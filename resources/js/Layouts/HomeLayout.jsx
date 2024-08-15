import Menu from "@/Components/Menu";
import MobileMenu from "@/Components/MobileMenu";

export default function HomeLayout({ children }) {
    return (
        <>
            <Menu />
            <MobileMenu />

            {children}
        </>
    );
}
