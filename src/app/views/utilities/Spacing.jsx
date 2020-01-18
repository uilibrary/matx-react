import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const Spacing = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Spacing" }
          ]}
        />
      </div>
      <SimpleCard title="Spacing">
        <p className="m-0">
          The classes are named using the format
          <code>(property)(sides)-(size)</code>
        </p>
        <p>
          Where <em>property</em> is one of:
        </p>
        <ul>
          <li>
            <code>m</code> - for classes that set <code>margin</code>
          </li>
          <li>
            <code>p</code> - for classes that set <code>padding</code>
          </li>
        </ul>
        <p>
          Where <em>sides</em> is one of:
        </p>
        <ul>
          <li>
            <code>t</code> - for classes that set <code>margin-top</code> or{" "}
            <code>padding-top</code>
          </li>
          <li>
            <code>b</code> - for classes that set <code>margin-bottom</code> or{" "}
            <code>padding-bottom</code>
          </li>
          <li>
            <code>l</code> - for classes that set <code>margin-left</code> or{" "}
            <code>padding-left</code>
          </li>
          <li>
            <code>r</code> - for classes that set <code>margin-right</code> or{" "}
            <code>padding-right</code>
          </li>
          <li>
            <code>x</code> - for classes that set both <code>*-left</code> and{" "}
            <code>*-right</code>
          </li>
          <li>
            <code>y</code> - for classes that set both <code>*-top</code> and{" "}
            <code>*-bottom</code>
          </li>
          <li>
            blank - for classes that set a <code>margin</code> or{" "}
            <code>padding</code> on all 4 sides of the element
          </li>
        </ul>

        <h6 className="mb-16 pt-24">
          Example{" "}
          <span className=".font-weight-normal text-muted">
            [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]
          </span>
        </h6>
        <div className="flex flex-wrap flex-middle flex-space-between px-16">
          <code>.m-0</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="m-0">margin 0px</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-wrap flex-middle flex-space-between px-16">
          <code>.mx-4</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="mx-4">margin right 4px & margin left 4-px</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-wrap flex-middle flex-space-between px-16">
          <code>.p-0</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="p-0">padding 0px</div>`}</Highlight>
          </div>
        </div>
        <div className="flex flex-wrap flex-middle flex-space-between px-16">
          <code>.py-8</code>
          <div className="highlight-js">
            <Highlight className="html">{`<div className="py-8">padding top 8px & padding bottom 8px</div>`}</Highlight>
          </div>
        </div>
      </SimpleCard>
    </div>
  );
};

export default Spacing;
