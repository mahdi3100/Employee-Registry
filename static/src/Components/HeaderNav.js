import { Box, Level, Heading } from "react-bulma-components";
import 'bulma/css/bulma.min.css';


function HeaderNav() {
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

            </Level>
        </Box>
    )
}

export default HeaderNav;
