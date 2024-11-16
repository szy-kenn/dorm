import DormButton from "@/components/DormButton"
import { Page } from "@/components/Page"
import { Link } from "react-router-dom"

const GetStartedPage = () => {
  return (
    <Page>
        <div style={{height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Link to="/landing" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1rem", textDecoration: "none"}}>
                <DormButton>Get Started</DormButton>
            </Link>
        </div>
    </Page>
  )
}

export default GetStartedPage