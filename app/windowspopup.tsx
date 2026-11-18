import Image from "next/image";

export default function WindowsPopUp() {
  return (
    <div className={"absolute w-80 h-96 bottom-8"}>
      <div className={"flex flex-col w-full h-full"}>
        <div className={"flex flex-col h-full border"}>
          <h1 className={"title"}>Photo of Me!</h1>
          <div className={"relative w-full h-full"}>
            <Image src={"/AdamBeer1.jpg"} alt="Photo of me" fill={true} />
          </div>
        </div>

        <div className={"flex flex-col w-full border"}>
          <h1 className={"title"}>Links</h1>
          <div
            className={
              "w-full h-full flex flex-row justify-end items-center p-1"
            }
          >
            <a
              href="https://www.instagram.com/adam_cunard/"
              className={"button"}
            >
              Instagram
            </a>
            <a
              href="https://ca.linkedin.com/in/adam-cunard-3a4644287?trk=people-guest_people_search-card"
              className={"button"}
            >
              LinkedIn
            </a>
            <a href="https://github.com/AdamCanard" className={"button"}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
