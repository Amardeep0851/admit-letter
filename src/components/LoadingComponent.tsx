"use client"
import { useEffect } from "react";

export default function LoadingComponent() {
  useEffect(() => {
    const onLoad = () => console.log("load");

    window.addEventListener("click",(e) => {
      console.log(e.currentTarget);
    })
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return <div>LoadingComponent</div>;
}
