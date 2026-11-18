import FileExplorer from "./fileexplorer";
import WindowManager from "./windowmanager";

export default function Desktop() {
  return (
    <>
      <div className="flex flex-row w-full h-full justify-center">
        <FileExplorer />
        <WindowManager />
      </div>
    </>
  );
}
