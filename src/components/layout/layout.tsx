import Head from "next/head";
import MainHeader from "./main-header";

export type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  title = "NextJS Events",
  description = "Find a lot of great events that allow you to evolve...",
  children,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
