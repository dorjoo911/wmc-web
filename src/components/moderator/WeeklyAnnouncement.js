import React, { useState, useEffect } from "react";
import axios from "axios";

import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Announcement from "./Announcement";

export default function WeeklyAnnouncement() {
  const [announcement, setAnnouncement] = useState([]);
  const [thisWeek, setThisWeek] = useState("");
  const [lastWeek, setLastWeek] = useState("");
  const [beforeWeek, setFirstWeek] = useState("");

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
    setThisWeek(thisWeekSunday.toISOString().slice(0, 10));

    // Last week's Sunday
    const lastWeekSunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - daysSinceSunday - 7
    );
    setLastWeek(lastWeekSunday.toISOString().slice(0, 10));

    // The Sunday before last week
    const firstWeekSunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - daysSinceSunday - 14
    );
    setFirstWeek(firstWeekSunday.toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    async function fetchAnnouncement() {
      try {
        const response = await axios.get("/announces");
        setAnnouncement(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAnnouncement();
  }, []); // re-fetch announcement data when an announcement is added or deleted

  return (
    <div style={{ textAlign: "center" }}>
      <MDBAccordion>
        <MDBAccordionItem
          collapseId={1}
          headerTitle={`Зарлал мэдээлэл ${thisWeek}`}
        >
          <Announcement data={announcement.thisWeek} />
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={2}
          headerTitle={`Зарлал мэдээлэл ${lastWeek}`}
        >
          <Announcement data={announcement.lastWeek} />
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={3}
          headerTitle={`Зарлал мэдээлэл ${beforeWeek}`}
        >
          <Announcement data={announcement.beforeWeek} />
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
}
