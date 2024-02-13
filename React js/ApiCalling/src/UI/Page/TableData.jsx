import React, { useEffect, useState } from "react";
import { Edit, Trash2Icon } from "lucide-react";
import { Button, Table } from "reactstrap";

let sizeArray = ["41", "42", "43", "44", "45"];
export default function TableData({
  toggle,
  productData,
  editHandler,
  deleteHandler,
  initialData,
  resetForm,
}) {
  console.log("🚀 ~ TableData ~ initialData:", initialData);
  let [data, setData] = useState(productData);
  let [expandedId, setExpandedId] = useState(null);
  let [titleExpand, setTitleExpand] = useState(null);

  useEffect(() => {
    setData(productData);
  }, [productData]);

  const clearForm = () => {
    resetForm();
  };

  return (
    <>
      <div className="d-flex justify-content-end pb-3 pe-5">
        <Button
          style={{ backgroundColor: "#6fcdff", color: "black" }}
          onClick={clearForm}
        >
          Add Product
        </Button>
      </div>
      {data.length === 0 ? (
        <span
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          Data Not Found
        </span>
      ) : (
        <div>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Gender</th>
                <th>Price</th>
                <th>Category</th>
                <th>Color</th>
                <th>Size</th>
                <th>Edit</th>
                <th>Delete</th>
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
                    <td>
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
                    <td>{e.brand}</td>
                    <td>{e.gender}</td>
                    <td>
                      <div className="d-flex gap-4 text-center">
                        {e.discountPercentage > 0 ? (
                          <>
                            <div>{e.price}</div>
                            <div
                              style={{
                                textAlign: "center",
                                height: "25px",
                                borderRadius: "30px",
                                padding: "0px 5px",
                                backgroundColor: "lightgreen",
                              }}
                            >
                              {e.discountPercentage}%
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                height: "25px",
                                width: "auto",
                                borderRadius: "30px",
                                padding: "0px 5px",
                              }}
                            >
                              { e.price-((e.price * e.discountPercentage  )/100).toFixed(
                                2
                              )}
                            </div>
                          </>
                        ) : (
                          <div>
                            {e.price}{" "}
                            <span
                              style={{
                                backgroundColor: "#ff0000ad",
                                borderRadius: "20px",
                                padding: "0px 10px",
                              }}
                            >
                              - No Discount
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>{e.category}</td>
                    <td>
                      <div>
                        {e.color.map((e, i) => (
                          <div className="d-flex align-items-center gap-1">
                            <div
                              key={i}
                              style={{
                                width: "15px",
                                height: "15px",
                                backgroundColor: e,
                                borderRadius: "50%",
                                border: "1px solid black",
                              }}
                            ></div>
                            <p className="m-0">{e}</p>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
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
                    <th>
                      <Edit
                        onClick={() => editHandler(e)}
                        color="red"
                        role="button"
                      />
                    </th>
                    <th>
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
        </div>
      )}
    </>
  );
}
