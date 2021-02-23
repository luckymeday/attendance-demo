import React from "react";
import "../App.css";
import { attendanceData } from "./data";
import styled from "styled-components";
import { useTable } from "react-table";

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

  const data = attendanceData;

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
