import React, { useEffect, useState } from 'react';
import { Table, Pagination, Menu } from 'semantic-ui-react';
import TableHeader from '../common/tableHeader';
import TableBody from '../common/tableBody';
import { Columns } from './Columns';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';

const Agents = ({ grades }) => {
  const [sortCol, setSortCol] = useState({
    path: 'name',
    order: 'ascending',
  });
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 9;
  const totalPages = Math.ceil(grades.length / pageSize);

  useEffect(() => {
    setData(paginate(grades, activePage, pageSize));
  }, [grades, activePage]);

  const handleSort = sortColumn => {
    if (sortCol.path === sortColumn.path) {
      setData(paginate(data.reverse(), activePage, pageSize));
      const order =
        sortColumn.order === 'ascending' ? 'descending' : 'ascending';
      setSortCol({ ...sortCol, order: order });
    } else {
      setData(
        paginate(_.sortBy(data, [sortColumn.path]), activePage, pageSize)
      );
      setSortCol({ path: sortColumn.path, order: 'ascending' });
    }
  };

  const handlePageChange = page => {
    setActivePage(page);
  };

  const columns = Columns();

  return (
    <Table
      celled
      compact='very'
      sortable
      size='small'
      selectable
      verticalAlign='middle'>
      <TableHeader columns={columns} sortColumn={sortCol} onSort={handleSort} />
      <TableBody data={data} columns={columns} />
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='7'>
            <Menu floated='right'>
              <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                siblingRange={1}
                ellipsisItem={null}
                firstItem={undefined}
                lastItem={undefined}
                totalPages={totalPages}
                onPageChange={(e, { activePage }) =>
                  handlePageChange(activePage)
                }
              />
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default Agents;
