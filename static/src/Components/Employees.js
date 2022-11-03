import { Icon, Card, Media, Heading, Content } from "react-bulma-components";
import 'bulma/css/bulma.min.css';
import { Icon as Iconify } from '@iconify/react';

export default function Employees({ usersInfo }) {

  return (
    usersInfo.map((userInfo, key) => (
      <Card style={{ width: 300, margin: '10px auto' }} key={key} >

        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
              <Iconify width="100" height="100" icon="bxs:user" color="#757575" />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>{userInfo.firstname} {userInfo.lastname}</Heading>
              <Heading subtitle size={6}>
                @{userInfo.username}
              </Heading>
            </Media.Item>
          </Media>
          <Content>



            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <Icon>
                <Iconify icon="entypo:address" color="#b0b0b0" width="30" height="30" />
              </Icon>
              <p>{userInfo.address}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <Icon>
                <Iconify icon="ic:baseline-work" color="#b0b0b0" width="30" height="30" />
              </Icon>
              <p>{userInfo.role}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <Icon>
                <Iconify icon="dashicons:email" color="#b0b0b0" width="30" height="30" />
              </Icon>
              <p>{userInfo.email}</p>
            </div>


            <a className="button is-link  is-fullwidth" href={"user?username=" + userInfo.username}>
              Profile
            </a>




          </Content>
        </Card.Content>

      </Card>

    )
    )
  );
}