import Link from "next/link";
import Position from "./Controls/Position";
import Rotation from "./Controls/Rotation";

export default function Footer(props) {
  return (
    <>
      <footer
        className={
          "w-full h-[10vh] flex justify-between items-center gap-2 px-8 text-xl font-medium"
        }
      >
        <Credit />
        <div className="h-full flex gap-12">
          <Rotation
            model={props.model}
            setModel={props.setModel}
            positions={props.positions}
          />

          <Position
            model={props.model}
            setModel={props.setModel}
            positions={props.positions}
          />
        </div>
      </footer>
    </>
  );
}

function Credit() {
  return (
    <div className="relative top-[-0.5rem] flex gap-2">
      Made with 🔥 by
      <Link
        href={"https://github.com/tomcodedthis"}
        className="font-bold underline underline-offset-2"
      >
        tomcodedthis
      </Link>
    </div>
  );
}
