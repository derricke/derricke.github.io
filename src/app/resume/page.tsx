"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function ResumePage() {
  useEffect(() => {
    redirect(
      "https://drive.google.com/file/d/1uEMAJjRM2XcgCggiL5vOAUrwb1FZKwsW/view"
    );
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-semibold text-center">Redirecting to my resume...</h1>
    </div>
  );
}
