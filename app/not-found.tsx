export default function Custom404(): React.ReactNode {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                marginTop: "30vh",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: 500,
                transition: "all 0.2s ease-in-out",
            }}
        >
            <h1>404 - Page Not Found</h1>
        </div>
    );
}
