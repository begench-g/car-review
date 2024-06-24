import Image from "next/image";
import React from "react";
import ProfileIcon from "@public/icons/silhouette-male-icon.svg";

const ProfileButton = () => {
  return <Image src={ProfileIcon} alt="profile" width={18} />;
};

export default ProfileButton;
