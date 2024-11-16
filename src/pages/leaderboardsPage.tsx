import { Page } from '@/components/Page'
import React from 'react'

const LeaderboardsPage = () => {
  return (
    <Page>
        <div style={{width: "90%", aspectRatio: "1", zIndex: "-1", border: "1px solid white", opacity: "0.1", position: "absolute", borderRadius: "999px", top: "40%", transform: "translateY(-50%) translateX(-50%)", left: "50%"}}></div>
        <div style={{width: "55%", aspectRatio: "1", zIndex: "-1", background: "white", opacity: "0.1", position: "absolute", borderRadius: "999px", top: "40%", transform: "translateY(-50%) translateX(-50%)", left: "50%"}}></div>
        <div style={{display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "1rem"}}>
            <h1 style={{fontSize: "2.25rem", fontFamily: "Poppins", fontWeight: "bolder"}}>Leaderboard</h1>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "100%", paddingInline: "1rem"}}>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "1.25rem", marginTop: "2.5rem"}}>
                    <img src='assets/avatar.png' width={52} height={52} />
                    <div style={{display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", margin: 0}}>Nathalia</p>
                        <div style={{ background: '#081116', width: "100%", height: "100%", display: "flex", padding: "0.25rem 0.5rem", opacity: 1}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "0.825rem", margin: 0}}>1,469 EXP</p>    
                        </div>
                    </div>
                    <div style={{background: "#325fec", padding: "1rem 1.5rem", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", fontSize: "80px", margin: 0, fontWeight: "bolder"}}>2</p>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "1.25rem",  transformStyle: "preserve-3d"}}>
                    <img src='assets/avatar.png' width={52} height={52} /> 
                    <div style={{display: "flex", flexDirection: "column", gap: "0.25rem", justifyContent: "center", width: "100% "}}>
                        <p style={{ fontFamily: "Poppins", margin: 0}}>Nathalia</p>
                        <div style={{ background: '#081116', width: "100%", display: "flex", padding: "0.25rem 0.5rem", opacity: 1}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "0.825rem", margin: 0}}>1,469 EXP</p>    
                        </div>
                    </div>
                    <div style={{borderLeft: "25px solid transparent", borderRight: "25px solid transparent", borderBottom: "50px solid #555", background: "#325fec", width: "100%", height: "100px"}}></div>
                    <div style={{background: "linear-gradient(180deg, #325FEC 2%, #CDC9F3 85.33%)", padding: "1rem 1.5rem", width: "100%", height:"100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", fontSize: "100px", margin: 0, fontWeight: "bolder"}}>1</p>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "1.25rem", marginTop: "5rem"}}>
                    <img src='assets/avatar.png' width={52} height={52} />
                    <div style={{display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", margin: 0}}>Nathalia</p>
                        <div style={{ background: '#081116', width: "100%", display: "flex", padding: "0.25rem 0.5rem", opacity: 1}}>
                            <p style={{ fontFamily: "Poppins", fontSize: "0.825rem", margin: 0}}>1,469 EXP</p>    
                        </div>
                    </div>
                    <div style={{background: "#325fec", padding: "1rem 1.5rem", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{ fontFamily: "Poppins", fontSize: "60px", margin: 0, fontWeight: "bolder"}}>3</p>
                    </div>
                </div>
            </div>

        </div>
    </Page>
)
}

export default LeaderboardsPage