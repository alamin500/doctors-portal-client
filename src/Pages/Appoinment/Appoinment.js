import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import AppointmentHeader from "./AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appoinment;
