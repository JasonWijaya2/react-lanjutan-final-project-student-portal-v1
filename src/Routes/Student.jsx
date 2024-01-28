import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Select, Table, Thead, Tbody, Th, Tr, Td, Button, TableCaption, TableContainer } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setFilteredStudents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
      setFilteredStudents(updatedStudents);
    } catch (error) {
      console.log("Error deleting student:", error);
    }
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === "All") {
      setFilteredStudents(students);
    } else {
      const filteredData = students.filter(
        (student) => student.faculty === selectedFilter
      );
      setFilteredStudents(filteredData);
    }
  };

  const navigateToEditStudent = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <Box>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Student List</h1>
      <Select
        placeholder="Select option"
        data-testid="filter"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </Select>
      {loading ? (
      <p>Loading ...</p>
      ) : (
        <>
          <TableContainer>
            <Table id="table-student">
              <TableCaption>Student List</TableCaption>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Full Name</Th>
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  <Th>Option</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredStudents.map((student, index) => (
                  <Tr key={student.id} className="student-data-row">
                    <Td>{index + 1}</Td>
                    <Td>
                      <Button
                        onClick={() => navigateToEditStudent(student.id)}
                        data-testid={`edit-${student.id}`}
                        colorScheme="green"
                      >
                        {student.fullname}
                      </Button>
                    </Td>
                    <Td>{student.faculty}</Td>
                    <Td>{student.programStudy}</Td>
                    <Td>
                      <Button
                        onClick={() => handleDelete(student.id)}
                        data-testid={`delete-${student.id}`}
                        colorScheme="red"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    <Footer />
    </Box>
  );
};

export default Student;
