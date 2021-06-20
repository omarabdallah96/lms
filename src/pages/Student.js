import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";


const StyledTableCell = withStyles((theme) => ({
  head: {
    background: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Student = () => {
  const classes = useStyles();
  const [student, setstudent] = useState([]);
  const [search, setSearch] = useState("");

  const deletepost = async (id) => {
    try{
      await axios.delete(`http://localhost:8000/api/student/${id}`);
      let filter = [...student].filter((student) => student.id !== id);
      setstudent(filter);
  
      console.log(id);
    }
   catch (e) {
    console.log(e);
  }
  };


  const get_all_student = async () => {
    try {
      const data = await axios.get("http://localhost:8000/api/student");
      console.log(data.data);
      setstudent(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    get_all_student();
  }, []);
  return (
    <div className="App">
      <h1>Student table</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First name</StyledTableCell>
              <StyledTableCell>Last name</StyledTableCell>
              <StyledTableCell>blood type</StyledTableCell>
              <StyledTableCell>action</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {student
              .filter((student) => {
                if (search === "") {
                  return student;
                } else if (
                  student.fname.toLowerCase().includes(search.toLowerCase())
                ) {
                  return student;
                }
              })
              .map((student) => {
                return (
                  <StyledTableRow key={student.id}>
                    <StyledTableCell component="th" scope="row">
                      {student.fname}
                    </StyledTableCell>
                    <StyledTableCell>{student.lname}</StyledTableCell>
                    <StyledTableCell>{student.bloodtype}</StyledTableCell>
                    <StyledTableCell>
                    <button><a href={`/post/${student.id}`}>
                    <img src="https://img.icons8.com/wired/24/000000/visible.png" />
                </a></button>
                      <button onClick={() => deletepost(student.id)}>
                        delete
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Student;
