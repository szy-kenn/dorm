import DormButton from '@/components/DormButton';
import {  Multiselect, Section, Select } from '@telegram-apps/telegram-ui'
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [interests, setInterests] = useState<MultiselectOption[]>([{ label: 'Blockchain', value: 'blockchain' },
    ]);
    const [role, setRole] = useState<string>("");

  return (
    <div style={{background: "#17212b", position: "absolute", bottom: "0", height: "77.5%", paddingTop: "2rem", borderRadius: "20px 20px 0px 0px"}}>
        <Section style={{padding: "2rem 2rem 0rem 2rem"}}>
            <div style={{display: "flex", alignItems: "center", padding: "0.5rem 1rem", width: "100%", border: "none"}}>
                <h1 style={{fontSize: "1rem", fontFamily: "var(--tgui--font-family)", fontWeight: "bold"}}>Which role best describes you?</h1>
            </div>
            <div>
                <Select
                    header={"Role"}
                    title="Choose your options:"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    >
                        <option>Student</option>
                        <option>Teacher</option>
                </Select>
            </div>
        </Section>
        <Section style={{height: "30dvh", padding: "0.5rem 2rem 2rem 2rem"}}>
            <div style={{display: "flex", alignItems: "center", padding: "0.5rem 1rem", width: "100%", border: "none", outline: "none"}}>
                <h1 style={{fontSize: "1rem", fontFamily: "var(--tgui--font-family)", fontWeight: "bold"}}>What are you most interested in learning right now?</h1>
            </div>
            <Multiselect
                style={{ border: "none", outline: "none"}}
                header={"Interests"}
                title="Choose your options:"
                placeholder='Select interests'
                value={interests}
                options={[
                { label: 'English', value: 'english' },
                { label: 'Coding', value: 'coding' },
                { label: 'Math', value: 'math' },
                { label: 'AI', value: 'ai' },
                { label: 'Blockchain', value: 'blockchain' },
                ]}
                onChange={(e: MultiselectOption[]) => setInterests(e)}
                required
                >
            </Multiselect>
            <div style={{display: "flex", width: "100%"}}>
                <Link to="/home" style={{width: "100%", display: "flex", justifyContent: "flex-end", padding: "0.75rem 1rem", marginTop: "1rem", textDecoration: "none"}}>
                    <DormButton>
                        Continue
                    </DormButton>
                </Link>
            </div>
        </Section>
    </div>
  )
}

export default LandingPage