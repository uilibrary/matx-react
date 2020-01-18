import React from "react";
import { Breadcrumb, SimpleCard } from "matx";

const Color = () => {
  return (
    <div className="m-sm-30">
      <div  className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Color" }
          ]}
        />
      </div>
      <SimpleCard title="Background Color Class">
        <div className="bg-white text-center py-24 w-100">.bg-white</div>
        <div className="bg-default text-center py-24 w-100">.bg-default</div>
        <div className="bg-paper text-center py-24 w-100">.bg-paper</div>
        <div className="bg-light-gray text-center py-24   w-100">
          .bg-light-gray
        </div>
        <div className="bg-secondary text-center text-white py-24 w-100">
          .bg-secondary
        </div>
        <div className="bg-light-primary text-center py-24 w-100">
          .bg-light-primary
        </div>
        <div className="bg-primary text-center text-white py-24 w-100">
          .bg-primary
        </div>
        <div className="bg-light-green text-center py-24 w-100">
          .bg-light-green
        </div>
        <div className="bg-green text-center text-white py-24 w-100">
          .bg-green
        </div>
        <div className="bg-light-error text-center py-24 w-100">
          .bg-light-error
        </div>
        <div className="bg-error text-center text-white py-24 w-100">
          .bg-error
        </div>
        <div className="bg-light-dark text-center py-24 w-100">
          .bg-light-dark
        </div>
        <div className="bg-dark text-center py-24 w-100">.bg-dark</div>
      </SimpleCard>
      <div className="py-12" />
      <SimpleCard title="Text Color Class">
        <div className=" text-center text-gray py-24 w-100">.text-gray</div>
        <div className=" text-center text-muted py-24 w-100">.text-muted</div>
        <div className="bg-light-gray text-center text-brand py-24 w-100">
          .text-brand
        </div>
        <div className="text-center text-green py-24 w-100">.text-green</div>
        <div className="bg-light-gray text-center text-error py-24 w-100">
          .text-error
        </div>
        <div className="bg-secondary text-center text-light-white py-24 w-100">
          .text-light-white
        </div>
        <div className="bg-primary text-center text-white py-24 w-100">
          .text-white
        </div>
        <div className="bg-secondary text-center text-muted-white py-24 w-100">
          .text-muted-white
        </div>
      </SimpleCard>
    </div>
  );
};

export default Color;
