const Slider = ({ label, value, min = 0, max = 100, color = "#4caf50" }) => {
  // позиція кола в межах 0–100%
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        margin: "12px 24px 12px 12px",
      }}
    >
      {/* label*/}
      {label && (
        <span
          style={{
            alignItems: "right",
            minWidth: 50,
            fontSize: 13,
            color: "#9ca3af",
          }}
        >
          {label}
        </span>
      )}

      <div
        style={{
          position: "relative",
          height: 32,
          flex: 1,
        }}
      >
        {/* slider */}

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 8,
            transform: "translateY(-50%)",
            borderRadius: 4,
            backgroundColor: "#e3e3e3",
          }}
        >
          {/* full part slider */}
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              borderRadius: 4,
              backgroundColor: "#9ca3af",
            }}
          />
        </div>

        {/* circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${percent}%`,
            transform: "translate(-50%, -50%)",
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "#fbfbfb",
            border: "2px solid #9ca3af",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 600,
            color: "#9ca3af",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default Slider;
