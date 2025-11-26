"use client";
import { signIn } from "next-auth/react";
import PageHeader from "../components/PageHeader";
import LoginImg from "@/public/images/login.jpg";
import BgOverlay from "@/public/images/hero-bg-overlay.png";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Handle existing session redirect
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return <div>Redirecting...</div>;
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div>
      <PageHeader
        image={LoginImg}
        title={"Login"}
        desc={
          "Our menu features fresh, seasonal ingredients, expertly crafted dishes, and customizable options to suit any event."
        }
      />
      <div
        className="flex justify-center items-center bg-[#F4E7DF] min-h-[calc(100vh-100px)]"
        style={{
          backgroundImage: `url(${BgOverlay.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          onClick={handleGoogleSignIn}
          className="px-6 py-3 bg-black text-white w-full max-w-sm cursor-pointer flex items-center justify-center gap-2"
        >
          {/* <FcGoogle />  */}
          Login with Google
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
