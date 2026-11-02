import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type Props = {
  children: React.ReactNode;
  hero?: boolean;
};

export function PageShell({ children, hero = false }: Props) {
  return (
    <>
      <SiteHeader variant={hero ? "hero" : "solid"} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
