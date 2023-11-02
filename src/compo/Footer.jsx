
export function Footer({ navItems }) {

    return (
        <footer>
            <div className="nav-items">
                {
                    navItems.map(([name, idFor], i) => {
                        return <li key={i}><a href={"#" + idFor}>{name}</a></li>
                    })
                }
            </div>
            <div className="info">
                <p>Design by Bautista Renaudo</p>
                <p>© All rights reserved. 2023</p>
            </div>
        </footer>
    )
}