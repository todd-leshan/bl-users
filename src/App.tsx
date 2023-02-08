import { Container } from "./components/Container/Container";
import { Users } from './views/Users';


function App() {
    return (
        <div className="bg-theme-2 w-full h-full min-h-screen">
            <>
                <header className="py-10 bg-theme-3">
                    <Container>
                        <a href="https://makeabeeline.com/">
                            <span className="hidden">beeline</span>
                            <img
                                src="data:image/png;base64,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"
                                alt="Make a Beeline"
                                className="w-[130px]" />
                        </a>
                    </Container>
                </header>
                <Users />
            </>
        </div>
    )
}

export default App
