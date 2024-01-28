import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Select } from "@chakra-ui/react";
import Footer from "../components/Footer"

const AddStudent = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "profilePicture") {
      setProfilePictureUrl(value); 
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      programStudy,
    } = formData;

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

    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => {
        navigate("/student");
      })
      .catch((error) => {
        console.log("Error adding student:", error);
      });
  };

  return (
    <Box>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Add Student</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="fullname">Full Name:</label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            data-testid="name"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <Input
            type="url"
            id="profilePicture"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            data-testid="profilePicture"
            required
          />
          {profilePictureUrl && (
            <img
              src={profilePictureUrl}
              alt="Profile"
              role="img"
            />
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            data-testid="address"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            data-testid="phoneNumber"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="birthDate">Birth Date:</label>
          <Input
            type="text"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            data-testid="date"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="gender">Gender:</label>
          <Select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            data-testid="gender"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="programStudy">Program Study:</label>
          <Select
            id="programStudy"
            name="programStudy"
            value={formData.programStudy}
            onChange={handleChange}
            data-testid="prody"
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
        <Button
          type="submit"
          data-testid="add-btn"
          colorScheme="green"
        >
          Add Student
        </Button>
      </form>
      <Footer />
    </Box>
  );
};

export default AddStudent;
