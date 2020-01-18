import React, { Component } from "react";

import { SimpleCard, MatxProgressBar } from "matx";

const Campaigns = () => {
  return (
    <div>
      <SimpleCard title="Campaigns">
        <small className="text-muted">Today</small>
        <div className="pt-8" />
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <div className="py-4" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <div className="py-4" />
        <MatxProgressBar value={75} color="primary" text="Facebook (80k)" />

        <div className="py-12" />
        <small className="text-muted">Yesterday</small>
        <div className="pt-8" />
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <div className="py-4" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <div className="py-4" />
        <MatxProgressBar value={75} color="primary" text="Facebook (80k)" />

        <div className="py-12" />
        <small className="text-muted">Yesterday</small>
        <div className="pt-8" />
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <div className="py-4" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <div className="py-4" />
        <MatxProgressBar value={75} color="primary" text="Facebook (80k)" />
      </SimpleCard>
    </div>
  );
};

export default Campaigns;
