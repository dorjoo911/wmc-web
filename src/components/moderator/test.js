import React, { useState } from "react";

export default function Announcement({ data }) {
  // console.log(data);
  if (!data || !data.zar) {
    return <div>Энэ долоо хоногийн зарлал мэдээлэл ороогүй байна</div>;
  }
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {data.zar.map((obj) => (
          <li key={obj._id}>{obj.text}</li>
        ))}
      </ul>
      <p style={{ textAlign: "right", color: "green" }}>
        модератор: {data.userName}.
      </p>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import axios from "axios";

import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Announcement from "./Announcement";

export default function WeeklyAnnouncement() {
  const [announcement, setannouncement] = useState([]);
  const [thisweek, setthisweek] = useState("");
  const [lastweek, setlastweek] = useState("");
  const [firstweek, setfirstweek] = useState("");

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysSinceSunday = dayOfWeek === 0 ? 0 : dayOfWeek - 1;

    // This week's Sunday
    const thisWeekSunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - daysSinceSunday
    );
    setthisweek(thisWeekSunday.toISOString().slice(0, 10));

    // Last week's Sunday
    const lastWeekSunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - daysSinceSunday - 7
    );
    setlastweek(lastWeekSunday.toISOString().slice(0, 10));

    // The Sunday before last week
    const firstWeekSunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - daysSinceSunday - 14
    );
    setfirstweek(firstWeekSunday.toISOString().slice(0, 10));
    (async () => {
      let result = await axios.get(`/announces`);
      // console.log(result.data.thisWeek);
      setannouncement(result.data);
    })();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem
          collapseId={1}
          headerTitle={`Зарлал мэдээлэл ${thisweek}`}
        >
          <Announcement data={announcement.thisWeek} />
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={2}
          headerTitle={`Зарлал мэдээлэл ${lastweek}`}
        >
          <Announcement />
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={3}
          headerTitle={`Зарлал мэдээлэл ${firstweek}`}
        >
          <Announcement />
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
}
