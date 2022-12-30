import Box from "@/components/Box";
import Input from "@/components/Input";
import PageLayout from "../Layout";

export default function Security() {
  return (
    <PageLayout>
      <Box>
        <div className="pt-4 flex flex-col gap-4 w-40 items-center">
          <div className="underline">Change Password</div>
          <Input placeholder="Password" type="password" />
          <div>Password</div>
        </div>
      </Box>
      <Box>
        <div className="pt-4 flex flex-col gap-4 w-40 items-center">
          <div className="underline">Add recovery method</div>
          <div>Phone</div>
          <Input placeholder="Phone" value="+1 (408) 981 3520" />
          <div>Recovery Methods</div>
        </div>
      </Box>
    </PageLayout>
  );
}
