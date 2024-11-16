import { Page } from '@/components/Page'
import { Button, Multiselect, Section } from '@telegram-apps/telegram-ui'
import { SectionFooter } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionFooter/SectionFooter';
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [interests, setInterests] = useState<MultiselectOption[]>([]);

  return (
    <Page>
        <Section style={{height: "100dvh"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0.5rem 1rem", width: "100%"}}>
                <h1 style={{fontSize: "1rem", fontFamily: "var(--tgui--font-family)", fontWeight: "500"}}>What are you most interested in learning right now?</h1>
            </div>
            <Multiselect
                header={"Interests"}
                title="Choose your options:"
                value={interests}

                options={[
                { label: 'English', value: 'english' },
                { label: 'Coding', value: 'coding' },
                { label: 'Math', value: 'math' },
                { label: 'AI', value: 'ai' },
                { label: 'Blockchain', value: 'blockchain' },
                ]}

                onChange={(e: MultiselectOption[]) => setInterests(e)}
                >
            </Multiselect>
            <Link to="/home" style={{width: "100%", display: "flex", padding: "0.75rem 1rem"}}>
                <Button style={{ marginLeft: 'auto' }}>
                    Continue
                </Button>
            </Link>
            <SectionFooter><span style={{fontWeight: "bold"}}>dorm</span> is lorem ipsum dolor sit amet consectetur.</SectionFooter>
        </Section>
    </Page>
  )
}

export default LandingPage