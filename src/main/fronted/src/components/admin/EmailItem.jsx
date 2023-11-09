import React from "react";
import styled from "@emotion/styled";
import { formatDate } from "../../util";
import { Link } from "react-router-dom";

const EmailItem = (props) => {
  const { id, name, brand, regDate, identity, contactTime } = props;
  const formattedDateTime = formatDate(regDate);

  return (
    <tbody>
      <TableCell>
        <td>
          <Link to={`/adm/email/${id}`}>{name}</Link>
        </td>
        <td>
          <Link to={`/adm/email/${id}`}>{identity}</Link>
        </td>
        <td>
          <Link to={`/adm/email/${id}`}>{brand}</Link>
        </td>
        <td>
          <Link to={`/adm/email/${id}`}>{contactTime + "시"}</Link>
        </td>
        <td>
          <Link to={`/adm/email/${id}`}>{formattedDateTime}</Link>
        </td>
      </TableCell>
    </tbody>
  );
};

export default EmailItem;

const TableCell = styled.tr`
  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
  }
`;
