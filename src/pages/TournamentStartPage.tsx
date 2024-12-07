import { Page } from "@/components/Page"
import { Link } from "react-router-dom"

const TournamentStartPage = () => {
  return (
    <Page>
        <img src="blue-male.png" style={{position: "absolute", top: "10%", left: "0%"}} />
        <img src="versus.png" style={{position: "absolute", top: "10%", left: "22.5%"}} />
        <img src="blue-female.png" style={{position: "absolute", bottom: "10%", right: "0%"}}/>
        <Link to={"/tournament"} style={{width: "90%"}}>
              <button
                style={{        
                  position: "absolute",
                  bottom: "2rem",
                  left: "5%",       
                  background: "white",
                  color: "#325fec",
                  fontSize: "1.2rem",
                  fontFamily: "Poppins",
                  fontWeight: "bolder",
                  letterSpacing: "0.25px",
                  padding: "1rem 2rem",
                  borderRadius: "20px",
                  width: "90%",
                  boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.50), 0px 4px 5px 0px rgba(0, 0, 0, 0.15)",
                  outline: "none",
                  border: "none"
                }}
                >Play Level</button>
            </Link>
    </Page>
  )
}

export default TournamentStartPage