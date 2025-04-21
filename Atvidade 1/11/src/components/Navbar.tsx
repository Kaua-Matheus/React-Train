import { NavLink, Link } from "react-router";

import cachorro from "../assets/cachorro.webp";

// Components Imports
import Button from "./Button";

export default function Navbar() {
    return (
        <div
            style={{
                backgroundColor: 'rgb(150, 150, 150)',
                justifyContent: 'space-between',
                display: 'flex',
                padding: '10px 50px',
                width: '100%',
                boxSizing: 'border-box',
                color: 'white',
                alignItems: 'center'
            }}
        >
            <img 
                src={cachorro}
                alt="Logo" 
                style={{
                    height: '40px',
                    marginRight: '20px',
                    borderRadius: '4px',
                }}
            />
            <nav
                style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                    }
                }
            >
                <ul>
                    {
                    <NavLink
                        to='/'
                    >
                        <Button>
                            <Link to='/'>
                                Home
                            </Link>
                        </Button>
                    </NavLink>
                    }
                </ul>
                <ul>
                    {
                    <NavLink
                        to='/sobre'
                    >
                        <Button>
                            <Link to='/sobre'>
                                Sobre
                            </Link>
                        </Button>
                    </NavLink>
                    }
                </ul>
            </nav>
        </div>
    );
}