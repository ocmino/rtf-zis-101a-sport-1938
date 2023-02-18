import { Affix } from "@mantine/core";
import { useState, useEffect } from "react";

const styles = {
  container: {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/cctv-camera.png") no-repeat center center fixed',
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  dateTimeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    padding: "1rem",
    minWidth: "10rem",
  },
  dateTime: {
    color: "white",
    margin: "0",
    fontSize: "1rem",
    fontWeight: "bold",
    textShadow: "0 0 5px white",
  },
};

export default function Interface() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <Affix>
        <div style={styles.dateTimeContainer}>
          <p style={styles.dateTime}>{dateTime.toLocaleTimeString()}</p>
          <p style={styles.dateTime}>{dateTime.toLocaleDateString()}</p>
          <p style={styles.dateTime}>CAM 1</p>
        </div>
      </Affix>
      <Affix position={{ bottom: 0, left: 10 }}>
        <div style={styles.dateTimeContainer}>
          <p style={styles.dateTime}>CCTV</p>
        </div>
      </Affix>
    </div>
  );
}
