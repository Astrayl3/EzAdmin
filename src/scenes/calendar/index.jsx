import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, colors, List, ListItem, ListItemText, Select, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] =  useState([]);

    const  HandleDateClick = (selected) => {
        const title = prompt("Enter a new title for your event");
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();

        if(title){
            calendarAPI.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    }

    const  HandleEventClick = (selected) => {
        if(window.confirm(
            `Are you sure you want to delete '${selected.event.title}'?`
        )){
            selected.event.remove();
        }
    };

    return (
    <Box m="20px">
        <Header title="CALENDAR" subtitle="Calendar Interactive Page"/>
        <Box display="flex" justifyContent="space-between">
            {/* Calendar sidebar */}
            <Box 
            flex="0 1 20%" 
            backgroundColor={colors.primary[400]}
            p="15px"
            borderRadius="4px"
            >
                <Typography variant="h5">
                    Events 
                </Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem
                        key={event.id}
                        sx={{backgroundColor: colors.greenAccent[500], m:"10px 0 ", borderRadius: "2px"}}
                        >
                            <ListItemText primary={event.title} secondary={
                                <Typography>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </Typography>
                            }/>
                        </ListItem>
                    ))}
                </List>
            </Box>
            {/* Calendar */}
            <Box flex="1 1 100%" ml="15px">
                <FullCalendar height="75vh" 
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                ]}
                headerToolbar={{
                    left: "prev, next today",
                    center: "title",
                    right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={HandleDateClick}
                eventClick={HandleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                    {id: "1", title: "CS2 tournament practice", date: "2025-05-10"},
                    {id: "2", title: "Pre Lock-in for the assignment", date: "2025-05-22"},
                    {id: "3", title: "Time with the boys", date: "2025-06-03"},
                    {id: "4", title: "HCM tour with my boys", date: "2025-07-14"},
                ]}
                />
            </Box>
        </Box>
    </Box>
    );
}

export default Calendar;