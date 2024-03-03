"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Listing,
  Location,
  Features,
  ListingDetails,
  SleepingSituation,
  MaxGuests,
} from "../modals/Listing";

interface ListingCardProps {
  key: string;
  data: Listing;
  onAction?: boolean;
  actionLabel?: string;
  disabled?: boolean;
  actionId?: string;
}
const ListingCard: React.FC<ListingCardProps> = ({
  key,
  data,
  onAction,
  actionId,
  actionLabel,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/listings/${data.id}`);
      }}
      className="col-span-1 cursor-pointer group"
    >
      <div className=" border aspect-square w-full relative overflow-hidden rounded-x1">
        <Image
          fill
          alt="listing"
          src={data.imageSrc}
          className="object-cover h-50 w-50  group-hover:scale-110 transition"
        />
      </div>
      <div className="font-semibold text-lg ">{data.location?.city}</div>
      <div className="font-light text-neutral-500">{data.category}</div>
      <div className="flex flex-row items-center gap-1"></div>
    </div>
  );
};

export default ListingCard;
