import { FC } from 'react'

interface Props {
  match: any
  location: any
}

const Profile: FC<Props> = (props) => {
  console.log(props.match.params.login)

  return (
    <section>
      <div>asdasdasdasda</div>
      {/* <div>{props?.match}</div> */}
    </section>
  )
}

export default Profile
