import Desktop from "./desktop";
import { Taskbar } from "./taskbar";

export default function Page() {
  return (
    <div
      unselectable="on"
      className="h-full w-full flex flex-col justify-center items-center"
    >
      <Desktop />
      <Taskbar />
    </div>
  );
}
