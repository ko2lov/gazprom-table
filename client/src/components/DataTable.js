import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination/Pagination";
function DataTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/api/data`, {
        params: { page: currentPage, limit: pageSize },
      });
      setData(response.data.data);
      setTotalItems(response.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        setPageSize={setPageSize}
        setCurrentPage={setCurrentPage}
      />
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" style={{ width: "10%" }}>
              articleid
            </th>
            <th scope="col" style={{ width: "10%" }}>
              articleid
            </th>
            <th scope="col" style={{ width: "30%" }}>
              articlename
            </th>
            <th scope="col" style={{ width: "10%" }}>
              external_str_id
            </th>
            <th scope="col" style={{ width: "40%" }}>
              ecrlongname
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.articleid}</td>
                <td>{item.articleid}</td>
                <td>{item.articlename}</td>
                <td>{item.external_str_id}</td>
                <td>{item.ecrlongname}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
