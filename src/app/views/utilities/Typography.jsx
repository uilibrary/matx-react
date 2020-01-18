import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const Typography = () => {
  return (
    <div className="m-sm-30">
      <div  className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Typography" }
          ]}
        />
      </div>
      <SimpleCard title="typography">
        <div className="py-8"></div>
        <div className="flex flex-middle flex-wrap flex-space-between">
          <code>.capitalize</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="capitalize">Capitalize String</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-middle flex-wrap flex-space-between">
          <code>.uppercase</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="uppercase">UPPERCASE STRING</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-middle flex-wrap flex-space-between">
          <code>.lowercase</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="lowercase">lowercase string</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-middle flex-wrap flex-space-between">
          <code>.font-weight-normal</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className=".font-weight-normal">Converts bold text to normal text</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-middle flex-wrap flex-space-between">
          <code>.font-weight-500</code>
          <span className="m-0 text-muted">font-weight: [300,500,600]</span>
          <div className="highlight-js">
            <Highlight className="html">{`<div className=".font-weight-500">font-weight: 500</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-middle flex-wrap flex-space-between">
          <code>.font-size-13</code>
          <span className="m-0 text-muted">font-size: [13,18,30,32]</span>
          <div className="highlight-js">
            <Highlight className="html">{`<div className=".font-size-13">font-size-13</div>`}</Highlight>
          </div>
        </div>
      </SimpleCard>
    </div>
  );
};

export default Typography;
