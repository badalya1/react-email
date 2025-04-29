import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Button, Heading, Text } from "../components";
import { Shell } from "../components/shell";
import { emailsDirectoryAbsolutePath } from "../utils/emails-directory-absolute-path";
import logo from "./logo.webp";

const Home = () => {
  const baseEmailsDirectoryName = path.basename(emailsDirectoryAbsolutePath);

  return (
    <Shell>
      <div className="relative max-w-lg mx-auto p-8 flex items-center justify-center h-[inherit]">
        <div className="relative z-10 flex flex-col text-center items-center">
          <Image
            alt="IO Email Icon"
            className="mb-8"
            height={144}
            src={logo}
            style={{
              boxShadow: "0px 0px 50px 2px #ffffff38",
              borderRadius: "13px",
            }}
            width={141}
          />
          <Heading as="h2" size="6" weight="medium">
            Welcome to io.net emails
          </Heading>
          <Text as="p" className="mt-2 mb-4">
            To start developing your emails, you can create a<br />
            <code className="text-slate-12">.jsx</code> or{" "}
            <code className="text-slate-12">.tsx</code> file under your{" "}
            <code className="text-slate-12">{baseEmailsDirectoryName}</code>{" "}
            folder.
          </Text>
          <Text as="p" className="mt-2 mb-4">
            Note: This project is private and should not be shared in public.
          </Text>

          <Button asChild size="3">
            <Link href="https://react.email/docs">
              Check the react-email docs
            </Link>
          </Button>
        </div>
      </div>
    </Shell>
  );
};

export default Home;
