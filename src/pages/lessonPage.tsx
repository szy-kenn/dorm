import DormButton from "@/components/DormButton"
import { Page } from "@/components/Page"
import { Link } from "react-router-dom"

const LessonPage = () => {
  return (
    <Page>
        <div style={{display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <h1 style={{fontSize: "2.25rem", fontFamily: "Poppins", fontWeight: "bolder"}}>Level 1</h1>
            <div style={{background: "white", display: "flex", flexDirection: "column", width: "100%", borderRadius: "32px 32px 0px 0px", minHeight: "100dvh", padding: "1.5rem 2.75rem", gap: "1rem"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h2 style={{fontSize: "1.2rem", fontWeight: "bold", color: "black"}}>Learn JavaScript</h2>
                </div>
                <p style={{color: "black", fontSize: "0.875rem"}}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Cras magnis inceptos sodales; gravida tempus vulputate nec dui. Ex ligula conubia, netus mattis sapien pharetra. Nam congue morbi pharetra habitasse ultrices consectetur. Viverra parturient ex quisque dolor curae inceptos mattis. Sapien vehicula ipsum non; phasellus congue sociosqu platea ultrices vestibulum. Ultricies ipsum nec vitae porttitor pellentesque. Erat auctor mauris potenti tempus justo dui litora. Urna inceptos commodo tincidunt eu ullamcorper cubilia integer. Etiam magna hendrerit est rhoncus non.
Congue non mi pretium curae hac maximus. Mattis finibus sodales urna cubilia dictum facilisi arcu. Vestibulum vitae non dapibus, fermentum curabitur condimentum primis. Fermentum hac eros adipiscing nostra nullam velit leo commodo. Molestie mattis porta arcu sodales eleifend habitant, gravida turpis donec. Tincidunt purus metus mauris fames etiam viverra. Suspendisse fames dis porta torquent auctor felis. Interdum litora viverra lectus; eu natoque taciti.
                </p>
                <Link to={"/lesson-done"} style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <DormButton>Finish Lesson</DormButton>
                </Link>
            </div>
        </div>  
    </Page>
)
}

export default LessonPage