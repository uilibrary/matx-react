import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import SimpleDialogDemo from "./SimpleDialog";
import AlertDialog from "./SimpleAlerts";
import AlertDialogSlide from "./DialogTransition";
import FormDialog from "./FormDialog";
import CustomizedDialogs from "./CustomizedDialog";
import FullScreenDialog from "./FullScreenDialog";
import MaxWidthDialog from "./OptimalSizeDialog";
import ResponsiveDialog from "./ResponsiveDialog";
import ConfirmationDialog from "./ConfirmationDialog";

const AppDialog = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Dialog" }
          ]}
        />
      </div>
      <SimpleCard title="simple Dialog">
        <SimpleDialogDemo />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="alert dialog">
        <AlertDialog />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="transition">
        <AlertDialogSlide />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="form dialog">
        <FormDialog />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="customized dialog">
        <CustomizedDialogs />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="full-screen dialog">
        <FullScreenDialog />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="optimized size dialog">
        <MaxWidthDialog />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="responsive dialog">
        <ResponsiveDialog />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="confirmation dialog">
        <ConfirmationDialog />
      </SimpleCard>
    </div>
  );
};

export default AppDialog;
