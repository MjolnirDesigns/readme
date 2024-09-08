import Link from "next/link";
import path from "path";
import { FaGithub, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socials = [
    {icon: <FaGithub />, path: ''},
    {icon: <FaInstagram />, path: ''},
    {icon: <FaXTwitter />, path: ''},
    {icon: <FaYoutube />, path: ''},
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Social;