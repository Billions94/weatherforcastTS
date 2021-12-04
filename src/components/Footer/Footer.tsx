import "./styles.css"

const Footer = () => {

    return(
        <footer className='customFooter' style={{ paddingTop: 50, paddingBottom: 50 }}>
            <div className='text-center customDark'>{`${new Date().getFullYear()} - © LexyWeathers | Developed by Ejiroghene.`}</div>
        </footer>
    )
}

export default Footer