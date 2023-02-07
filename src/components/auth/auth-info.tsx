import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    if (user) {
      const { name, email, picture } = user;
      return (
        <div>
          <img src={picture} alt={name} />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      );
    }
  }
  return <div>Wrong info</div>;
}
