import { Page } from "@/components/Page"
import { Link } from "react-router-dom"

const HomePage = () => {

  return (
      <Page>
        <div style={{padding: "0.5rem 1rem", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: "0.75rem"}}>
              <Link to={"/leaderboards"}>
                <img src="leaderboard-icon.png" alt="" />
              </Link>
              <img src="level.png" alt="" style={{marginTop: "16px"}} />
              <img src="wallet-icon.png" alt="" />
            </div>
            <img src="grouped.png" alt="" />
            <Link to={"/level"} style={{width: "90%"}}>
              <button
                style={{
                  background: "white",
                  color: "#325fec",
                  fontSize: "1.2rem",
                  fontFamily: "Poppins",
                  fontWeight: "bolder",
                  letterSpacing: "0.25px",
                  padding: "1rem 2rem",
                  borderRadius: "20px",
                  width: "100%",
                  boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.50), 0px 4px 5px 0px rgba(0, 0, 0, 0.15)",
                  outline: "none",
                  border: "none"
                }}
                >Play Level</button>
            </Link>
            <Link to={"/tournament-start"}>
              <img src="tournament.png" alt="" style={{position: "absolute", top: "30%", right: "1%"}} />
            </Link>
          </div>
        </div>
      </Page>
  )
}

export default HomePage