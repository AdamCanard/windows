"use client";

import Image from "next/image";
import { useContext } from "react";
import { TaskbarContext } from "./taskbarcontext";
import FileExplorerImg from "@/public/Windows/FileExplorer.svg";
export default function FileExplorer() {
  const { openWindow } = useContext(TaskbarContext);
  return (
    <div className={"grid w-full h-full p-4"}>
      <div
        onClick={() => openWindow(<div></div>)}
        className={"w-24 h-24 flex items-center justify-center"}
      >
        <Image
          className={"hover:cursor-pointer"}
          src={FileExplorerImg}
          alt={"File Explorer Desktop Image"}
        />
      </div>
    </div>
  );
}
