import { Page } from '@/components/Page'

const LeaderboardsPage = () => {
  return (
    <Page>
        <div style={{width: "90%", aspectRatio: "1", zIndex: "-1", border: "1px solid white", opacity: "0.1", position: "absolute", borderRadius: "999px", top: "40%", transform: "translateY(-50%) translateX(-50%)", left: "50%", overflow: "hidden"}}></div>
        <div style={{width: "55%", aspectRatio: "1", zIndex: "-1", background: "white", opacity: "0.1", position: "absolute", borderRadius: "999px", top: "40%", transform: "translateY(-50%) translateX(-50%)", left: "50%"}}></div>
        <div style={{display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "2rem"}}>
            <h1 style={{fontSize: "2.25rem", fontFamily: "Poppins", fontWeight: "bolder"}}>Leaderboard</h1>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "100%", paddingInline: "1rem"}}>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem", marginTop: "2.5rem"}}>
                    <img src='Avatar.png' width={52} height={52} />
                    <div style={{display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", margin: 0}}>Ken</p>
                        <div style={{ background: '#081116', width: "100%", height: "100%", display: "flex", padding: "0.25rem 0.5rem", opacity: 1}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "0.825rem", margin: 0}}>1,469 EXP</p>    
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{background: "#508fff", width: "100%", height: "50px", transform: "perspective(200px) rotateX(60deg) translateY(15px) translateX(7.25%)", zIndex: "-1"}}></div>
                        <div style={{background: "#325fec", padding: "1rem 1.5rem", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "80px", margin: 0, fontWeight: "bolder"}}>2</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem",  transformStyle: "preserve-3d"}}>
                    <div style={{position: "absolute", top: "-17.5px"}}>
                        <img src="leaderboard-icon.png" alt="" width={32} height={32}/>
                    </div>
                    <img src='Avatar.png' width={52} height={52} /> 
                    <div style={{display: "flex", flexDirection: "column", gap: "0.25rem", justifyContent: "center", alignItems: "center"}}>
                        <p style={{ fontFamily: "Poppins", margin: 0}}>Nathalia</p>
                        <div style={{ background: '#081116', width: "100%", display: "flex", padding: "0.25rem 0.5rem", opacity: 1}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "0.825rem", margin: 0}}>1,469 EXP</p>    
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{background: "#508fff", width: "85%", height: "50px", transform: "perspective(200px) rotateX(60deg) translateY(15px) translateX(8%)", zIndex: "-1"}}></div>
                        <div style={{background: "linear-gradient(180deg, #325FEC 2%, #CDC9F3 85.33%)", padding: "1rem 1.5rem", width: "100%", height:"100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "100px", margin: 0, fontWeight: "bolder"}}>1</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "0.  5rem", marginTop: "5rem"}}>
                    <img src='Avatar.png' width={52} height={52} />
                    <div style={{display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", margin: 0}}>Renzo</p>
                        <div style={{ background: '#081116', width: "100%", display: "flex", padding: "0.25rem 0.5rem", opacity: 1}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "0.825rem", margin: 0}}>1,469 EXP</p>    
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{background: "#508fff", width: "100%", height: "50px", transform: "perspective(200px) rotateX(60deg) translateY(15px) translateX(-6.75%)", zIndex: "-1"}}></div>
                        <div style={{background: "#325fec", padding: "1rem 1.5rem", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "60px", margin: 0, fontWeight: "bolder"}}>3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{zIndex: "1", width: "100%", padding: "1.25rem 1rem", display: "flex", gap: "0.5rem", flexDirection: "column", overflowY: "auto", height: "300px", background: "#efeefc", borderRadius: "20px"}}>
                {/* <img src="leaderboard-container.png" alt="" style={{position: "absolute", top: "80%", left: "50%", transform: "translateX(-50%) translateY(-50%)", zIndex: "-1"}}/> */}
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>4</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>5</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>6</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>7</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>8</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>9</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
                <div style={{background: "white", zIndex: "1", width: "100%", display: "flex", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "16px", alignItems: "center"}}>
                    <p style={{color: "#858494", fontFamily: "Poppins", padding: "0.25rem 0.75rem", border: "1px solid #e6e6e6", height: "fit-content", borderRadius: "99px", margin: 0}}>10</p>
                    <img src='Avatar.png' width={52} height={52} />
                    <div>
                        <p style={{color: "black", fontWeight: "bold"}}>name</p>
                        <p style={{color: "#858494", fontSize: "0.875rem"}}>554 points</p>
                    </div>
                </div>
            </div>

        </div>
    </Page>
)
}

export default LeaderboardsPage