
const HomePage = ({currUser}) => {

  return (
    <>
      <h1>Home Page</h1>

      { currUser && (
        <p>This user is logged in.</p>
      )}
    </>
  )
}

export default HomePage