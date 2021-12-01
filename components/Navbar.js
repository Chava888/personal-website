import Link from "next/link"

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="About">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="Portfolio">
                        <a>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="Blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="Contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar