"use client";

// import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
// import { toast } from "react-hot-toast";
// import { Range } from "react-date-range";
import { useRouter } from "next/navigation";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingHosts from "@/app/components/listings/ListingHosts";
import { Listing } from "@/app/components/modals/Listing";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingClientProps {
  listing: Listing;
}

const ListingClient: React.FC<ListingClientProps> = ({ listing }) => {
  const router = useRouter();

  //   const disabledDates = useMemo(() => {
  //     let dates: Date[] = [];

  //     reservations.forEach((reservation: any) => {
  //       const range = eachDayOfInterval({
  //         start: new Date(reservation.startDate),
  //         end: new Date(reservation.endDate)
  //       });

  //       dates = [...dates, ...range];
  //     });

  //     return dates;
  //   }, [reservations]);

  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  const [isLoading, setIsLoading] = useState(false);
  //   const [totalPrice, setTotalPrice] = useState(listing.price);
  //   const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  //   useEffect(() => {
  //     if (dateRange.startDate && dateRange.endDate) {
  //       const dayCount = differenceInDays(
  //         dateRange.endDate,
  //         dateRange.startDate
  //       );

  //       if (dayCount && listing.price) {
  //         setTotalPrice(dayCount * listing.price);
  //       } else {
  //         setTotalPrice(listing.price);
  //       }
  //     }
  //   }, [dateRange, listing.price]);

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead singleList={listing} />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo category={category} listing={listing} />
            <div
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <ListingHosts disabled={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
