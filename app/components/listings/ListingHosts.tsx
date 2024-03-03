"use client";

import Button from "../Button";

interface ListingHostsProps {
  disabled?: boolean;
}

const ListingHosts: React.FC<ListingHostsProps> = ({ disabled }) => {
  return (
    <div
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <hr />

      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve with Airbnb" />
        <Button disabled={disabled} label="Reserve with x " />
        <Button disabled={disabled} label="Reserve with y" />
        <Button disabled={disabled} label="Reserve w " />
        <Button disabled={disabled} label="Reserve z" />
      </div>
      <hr />
      {/* <div
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      ></div> */}
    </div>
  );
};

export default ListingHosts;
