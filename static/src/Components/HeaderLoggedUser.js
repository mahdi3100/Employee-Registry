import { Box, Level, Heading } from "react-bulma-components";
import 'bulma/css/bulma.min.css';


function HeaderLoggedUser({ loc }) {
    return (
        <Box>
            <Level>
                <Level.Side>
                    <Level.Item>
                        <Heading
                            size={5}
                            subtitle
                        >
                            <strong>
                                Employee Registry
                            </strong>

                        </Heading>
                    </Level.Item>

                </Level.Side>
                <Level.Side align="right">

                    <Level.Item>

                        Hello, {localStorage.getItem('username')}


                    </Level.Item>
                    {

                        (loc != "home" &&
                            <Level.Item>
                                <a className="button" href="/home">
                                    Home

                                </a>
                            </Level.Item>
                        )
                    }


                    <Level.Item>
                        <a className="button is-link" href="/logout">
                            Logout
                        </a>


                    </Level.Item>
                </Level.Side>
            </Level>
        </Box>
    )
}

export default HeaderLoggedUser;
