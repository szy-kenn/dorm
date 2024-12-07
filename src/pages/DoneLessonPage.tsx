import DormButton from "@/components/DormButton"
import { Page } from "@/components/Page"
import { FaCheck } from "react-icons/fa6"
import { Link } from "react-router-dom"

const DoneLessonPage = () => {
  return (
    <Page>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "center"}}>
                <h1 style={{color: "white", fontSize: "28px", margin: 0}}>Nice Work</h1>
                <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                    <div style={{width: "150px", height: "150px", background: "#508fff", border: "1px solid white", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: '0px 16px 32px 0px rgba(54, 16, 166, 0.40)'}}>
                        <div style={{width: "97.5px", height: "97.5px", background: "#508fff", border: "1px solid white", borderRadius: "999px", boxShadow: "0px 16px 32px 0px rgba(54, 16, 166, 0.40)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <FaCheck size={48} />
                        </div>
                    </div>
                    <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
                        <img src="star.png" width={32} />
                        <img src="star.png" />
                        <img src="star.png" width={32} />
                    </div>
                    <p>You earned 100 XP</p>
                </div>
                <div style={{marginTop: "80px", display: "flex", flexDirection: "column", gap: "1rem", width: "100%"}}>
                    <Link to="/">
                        <button
                        style={{
                        background: "white",
                        color: "#325fec",
                        fontSize: "1rem",
                        fontFamily: "Poppins",
                        fontWeight: "bolder",
                        letterSpacing: "0.25px",
                        padding: "1rem 2rem",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.50), 0px 4px 5px 0px rgba(0, 0, 0, 0.15)",
                        outline: "none",
                        border: "none"
                        }}
                        >Next Stage</button>
                    </Link>
                    <Link to={"/"}>
                        <DormButton>Play Again</DormButton>
                    </Link>
                </div>
            </div>
        </div>
    </Page>
  )
}

export default DoneLessonPage