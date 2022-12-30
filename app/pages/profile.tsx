import ProfileMenu from "@/components/Pages/Menu/ProfileMenu";
import Identity from "@/components/Pages/Profile/Identity";
import Security from "@/components/Pages/Profile/Security";
import ShadowBox from "@/components/ShadowBox";
import TopBar from "@/components/TopBar";
import Head from "next/head";
import { useState } from "react";

export default function ProfilePage() {
  const [page, setPage] = useState<string>("Identity");
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by Nexus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <div className="p-4 flex items-start gap-4">
        <ShadowBox>
          <ProfileMenu setPage={setPage} />
        </ShadowBox>
        {page === "Identity" && <Identity />}
        {page === "Security" && <Security />}
      </div>
    </>
  );
}