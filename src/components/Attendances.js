import React from "react";
import "../App.css";
import { attendanceData } from "./data";
import styled from "styled-components";
import { useTable } from "react-table";
import moment, { duration } from "moment";
import "moment-duration-format";

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export const Attendances = () => {
  // moment().format('lll')

  // let d = new Date();
  // console.log("Now:", d);

  // let utc_offset = d.getTimezoneOffset();
  // d.setMinutes(d.getMinutes() + utc_offset);
  // console.log("UTC:", d);

  // let ict_offset = 7 * 60;
  // d.setMinutes(d.getMinutes() + ict_offset);
  // console.log("ICT:", d);

  const columns = React.useMemo(
    () => [
      {
        Header: "Student List",
        columns: [
          {
            Header: "Email",
            accessor: "user_email",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Join Time",
            accessor: "join_time",
          },
          {
            Header: "Leave Time",
            accessor: "leave_time",
          },
          {
            Header: "Duration",
            accessor: "duration",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const newData = attendanceData.map((item) => {
    // console.log("item:", item);

    const ictJoinTime = moment
      .utc(item.join_time)
      .local()
      .format("YYYY-MMM-DD h:mm A");
    // console.log("first join time data:", ictJoinTime);

    const ictLeaveTime = moment
      .utc(item.leave_time)
      .local()
      .format("YYYY-MMM-DD h:mm A");
    // console.log("first leave time data:", ictLeaveTime);

    const durationTime = moment
      .duration(item.duration, "seconds")
      .format("hh:mm:ss");
    // console.log("duration time:", durationTime);

    const finalData = { ...item };
    finalData.join_time = ictJoinTime;
    finalData.leave_time = ictLeaveTime;
    finalData.duration = durationTime;
    // console.log("final item:", finalData);

    return finalData;
  });

  console.log("new data:", newData);

  // let returnObj = {};

  // let ictLeaveTime = moment(item.leave_time).add(7, "hours");
  // console.log("Ict Leave Time:", ictLeaveTime._d);
  // item.leave_time = ictLeaveTime._d;

  // let durationTime = moment
  //   .duration(item.duration, "seconds")
  //   .format("hh:mm:ss");
  // item.duration = durationTime;
  // console.log("duration time:", durationTime);

  // return returnObj;

  const data = newData;

  // console.log("data:", data);
  // console.log("data2", data[1].join_time);

  // let joinTime = data[7].join_time;
  // let leaveTime = data[7].leave_time;
  // console.log("Join Time:", joinTime);
  // console.log("Leave Time:", leaveTime);

  // let ictJoinTime = moment(joinTime).add(7, "hours");
  // let ictLeaveTime = moment(leaveTime).add(7, "hours");
  // console.log("Ict Join Time:", ictJoinTime._d);
  // console.log("Ict Leave Time:", ictLeaveTime._d);

  // let durationTime = data[7].duration;
  // console.log("duration:", durationTime);

  // let hours = Math.floor(durationTime / 60 / 60);
  // let minutes = Math.floor(durationTime / 60) - hours * 60;
  // let seconds = durationTime % 60;
  // console.log(hours + ":" + minutes + ":" + seconds);

  return (
    <>
      <h2>Attendance List</h2>
      <div>
        {" "}
        <Styles>
          <Table columns={columns} data={data} />
          {/* {attendanceData.map((data, key) => {
            return (
              <div key={key}>
                <Attendance
                  key={key}
                  email={data.user_email}
                  name={data.name}
                  joinTime={data.join_time}
                  leaveTime={data.leave_time}
                  duration={data.duration}
                />
              </div>
            );
          })}{" "} */}
        </Styles>
      </div>
    </>
  );
};

// const Attendance = ({ email, name, joinTime, leaveTime, duration }) => {
//   if (!email) return <div />;
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <p>{email}</p>
//           </td>
//           <td>
//             <p>{name}</p>
//           </td>
//           <td>
//             <p>{joinTime}</p>
//           </td>
//           <td>
//             <p>{leaveTime}</p>
//           </td>
//           <td>
//             <p>{duration}</p>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };
