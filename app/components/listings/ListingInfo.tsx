"use client";

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import ListingCategory from "./ListingCategory";
import { Listing } from "../modals/Listing";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  listing: Listing;
}

const ListingInfo: React.FC<ListingInfoProps> = ({ listing, category }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          {/* <div>{guestCount} guests</div> */}
          <div>5 guests</div>

          {/* <div>{roomCount} rooms</div> */}
          <div>5 rooms</div>

          {/* <div>{bathroomCount} bathrooms</div> */}
          <div>6 bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {listing.description}
      </div>
      <hr />
      <Map />
    </div>
  );
};

export default ListingInfo;
