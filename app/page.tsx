import Image from "next/image";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { listings } from "./components/examples/apartments";

export default function Home() {
  const isEmpty = false;
  if (isEmpty) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <div className="pt-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing: any) => {
          return <ListingCard key={listing.id} data={listing} />;
        })}
      </div>
    </Container>
  );
}
