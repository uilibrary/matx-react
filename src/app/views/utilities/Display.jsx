import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const Display = () => {
  const classList = [
    {
      title: "display-block",
      description: `<div className="display-block">display: block</div>`
    },
    {
      title: "display-none",
      description: `<div className="display-none">display: none</div>`
    },
    {
      title: "flex",
      description: `<div className="flex">display: flex</div>`
    },
    {
      title: "flex-column",
      description: `<div className="flex-column">display: flex; flex-direction: column</div>`
    },
    {
      title: "flex-wrap",
      description: `<div className="uppercase">flex-wrap: wrap</div>`
    },
    {
      title: "flex-start",
      description: `<div className="flex-start">justify-content: flex-start</div>`
    },
    {
      title: "flex-center",
      description: `<div className="flex-center">justify-content: flex-center</div>`
    },
    {
      title: ".flex-end",
      description: `<div className="flex-end">justify-content: flex-end</div>`
    },
    {
      title: "flex-middle",
      description: `<div className="flex-middle">align-items: center</div>`
    },
    {
      title: "flex-top",
      description: `<div className="flex-top">align-items: flex-start</div>`
    },
    {
      title: "flex-space-between",
      description: `<div className="flex-space-between">justify-content: flex-space-between</div>`
    },
    {
      title: "flex-space-around",
      description: `<div className="flex-space-around">justify-content: flex-space-around</div>`
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
      title: "text-align-right",
      description: `<div className="text-align-right">text-align: right</div>`
    },
    {
      title: "text-align-left",
      description: `<div className="text-align-left">text-align: left</div>`
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
      <div  className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Display" }
          ]}
        />
      </div>
      <SimpleCard title="display">
        <div className="py-8"></div>
        {classList.map(item => (
          <div
            className="flex flex-wrap flex-space-between flex-middle"
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

export default Display;
