import React from "react";

function Button(prop:any) {
  return (
    <div>
      <button className="rbutton hover:scale-[110%] ease-in-out duration-300">
        {prop.name}
      </button>
    </div>
  );
}

export default Button;
