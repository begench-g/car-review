import React from "react";
import Image from "next/image";
import RingBell from "@/public/icons/bell-icon.svg";


const Notifiations = () => {
  return <Image src={RingBell} alt="ring bell" width={18} height={18} />;
};

export default Notifiations;
