import Image from "next/image";

function Flare({ top = 1, left = 1, right = 1, bottom = 1 }) {
  return (
    <div
      className={`absolute top-[${top}] left-[${left}] right-[${right} bottom-[${bottom}]] flare `}
    >
      <Image
        width={prop.w}
        height={prop.h}
        src={prop.plf}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Flare;
