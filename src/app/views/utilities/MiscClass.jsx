import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const MiscClass = () => {
  const classList = [
    {
      title: "border-radius-0",
      description: `<div className="border-radius-0">border-radius: 0px</div>`
    },
    {
      title: "border-radius-4",
      description: `<div className="border-radius-4">border-radius: 4px</div>`
    },
    {
      title: "border-radius-8",
      description: `<div className="border-radius-8">border-radius: 8px</div>`
    },
    {
      title: "border-none",
      description: `<div className="border-none">border: none</div>`
    },
    {
      title: "box-shadow-none",
      description: `<div className="box-shadow-none">box-shadow: none</div>`
    },
    {
      title: "overflow-auto",
      description: `<div className="overflow-auto">overflow: auto</div>`
    },
    {
      title: "overflow-hidden",
      description: `<div className="overflow-hidden">overflow: hidden</div>`
    },
    {
      title: "cursor-pointer",
      description: `<div className="cursor-pointer">cursor: pointer</div>`
    },
    {
      title: "cursor-move",
      description: `<div className="cursor-move">cursor: move</div>`
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
            { name: "Miscellaneous" }
          ]}
        />
      </div>
      <SimpleCard title="Miscellaneous">
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

export default MiscClass;
