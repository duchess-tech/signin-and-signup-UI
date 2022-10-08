import FormImage from "../pages/FormImage ";
const DefaultLayout = ({ children }) => {
    return (
        <main className="main-design">
            <FormImage />
            <div>
                {children}
            </div>
        </main>
    )
}

export default DefaultLayout