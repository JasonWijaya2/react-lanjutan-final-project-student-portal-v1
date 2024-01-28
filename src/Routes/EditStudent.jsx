import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Input, Select } from "@chakra-ui/react";
import Footer from "../components/Footer"

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    faculty: "",
    programStudy: "",
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        if (response.ok) {
          const studentData = await response.json();
          setFormData(studentData);
          setIsLoading(false);
        } else {
          console.log("Error fetching student data");
        }
      } catch (error) {
        console.log("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullname, profilePicture, address, phoneNumber, birthDate, gender, programStudy } = formData;
    let faculty = "";

    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        break;
    }

    const updatedStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    try {
        await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });
      navigate("/student");
    } catch (error) {
      console.log("Error updating student:", error);
    }
  };

  return (
    <Box>
      <h1>Edit Student</h1>
      {isLoading && <p>Loading ...</p>}
      <img src={formData.profilePicture} alt="Profile" role="img" style={{ width: "200px", marginBottom: "1rem" }} />
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="fullname">Full Name:</label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            data-testid="name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            data-testid="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            data-testid="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="birthDate">Birth Date:</label>
          <Input
            type="text"
            id="birthDate"
            name="birthDate"
            data-testid="date"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            data-testid="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="faculty">Faculty:</label>
          <Input
            type="text"
            id="faculty"
            name="faculty"
            data-testid="faculty"
            value={formData.faculty}
            onChange={handleChange}
            disabled
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="programStudy">Program Study:</label>
          <Select
            id="programStudy"
            name="programStudy"
            data-testid="prody"
            value={formData.programStudy}
            onChange={handleChange}
            required
          >
            <option value="">Select Program Study</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">Hubungan Internasional</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </Select>
        </div>
        <Button type="submit" data-testid="edit-btn" style={{ padding: "0.5rem 1rem", borderRadius: "0.25rem", background: "#007BFF", color: "#FFF", cursor: "pointer" }}>
          Edit Student
        </Button>
      </form>
      <Footer />
    </Box>
  );
};

export default EditStudent;
