import Box from "@/components/Box";
import Input from "@/components/Input";
import PageLayout from "../Layout";

export default function Identity() {
  return (
    <PageLayout>
      <Box>
        <div className="pt-4 flex flex-col gap-4 w-40 items-center">
          <div className="flex justify-center items-center bg-gray-300 w-28 h-28 rounded-full cursor-pointer"></div>
          <div>Profile Picture</div>
        </div>
      </Box>
      <Box>
        <div className="pt-4 flex flex-col gap-4 w-40 items-center">
          <Input placeholder="Username" value="Tyranosauce" />
          <div>Username</div>
        </div>
      </Box>
      <Box>
        <div className="pt-4 flex flex-col gap-4 w-40 items-center">
          <Input
            placeholder="Blockchain ID"
            value="0xDe4bYytd82iyHuQm0p3m8vbH"
          />
          <div>Blockchain ID</div>
        </div>
      </Box>
    </PageLayout>
  );
}
