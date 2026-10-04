import React from "react";
import { MoveRight } from "lucide-react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1789734822512-5e00e076afa1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <RightCardContent />
    </div>
    
  );
};

export default RightCard;
