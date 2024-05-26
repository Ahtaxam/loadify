import React from "react";
import ImageCarousel from "./imageCarousel";
import Button from "./button";

const Images = [
    "https://picsum.photos/150/?random1",
    "https://picsum.photos/150/?random2",
    "https://picsum.photos/150/?random3",
    "https://picsum.photos/150/?random4"
]

function InventoryDetail() {
  return (
    <div className="shadow-xl w-[80%] mx-auto p-4 mt-8">
      <p className="text-center text-xl font-bold">Inventory Detail</p>
      <div className="flex justify-end">
        <Button className="bg-navy w-[100px] hover:bg-white hover:text-black hover:border-2 hover:border-dotted">Chat</Button>
      </div>
      <div className="flex justify-between p-4">
        <p>
          <span className="font-bold">Type: </span> BAG
        </p>
        <p>
          <span className="font-bold">Size: </span> Medium
        </p>
        <p>
          <span className="font-bold">Weight: </span> 5kg
        </p>
      </div>

      <div className="flex justify-between p-4">
        <p>
          <span className="font-bold">Owner Name: </span> Ahmed Khan
        </p>
        <p>
          <span className="font-bold">Phone Number: </span> 6547865348765
        </p>
      </div>
      <p className="p-4">
        <span className="font-bold">Location: </span>
        MAO College, near jain mandir, Lahore, punjab
      </p>

      <div className="flex justify-between p-4">
        <p>
          <span className="font-bold">Country: </span> Pakistan
        </p>
        <p>
          <span className="font-bold">State: </span> Punjab
        </p>
        <p>
          <span className="font-bold">City: </span> Lahore
        </p>
      </div>
      <p className="p-4 font-bold">Inventory Images</p>
      <ImageCarousel data={Images}/>
    </div>
  );
}

export default InventoryDetail;
