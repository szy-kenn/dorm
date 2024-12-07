import { Page } from "@/components/Page"
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LevelPage = () => {
  return (
    <Page>
        <div style={{display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "2rem"}}>
            <h1 style={{fontSize: "2.25rem", fontFamily: "Poppins", fontWeight: "bolder"}}>Level 1</h1>
            <div style={{background: "white", display: "flex", flexDirection: "column", width: "100%", borderRadius: "32px", minHeight: "100dvh", padding: "1rem 1.5rem", gap: "1rem"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h2 style={{fontSize: "1.2rem", fontWeight: "bold", color: "black"}}>Lesson Map</h2>
                    <p style={{color: "#325fec", fontSize: "0.825rem", fontWeight: "bold"}}>See all</p>
                </div>
                <div style={{marginTop: "-12.5px"}}>
                    <Link to={"/lesson"} style={{textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #EFEEFC", borderRadius: "20px", padding: "0.35rem", width: "100%"}}>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            <img src="lesson-icon.png" />
                            <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
                                <p style={{color: "black", fontWeight: "bold", fontSize: "0.895rem"}}>Lesson 1</p>
                                <p style={{color: "#858494", fontSize: "0.785rem"}}>Learn JavaScript</p>
                            </div>  
                        </div>
                        <FaChevronRight size={16} fill="#325fec" style={{marginRight: "0.5rem"}} />
                    </Link>
                </div>
                <div>
                    <Link to={"/lesson"} style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #EFEEFC", borderRadius: "20px", padding: "0.35rem", width: "100%"}}>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            <img src="lesson-icon.png" />
                            <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
                                <p style={{color: "black", fontWeight: "bold", fontSize: "0.895rem"}}>Quiz 1</p>
                                <p style={{color: "#858494", fontSize: "0.785rem"}}>Learn JavaScript</p>
                            </div>
                        </div>
                        <FaChevronRight size={16} fill="#325fec" style={{marginRight: "0.5rem"}} />
                    </Link>
                </div>
                <div>
                    <Link to={"/lesson"} style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #EFEEFC", borderRadius: "20px", padding: "0.35rem", width: "100%"}}>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            <img src="lesson-icon.png" />
                            <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
                                <p style={{color: "black", fontWeight: "bold", fontSize: "0.895rem"}}>Lesson 2</p>
                                <p style={{color: "#858494", fontSize: "0.785rem"}}>Learn JavaScript</p>
                            </div>
                        </div>
                        <FaChevronRight size={16} fill="#325fec" style={{marginRight: "0.5rem"}} />
                    </Link>
                </div>
                <div>
                    <Link to={"/lesson"} style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #EFEEFC", borderRadius: "20px", padding: "0.35rem", width: "100%"}}>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            <img src="lesson-icon.png" />
                            <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
                                <p style={{color: "black", fontWeight: "bold", fontSize: "0.895rem"}}>Lesson 1</p>
                                <p style={{color: "#858494", fontSize: "0.785rem"}}>Learn JavaScript</p>
                            </div>
                        </div>
                        <FaChevronRight size={16} fill="#325fec" style={{marginRight: "0.5rem"}} />
                    </Link>
                </div>
                <div>
                    <Link to={"/lesson"} style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #EFEEFC", borderRadius: "20px", padding: "0.35rem", width: "100%"}}>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            <img src="lesson-icon.png" />
                            <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
                                <p style={{color: "black", fontWeight: "bold", fontSize: "0.895rem"}}>Quiz 1</p>
                                <p style={{color: "#858494", fontSize: "0.785rem"}}>Learn JavaScript</p>
                            </div>
                        </div>
                        <FaChevronRight size={16} fill="#325fec" style={{marginRight: "0.5rem"}} />
                    </Link>
                </div>
                <div>
                    <Link to={"/lesson"} style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #EFEEFC", borderRadius: "20px", padding: "0.35rem", width: "100%"}}>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            <img src="lesson-icon.png" />
                            <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
                                <p style={{color: "black", fontWeight: "bold", fontSize: "0.895rem"}}>Lesson 2</p>
                                <p style={{color: "#858494", fontSize: "0.785rem"}}>Learn JavaScript</p>
                            </div>
                        </div>
                        <FaChevronRight size={16} fill="#325fec" style={{marginRight: "0.5rem"}} />
                    </Link>
                </div>
            </div>
        </div>
    </Page>
  )
}

export default LevelPage