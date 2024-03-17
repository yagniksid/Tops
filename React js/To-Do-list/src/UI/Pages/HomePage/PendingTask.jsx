import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
import "./index.css";
import { ArrowRightSquare, EditIcon } from "lucide-react";
import Swal from "sweetalert2";

export default function PendingTask({
  toDoData,
  setToDoData,
  getData,
  setGetData,
  editHandler,
}) {
  let [selectedToDoData, setSelectedToDoData] = useState([]);
  let [search, setSearch] = useState("");

  const searchData = () => {
    const normalData = localStorage.getItem("userdata");
    const jsonData = JSON.parse(normalData) || [];
    const newData = jsonData?.filter((store) =>
      store.toLowerCase().includes(search.toLowerCase())
    );
    setToDoData(newData);
  };
  useEffect(() => {
    if (search === "") {
      searchData();
    }
  }, [search]);

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userdata")) || [];
    setToDoData(userData);
  }, []);

  const checkedHandlerToDoData = (index) => {
    let match = selectedToDoData.includes(index);
    if (match) {
      setSelectedToDoData(selectedToDoData.filter((e) => e !== index));
    } else {
      setSelectedToDoData([...selectedToDoData, index]);
    }
  };
  const checkAllTodoData = () => {
    if (selectedToDoData.length !== toDoData.length) {
      setSelectedToDoData(toDoData.map((e, index) => index));
    } else {
      setSelectedToDoData([]);
    }
  };

  const submitHandler = () => {
    if (selectedToDoData.length === 0) {
      Swal.fire({
        text: "Please Select Data",
        icon: "warning",
      });
    } else {
      let notDone = [];
      let done = [];

      toDoData.map((e, i) => {
        if (selectedToDoData?.includes(i)) {
          done.push(e);
        } else {
          notDone.push(e);
        }
      });
      setToDoData(notDone);
      setGetData([...getData, ...done]);
      localStorage.setItem("removedata", JSON.stringify([...getData, ...done]));
      localStorage.setItem("userdata", JSON.stringify(notDone));
      setSelectedToDoData([]);
    }
  };

  const editData = (data, index) => {
    editHandler(data, index);
  };

  const moveToDone = (index) => {
    console.log("🚀 ~ moveToDone ~ index:", index);
    let notDone = [];
    console.log(
      "🚀 ~ file: HomePage.jsx:90 ~ removeHandler ~ notDone:",
      notDone
    );
    let done = [];
    console.log("🚀 ~ file: HomePage.jsx:92 ~ removeHandler ~ done:", done);
    toDoData.filter((e, i) => {
      if (i === index) {
        notDone.push(e);
      } else {
        done.push(e);
      }
    });

    setToDoData(done);
    setGetData([...getData, ...notDone]);
    localStorage.setItem(
      "removedata",
      JSON.stringify([...getData, ...notDone])
    );
    localStorage.setItem("userdata", JSON.stringify(done));
    setSelectedToDoData([]);
  };
  return (
    <>
      <div style={{ flex: "1" }}>
        <div className="notebook-page">
          <div className="input" style={{ height: "100%" }}>
            <div className="header">
              <h1
                className="text-center"
                style={{
                  fontWeight: "bold",
                  fontSize: "45px",
                  padding: "10px",
                  color: "#131355",
                }}
              >
                Pending Task
              </h1>
            </div>

            <div className="d-flex justify-content-end m-3">
              <div className="d-flex  justify-content-center w-50 gap-1">
                <Input
                  type="search"
                  placeholder="Search Here"
                  onChange={(e) => setSearch(e?.target?.value)}
                />
                <Button color="success" onClick={() => searchData()}>
                  Search
                </Button>
              </div>
            </div>

            <div className="p-3 d-flex flex-column justify-content-between">
              <div>
                {toDoData.length > 1 && (
                  <div className="d-flex justify-content-end pb-2">
                    <Input
                      type="checkbox"
                      style={{
                        boxShadow: "none",
                        borderRadius: "50%",
                        fontSize: "22px",
                      }}
                      onChange={checkAllTodoData}
                      checked={selectedToDoData.length == toDoData.length}
                    />
                    <Label
                      role="button"
                      style={{
                        fontWeight: "bold ",
                        fontSize: "22px",
                        paddingLeft: "10px",
                      }}
                    >
                      Select All
                    </Label>
                  </div>
                )}
                {toDoData.length > 0 ? (
                  <ul style={{ listStyle: "none" }}>
                    {toDoData.map((e, i) => (
                      <div key={i}>
                        <li
                          className="w-100 d-flex align-items-center justify-content-between  mt-0 mb-0"
                          style={{ maxHeight: "10px" }}
                        >
                          <div className="list">
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                paddingRight: "10px",
                              }}
                            >
                              {i + 1}.
                            </span>
                            <Label
                              style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                paddingRight: "18px",
                                paddingTop: "10px",
                                marginLeft: "40px",
                              }}
                            >
                              {e}
                            </Label>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <EditIcon
                              onClick={() => editData(e, i)}
                              color="#22d76d"
                              role="button"
                            />
                            <ArrowRightSquare
                              role="button"
                              color="#22d76d"
                              onClick={() => moveToDone(i)}
                            />
                            <Input
                              onChange={() => checkedHandlerToDoData(i)}
                              checked={selectedToDoData.includes(i)}
                              type="checkbox"
                              style={{
                                boxShadow: "none",
                                borderRadius: "50%",
                                fontSize: "22px",
                              }}
                            />
                          </div>
                        </li>
                        <hr style={{ width: "100%" }} />
                      </div>
                    ))}
                  </ul>
                ) : (
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "150px",
                      fontWeight: "bold",
                      color: "#2828a8",
                    }}
                  >
                    Data not Found
                  </h3>
                )}
              </div>
              <div
                className=" d-flex justify-content-center gap-4 h-25"
                style={{
                  textAlign: "center",
                  width: "100",
                }}
              >
                {
                  toDoData.length !== 0 && <Button color="danger" onClick={submitHandler}>
                    Submit
                  </Button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
