import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Table } from "reactstrap";
import { Trash } from "lucide-react";
import { completeTodo, deleteTodo } from "../../Redux/Features/todo";

export default function PendingTask() {
  let [pendingData, setPendingData] = useState();
  let [index, setIndex] = useState(null);
  let dispatch = useDispatch();

  let data = useSelector((store) => {
    return store.todoSlice;
  });
  useEffect(() => {
    setPendingData(data.todo);
  }, [data]);

  let deleteHandler = (ele, index) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteTodo({ ele, index }));
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5" style={{ height: "400px" }}>
      <div style={{ width: "70%", boxShadow: "0px 0px 5px", borderRadius: "10px", backgroundColor: "white", paddingTop: "10px", }}>
        <h4 className="ps-3 py-3">Todo List</h4>
        <Table>
          <thead >
            <tr className="text-center">
              <th>List</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {pendingData?.map((e, i) => {
              return (
                <tr className="text-center" key={i}>
                  <td>{e.task}</td>
                  <td>
                    {e.isCompleted ? (
                      <Button
                        style={{ backgroundColor: "#9FE2BF" }}
                        onClick={() =>
                          dispatch(completeTodo({ index: i, status: false }))
                        }
                      >
                        Complete
                      </Button>
                    ) : (
                      <Button

                        style={{ backgroundColor: "#9FE2BF" }}
                        onClick={() =>
                          dispatch(completeTodo({ index: i, status: true }))
                        }
                      >
                        {" "}
                        Pending{" "}
                      </Button>
                    )}
                  </td>
                  <td>
                    <Trash role="button"
                      onClick={() => {
                        deleteHandler(e, i);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>

  );
}
