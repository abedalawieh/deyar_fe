import EmptyState from "@/app/components/EmptyState";
import { singleList } from "@/app/components/examples/apartments";
import ListingClient from "./ListingClient";
const ListingPage = async () => {
  if (singleList) {
    return <EmptyState />;
  }
  return <ListingClient listing={singleList} />;
};

export default ListingPage;
