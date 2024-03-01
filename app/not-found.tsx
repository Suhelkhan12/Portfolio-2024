/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function NotFound() {
  return (
    <section className="relative z-50 flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-8xl font-bold text-ligthFaintWhite">404</h1>
        <p className="text-2xl text-basicLightGray">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <PrimaryButton>Return to Home</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
