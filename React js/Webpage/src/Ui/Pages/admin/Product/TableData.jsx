import React, { useEffect, useState } from "react";
import { Edit, Eye, Minus, Plus, Trash2Icon } from "lucide-react";
import { Button, Input, Table } from "reactstrap";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
let sizeArray = ["41", "42", "43", "44", "45"];

export default function TableData({
  productData,
  editHandler,
  deleteHandler,
  resetForm,
  previewToggle,
  paginate,
  setPaginate,
  reFetchData,
  setUpdateMode
}) {
  let [data, setData] = useState(productData);
  console.log("🚀 ~ productData:", productData)
  let [expandedId, setExpandedId] = useState(null);
  let [titleExpand, setTitleExpand] = useState(null);
  let [cookie, setCookie] = useCookies()



  useEffect(() => {
    setData(productData);
  }, [productData]);

  const clearForm = () => {
    resetForm();
    setUpdateMode(true)
  };

  const previewHandler = (e) => {
    previewToggle()
    setCookie("previewData", e)
  }

  const handlePageClick = (e) => {
    setPaginate({ ...paginate, page: e.selected + 1 });
    reFetchData()
  }





  return (
    <>
      <div className="d-flex justify-content-end py-5 pe-5">
        <Button
          style={{ backgroundColor: "#6fcdff", color: "black" }}
          onClick={clearForm}
        >
          Add Product
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="border rounded-md shadow-2xl" style={{ width: "98%" }}>
          <div className="flex justify-between items-center bg-yellow-50 ">
            <h1 className=" m-0 py-3 ps-3">Product Table</h1>
          </div>
          <hr className="text-black font-bold p-0 m-0 pb-3"></hr>
          <Table size="sm">
            <thead>
              <tr>
                <th className="pb-3 text-center ">Sr No.</th>
                <th className="pb-3 text-center " >Image</th>
                <th className="pb-3 text-center " >Title</th>
                <th className="pb-3 text-center " >Description</th>
                <th className="pb-3 text-center " >Brand</th>
                <th className="pb-3 text-center " >Gender</th>
                <th className="pb-3 text-center " >Price</th>
                <th className="pb-3 text-center " >Discount</th>
                <th className="pb-3 text-center " >Discounted Price</th>
                <th className="pb-3 text-center " >Category</th>
                <th className="pb-3 text-center " >Color</th>
                <th className="pb-3 text-center " >Size</th>
                <th className="pb-3 text-center " >Preview</th>
                <th className="pb-3 text-center " >Edit</th>
                <th className="pb-3 text-center " >Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => {
                const isExpanded = e?._id === expandedId;
                const titleExpanded = e?._id === titleExpand;
                return (
                  <tr key={e._id}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img
                        style={{ width: "150px", aspectRatio: "3/2" }}
                        src={e.thumbnail}
                        alt=""
                      />
                    </td>
                    <td>
                      <div
                        className="text-center"
                        style={{
                          maxWidth: "150px",
                          whiteSpace: titleExpanded ? "unset" : "nowrap",
                          overflow: "hidden",
                          textOverflow: titleExpanded ? "unset" : "ellipsis",
                        }}
                        role="button"
                        onClick={() =>
                          setTitleExpand(titleExpand ? null : e?._id)
                        }
                      >
                        {e.title}
                      </div>
                    </td>
                    <td className="text-center">
                      <div
                        style={{
                          maxWidth: "150px",
                          whiteSpace: isExpanded ? "unset" : "nowrap",
                          overflow: "hidden",
                          textOverflow: isExpanded ? "unset" : "ellipsis",
                        }}
                        role="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : e?._id)
                        }
                      >
                        {e.description}
                      </div>
                    </td>
                    <td className="text-center" >{e.brand}</td>
                    <td className="text-center" >{e.gender}</td>
                    <td className="text-center" >{e.price}</td>
                    <td className="text-center" >
                      {e.discountPercentage > 0 ? (
                        <div className="text-red-500">
                          {e.discountPercentage}%
                        </div>
                      ) : (
                        <div>0%</div>
                      )}
                    </td>
                    <td className="text-center">
                      {e.discountPercentage > 0 ? (
                        <div>{(e.price - (e.price * e.discountPercentage) / 100).toFixed(2)}</div>
                      ) : (
                        <div>{e.price}</div>
                      )}
                    </td>
                    <td className="text-center">{e.category}</td>
                    <td className="text-center pt-2">
                      <div className="flex items-center justify-center gap-2">
                        {e.color.map((e, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <div
                              style={{
                                width: "15px",
                                height: "15px",
                                backgroundColor: e,
                                borderRadius: "50%",
                                border: "1px solid black",
                              }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="d-flex">
                        {sizeArray.map((ele, i) => (
                          <div
                            key={i}
                            style={{
                              padding: "2px 6px",
                              color: e.size.find((e) => e === ele)
                                ? "black"
                                : "lightgray",
                            }}
                          >
                            {ele}
                          </div>
                        ))}
                      </div>
                    </td>
                    <th className="text-center ps-4" >
                      <Eye
                        onClick={() => previewHandler(e)}
                        color="red"
                        role="button"
                      />
                    </th>
                    <th className="text-center" >
                      <Edit
                        onClick={() => editHandler(e)}
                        color="red"
                        role="button"
                      />
                    </th>
                    <th className="text-center">
                      <Trash2Icon
                        role="button"
                        onClick={() => deleteHandler(e._id)}
                        color="red"
                      />
                    </th>
                  </tr>
                );
              })}
            </tbody>

          </Table>

          <div className="flex justify-center">
            <ReactPaginate
              containerClassName="flex justify-center rounded-5 items-center mt-4 w-auto"
              pageClassName="px-4 py-1 mx-1 rounded cursor-pointer text-gray-500 font-semibold"
              previousLabel={<div className="border border-gray-400 px-3 mx-3 py-1 rounded text-blue-500" ><Minus /></div>}
              previousLinkClassName="px-3 py-1 rounded mr-2 cursor-pointer no-underline  font-semibold"
              nextLabel={<div className="border border-gray-400 px-3 mx-3 py-1 rounded text-blue-500" ><Plus /></div>}
              nextLinkClassName="px-3 py-1 rounded ml-2 cursor-pointer no-underline  font-semibold"
              breakClassName="px-3 py-1 mx-1  font-semibold"
              breakLabel="..."
              activeClassName="bg-[#6fcdff]"
              onPageChange={handlePageClick}
              pageCount={paginate.totalProduct / paginate.limit}
            />

          </div>
        </div>
      </div>
    </>
  );
}
