import React, { useState, useEffect } from "react";
import ListDisplay from "./ListDisplay";
import { useFormik } from "formik";
import axios from "axios";

const Main = () => {
  const [task, setTask] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [list, setList] = useState([]);

  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setList([...list, { task: task, category: category }]);
  //   setTask("");
  // };
  const getTasks = () => {
    axios
      .get("http://localhost:4000/api/getAllTasks")
      .then((res) => setList(res.data))
      .catch((err) => console.log("error on get all tasks", err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getCategories")
      .then((res) => setAllCategory(res.data))
      .catch((err) => console.log("error on get categories", err));
    getTasks();
  }, []);

  const catOptions = allCategory.map((cat, index) => {
    return <option value={cat.category_id}>{cat.title}</option>;
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: null,
    },
    onSubmit: (values) => {
      if (!values.category) {
        alert("Please select a category");
        return;
      }
      axios
        .post("http://localhost:4000/api/addTask", values)
        .then((res) => getTasks())
        .catch((err) => console.log("Error on add task", err));
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="task"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          name="description"
          type="text"
          placeholder="Describe your Task"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option defaultValue disabled selected>
            category
          </option>
          {catOptions}
        </select>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList} />
    </div>
  );
};

export default Main;
