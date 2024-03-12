import React, {useEffect, useState, ChangeEvent} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';


interface FilterComponentProps {
  filterText: string;
  onFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filterText, onFilter }) => {
  return (
      <>
      <div className='mb-25 md-4 sm-6 xs-6'>
          <input placeholder='Quick Search' aria-label="Search Input"
              value={filterText}
              onChange={onFilter}
              id="search"
          />
      </div>
    </>
  )
};

export default function ContactUsResponse() {
   const [data, setData] = useState([])
    const [overlay, setOverlay] = useState(false)
    const [allAddresses, setAllAddresses] = useState([])
    const [allPenaltyReasons, setAllPenaltyReasons] = useState([])
    const [filterText, setFilterText] = useState('');
    const [allCities, setAllCities] = useState([])
    const [currentPage, setcurrentPage] = useState(1);
    const [perPage, setperPage] = useState(100);
    const [totalRows, setTotalRows] = useState(0);
    const [show, setShow] = useState(false)


  useEffect(() => {
    getData();
}, [])

const getData = () => {
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/contact/all',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      setData(response.data.result)
      console.log("response", response);
    })
    .catch((error) => {
      console.log(error);
    });

}

  const columns = [
    {
        name: "Name",
        sortable: true,
        minWidth: '100px',
        sortField: 'Trip Code',
        selector: (row: any) => {
            return (row && row?.fullName)
        },
        cell: (row: any) => (
            <div className='d-flex justify-content-left align-items-center '>
                <div className='d-flex flex-column'>
                    <span className='fw-bold '>
                        {row?.fullName}
                    </span>
                </div>
            </div>
        )
    },
    {
        name: "Email",
        sortable: true,
        minWidth: '100px',
        sortField: 'email',
        selector: (row: any) => {return (row?.email)},
        cell: (row: any) => (
            <div className='d-flex justify-content-left align-items-center '>
                <div className='d-flex flex-column'>
                    <span className='' >
                        {row?.email ?? "-"}
                    </span>
                </div>
            </div>
        )
    },
    {
        name: "Subject",
        sortable: true,
        minWidth: '100px',
        sortField: 'subject',
        selector: (row: any) => {return (row?.subject)},
        cell: (row: any) => (
            <div className='d-flex justify-content-left align-items-center '>
                <div className='d-flex flex-column'>
                    <span className='' >
                        {row?.subject ?? "-"}
                    </span>
                </div>
            </div>
        )
    },
    {
        name: "Message",
        sortable: true,
        minWidth: '120px',
        sortField: 'message',
        selector: (row: any) => {return (row?.message)},
        cell: (row: any) => (
            <div className='d-flex justify-content-left align-items-center '>
                <div className='d-flex flex-column'>
                    <span className='' >
                        {row?.message ?? "-"}
                    </span>
                </div>
            </div>
        )
    },
    {
      name: "CreatedAt",
      sortable: true,
      minWidth: '120px',
      sortField: 'createdAt',
      selector: (row: any) => row?.createdAt,
      cell: (row: any) => {
          const date = new Date(row?.createdAt);
          const formattedDate = date.toISOString().split('T')[0];
          return (
              <div className='d-flex justify-content-left align-items-center '>
                  <div className='d-flex flex-column'>
                      <span className=''>
                          {formattedDate || "-"}
                      </span>
                  </div>
              </div>
          );
      }
  }
  
]

const subHeaderComponentHandler = () => {
  return (
      <>
          <div className='mb-25 md-4 sm-6 xs-6'>
              {
                  data && data?.length > 0 ? (""
                      // <CSVLink
                      //     data={commissionListData}
                      //     filename={`${new Date().getTime()}_trip_expense_report.csv`}>
                      //     <Button className="btn btn-primary" color="primary">Download CSV <Download className="icon-right" size={13} /></Button>
                      // </CSVLink>
                  ) : null
              }
          </div>
          <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />
      </>
  )
}

const onCurrPageChange = async (page:number) => {
  setcurrentPage(page);

};

const handlePerRowsChange = (newPerPage:number, page:number) => {
 setperPage(newPerPage);
 setcurrentPage(page);
}

if (data != null) {
  var filteredData:any = data && data?.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      return itemString.includes(filterText.toLowerCase());
  })
}

  return (
    <>
      <div className="react-dataTable">
                <DataTable
                    responsive
                    dense
                    pointerOnHover
                    subHeader
                    fixedHeader
                    fixedHeaderScrollHeight={'60vh'}
                    subHeaderComponent={subHeaderComponentHandler()}
                    expandOnRowClicked
                    striped
                    highlightOnHover
                    persistTableHead
                    columns={columns}
                    data={filteredData}
                    // sortIcon={<ChevronDown />}
                    className='react-dataTable'
                    // expandableRows
                    // expandableRowsComponent={ExpandableRowComponentData}
                    pagination
                    paginationServer
                    paginationPerPage={perPage}
                    paginationTotalRows={totalRows}
                    onChangePage={onCurrPageChange}
                    onChangeRowsPerPage={handlePerRowsChange}
                    paginationRowsPerPageOptions={[ 20, 50, 100, 200, 500, 1000]}

                />
            </div>
    </>
  )
}
