"use client";

import Image from "next/image";

import Heading from "../Heading";
import { Listing } from "../modals/Listing";

interface ListingHeadProps {
  singleList: Listing;
}

const ListingHead: React.FC<ListingHeadProps> = ({ singleList }) => {
  return (
    <>
      <Heading
        title={singleList.title}
        subtitle={`${singleList.location?.city}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={singleList.imageSrc}
          fill
          className="object-cover w-full h-50 w-50"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        ></div>
      </div>
    </>
  );
};

export default ListingHead;
