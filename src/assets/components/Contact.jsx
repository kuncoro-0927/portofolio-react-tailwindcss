// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    // Regex untuk memvalidasi format email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validasi email
    if (!validateEmail(email)) {
      setError("The email is invalid. Please enter a valid email.");
      return;
    }

    setError(""); // Reset error jika email valid

    // Validasi input
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields must be filled!",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "07b33a1e-779d-460a-a848-fb3fec2275e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent",
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error sending the message",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="md:max-w-xl">
      <TextField
        data-aos="fade-up"
        fullWidth
        label="Name"
        variant="standard"
        margin="normal"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputLabelProps={{
          sx: {
            color: "black",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Ukuran label responsif
            "&.Mui-focused": {
              color: "black",
            },
            ".dark &": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            color: "black",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Ukuran teks responsif
            ".dark &": {
              color: "white",
            },
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
        }}
      />

      <TextField
        data-aos="fade-up"
        fullWidth
        label="Email"
        variant="standard"
        margin="normal"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error} // Menunjukkan kesalahan jika ada
        helperText={error} // Menampilkan pesan kesalahan
        InputLabelProps={{
          sx: {
            color: "black",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Ukuran label responsif
            "&.Mui-focused": {
              color: "black",
            },
            ".dark &": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            color: "black",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Ukuran teks responsif
            ".dark &": {
              color: "white",
            },
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
        }}
      />

      <TextField
        data-aos="fade-up"
        fullWidth
        label="Message"
        variant="standard"
        margin="normal"
        multiline
        rows={4}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        InputLabelProps={{
          sx: {
            color: "black",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Ukuran label responsif
            "&.Mui-focused": {
              color: "black",
            },
            ".dark &": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            color: "black",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Ukuran teks responsif
            ".dark &": {
              color: "white",
            },
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
            ".dark &": {
              borderBottomColor: "white",
            },
          },
        }}
      />

      <LoadingButton
        type="submit"
        data-aos={loading ? "" : "fade-up"}
        loading={loading}
        endIcon={<SendIcon />}
        loadingPosition="end"
        variant="contained"
        sx={{
          mt: 3,
          fontSize: { xs: "12px", md: "13px" },
          padding: { xs: "8px 16px", md: "8px 16px" },
          backgroundColor: "#22282C", // Default for light mode
          color: "white",
          "&:hover": {
            backgroundColor: "#020617", // Darker for light mode
          },
          ".dark &": {
            backgroundColor: loading ? "#f1f5f9" : "#E2E8F0", // Red for dark mode during submit
            "&:hover": {
              backgroundColor: loading ? "#f1f5f9" : "#E2E8F0", // Darker red on hover during submit in dark mode
            },
          },
        }}
        className="dark:bg-gray-100 dark:text-hitam dark:hover:bg-gray-200"
      >
        {loading ? "Sending..." : "Send"}
      </LoadingButton>
    </form>
  );
};

export default Contact;
