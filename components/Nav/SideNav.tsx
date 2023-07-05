import React from "react";
import { SideBarItem } from "./RouterSide";
import Image from "next/image";
import Link from "next/link";

interface Iprops {
  changeFalse: () => void;
  change?: boolean;
}

const SideBar: React.FC<Iprops> = ({ changeFalse }) => {
  return (
    <div>
      <div className="p-4">
        {SideBarItem.map((props, index) => (
          <Link
            href={props.to}
            onClick={changeFalse}
            className="flex items-center mt-4 pl-4"
          >
            <div className="mr-3 text-2xl text-white">{props.icon(props)}</div>
            {/* <span>{props.name}</span> */}
          </Link>
        ))}
      </div>

      {/* <div className="h-20 w-full flex justify-center">
        <Image src={pix} alt="Logo" className="w-3/4 h-auto" />
        <div>logo</div>
      </div> */}
    </div>
  );
};

export default SideBar;
