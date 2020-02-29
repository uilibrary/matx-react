import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const Position = () => {
  const classList = [
    {
      title: "position-relative",
      description: `<div className="position-relative">position: relative</div>`
    },
    {
      title: "x-center",
      description: `<div className="x-center">align self to center horizontally</div>`
    },
    {
      title: "y-center",
      description: `<div className="y-center">align self to center vertically</div>`
    },
    {
      title: "overflow-auto",
      description: `<div className="overflow-auto">overflow-auto</div>`
    },
    {
      title: "overflow-hidden",
      description: `<div className="overflow-hidden">overflow-hidden</div>`
    },
    {
      title: "text-center",
      description: `<div className="text-center">text-align: center</div>`
    },
    {
      title: "text-right",
      description: `<div className="text-right">text-align: right</div>`
    },
    {
      title: "text-left",
      description: `<div className="text-left">text-align: left</div>`
    },
    {
      title: "align-middle",
      description: `<div className="align-middle">vertical-align: middle</div>`
    },
    {
      title: "cursor-pointer",
      description: `<div className="cursor-pointer">cursor: pointer</div>`
    },
    {
      title: "cursor-move",
      description: `<div className="cursor-move">cursor: move</div>`
    }
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Position" }
          ]}
        />
      </div>
      <SimpleCard title="position">
        <div className="py-2"></div>
        {classList.map(item => (
          <div
            className="flex flex-wrap justify-between items-center"
            key={item.title}
          >
            <code>.{item.title}</code>
            <div className="highlight-js">
              <Highlight className="html">{item.description}</Highlight>
            </div>
          </div>
        ))}
      </SimpleCard>
    </div>
  );
};

export default Position;
