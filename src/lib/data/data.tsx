// services section

import uiUxImage from "../../assets/ui-ux.webp";
import developmentImage from "../../assets/development.webp";
import animationImage from "../../assets/animation.webp";
import type { IInfo, TCard } from "../../types";
import { BiSupport } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoPricetagOutline } from "react-icons/io5";


  export const cardData: TCard[] = [
    {
      title: "Ui/Ux",
      image: uiUxImage,
    },
    {
      title: "Development",
      image: developmentImage,
    },
    {
      title: "Animation",
      image: animationImage,
    },
    {
      title: "Analytics",
      image: developmentImage,
    },
  ];


  // why us section

  export const info: IInfo[] = [
    {
      logo: <HiOutlineLightBulb />,
      heading: "Innovative Ideas",
      description:
        "We bring fresh and creative ideas to the table, ensuring your project stands out in a crowded market.",
    },
    {
      logo: <IoPricetagOutline />,
      heading: "Honest Pricing",
      description:
        " We believe in transparency and fairness, offering competitive pricing without hidden costs.",
    },
    {
      logo: <BiSupport />,
      heading: "Dedicated Support",
      description:
        " Our team is here to assist you every step of the way, providing reliable support and guidance.",
    },
  ];